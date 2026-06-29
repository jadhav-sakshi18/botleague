import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { navLinks } from "../data/siteData.js";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink px-5 py-12 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">

        {/* Brand & Info */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p className="font-display text-2xl font-extrabold uppercase">
            <span className="text-gold">Bot</span>
            <span className="text-danger">League</span>
          </p>

          <p className="mt-3 max-w-xs text-sm text-white/50">
            India's ultimate national ecosystem for robotics arena athletes,
            teams, and future engineers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-danger">
            Quick Links
          </h4>

          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sponsors */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-danger">
            Sponsors
          </h4>

          <ul className="space-y-2 text-sm font-medium text-white/60">
            <li>RoboTech Industries</li>
            <li>Cyberdyne Labs</li>
            <li>Future Arena Corp</li>
          </ul>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-danger">
            Follow Us
          </h4>

          <div className="flex gap-5 text-xl text-white/60">
            <a href="#" className="transition hover:text-danger">
              <FaTwitter />
            </a>

            <a href="#" className="transition hover:text-danger">
              <FaInstagram />
            </a>

            <a href="#" className="transition hover:text-danger">
              <FaYoutube />
            </a>

            <a href="#" className="transition hover:text-danger">
              <FaGithub />
            </a>
          </div>
        </div>

      </div>

      <div className="mt-12 border-t border-line/50 pt-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} BotLeague. All rights reserved.
      </div>
    </footer>
  );
}