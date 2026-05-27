import { useEffect } from "react";
import CTASection from "./components/CTASection";
import FloatingActions from "./components/FloatingActions";
import Footer from "./components/Footer";
import GrowthTimeline from "./components/GrowthTimeline";
import HeroSection from "./components/HeroSection";
import IndustrySectors from "./components/IndustrySectors";
import LocationMap from "./components/LocationMap";
import MarketInsights from "./components/MarketInsights";
import Navbar from "./components/Navbar";
import PropertyShowcase from "./components/PropertyShowcase";
import Testimonials from "./components/Testimonials";
import WhyGrowBig from "./components/WhyGrowBig";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Stagger direct children that have stagger-children class
            const staggerParents = (
              entry.target as HTMLElement
            ).querySelectorAll(".stagger-children");
            for (const parent of staggerParents) {
              const children = parent.children;
              for (let i = 0; i < children.length; i++) {
                (children[i] as HTMLElement).style.animationDelay =
                  `${i * 80}ms`;
              }
            }
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" },
    );

    const revealEls = document.querySelectorAll(".section-reveal");
    for (const el of revealEls) observer.observe(el);

    // Smooth scroll for all anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#F8F9FA", color: "#2D3142" }}
    >
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="properties">
          <PropertyShowcase />
        </section>
        <section id="commercial">
          <WhyGrowBig />
        </section>
        <section id="residential">
          <IndustrySectors />
        </section>
        <section id="about">
          <MarketInsights />
          <Testimonials />
          <GrowthTimeline />
        </section>
        <CTASection />
        <LocationMap />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
