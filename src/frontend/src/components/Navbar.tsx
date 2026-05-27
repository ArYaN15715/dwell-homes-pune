import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { NAV_LINKS } from "../data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header
      data-ocid="navbar"
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        transition:
          "background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
        background: scrolled
          ? "rgba(255,255,255,0.92)"
          : "rgba(255,255,255,0.4)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(229,231,235,0.9)"
          : "1px solid rgba(229,231,235,0.3)",
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            type="button"
            data-ocid="navbar.logo"
            onClick={() => handleNavClick("#home")}
            className="flex items-center flex-shrink-0"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
            aria-label="DWELL Homes & Services"
          >
            <img
              src="/assets/images/dwell-logo.jpg"
              alt="DWELL Homes & Services"
              className="h-10 w-auto object-contain rounded"
            />
          </button>

          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                data-ocid={`navbar.link.${link.label.toLowerCase()}`}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 group rounded"
                style={{
                  color: "#2D3142",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-display)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#009FD4";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#2D3142";
                }}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ backgroundColor: "#009FD4" }}
                />
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <button
              type="button"
              data-ocid="navbar.cta_button"
              onClick={() => handleNavClick("#contact")}
              className="btn-ripple px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
              style={{
                backgroundColor: "#009FD4",
                fontFamily: "var(--font-display)",
              }}
            >
              Book Consultation
            </button>
          </div>

          <button
            type="button"
            data-ocid="navbar.hamburger"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 rounded-lg transition-colors hover:bg-black/5"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <span
              className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
              style={{ backgroundColor: "#2D3142" }}
            />
            <span
              className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-x-0" : ""
              }`}
              style={{ backgroundColor: "#2D3142" }}
            />
            <span
              className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
              style={{ backgroundColor: "#2D3142" }}
            />
          </button>
        </div>
      </div>

      <div
        data-ocid="navbar.mobile_menu"
        className="lg:hidden overflow-hidden"
        style={{
          maxHeight: mobileOpen ? "400px" : "0",
          opacity: mobileOpen ? 1 : 0,
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(229,231,235,0.8)",
          transition: "max-height 0.35s ease-in-out, opacity 0.25s ease",
        }}
      >
        <div className="px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavClick(link.href)}
              data-ocid={`navbar.mobile.${link.label.toLowerCase()}`}
              className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-black/5"
              style={{
                color: "#2D3142",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-display)",
              }}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              type="button"
              data-ocid="navbar.mobile.cta_button"
              onClick={() => handleNavClick("#contact")}
              className="w-full px-4 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "#009FD4",
                fontFamily: "var(--font-display)",
              }}
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
