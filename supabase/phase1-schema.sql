-- ================================================================
-- AgentHub Phase 1 — 에이전트 실행 루프 스키마
-- Supabase 대시보드 > SQL Editor 에서 실행하세요.
-- ================================================================

-- ── 에이전트 테이블 ────────────────────────────────────────────────────────
create table if not exists public.agents (
  id            uuid        primary key default gen_random_uuid(),
  title         text        not null,
  description   text,
  category      text,
  price_per_run int         not null default 100,
  prompt        text        not null,
  input_label   text        not null default '무엇을 도와드릴까요?',
  status        text        not null default 'published',
  rating_avg    numeric     not null default 4.8,
  run_count     int         not null default 0,
  created_at    timestamptz not null default now()
);

-- ── 크레딧 지갑 ───────────────────────────────────────────────────────────
create table if not exists public.wallets (
  user_id    uuid        primary key references auth.users(id) on delete cascade,
  balance    int         not null default 0,
  updated_at timestamptz not null default now()
);

-- ── 크레딧 원장 ───────────────────────────────────────────────────────────
create table if not exists public.credit_transactions (
  id         uuid        primary key default gen_random_uuid(),
  user_id    uuid        not null references auth.users(id) on delete cascade,
  type       text        not null,  -- 'topup' | 'charge' | 'refund'
  amount     int         not null,
  ref_run_id uuid,
  created_at timestamptz not null default now()
);

-- ── 실행 기록 ─────────────────────────────────────────────────────────────
create table if not exists public.agent_runs (
  id              uuid        primary key default gen_random_uuid(),
  agent_id        uuid        not null references public.agents(id),
  user_id         uuid        not null references auth.users(id) on delete cascade,
  input           text,
  output          text,
  credits_charged int         not null,
  status          text        not null,  -- 'pending' | 'success' | 'refunded'
  created_at      timestamptz not null default now()
);

-- ── RLS ───────────────────────────────────────────────────────────────────
alter table public.agents              enable row level security;
alter table public.wallets             enable row level security;
alter table public.credit_transactions enable row level security;
alter table public.agent_runs          enable row level security;

-- 모든 사용자가 published 에이전트 조회 가능
create policy "anyone reads published agents"
  on public.agents for select
  using (status = 'published');

-- 본인 지갑만 조회
create policy "own wallet read"
  on public.wallets for select
  to authenticated
  using (auth.uid() = user_id);

-- 본인 거래 내역만 조회
create policy "own tx read"
  on public.credit_transactions for select
  to authenticated
  using (auth.uid() = user_id);

-- 본인 실행 기록만 조회
create policy "own runs read"
  on public.agent_runs for select
  to authenticated
  using (auth.uid() = user_id);

-- ── 회원가입 시 지갑 자동 생성 트리거 ────────────────────────────────────
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.wallets (user_id, balance)
  values (new.id, 0)
  on conflict (user_id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ── 원자적 크레딧 차감 RPC ───────────────────────────────────────────────
-- balance >= amount 조건을 WHERE에 넣어 동시 이중차감 방지
create or replace function public.deduct_credits(p_user uuid, p_amount int)
returns boolean
language plpgsql
security definer
as $$
declare
  ok boolean := false;
begin
  update public.wallets
    set balance = balance - p_amount,
        updated_at = now()
    where user_id = p_user
      and balance >= p_amount;

  if found then
    ok := true;
  end if;

  return ok;
end;
$$;

-- ── 크레딧 충전·환불 RPC ─────────────────────────────────────────────────
create or replace function public.add_credits(
  p_user   uuid,
  p_amount int,
  p_type   text,
  p_run    uuid default null
)
returns void
language plpgsql
security definer
as $$
begin
  insert into public.wallets (user_id, balance)
    values (p_user, p_amount)
    on conflict (user_id) do update
      set balance    = public.wallets.balance + p_amount,
          updated_at = now();

  insert into public.credit_transactions (user_id, type, amount, ref_run_id)
    values (p_user, p_type, p_amount, p_run);
end;
$$;

-- ── 실행 횟수 증가 RPC ────────────────────────────────────────────────────
create or replace function public.increment_run_count(p_agent uuid)
returns void
language plpgsql
security definer
as $$
begin
  update public.agents
    set run_count = run_count + 1
    where id = p_agent;
end;
$$;

-- ── 샘플 에이전트 데이터 (테스트용) ──────────────────────────────────────
insert into public.agents (title, description, category, price_per_run, prompt, input_label, run_count, rating_avg)
values
  (
    '마케팅 카피 작성기',
    '제품·서비스 설명을 입력하면 SNS, 이메일, 광고에 바로 쓸 수 있는 카피를 작성해드립니다.',
    '마케팅',
    100,
    '당신은 전문 마케팅 카피라이터입니다. 사용자가 제공하는 제품·서비스 정보를 바탕으로 SNS 포스트, 이메일 제목, 광고 문구 등 3가지 카피를 한국어로 작성해주세요. 각 카피는 간결하고 임팩트 있게 작성하고, 해시태그도 5개 추가해주세요.',
    '홍보하고 싶은 제품이나 서비스를 설명해주세요',
    1284,
    4.9
  ),
  (
    '블로그 포스트 생성기',
    '주제와 키워드를 입력하면 SEO에 최적화된 블로그 포스트 초안을 작성해드립니다.',
    '콘텐츠',
    150,
    '당신은 전문 블로그 작성자입니다. 사용자가 제공하는 주제와 키워드로 SEO에 최적화된 블로그 포스트를 작성해주세요. 제목, 소제목(H2, H3), 본문, 결론을 포함하여 1500자 이상의 완성도 높은 한국어 포스트를 작성하세요.',
    '블로그 주제와 포함할 키워드를 알려주세요',
    892,
    4.8
  ),
  (
    '코드 리뷰어',
    '코드를 붙여넣으면 버그, 보안 취약점, 개선 방안을 상세히 분석해드립니다.',
    '개발',
    200,
    '당신은 시니어 소프트웨어 엔지니어입니다. 사용자가 제공하는 코드를 분석하여 다음을 한국어로 리뷰해주세요: 1) 잠재적 버그와 오류, 2) 보안 취약점, 3) 성능 개선 사항, 4) 코드 품질 및 가독성 개선 제안. 각 항목별로 구체적인 예시와 수정 방법을 포함해주세요.',
    '리뷰받고 싶은 코드를 붙여넣어주세요',
    643,
    4.9
  )
on conflict do nothing;
