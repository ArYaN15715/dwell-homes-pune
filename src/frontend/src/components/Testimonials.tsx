import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isHoveredRef = useRef(isHovered);
  isHoveredRef.current = isHovered;

  const testimonials = [
    {
      id: 1,
      quote:
        "DWELL guided us through our first home purchase in Baner like true advisors. Their transparency made the entire process stress-free.",
      name: "Rohan & Priya Sharma",
      type: "Homebuyer",
      avatar: "RS",
    },
    {
      id: 2,
      quote:
        "Relocated from Bangalore and DWELL made finding a Wakad apartment seamless. They understood exactly what we needed and delivered.",
      name: "Vikram Nair",
      type: "IT Professional",
      avatar: "VN",
    },
    {
      id: 3,
      quote:
        "Found the perfect office space in Hinjewadi with DWELL's help. Their commercial expertise is unmatched in Pune.",
      name: "Suhas Deshpande",
      type: "Commercial Client",
      avatar: "SD",
    },
    {
      id: 4,
      quote:
        "Transparent from day one — absolutely no pressure tactics. DWELL truly puts the client's interest first. A rare find.",
      name: "Meena & Rahul Joshi",
      type: "Family Homebuyer",
      avatar: "MJ",
    },
    {
      id: 5,
      quote:
        "I've recommended DWELL to my entire team at work. The quality of guidance and follow-through is exceptional.",
      name: "Anjali Patil",
      type: "IT Professional",
      avatar: "AP",
    },
    {
      id: 6,
      quote:
        "Best decision to consult DWELL before buying. They helped us avoid costly mistakes and find a property we truly love.",
      name: "Devendra & Sujata Kulkarni",
      type: "Property Investor",
      avatar: "DK",
    },
  ];

  const startProgress = useCallback(() => {
    setProgress(0);
    if (progressRef.current) clearInterval(progressRef.current);
    const step = 100 / 30; // 3000ms / 100ms steps
    progressRef.current = setInterval(() => {
      if (isHoveredRef.current) return;
      setProgress((p) => Math.min(p + step, 100));
    }, 100);
  }, []);

  useEffect(() => {
    const tick = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      startProgress();
      intervalRef.current = setInterval(() => {
        if (isHoveredRef.current) return;
        setDirection("next");
        setAnimating(true);
        setTimeout(() => {
          setActive((a) => (a + 1) % testimonials.length);
          setAnimating(false);
          startProgress();
        }, 280);
      }, 3000);
    };
    tick();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [startProgress]);

  const go = (dir: number) => {
    if (animating) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    setDirection(dir > 0 ? "next" : "prev");
    setAnimating(true);
    setTimeout(() => {
      setActive((a) => (a + dir + testimonials.length) % testimonials.length);
      setAnimating(false);
      startProgress();
    }, 250);
    intervalRef.current = setInterval(() => {
      if (isHoveredRef.current) return;
      setDirection("next");
      setAnimating(true);
      setTimeout(() => {
        setActive((a) => (a + 1) % testimonials.length);
        setAnimating(false);
        startProgress();
      }, 280);
    }, 3000);
  };

  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 px-4 sm:px-6"
      style={{ background: "#F0F2F5" }}
      data-ocid="testimonials.section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{
              background: "rgba(0,159,212,0.1)",
              border: "1px solid rgba(0,159,212,0.25)",
              color: "#009FD4",
            }}
          >
            <span>&#9733;</span> CLIENT STORIES
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ color: "#2D3142" }}
          >
            What Our Clients Say
          </h2>
          {/* Google Rating Badge */}
          <div
            className="flex items-center gap-3 px-5 py-2.5 rounded-full mt-1"
            style={{
              background: "white",
              boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
              border: "1px solid rgba(201,169,110,0.3)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} style={{ color: "#C9A96E", fontSize: "15px" }}>
                  &#9733;
                </span>
              ))}
            </div>
            <span className="font-bold text-sm" style={{ color: "#2D3142" }}>
              5.0
            </span>
            <span className="text-xs" style={{ color: "#6b7280" }}>
              Google Rating
            </span>
          </div>
          <p className="text-base max-w-lg" style={{ color: "#6b7280" }}>
            Real stories from real families and professionals across Pune.
          </p>
        </div>

        {/* Desktop Grid — 3 cols */}
        <div className="hidden lg:grid grid-cols-3 gap-5 mb-10">
          {testimonials.map((item) => (
            <button
              key={item.id}
              type="button"
              className="text-left w-full rounded-2xl p-6 transition-all duration-300 cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.6)",
                boxShadow:
                  active === item.id - 1
                    ? "0 8px 32px rgba(0,159,212,0.18), 0 2px 8px rgba(0,0,0,0.06)"
                    : "0 2px 16px rgba(0,0,0,0.06)",
                borderBottom:
                  active === item.id - 1
                    ? "3px solid #009FD4"
                    : "3px solid transparent",
              }}
              onClick={() => setActive(item.id - 1)}
              data-ocid={`testimonials.card.${item.id}`}
            >
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} style={{ color: "#C9A96E", fontSize: "14px" }}>
                    &#9733;
                  </span>
                ))}
              </div>
              <p
                className="text-sm leading-relaxed italic mb-4"
                style={{ color: "#4b5563" }}
              >
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg,#009FD4,#0080aa)",
                    color: "white",
                  }}
                >
                  {item.avatar}
                </div>
                <div>
                  <div
                    className="font-bold text-sm"
                    style={{ color: "#2D3142" }}
                  >
                    {item.name}
                  </div>
                  <div
                    className="text-xs mt-0.5 font-medium"
                    style={{ color: "#009FD4" }}
                  >
                    {item.type}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Mobile / Tablet Carousel */}
        <div
          className="lg:hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          data-ocid="testimonials.carousel"
        >
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.6)",
              boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
              borderBottom: "3px solid #009FD4",
              opacity: animating ? 0 : 1,
              transform: animating
                ? direction === "next"
                  ? "translateX(-20px)"
                  : "translateX(20px)"
                : "translateX(0)",
              transition: "opacity 0.25s ease, transform 0.25s ease",
            }}
          >
            <div className="flex gap-0.5 mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} style={{ color: "#C9A96E", fontSize: "16px" }}>
                  &#9733;
                </span>
              ))}
            </div>
            <blockquote
              className="text-base sm:text-lg leading-relaxed italic mb-6"
              style={{ color: "#4b5563" }}
              data-ocid="testimonials.active_quote"
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg,#009FD4,#0080aa)",
                  color: "white",
                }}
              >
                {t.avatar}
              </div>
              <div>
                <div className="font-bold" style={{ color: "#2D3142" }}>
                  {t.name}
                </div>
                <div
                  className="text-sm font-medium mt-0.5"
                  style={{ color: "#009FD4" }}
                >
                  {t.type}
                </div>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div
            className="relative h-0.5 rounded-full overflow-hidden mt-5 mb-1"
            style={{ background: "rgba(0,159,212,0.15)" }}
          >
            <div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: "#009FD4",
                transition: "width 0.1s linear",
              }}
            />
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    if (intervalRef.current) clearInterval(intervalRef.current);
                    setActive(i);
                  }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? "28px" : "8px",
                    height: "8px",
                    background:
                      i === active ? "#009FD4" : "rgba(0,159,212,0.25)",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  data-ocid={`testimonials.dot.${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 active:scale-90"
                style={{
                  background: "white",
                  border: "1px solid rgba(0,159,212,0.3)",
                  color: "#009FD4",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
                aria-label="Previous testimonial"
                data-ocid="testimonials.prev_button"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 active:scale-90"
                style={{
                  background: "#009FD4",
                  border: "none",
                  color: "white",
                  boxShadow: "0 2px 12px rgba(0,159,212,0.3)",
                }}
                aria-label="Next testimonial"
                data-ocid="testimonials.next_button"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
