import { CheckCircle, Home, MapPin, Star, Users } from "lucide-react";
import { useEffect, useRef } from "react";

const LEFT_ADVANTAGES = [
  {
    icon: Home,
    title: "Space Optimization Expertise",
    desc: "We analyze your actual space needs before recommending any property — room layout, natural light, vastu, storage, and future-proofing.",
  },
  {
    icon: CheckCircle,
    title: "Transparent Advisory",
    desc: "No hidden fees, no pressure tactics, no rushed closings. Just honest guidance aligned 100% with your best interest.",
  },
  {
    icon: Users,
    title: "Client-First Matching",
    desc: "We understand your lifestyle, commute, budget, and family needs before suggesting a single property.",
  },
];

const RIGHT_ADVANTAGES = [
  {
    title: "Property Matching",
    desc: "Data-driven shortlisting — only properties that genuinely fit your brief.",
  },
  {
    title: "Commercial + Residential",
    desc: "Full-spectrum expertise from family homes to office spaces.",
  },
  {
    title: "Smarter Decisions",
    desc: "Backed by deep, current knowledge of Pune's evolving property market.",
  },
];

const STATS = [
  {
    value: "200+",
    label: "Families Guided",
    icon: undefined as typeof Star | undefined,
  },
  { value: "5.0", label: "Google Rating", icon: Star },
  {
    value: "100%",
    label: "Transparent Process",
    icon: undefined as typeof Star | undefined,
  },
];

export default function ConsultationAdvantage() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        }
      },
      { threshold: 0.12 },
    );

    if (headingRef.current) observer.observe(headingRef.current);
    for (const el of itemRefs.current) {
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const fadeInStyle = {
    opacity: 0,
    transform: "translateY(24px)",
    transition: "opacity 0.55s ease, transform 0.55s ease",
  };

  return (
    <section
      id="about-advisory"
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 sm:px-6"
      style={{ background: "#F0F2F5" }}
      data-ocid="advisory.section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div ref={headingRef} className="mb-12 sm:mb-16" style={fadeInStyle}>
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-8 h-0.5 rounded-full"
              style={{ background: "#009FD4" }}
            />
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#009FD4" }}
            >
              Our Advisory Edge
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-black leading-tight"
            style={{ color: "#2D3142", fontFamily: "var(--font-display)" }}
          >
            More Than Property Deals —{" "}
            <span style={{ color: "#009FD4" }}>
              Expert Real Estate Guidance
            </span>
          </h2>
        </div>

        {/* 60/40 split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* LEFT — 60% */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* Bold statement */}
            <div
              ref={(el) => {
                itemRefs.current[0] = el;
              }}
              style={{ ...fadeInStyle, transitionDelay: "0.05s" }}
            >
              <p
                className="text-lg sm:text-xl font-semibold leading-relaxed"
                style={{ color: "#2D3142" }}
              >
                DWELL is not a broker who shows you flats and collects
                commission. We are your property advisor — the expert in your
                corner who helps you understand the market, evaluate your
                options objectively, and make a decision you'll feel confident
                about for years to come.
              </p>
            </div>

            {/* Advantage items */}
            <div className="flex flex-col gap-6">
              {LEFT_ADVANTAGES.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    ref={(el) => {
                      itemRefs.current[i + 1] = el;
                    }}
                    className="flex gap-4 group"
                    style={{
                      ...fadeInStyle,
                      transitionDelay: `${(i + 1) * 0.1 + 0.05}s`,
                    }}
                    data-ocid={`advisory.advantage.${i + 1}`}
                  >
                    {/* Teal icon circle */}
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: "linear-gradient(135deg, #009FD4, #00B4E6)",
                        boxShadow: "0 4px 14px rgba(0,159,212,0.3)",
                      }}
                    >
                      <Icon size={18} color="#fff" strokeWidth={2} />
                    </div>
                    <div className="flex flex-col gap-1 pt-0.5">
                      <h3
                        className="font-bold text-base"
                        style={{
                          color: "#2D3142",
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "#5A6072" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — 40% */}
          <div
            className="lg:col-span-2"
            ref={(el) => {
              itemRefs.current[4] = el;
            }}
            style={{ ...fadeInStyle, transitionDelay: "0.35s" }}
          >
            {/* Glassmorphism card */}
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{
                background:
                  "linear-gradient(145deg, rgba(0,159,212,0.08), rgba(0,180,230,0.04))",
                border: "1.5px solid rgba(0,159,212,0.2)",
                boxShadow:
                  "0 8px 40px rgba(0,159,212,0.1), 0 2px 8px rgba(0,0,0,0.06)",
                backdropFilter: "blur(12px)",
              }}
              data-ocid="advisory.stats-card"
            >
              {/* Stats row */}
              <div
                className="flex justify-between gap-2 pb-6 mb-6"
                style={{ borderBottom: "1px solid rgba(0,159,212,0.18)" }}
              >
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="flex items-center gap-1">
                      <span
                        className="text-2xl font-black"
                        style={{
                          color: "#009FD4",
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {stat.value}
                      </span>
                      {stat.icon && (
                        <stat.icon
                          size={14}
                          style={{ color: "#C9A96E" }}
                          fill="#C9A96E"
                        />
                      )}
                    </div>
                    <span
                      className="text-xs mt-0.5 font-medium"
                      style={{ color: "#5A6072" }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right advantage points */}
              <div className="flex flex-col gap-5">
                <h4
                  className="text-sm font-bold uppercase tracking-wider"
                  style={{ color: "#009FD4" }}
                >
                  What sets us apart
                </h4>
                {RIGHT_ADVANTAGES.map((item, i) => (
                  <div
                    key={item.title}
                    className="flex gap-3"
                    data-ocid={`advisory.right-advantage.${i + 1}`}
                  >
                    <div
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "rgba(0,159,212,0.15)" }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: "#009FD4" }}
                      />
                    </div>
                    <div>
                      <p
                        className="font-semibold text-sm"
                        style={{
                          color: "#2D3142",
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-xs leading-relaxed mt-0.5"
                        style={{ color: "#5A6072" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Teal gradient accent bar */}
              <div
                className="mt-6 rounded-xl px-4 py-3"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,159,212,0.15), rgba(0,180,230,0.05))",
                  borderLeft: "3px solid #009FD4",
                }}
              >
                <div className="flex items-center gap-2">
                  <MapPin size={14} style={{ color: "#009FD4" }} />
                  <p
                    className="text-xs font-medium"
                    style={{ color: "#2D3142" }}
                  >
                    Serving families and professionals across Pune
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
