import {
  Bed,
  Building2,
  CheckCircle2,
  Home,
  MapPin,
  Maximize2,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { useEffect, useRef } from "react";
import type { Property } from "../data/siteData";

interface Props {
  property: Property;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const statusColors: Record<
    Property["status"],
    { bg: string; text: string; border: string }
  > = {
    Featured: {
      bg: "rgba(201,169,110,0.12)",
      text: "#C9A96E",
      border: "1px solid rgba(201,169,110,0.4)",
    },
    Available: {
      bg: "rgba(16,185,129,0.10)",
      text: "#10B981",
      border: "1px solid rgba(16,185,129,0.35)",
    },
    "Sold Out": {
      bg: "rgba(107,114,128,0.10)",
      text: "#6B7280",
      border: "1px solid rgba(107,114,128,0.3)",
    },
  };
  const sc = statusColors[property.status];

  const whatsappMsg = encodeURIComponent(
    `Hi DWELL Homes, I'm interested in ${property.title} (${property.location}). Please share more details.`,
  );

  return (
    <dialog
      open
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-transparent"
      aria-modal="true"
      aria-label={property.title}
      data-ocid="property_modal.dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(0,0,0,0.60)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          animation: "backdropIn 0.3s ease forwards",
        }}
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        role="button"
        tabIndex={-1}
        aria-label="Close modal"
      />

      {/* Modal card */}
      <div
        className="relative w-full sm:max-w-3xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl z-10"
        style={{
          background: "#fff",
          boxShadow: "0 24px 80px rgba(0,0,0,0.25)",
          animation: "modalIn 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {/* Close button */}
        <button
          type="button"
          ref={closeRef}
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
          style={{
            background: "rgba(255,255,255,0.95)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
            color: "#2D3142",
          }}
          aria-label="Close modal"
          data-ocid="property_modal.close_button"
        >
          <X size={18} strokeWidth={2.5} />
        </button>

        {/* Header image */}
        <div className="relative h-56 sm:h-72 overflow-hidden rounded-t-3xl sm:rounded-t-2xl flex-shrink-0">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          {/* Category badge over image */}
          <span
            className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full text-white"
            style={{
              background: "rgba(0,159,212,0.9)",
              backdropFilter: "blur(4px)",
            }}
          >
            {property.category === "Residential" ? (
              <Home size={12} strokeWidth={2.5} />
            ) : (
              <Building2 size={12} strokeWidth={2.5} />
            )}
            {property.category}
          </span>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-7 flex flex-col gap-5">
          {/* Title + status row */}
          <div className="flex flex-wrap items-start gap-3">
            <div className="flex-1 min-w-0">
              <h2
                className="text-2xl sm:text-3xl font-black leading-tight"
                style={{ color: "#2D3142", fontFamily: "var(--font-display)" }}
              >
                {property.title}
              </h2>
            </div>
            <span
              className="text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0"
              style={{ background: sc.bg, color: sc.text, border: sc.border }}
            >
              {property.status}
            </span>
          </div>

          {/* Price */}
          <div
            className="text-2xl sm:text-3xl font-black"
            style={{ color: "#009FD4", fontFamily: "var(--font-display)" }}
          >
            {property.price}
          </div>

          {/* Details grid */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            style={{ borderTop: "1px solid #F0F2F5", paddingTop: "16px" }}
          >
            {[
              {
                icon: <MapPin size={14} />,
                label: "Location",
                value: property.location,
              },
              {
                icon: <Maximize2 size={14} />,
                label: "Area",
                value: property.area,
              },
              property.bedrooms
                ? {
                    icon: <Bed size={14} />,
                    label: "Configuration",
                    value: property.bedrooms,
                  }
                : {
                    icon: <Building2 size={14} />,
                    label: "Type",
                    value: property.type,
                  },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1.5 p-3 rounded-xl"
                style={{ background: "#F8FAFC", border: "1px solid #EEF2F6" }}
              >
                <div
                  className="flex items-center gap-1.5 text-xs font-medium"
                  style={{ color: "#6B7280" }}
                >
                  <span style={{ color: "#009FD4" }}>{item.icon}</span>
                  {item.label}
                </div>
                <span
                  className="font-bold text-sm leading-tight"
                  style={{
                    color: "#2D3142",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "#009FD4", letterSpacing: "0.12em" }}
            >
              About This Property
            </h4>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: "#6B7280" }}
            >
              {property.description}
            </p>
          </div>

          {/* Amenities */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "#009FD4", letterSpacing: "0.12em" }}
            >
              Amenities & Features
            </h4>
            <div className="flex flex-wrap gap-2">
              {property.amenities.map((a) => (
                <span
                  key={a}
                  className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full font-medium"
                  style={{
                    background: "#F0F7FB",
                    color: "#2D3142",
                    border: "1px solid rgba(0,159,212,0.2)",
                  }}
                >
                  <CheckCircle2
                    size={12}
                    style={{ color: "#10B981", flexShrink: 0 }}
                  />
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div
            className="rounded-2xl p-5"
            style={{
              background: "linear-gradient(135deg, #F0F9FF, #EFF6FF)",
              border: "1px solid rgba(0,159,212,0.15)",
            }}
          >
            <p
              className="font-bold text-base text-center mb-4"
              style={{ color: "#2D3142", fontFamily: "var(--font-display)" }}
            >
              Interested in this property?
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-ripple flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #009FD4, #00B4E6)",
                  boxShadow: "0 4px 12px rgba(0,159,212,0.3)",
                }}
                data-ocid="property_modal.book_visit_button"
              >
                <Phone size={15} />
                Book Site Visit
              </button>
              <a
                href={`https://wa.me/917572905655?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ripple flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  background: "#25D366",
                  color: "#fff",
                  boxShadow: "0 4px 12px rgba(37,211,102,0.3)",
                }}
                data-ocid="property_modal.whatsapp_button"
              >
                <MessageCircle size={15} />
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.97) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes backdropIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (max-width: 639px) {
          @keyframes modalIn {
            from { opacity: 0; transform: translateY(100%); }
            to { opacity: 1; transform: translateY(0); }
          }
        }
      `}</style>
    </dialog>
  );
}
