import type { ReactNode } from "react";

interface WhyCard {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
}

const WHY_CARDS: WhyCard[] = [
  {
    id: "trusted-advisory",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#009FD4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "Trusted Property Advisory",
    description:
      "Honest, unbiased guidance you can rely on. We represent your interests, not the developer's — ensuring every recommendation is made for your benefit.",
  },
  {
    id: "residential-commercial",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#009FD4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <rect x="13" y="11" width="5" height="5" rx="1" />
        <path d="M9 11h6" />
      </svg>
    ),
    title: "Residential & Commercial",
    description:
      "Deep expertise across both residential apartments and commercial spaces — whether you're buying a family home or setting up an office in Pune.",
  },
  {
    id: "transparent-consultation",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#009FD4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Transparent Consultation",
    description:
      "No hidden costs, no surprise fees, no pressure tactics. Our consultation process is open, clear, and always aligned with your timeline and budget.",
  },
  {
    id: "client-centered",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#009FD4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: "Client-Centered Approach",
    description:
      "Your needs, priorities, and budget come first — always. We listen before we suggest, and we never push a property that doesn't fit your life.",
  },
  {
    id: "property-matching",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#009FD4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "Personalized Property Matching",
    description:
      "We curate properties based on YOUR specific criteria — location, budget, size, lifestyle, investment goals — so every shortlist is genuinely relevant.",
  },
  {
    id: "space-planning",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#009FD4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: "Space Planning Guidance",
    description:
      "Unique to DWELL — we help you visualize how a space works for your lifestyle before you commit. Smart space optimization so you never overpay for the wrong layout.",
  },
];

function WhyCard({ card, index }: { card: WhyCard; index: number }) {
  return (
    <div
      className="group relative flex flex-col gap-4 rounded-2xl p-6 bg-white transition-all duration-300"
      style={{
        border: "1px solid #E0F4FB",
        transitionDelay: `${index * 0.05}s`,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 12px 32px rgba(0,159,212,0.12)";
        el.style.borderColor = "#93D9EF";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
        el.style.borderColor = "#E0F4FB";
      }}
      data-ocid={`why-us.card.${index + 1}`}
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: "rgba(0,159,212,0.08)" }}
      >
        {card.icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold" style={{ color: "#2D3142" }}>
          {card.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
          {card.description}
        </p>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-16 sm:py-24 px-4 sm:px-6"
      style={{ background: "#FFFFFF" }}
      data-ocid="why-us.section"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-3 mb-12 sm:mb-16">
          <span
            className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
            style={{
              color: "#009FD4",
              background: "rgba(0,159,212,0.08)",
              border: "1px solid rgba(0,159,212,0.2)",
            }}
          >
            WHY CHOOSE DWELL
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: "#2D3142", lineHeight: 1.25 }}
          >
            Why Families &amp; Professionals Choose DWELL
          </h2>
          <p className="max-w-xl text-base" style={{ color: "#64748B" }}>
            We don&apos;t just find properties — we guide you to make smarter,
            more confident real estate decisions.
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          data-ocid="why-us.grid"
        >
          {WHY_CARDS.map((card, i) => (
            <WhyCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
