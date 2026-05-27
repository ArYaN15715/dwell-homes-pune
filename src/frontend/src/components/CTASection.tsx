import { Calendar, MessageCircle, Phone } from "lucide-react";

const TRUST_ITEMS = [
  "5.0 Rated",
  "200+ Families Helped",
  "Transparent Advisory",
  "Pune Specialists",
];

export default function ConsultationCTA() {
  return (
    <section
      id="contact"
      className="animated-gradient-bg relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #007FA9 0%, #009FD4 35%, #00B4E6 65%, #C9A96E 100%)",
      }}
      data-ocid="contact.section"
    >
      <div
        className="absolute -top-24 -left-24 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "rgba(255,255,255,0.05)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
          <span
            className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
            style={{
              color: "rgba(255,255,255,0.9)",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            GET PERSONALIZED GUIDANCE
          </span>

          <div className="flex flex-col gap-3">
            <h2
              className="text-gradient-teal text-3xl sm:text-4xl lg:text-5xl font-bold"
              style={{ lineHeight: 1.2, WebkitTextFillColor: "white" }}
            >
              Ready to Find Your
              <br />
              <span style={{ color: "#C9A96E" }}>Perfect Property?</span>
            </h2>
            <p
              className="max-w-xl mx-auto text-base sm:text-lg"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Talk to our Pune property experts and get personalized guidance
              within 24 hours. No pressure, just honest advice.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full"
            data-ocid="contact.cta_group"
          >
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-ripple flex items-center justify-center gap-2 w-full sm:w-auto text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-200"
              style={{
                background: "#FFFFFF",
                color: "#009FD4",
                minWidth: "200px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#F0F9FE";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 6px 20px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#FFFFFF";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              }}
              data-ocid="contact.book_consultation_button"
            >
              <Calendar size={17} />
              Book Free Consultation
            </button>

            <a
              href="tel:+917572905655"
              className="flex items-center justify-center gap-2 w-full sm:w-auto text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-200"
              style={{
                color: "#FFFFFF",
                border: "1px solid rgba(255,255,255,0.45)",
                background: "rgba(255,255,255,0.08)",
                minWidth: "200px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(255,255,255,0.65)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(255,255,255,0.45)";
              }}
              data-ocid="contact.schedule_visit_button"
            >
              <Phone size={17} />
              Schedule Site Visit
            </a>

            <a
              href="https://wa.me/917572905655?text=Hi%20DWELL%20Homes%2C%20I%20am%20looking%20for%20property%20guidance%20in%20Pune."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-200"
              style={{
                color: "#FFFFFF",
                border: "1px solid rgba(37,211,102,0.5)",
                background: "rgba(37,211,102,0.12)",
                minWidth: "200px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(37,211,102,0.22)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(37,211,102,0.7)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(37,211,102,0.12)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(37,211,102,0.5)";
              }}
              data-ocid="contact.whatsapp_button"
            >
              <MessageCircle size={17} />
              WhatsApp Expert
            </a>
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-2"
            data-ocid="contact.trust_strip"
          >
            {TRUST_ITEMS.map((item, i) => (
              <span
                key={item}
                className="flex items-center gap-2 text-xs sm:text-sm"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                {i > 0 && (
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.35)" }}
                    aria-hidden="true"
                  />
                )}
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
