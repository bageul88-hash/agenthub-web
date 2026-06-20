-- ================================================================
-- AgentHub — Supabase SQL Schema
-- Supabase 대시보드 > SQL Editor 에서 실행하세요.
-- ================================================================

-- signups: 홈 사전등록
create table if not exists public.signups (
  id         uuid        primary key default gen_random_uuid(),
  email      text        not null unique,
  created_at timestamptz not null default now()
);

-- creator_applications: 크리에이터 등록 신청
create table if not exists public.creator_applications (
  id         uuid        primary key default gen_random_uuid(),
  name       text        not null,
  email      text        not null,
  category   text        not null,
  intro      text        not null default '',
  agreed_at  timestamptz not null,
  created_at timestamptz not null default now()
);

-- contest_applications: 콘테스트 참가 신청
create table if not exists public.contest_applications (
  id         uuid        primary key default gen_random_uuid(),
  name       text        not null,
  email      text        not null,
  category   text        not null,
  idea       text        not null,
  agreed_at  timestamptz not null,
  created_at timestamptz not null default now()
);

-- Row Level Security (서비스 롤 키가 자동으로 우회하므로 별도 정책 불필요)
alter table public.signups              enable row level security;
alter table public.creator_applications enable row level security;
alter table public.contest_applications enable row level security;
