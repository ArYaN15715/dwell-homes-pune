import {
  Briefcase,
  Building2,
  Factory,
  Home,
  Store,
  UtensilsCrossed,
  Warehouse,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { SERVICES, type Service } from "../data/siteData";

const ICON_MAP: Record<string, React.ReactNode> = {
  Store: <Store size={22} />,
  Building2: <Building2 size={22} />,
  Warehouse: <Warehouse size={22} />,
  UtensilsCrossed: <UtensilsCrossed size={22} />,
  Factory: <Factory size={22} />,
  Home: <Home size={22} />,
  Briefcase: <Briefcase size={22} />,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <button
      type="button"
      className="group card-lift rounded-xl p-4 sm:p-6 flex flex-col gap-4 cursor-pointer section-reveal text-left w-full"
      style={{
        background: "#1A1A1D",
        border: "1px solid #2C2C30",
        transitionDelay: `${index * 0.07}s`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "#C89B3C";
        (e.currentTarget as HTMLButtonElement).style.boxShadow =
          "0 0 20px rgba(200,155,60,0.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "#2C2C30";
        (e.currentTarget as HTMLButtonElement).style.boxShadow = "";
      }}
      onClick={() => {
        const el = document.querySelector("#contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
      data-ocid={`sectors.card.${index + 1}`}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{ background: "rgba(200,155,60,0.1)", color: "#C89B3C" }}
      >
        {ICON_MAP[service.icon]}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2 flex-1">
        <h3
          className="font-bold text-lg"
          style={{ color: "#F5F5F5", fontFamily: "var(--font-display)" }}
        >
          {service.name}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#9A9A9A" }}>
          {service.description}
        </p>
      </div>

      {/* CTA reveal */}
      <div
        className="text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
        style={{ color: "#C89B3C", fontFamily: "var(--font-display)" }}
      >
        Explore{" "}
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </div>
    </button>
  );
}

export default function BusinessSectors() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );
    const targets = sectionRef.current?.querySelectorAll(".section-reveal");
    if (targets) {
      for (const el of targets) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sectors"
      className="py-16 sm:py-24 px-4 sm:px-6"
      style={{ background: "var(--color-bg)" }}
      data-ocid="sectors.section"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-5 mb-16 section-reveal">
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "#C89B3C", letterSpacing: "0.2em" }}
          >
            WHAT WE DO
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ color: "#F5F5F5", fontFamily: "var(--font-display)" }}
          >
            Our Business <span className="text-gradient-gold">Sectors</span>
          </h2>
          <div className="gold-line" />
          <p className="max-w-xl text-base" style={{ color: "#9A9A9A" }}>
            Strategic real estate solutions for every commercial expansion need.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          data-ocid="sectors.list"
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
