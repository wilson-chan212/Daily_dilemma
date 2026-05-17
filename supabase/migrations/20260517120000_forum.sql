-- Forum: user posts, comments, A/B votes, and like/dislike reactions.
-- Device identity uses X-Device-Id (same as bookmarks) via public.request_device_id().

-- Shared helpers (also used by bookmarks; safe to re-run)
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace function public.request_device_id()
returns text
language sql
stable
as $$
  select nullif(trim((current_setting('request.headers', true)::json ->> 'x-device-id')::text), '');
$$;

-- ---------------------------------------------------------------------------
-- Posts (user-created dilemmas; sample dilemmas stay in FORUM_SAMPLE_POSTS JS)
-- ---------------------------------------------------------------------------
create table if not exists public.forum_posts (
  id text primary key,
  device_id text not null,
  author_display text not null default 'You',
  avatar_id text,
  title text not null
    check (char_length(trim(title)) > 0 and char_length(title) <= 200),
  body text not null
    check (char_length(trim(body)) > 0 and char_length(body) <= 2000),
  option_a text not null
    check (char_length(trim(option_a)) > 0 and char_length(option_a) <= 200),
  option_b text not null
    check (char_length(trim(option_b)) > 0 and char_length(option_b) <= 200),
  concepts text[] not null default '{}'::text[],
  locale text,
  posted_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create index if not exists forum_posts_posted_at_idx
  on public.forum_posts (posted_at desc);

create index if not exists forum_posts_device_id_idx
  on public.forum_posts (device_id);

-- ---------------------------------------------------------------------------
-- A/B votes on any forum post (user post id or sample slug)
-- ---------------------------------------------------------------------------
create table if not exists public.forum_post_votes (
  id bigint generated always as identity primary key,
  post_id text not null,
  device_id text not null,
  choice text not null check (choice in ('a', 'b')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (post_id, device_id)
);

create index if not exists forum_post_votes_post_id_idx
  on public.forum_post_votes (post_id);

-- ---------------------------------------------------------------------------
-- User comments on any forum post
-- ---------------------------------------------------------------------------
create table if not exists public.forum_comments (
  id bigint generated always as identity primary key,
  post_id text not null,
  device_id text not null,
  author_display text not null default 'You',
  avatar_id text,
  body text not null
    check (char_length(trim(body)) > 0 and char_length(body) <= 2000),
  reply_to_comment_id bigint references public.forum_comments (id) on delete set null,
  posted_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create index if not exists forum_comments_post_id_idx
  on public.forum_comments (post_id, posted_at);

create index if not exists forum_comments_device_id_idx
  on public.forum_comments (device_id);

-- ---------------------------------------------------------------------------
-- Post-level like / dislike (one reaction per device per post)
-- ---------------------------------------------------------------------------
create table if not exists public.forum_post_reactions (
  id bigint generated always as identity primary key,
  post_id text not null,
  device_id text not null,
  reaction text not null check (reaction in ('like', 'dislike')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (post_id, device_id)
);

create index if not exists forum_post_reactions_post_id_idx
  on public.forum_post_reactions (post_id);

-- ---------------------------------------------------------------------------
-- Comment-level like / dislike
-- target_key: user comment id as "user:<id>", or sample thread "philosopher:0" / "comment:1"
-- ---------------------------------------------------------------------------
create table if not exists public.forum_comment_reactions (
  id bigint generated always as identity primary key,
  post_id text not null,
  target_key text not null,
  device_id text not null,
  reaction text not null check (reaction in ('like', 'dislike')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (post_id, target_key, device_id)
);

create index if not exists forum_comment_reactions_post_id_idx
  on public.forum_comment_reactions (post_id);

-- ---------------------------------------------------------------------------
-- updated_at triggers
-- ---------------------------------------------------------------------------
drop trigger if exists set_forum_post_votes_updated_at on public.forum_post_votes;
create trigger set_forum_post_votes_updated_at
before update on public.forum_post_votes
for each row execute function public.set_updated_at();

drop trigger if exists set_forum_post_reactions_updated_at on public.forum_post_reactions;
create trigger set_forum_post_reactions_updated_at
before update on public.forum_post_reactions
for each row execute function public.set_updated_at();

drop trigger if exists set_forum_comment_reactions_updated_at on public.forum_comment_reactions;
create trigger set_forum_comment_reactions_updated_at
before update on public.forum_comment_reactions
for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- RLS
-- ---------------------------------------------------------------------------
alter table public.forum_posts enable row level security;
alter table public.forum_post_votes enable row level security;
alter table public.forum_comments enable row level security;
alter table public.forum_post_reactions enable row level security;
alter table public.forum_comment_reactions enable row level security;

-- Posts: public read; create/update/delete own device rows only
drop policy if exists "anon select forum_posts" on public.forum_posts;
create policy "anon select forum_posts"
on public.forum_posts for select to anon using (true);

drop policy if exists "device insert forum_posts" on public.forum_posts;
create policy "device insert forum_posts"
on public.forum_posts for insert to anon
with check (device_id = public.request_device_id());

drop policy if exists "device update forum_posts" on public.forum_posts;
create policy "device update forum_posts"
on public.forum_posts for update to anon
using (device_id = public.request_device_id())
with check (device_id = public.request_device_id());

drop policy if exists "device delete forum_posts" on public.forum_posts;
create policy "device delete forum_posts"
on public.forum_posts for delete to anon
using (device_id = public.request_device_id());

-- Votes: public read; one vote per device (insert / update own)
drop policy if exists "anon select forum_post_votes" on public.forum_post_votes;
create policy "anon select forum_post_votes"
on public.forum_post_votes for select to anon using (true);

drop policy if exists "device insert forum_post_votes" on public.forum_post_votes;
create policy "device insert forum_post_votes"
on public.forum_post_votes for insert to anon
with check (device_id = public.request_device_id());

drop policy if exists "device update forum_post_votes" on public.forum_post_votes;
create policy "device update forum_post_votes"
on public.forum_post_votes for update to anon
using (device_id = public.request_device_id())
with check (device_id = public.request_device_id());

drop policy if exists "device delete forum_post_votes" on public.forum_post_votes;
create policy "device delete forum_post_votes"
on public.forum_post_votes for delete to anon
using (device_id = public.request_device_id());

-- Comments: public read; write own device
drop policy if exists "anon select forum_comments" on public.forum_comments;
create policy "anon select forum_comments"
on public.forum_comments for select to anon using (true);

drop policy if exists "device insert forum_comments" on public.forum_comments;
create policy "device insert forum_comments"
on public.forum_comments for insert to anon
with check (device_id = public.request_device_id());

drop policy if exists "device update forum_comments" on public.forum_comments;
create policy "device update forum_comments"
on public.forum_comments for update to anon
using (device_id = public.request_device_id())
with check (device_id = public.request_device_id());

drop policy if exists "device delete forum_comments" on public.forum_comments;
create policy "device delete forum_comments"
on public.forum_comments for delete to anon
using (device_id = public.request_device_id());

-- Post reactions
drop policy if exists "anon select forum_post_reactions" on public.forum_post_reactions;
create policy "anon select forum_post_reactions"
on public.forum_post_reactions for select to anon using (true);

drop policy if exists "device insert forum_post_reactions" on public.forum_post_reactions;
create policy "device insert forum_post_reactions"
on public.forum_post_reactions for insert to anon
with check (device_id = public.request_device_id());

drop policy if exists "device update forum_post_reactions" on public.forum_post_reactions;
create policy "device update forum_post_reactions"
on public.forum_post_reactions for update to anon
using (device_id = public.request_device_id())
with check (device_id = public.request_device_id());

drop policy if exists "device delete forum_post_reactions" on public.forum_post_reactions;
create policy "device delete forum_post_reactions"
on public.forum_post_reactions for delete to anon
using (device_id = public.request_device_id());

-- Comment reactions
drop policy if exists "anon select forum_comment_reactions" on public.forum_comment_reactions;
create policy "anon select forum_comment_reactions"
on public.forum_comment_reactions for select to anon using (true);

drop policy if exists "device insert forum_comment_reactions" on public.forum_comment_reactions;
create policy "device insert forum_comment_reactions"
on public.forum_comment_reactions for insert to anon
with check (device_id = public.request_device_id());

drop policy if exists "device update forum_comment_reactions" on public.forum_comment_reactions;
create policy "device update forum_comment_reactions"
on public.forum_comment_reactions for update to anon
using (device_id = public.request_device_id())
with check (device_id = public.request_device_id());

drop policy if exists "device delete forum_comment_reactions" on public.forum_comment_reactions;
create policy "device delete forum_comment_reactions"
on public.forum_comment_reactions for delete to anon
using (device_id = public.request_device_id());

revoke all on table public.forum_posts from anon;
grant select, insert, update, delete on table public.forum_posts to anon;

revoke all on table public.forum_post_votes from anon;
grant select, insert, update, delete on table public.forum_post_votes to anon;

revoke all on table public.forum_comments from anon;
grant select, insert, update, delete on table public.forum_comments to anon;

revoke all on table public.forum_post_reactions from anon;
grant select, insert, update, delete on table public.forum_post_reactions to anon;

revoke all on table public.forum_comment_reactions from anon;
grant select, insert, update, delete on table public.forum_comment_reactions to anon;

-- ---------------------------------------------------------------------------
-- Aggregations (SECURITY DEFINER — read across devices for public stats)
-- ---------------------------------------------------------------------------
create or replace function public.get_forum_vote_stats(p_post_id text)
returns table(choice text, count bigint)
language sql
security definer
set search_path = public
as $$
  select v.choice, count(*)::bigint
  from public.forum_post_votes v
  where v.post_id = p_post_id
  group by v.choice
$$;

create or replace function public.get_forum_post_reaction_stats(p_post_id text)
returns table(reaction text, count bigint)
language sql
security definer
set search_path = public
as $$
  select r.reaction, count(*)::bigint
  from public.forum_post_reactions r
  where r.post_id = p_post_id
  group by r.reaction
$$;

create or replace function public.get_forum_comment_reaction_stats(p_post_id text)
returns table(target_key text, reaction text, count bigint)
language sql
security definer
set search_path = public
as $$
  select r.target_key, r.reaction, count(*)::bigint
  from public.forum_comment_reactions r
  where r.post_id = p_post_id
  group by r.target_key, r.reaction
$$;

revoke all on function public.get_forum_vote_stats(text) from public;
grant execute on function public.get_forum_vote_stats(text) to anon;

revoke all on function public.get_forum_post_reaction_stats(text) from public;
grant execute on function public.get_forum_post_reaction_stats(text) to anon;

revoke all on function public.get_forum_comment_reaction_stats(text) from public;
grant execute on function public.get_forum_comment_reaction_stats(text) to anon;
