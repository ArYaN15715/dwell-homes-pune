import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingActions() {
  const [waHovered, setWaHovered] = useState(false);
  const [callHovered, setCallHovered] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* FABs — above sticky bar on mobile (bottom-20), normal on desktop (bottom-6) */}
      <div
        className="fixed right-5 z-50 flex flex-col gap-3 bottom-20 md:bottom-6"
        data-ocid="floating.actions"
      >
        {/* Call FAB */}
        <div
          className="relative"
          style={{
            opacity: entered ? 1 : 0,
            transform: entered ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.45s ease, transform 0.45s ease",
            transitionDelay: "0.2s",
          }}
        >
          {callHovered && (
            <div
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-lg pointer-events-none shadow-lg"
              style={{
                background: "#2D3142",
                color: "white",
                border: "1px solid rgba(0,159,212,0.3)",
                animation: "slideInTooltip 0.2s ease forwards",
              }}
            >
              Call Us
            </div>
          )}
          <a
            href="tel:+917572905655"
            className="flex items-center justify-center transition-all duration-300"
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "#009FD4",
              color: "white",
              boxShadow: callHovered
                ? "0 0 24px rgba(0,159,212,0.6), 0 8px 24px rgba(0,0,0,0.3)"
                : "0 4px 20px rgba(0,159,212,0.35)",
              transform: callHovered ? "scale(1.1)" : "scale(1)",
            }}
            aria-label="Call Us"
            onMouseEnter={() => setCallHovered(true)}
            onMouseLeave={() => setCallHovered(false)}
            data-ocid="floating.call_button"
          >
            <Phone size={20} />
          </a>
        </div>

        {/* WhatsApp FAB */}
        <div
          className="relative"
          style={{
            opacity: entered ? 1 : 0,
            transform: entered ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.45s ease, transform 0.45s ease",
            transitionDelay: "0s",
          }}
        >
          {waHovered && (
            <div
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-lg pointer-events-none shadow-lg"
              style={{
                background: "#2D3142",
                color: "white",
                border: "1px solid rgba(37,211,102,0.3)",
                animation: "slideInTooltip 0.2s ease forwards",
              }}
            >
              Chat on WhatsApp
            </div>
          )}
          <a
            href="https://wa.me/917572905655"
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-ring flex items-center justify-center transition-all duration-300"
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "#25D366",
              color: "white",
              boxShadow: waHovered
                ? "0 0 24px rgba(37,211,102,0.6), 0 8px 24px rgba(0,0,0,0.3)"
                : "0 4px 20px rgba(37,211,102,0.35)",
              transform: waHovered ? "scale(1.1)" : "scale(1)",
            }}
            aria-label="Chat on WhatsApp"
            onMouseEnter={() => setWaHovered(true)}
            onMouseLeave={() => setWaHovered(false)}
            data-ocid="floating.whatsapp_button"
          >
            <span className="sr-only">Chat on WhatsApp</span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="white"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes slideInTooltip {
          from { opacity: 0; transform: translateY(-50%) translateX(-4px); }
          to { opacity: 1; transform: translateY(-50%) translateX(0); }
        }
      `}</style>
      {/* Mobile sticky bottom CTA bar — md:hidden */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex"
        style={{
          background: "white",
          borderTop: "2px solid #009FD4",
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
          height: "60px",
        }}
        data-ocid="floating.mobile_sticky_bar"
      >
        <a
          href="tel:+917572905655"
          className="flex-1 flex items-center justify-center gap-2 text-sm font-bold transition-all duration-200 active:opacity-80"
          style={{ background: "#009FD4", color: "white" }}
          data-ocid="floating.mobile_call_button"
        >
          <Phone size={16} />
          Talk to Expert
        </a>
        <a
          href="https://wa.me/917572905655"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 text-sm font-bold transition-all duration-200 active:opacity-80"
          style={{ background: "#25D366", color: "white" }}
          data-ocid="floating.mobile_whatsapp_button"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="white"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
          WhatsApp Us
        </a>
      </div>
    </>
  );
}
