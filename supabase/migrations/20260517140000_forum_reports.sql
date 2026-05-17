-- Forum content reports (device-scoped insert via X-Device-Id).

create table if not exists public.forum_reports (
  id bigint generated always as identity primary key,
  device_id text not null,
  target_key text not null check (char_length(trim(target_key)) > 0),
  post_id text,
  reason text not null check (reason in ('harassment', 'private', 'self_harm', 'spam', 'other')),
  other_detail text check (other_detail is null or char_length(other_detail) <= 500),
  snippet text check (snippet is null or char_length(snippet) <= 500),
  locale text,
  created_at timestamptz not null default now(),
  constraint forum_reports_other_detail_check check (
    reason <> 'other'
    or (other_detail is not null and char_length(trim(other_detail)) > 0)
  )
);

create index if not exists forum_reports_created_at_idx
  on public.forum_reports (created_at desc);

create index if not exists forum_reports_target_key_idx
  on public.forum_reports (target_key);

alter table public.forum_reports enable row level security;

drop policy if exists "device insert forum_reports" on public.forum_reports;
create policy "device insert forum_reports"
on public.forum_reports for insert to anon
with check (device_id = public.request_device_id());

revoke all on table public.forum_reports from anon;
grant insert on table public.forum_reports to anon;
