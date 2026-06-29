import { Menu } from "lucide-react";
import { navLinks } from "../data/siteData.js";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-ink/95 px-5 py-4 backdrop-blur sm:px-8 lg:px-16">
      <nav className="flex items-center justify-between gap-6">
        <a href="#top" className="font-display text-2xl font-extrabold uppercase">
          <span className="text-gold">Bot</span>
          <span className="text-danger">League</span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-display text-sm font-semibold text-white/80 transition hover:text-danger"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <a href="#login" className="btn-outline min-h-9 px-5 text-xs">
            Login
          </a>
          <a href="#register" className="btn-primary min-h-9 px-5 text-xs">
            Register Now
          </a>
        </div>

        <button className="grid size-10 place-items-center border border-line md:hidden" aria-label="Open menu">
          <Menu className="size-5" />
        </button>
      </nav>
    </header>
  );
}