import {
  Bed,
  Building2,
  Home,
  MapPin,
  Maximize2,
  SlidersHorizontal,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { properties } from "../data/siteData";
import type { Property } from "../data/siteData";
import PropertyModal from "./PropertyModal";

const FILTERS = ["All", "Residential", "Commercial"] as const;
type Filter = (typeof FILTERS)[number];

function StatusBadge({ status }: { status: Property["status"] }) {
  const styles: Record<
    Property["status"],
    { bg: string; text: string; border: string }
  > = {
    Featured: {
      bg: "rgba(201,169,110,0.15)",
      text: "#C9A96E",
      border: "1px solid rgba(201,169,110,0.4)",
    },
    Available: {
      bg: "rgba(16,185,129,0.12)",
      text: "#10B981",
      border: "1px solid rgba(16,185,129,0.35)",
    },
    "Sold Out": {
      bg: "rgba(107,114,128,0.12)",
      text: "#6B7280",
      border: "1px solid rgba(107,114,128,0.3)",
    },
  };
  const s = styles[status];
  const isFeatured = status === "Featured";
  const isAvailable = status === "Available";
  return (
    <span
      className={`text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 ${
        isFeatured ? "badge-shimmer" : ""
      }`}
      style={{ background: s.bg, color: s.text, border: s.border }}
    >
      {isAvailable && (
        <span
          className="inline-block w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
          style={{ backgroundColor: "#10B981" }}
        />
      )}
      {status}
    </span>
  );
}

function PropertyCard({
  property,
  onSelect,
  index,
}: {
  property: Property;
  onSelect: (p: Property) => void;
  index: number;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(property)}
      className="group text-left w-full rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white"
      style={{
        boxShadow: "0 2px 12px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.05)",
        border: "1px solid #E8ECF0",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow =
          "0 12px 40px rgba(0,159,212,0.15), 0 4px 16px rgba(0,0,0,0.08)";
        (e.currentTarget as HTMLButtonElement).style.borderColor =
          "rgba(0,159,212,0.3)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow =
          "0 2px 12px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.05)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "#E8ECF0";
      }}
      data-ocid={`properties.item.${index + 1}`}
      aria-label={`View details for ${property.title}`}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
          style={{
            transitionDuration: "0.6s",
            transitionTimingFunction: "cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span
          className="absolute top-3 left-3 flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full text-white"
          style={{
            background: "rgba(0,159,212,0.9)",
            backdropFilter: "blur(4px)",
          }}
        >
          {property.category === "Residential" ? (
            <Home size={11} strokeWidth={2.5} />
          ) : (
            <Building2 size={11} strokeWidth={2.5} />
          )}
          {property.type}
        </span>
        <div className="absolute top-3 right-3">
          <StatusBadge status={property.status} />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col gap-3">
        <h3
          className="font-bold text-base sm:text-lg leading-snug line-clamp-2"
          style={{ color: "#2D3142", fontFamily: "var(--font-display)" }}
        >
          {property.title}
        </h3>

        <div
          className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm"
          style={{ color: "#6B7280" }}
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={13} style={{ color: "#009FD4", flexShrink: 0 }} />
            <span className="truncate max-w-[120px]">{property.location}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize2 size={13} style={{ color: "#009FD4", flexShrink: 0 }} />
            {property.area}
          </span>
          {property.bedrooms && (
            <span className="flex items-center gap-1.5">
              <Bed size={13} style={{ color: "#009FD4", flexShrink: 0 }} />
              {property.bedrooms}
            </span>
          )}
        </div>

        <div
          className="font-bold text-xl"
          style={{ color: "#C9A96E", fontFamily: "var(--font-display)" }}
        >
          {property.price}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {property.amenities.slice(0, 3).map((a) => (
            <span
              key={a}
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{
                background: "#F0F7FB",
                color: "#009FD4",
                border: "1px solid rgba(0,159,212,0.2)",
              }}
            >
              {a}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ background: "#F0F2F5", color: "#6B7280" }}
            >
              +{property.amenities.length - 3} more
            </span>
          )}
        </div>

        <button
          type="button"
          className="mt-1 w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border"
          style={{
            color: "#009FD4",
            borderColor: "#009FD4",
            background: "transparent",
          }}
          onMouseEnter={(e) => {
            const b = e.currentTarget;
            b.style.background = "#009FD4";
            b.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            const b = e.currentTarget;
            b.style.background = "transparent";
            b.style.color = "#009FD4";
          }}
          tabIndex={-1}
          aria-hidden="true"
          data-ocid={`properties.view_button.${index + 1}`}
        >
          View Details
        </button>
      </div>
    </button>
  );
}

export default function PropertyShowcase() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Property | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? properties
        : properties.filter((p) => p.category === filter),
    [filter],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add("prop-visible");
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    const cards = sectionRef.current?.querySelectorAll(".prop-card");
    if (cards) for (const el of cards) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="properties"
      className="py-16 sm:py-24 px-4 sm:px-6"
      style={{ background: "#F8FAFC" }}
      data-ocid="properties.section"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#009FD4", letterSpacing: "0.18em" }}
          >
            Featured Properties
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#2D3142", fontFamily: "var(--font-display)" }}
          >
            Explore Our{" "}
            <span style={{ color: "#009FD4" }}>Featured Properties</span>
          </h2>
          <div
            className="w-16 h-1 rounded-full mx-auto mb-5"
            style={{ background: "linear-gradient(90deg, #009FD4, #C9A96E)" }}
          />
          <p
            className="max-w-xl mx-auto text-base"
            style={{ color: "#6B7280" }}
          >
            Carefully curated residential and commercial properties across
            Pune's most sought-after micro-markets.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className="flex items-center justify-center flex-wrap gap-2 mb-10"
          data-ocid="properties.filter_tabs"
        >
          <SlidersHorizontal size={15} style={{ color: "#6B7280" }} />
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className="relative px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 overflow-hidden"
              style={{
                background: filter === f ? "#009FD4" : "#fff",
                color: filter === f ? "#fff" : "#6B7280",
                border:
                  filter === f ? "1px solid #009FD4" : "1px solid #E2E8F0",
                boxShadow:
                  filter === f ? "0 4px 12px rgba(0,159,212,0.25)" : "none",
              }}
              data-ocid={`properties.filter.${f.toLowerCase()}`}
            >
              {f}
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-transform duration-300 origin-left"
                style={{
                  backgroundColor:
                    filter === f ? "rgba(255,255,255,0.6)" : "#009FD4",
                  transform: filter === f ? "scaleX(1)" : "scaleX(0)",
                }}
              />
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            data-ocid="properties.list"
          >
            {filtered.map((p, i) => (
              <div
                key={p.id}
                className="prop-card opacity-0 translate-y-4 transition-all duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <PropertyCard property={p} onSelect={setSelected} index={i} />
              </div>
            ))}
          </div>
        ) : (
          <div
            className="text-center py-20 rounded-2xl"
            style={{ background: "#fff", border: "1px dashed #E2E8F0" }}
            data-ocid="properties.empty_state"
          >
            <Building2
              size={40}
              className="mx-auto mb-3"
              style={{ color: "#CBD5E1" }}
            />
            <p
              className="text-lg font-semibold mb-2"
              style={{ color: "#2D3142" }}
            >
              No properties in this category.
            </p>
            <p className="text-sm" style={{ color: "#6B7280" }}>
              Contact us for personalized property guidance.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 text-white"
            style={{
              background: "linear-gradient(135deg, #009FD4, #00B4E6)",
              boxShadow: "0 4px 20px rgba(0,159,212,0.3)",
            }}
            data-ocid="properties.consult_button"
          >
            Talk to a Property Expert
          </a>
        </div>
      </div>

      <style>{`
        .prop-card.prop-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>

      {selected && (
        <PropertyModal property={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
