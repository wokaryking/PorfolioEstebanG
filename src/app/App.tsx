import { useEffect, useRef, useState, useCallback } from "react";
import { Sidebar } from "./components/Sidebar";
import { HomeSection } from "./components/HomeSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ServicesSection } from "./components/ServicesSection";
import { PricingSection } from "./components/PricingSection";
import { ContactSection } from "./components/ContactSection";

const sections = ["home", "about", "projects", "services", "pricing", "contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const mainRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Update active section on scroll
  useEffect(() => {
    const container = mainRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const scrollMid = scrollTop + containerHeight * 0.4;

      let current = "home";
      for (const id of sections) {
        const el = sectionRefs.current[id];
        if (!el) continue;
        if (el.offsetTop <= scrollMid) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback((sectionId: string) => {
    const el = sectionRefs.current[sectionId];
    const container = mainRef.current;
    if (!el || !container) return;
    container.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    setActiveSection(sectionId);
  }, []);

  const registerSection = useCallback((id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        background: "#111",
        overflow: "hidden",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Fixed Sidebar */}
      <Sidebar activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Scrollable Main Content */}
      <main
        ref={mainRef}
        style={{
          marginLeft: "240px",
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          height: "100vh",
          background: "#111",
          scrollBehavior: "smooth",
        }}
      >
        <div ref={registerSection("home")}>
          <HomeSection />
        </div>

        {/* Section divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.05)",
            margin: "0 60px",
          }}
        />

        <div ref={registerSection("about")}>
          <AboutSection />
        </div>

        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.05)",
            margin: "0 60px",
          }}
        />

        <div ref={registerSection("projects")}>
          <ProjectsSection />
        </div>

        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.05)",
            margin: "0 60px",
          }}
        />

        <div ref={registerSection("services")}>
          <ServicesSection />
        </div>

        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.05)",
            margin: "0 60px",
          }}
        />

        <div ref={registerSection("pricing")}>
          <PricingSection />
        </div>

        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.05)",
            margin: "0 60px",
          }}
        />

        <div ref={registerSection("contact")}>
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
