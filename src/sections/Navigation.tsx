import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Challenge", href: "#challenge" },
  { label: "Dates", href: "#dates" },
  { label: "CFP", href: "#cfp" },
  { label: "Program", href: "#program" },
  { label: "Organization", href: "#organization" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0D1B2A]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-[#0D1B2A]/60 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-white font-extrabold text-lg tracking-tight hover:opacity-80 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Trustworthy Agentic AI{" "}
            <span className="text-[#1E7A8C]">2026</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-[#A0B4C8] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:workshop-2026@ubicomp.org"
              className="px-4 py-2 rounded-lg bg-[#1E7A8C] text-white text-sm font-semibold hover:bg-[#2A9DB0] transition-all duration-200 hover:shadow-lg hover:shadow-[#1E7A8C]/25"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-[#162D45] border-l border-white/10 z-50 transform transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 pt-20 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-semibold text-[#A0B4C8] hover:text-white py-3 border-b border-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:workshop-2026@ubicomp.org"
            className="mt-4 px-4 py-3 rounded-lg bg-[#1E7A8C] text-white text-center font-semibold hover:bg-[#2A9DB0] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
