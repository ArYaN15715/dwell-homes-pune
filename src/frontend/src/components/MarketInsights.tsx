interface AreaCard {
  id: string;
  name: string;
  insight: string;
  tag: string;
  tagColor: string;
  tagBg: string;
}

const PUNE_AREAS: AreaCard[] = [
  {
    id: "baner",
    name: "Baner",
    insight:
      "Premium residential hub with excellent connectivity to IT parks and top schools.",
    tag: "Trending",
    tagColor: "#10B981",
    tagBg: "rgba(16,185,129,0.1)",
  },
  {
    id: "wakad",
    name: "Wakad",
    insight:
      "Rapidly growing IT corridor with strong rental demand and new residential projects.",
    tag: "High Demand",
    tagColor: "#009FD4",
    tagBg: "rgba(0,159,212,0.1)",
  },
  {
    id: "warje",
    name: "Warje",
    insight:
      "Affordable family zone with improving infrastructure and good civic amenities.",
    tag: "Affordable",
    tagColor: "#C9A96E",
    tagBg: "rgba(201,169,110,0.1)",
  },
  {
    id: "kothrud",
    name: "Kothrud",
    insight:
      "Established residential neighborhood loved by families for its culture and connectivity.",
    tag: "Established",
    tagColor: "#6366F1",
    tagBg: "rgba(99,102,241,0.1)",
  },
  {
    id: "hinjewadi",
    name: "Hinjewadi",
    insight:
      "Pune's premier IT hub — prime commercial zones and investor-grade residential options.",
    tag: "IT Hub",
    tagColor: "#009FD4",
    tagBg: "rgba(0,159,212,0.1)",
  },
  {
    id: "aundh",
    name: "Aundh",
    insight:
      "Upscale family neighborhood with premium apartments, restaurants, and lifestyle amenities.",
    tag: "Premium",
    tagColor: "#C9A96E",
    tagBg: "rgba(201,169,110,0.1)",
  },
  {
    id: "bavdhan",
    name: "Bavdhan",
    insight:
      "Emerging premium zone with rapid development and strong long-term appreciation potential.",
    tag: "Emerging",
    tagColor: "#10B981",
    tagBg: "rgba(16,185,129,0.1)",
  },
];

export default function PuneMarketAuthority() {
  return (
    <section
      id="pune-market"
      className="py-16 sm:py-24 px-4 sm:px-6"
      style={{
        background:
          "linear-gradient(160deg, #E6F7FD 0%, #F7FBFE 50%, #FFFFFF 100%)",
      }}
      data-ocid="pune-market.section"
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
            PUNE MARKET EXPERTISE
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: "#2D3142", lineHeight: 1.25 }}
          >
            Deep Understanding of Pune&apos;s Evolving Property Market
          </h2>
          <p className="max-w-2xl text-base" style={{ color: "#64748B" }}>
            DWELL has cultivated hands-on expertise across Pune&apos;s key
            residential and commercial zones — so you get hyper-local guidance,
            not generic advice.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          data-ocid="pune-market.grid"
        >
          {PUNE_AREAS.map((area, i) => (
            <div
              key={area.id}
              className="bg-white rounded-xl p-5 flex flex-col gap-3 transition-all duration-300 cursor-default"
              style={{
                border: "1px solid rgba(0,159,212,0.12)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-3px)";
                el.style.boxShadow = "0 8px 24px rgba(0,159,212,0.1)";
                el.style.borderColor = "rgba(0,159,212,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                el.style.borderColor = "rgba(0,159,212,0.12)";
              }}
              data-ocid={`pune-market.card.${i + 1}`}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-bold" style={{ color: "#009FD4" }}>
                  {area.name}
                </h3>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                  style={{
                    color: area.tagColor,
                    background: area.tagBg,
                    border: `1px solid ${area.tagColor}40`,
                  }}
                >
                  {area.tag}
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#64748B" }}
              >
                {area.insight}
              </p>
            </div>
          ))}

          <div
            className="relative flex flex-col items-center justify-center gap-3 rounded-xl p-5 sm:col-span-2 lg:col-span-1"
            style={{
              background: "linear-gradient(135deg, #009FD4 0%, #007EB3 100%)",
              minHeight: "140px",
            }}
            data-ocid="pune-market.explore_card"
          >
            <div
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.12) 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />
            <p
              className="text-white text-center text-sm font-medium relative z-10"
              style={{ opacity: 0.9 }}
            >
              Explore properties in these areas with DWELL&apos;s guidance
            </p>
            <a
              href="#contact"
              className="relative z-10 text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.4)",
                color: "#FFFFFF",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(255,255,255,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(255,255,255,0.15)";
              }}
              data-ocid="pune-market.explore_button"
            >
              Book Area Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
