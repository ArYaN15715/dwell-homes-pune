import { Award, HeartHandshake, MapPin, Shield } from "lucide-react";
import { useEffect, useRef } from "react";

const VALUES = [
  {
    icon: Shield,
    title: "Trust Over Transactions",
    desc: "We never push a property that isn't right for you. Our reputation is built on honest advice.",
  },
  {
    icon: MapPin,
    title: "Deep Local Expertise",
    desc: "Years of navigating Pune's micro-markets — Baner, Wakad, Kothrud, Hinjewadi, and beyond.",
  },
  {
    icon: HeartHandshake,
    title: "Human-Centered Service",
    desc: "Every family has a unique story. We listen first and recommend second — always.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const valueRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform =
              "translateY(0) translateX(0)";
          }
        }
      },
      { threshold: 0.1 },
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    for (const el of valueRefs.current) {
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 sm:px-6"
      style={{ background: "#ffffff" }}
      data-ocid="about.section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Two-column desktop layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT: Visual */}
          <div
            ref={leftRef}
            className="relative rounded-2xl overflow-hidden"
            style={{
              opacity: 0,
              transform: "translateX(-28px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
              minHeight: "420px",
              background:
                "linear-gradient(145deg, #009FD4 0%, #00B4E6 40%, #007aaa 80%, #005f8a 100%)",
            }}
            data-ocid="about.visual"
          >
            {/* Decorative grid overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* House icon */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div
                className="w-24 h-24 rounded-2xl flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                }}
              >
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12"
                  aria-hidden="true"
                >
                  <path
                    d="M8 28L32 8L56 28V56H40V40H24V56H8V28Z"
                    fill="rgba(255,255,255,0.9)"
                  />
                  <rect
                    x="27"
                    y="40"
                    width="10"
                    height="16"
                    fill="rgba(0,159,212,0.6)"
                  />
                </svg>
              </div>

              <div className="text-center px-6">
                <p
                  className="text-white font-black text-2xl leading-tight"
                  style={{
                    fontFamily: "var(--font-display)",
                    textShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  }}
                >
                  Guiding Pune
                  <br />
                  Families Home
                </p>
                <p className="text-white/70 text-sm mt-2 font-medium">
                  Since Day One
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute bottom-6 right-6 rounded-xl px-4 py-3 flex items-center gap-2"
              style={{
                background: "rgba(255,255,255,0.18)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.35)",
              }}
              data-ocid="about.trust-badge"
            >
              <Award size={16} color="#C9A96E" fill="#C9A96E" />
              <span className="text-white font-semibold text-sm">
                5.0 ★ Rated
              </span>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div
            ref={rightRef}
            className="flex flex-col gap-7"
            style={{
              opacity: 0,
              transform: "translateX(28px)",
              transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-start">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
                style={{
                  background: "rgba(201,169,110,0.12)",
                  color: "#C9A96E",
                  border: "1px solid rgba(201,169,110,0.3)",
                }}
                data-ocid="about.badge"
              >
                Our Story
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight"
              style={{ color: "#2D3142", fontFamily: "var(--font-display)" }}
            >
              Guiding Pune Families Home{" "}
              <span style={{ color: "#009FD4" }}>Since Day One</span>
            </h2>

            {/* Body paragraphs */}
            <div className="flex flex-col gap-4">
              <p
                className="text-base leading-relaxed"
                style={{ color: "#5A6072" }}
              >
                DWELL was founded on one simple belief: every family deserves
                honest, expert guidance when making the most important financial
                decision of their lives. Buying or renting a property isn't just
                a transaction — it's a chapter in your life story.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#5A6072" }}
              >
                We combine deep knowledge of Pune's residential and commercial
                market with a genuinely client-first approach. We don't just
                show properties — we understand your goals, your timeline, your
                budget, and your lifestyle, so every recommendation we make is
                truly right for you.
              </p>
            </div>

            {/* Key values row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {VALUES.map((val, i) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    ref={(el) => {
                      valueRefs.current[i] = el;
                    }}
                    className="flex flex-col gap-2 p-4 rounded-xl"
                    style={{
                      background: "#F0F2F5",
                      opacity: 0,
                      transform: "translateY(16px)",
                      transition: `opacity 0.5s ease ${0.35 + i * 0.1}s, transform 0.5s ease ${0.35 + i * 0.1}s`,
                    }}
                    data-ocid={`about.value.${i + 1}`}
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(0,159,212,0.12)" }}
                    >
                      <Icon size={16} style={{ color: "#009FD4" }} />
                    </div>
                    <p
                      className="font-bold text-sm leading-tight"
                      style={{
                        color: "#2D3142",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {val.title}
                    </p>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "#5A6072" }}
                    >
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Team note */}
            <p
              className="text-sm italic leading-relaxed pt-1"
              style={{
                color: "#8a90a2",
                borderLeft: "3px solid rgba(0,159,212,0.3)",
                paddingLeft: "12px",
              }}
            >
              Our advisors bring years of on-ground experience in Pune's most
              sought-after micro-markets — so you're always guided by someone
              who truly knows the area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
