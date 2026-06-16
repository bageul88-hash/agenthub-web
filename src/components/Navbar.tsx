"use client";

import { useState } from "react";
import { Search, Menu, X, Bot } from "lucide-react";
import { Button } from "./ui/Button";

const navLinks = [
  { label: "에이전트", href: "#agents" },
  { label: "카테고리", href: "#categories" },
  { label: "크리에이터", href: "#creator" },
  { label: "콘테스트", href: "#" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur border-b border-line">
      <div className="max-w-[1120px] mx-auto px-5 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div
            className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center"
            aria-hidden="true"
          >
            <Bot className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-ink">AgentHub</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="메인 메뉴">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-ink-sub hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className="w-9 h-9 flex items-center justify-center text-ink-sub hover:text-ink transition-colors"
            aria-label="검색"
          >
            <Search className="w-5 h-5" />
          </button>
          <Button size="sm">무료로 시작</Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-ink"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-line bg-surface px-5 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="mt-2 w-full justify-center">
            무료로 시작
          </Button>
        </div>
      )}
    </header>
  );
}
