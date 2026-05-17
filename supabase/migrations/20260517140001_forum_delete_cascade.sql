-- Owner delete: cascade post removal; single-comment delete with reactions cleanup.
-- Caller must send X-Device-Id (same as forum_posts RLS).

create or replace function public.delete_forum_post(p_post_id text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_device text;
  v_deleted int;
begin
  v_device := public.request_device_id();
  if v_device is null or nullif(trim(p_post_id), '') is null then
    return false;
  end if;

  if not exists (
    select 1
    from public.forum_posts fp
    where fp.id = p_post_id
      and fp.device_id = v_device
  ) then
    return false;
  end if;

  delete from public.forum_comment_reactions where post_id = p_post_id;
  delete from public.forum_post_reactions where post_id = p_post_id;
  delete from public.forum_post_votes where post_id = p_post_id;
  delete from public.forum_comments where post_id = p_post_id;

  delete from public.forum_posts fp
  where fp.id = p_post_id
    and fp.device_id = v_device;

  get diagnostics v_deleted = row_count;
  return v_deleted > 0;
end;
$$;

create or replace function public.delete_forum_comment(p_comment_id bigint)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_device text;
  v_post_id text;
  v_deleted int;
  v_target_key text;
begin
  v_device := public.request_device_id();
  if v_device is null or p_comment_id is null then
    return false;
  end if;

  select fc.post_id
  into v_post_id
  from public.forum_comments fc
  where fc.id = p_comment_id
    and fc.device_id = v_device;

  if v_post_id is null then
    return false;
  end if;

  v_target_key := 'user:' || p_comment_id::text;

  delete from public.forum_comment_reactions
  where post_id = v_post_id
    and target_key = v_target_key;

  delete from public.forum_comments fc
  where fc.id = p_comment_id
    and fc.device_id = v_device;

  get diagnostics v_deleted = row_count;
  return v_deleted > 0;
end;
$$;

revoke all on function public.delete_forum_post(text) from public;
grant execute on function public.delete_forum_post(text) to anon;

revoke all on function public.delete_forum_comment(bigint) from public;
grant execute on function public.delete_forum_comment(bigint) to anon;
