import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "dwellhomes",
  );

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "Properties", id: "properties" },
    { label: "Commercial", id: "commercial" },
    { label: "Residential", id: "residential" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const serviceAreas = [
    "Baner",
    "Wakad",
    "Warje",
    "Kothrud",
    "Hinjewadi",
    "Aundh",
    "Bavdhan",
  ];

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      className="pt-14 sm:pt-20 pb-6 px-4 sm:px-6"
      style={{ background: "#2D3142" }}
      data-ocid="footer"
    >
      <div className="max-w-7xl mx-auto">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-12">
          {/* COL 1 — Brand + Contact */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img
                src="/assets/images/dwell-logo.jpg"
                alt="DWELL Homes & Services"
                className="h-10 w-auto rounded-lg"
                style={{
                  filter: "brightness(0) invert(1)",
                  objectFit: "contain",
                }}
              />
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Trusted real estate guidance for families, professionals, and
              investors across Pune.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+917572905655"
                className="flex items-center gap-3 text-sm group"
                style={{ color: "rgba(255,255,255,0.7)" }}
                data-ocid="footer.phone_link"
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,159,212,0.15)" }}
                >
                  <Phone size={14} style={{ color: "#009FD4" }} />
                </span>
                <span className="transition-colors duration-200 group-hover:text-white">
                  +91 75729 05655
                </span>
              </a>
              <a
                href="mailto:info@dwellhomes.in"
                className="flex items-center gap-3 text-sm group"
                style={{ color: "rgba(255,255,255,0.7)" }}
                data-ocid="footer.email_link"
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,159,212,0.15)" }}
                >
                  <Mail size={14} style={{ color: "#009FD4" }} />
                </span>
                <span className="transition-colors duration-200 group-hover:text-white">
                  info@dwellhomes.in
                </span>
              </a>
              <div
                className="flex items-start gap-3 text-sm"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(0,159,212,0.15)" }}
                >
                  <MapPin size={14} style={{ color: "#009FD4" }} />
                </span>
                <span className="leading-relaxed">
                  Baner Road, Pune 411045
                  <br />
                  Maharashtra, India
                </span>
              </div>
            </div>

            <a
              href="https://wa.me/917572905655"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 self-start"
              style={{
                background: "#25D366",
                color: "white",
                boxShadow: "0 4px 16px rgba(37,211,102,0.3)",
              }}
              data-ocid="footer.whatsapp_button"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>

          {/* COL 2 — Links in two sub-columns */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "#009FD4" }}
              >
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => scrollTo(link.id)}
                      className="text-sm text-left transition-colors duration-200 hover:text-white"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                      data-ocid={`footer.nav.${link.label.toLowerCase()}`}
                    >
                      <span
                        style={{
                          color: "rgba(0,159,212,0.5)",
                          marginRight: "6px",
                        }}
                      >
                        &#8250;
                      </span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "#009FD4" }}
              >
                Service Areas
              </h4>
              <ul className="flex flex-col gap-2.5">
                {serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    <span
                      style={{
                        color: "rgba(201,169,110,0.5)",
                        marginRight: "6px",
                      }}
                    >
                      &#8250;
                    </span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* COL 3 — Google Map */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#009FD4" }}
            >
              Find Us
            </h4>
            <div
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid rgba(0,159,212,0.25)" }}
            >
              <iframe
                title="DWELL Homes & Services — Pune"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242243.27534897658!2d73.6882979!3d18.5243616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1699999999999"
                width="100%"
                height="200"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p
              className="text-xs mt-3 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Serving all major residential and commercial corridors across
              Pune.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              &copy; {year} DWELL Homes &amp; Services. All Rights Reserved.
            </p>
            <p className="text-xs font-semibold" style={{ color: "#009FD4" }}>
              Trusted Real Estate Guidance Across Pune
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(255,255,255,0.4)" }}
                data-ocid="footer.social.instagram"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(255,255,255,0.4)" }}
                data-ocid="footer.social.facebook"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(255,255,255,0.4)" }}
                data-ocid="footer.social.linkedin"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Built with love using caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
