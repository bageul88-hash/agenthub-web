import Link from "next/link";
import { Bot, ExternalLink } from "lucide-react";

const footerLinks = [
  { label: "이용약관", href: "#" },
  { label: "개인정보처리방침", href: "#" },
  { label: "크리에이터 가이드", href: "/creator" },
  { label: "고객센터", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-surface border-t border-line py-10 md:py-12">
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center"
              aria-hidden="true"
            >
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-base font-bold text-ink">AgentHub</span>
          </Link>

          {/* Links */}
          <nav
            className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2"
            aria-label="푸터 메뉴"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-ink-sub hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-6 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-sub">
            © 2026 AgentHub. All rights reserved.
          </p>

          <a
            href="https://instagram.com/agent.hub.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-ink-sub hover:text-primary transition-colors"
            aria-label="AgentHub 인스타그램 계정"
          >
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            @agent.hub.kr
          </a>
        </div>
      </div>
    </footer>
  );
}
