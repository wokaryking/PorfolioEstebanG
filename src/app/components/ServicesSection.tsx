import { useState } from "react";
import { Palette, Box, Layers, BookOpen, Monitor, Film } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Comprehensive brand systems including logo design, typography, color palettes, and brand guidelines that tell your story.",
    tags: ["Logo Design", "Brand Strategy", "Style Guide"],
  },
  {
    icon: Box,
    title: "3D Design",
    description:
      "Photorealistic 3D visualizations, product renders, and motion graphics using Cinema 4D, Octane, and Redshift.",
    tags: ["Cinema 4D", "Octane", "Product Render"],
  },
  {
    icon: Layers,
    title: "Photoshop Composition",
    description:
      "Complex photo compositing and retouching, from editorial photography to advertising campaigns with cinematic quality.",
    tags: ["Compositing", "Retouching", "Color Grading"],
  },
  {
    icon: BookOpen,
    title: "Editorial Design",
    description:
      "Magazine layouts, book covers, annual reports, and marketing collateral with typographic precision and visual impact.",
    tags: ["Print", "Layout", "Typography"],
  },
  {
    icon: Monitor,
    title: "Web Design",
    description:
      "Modern, conversion-focused web designs in Figma — from landing pages to complex dashboards and design systems.",
    tags: ["Figma", "UI/UX", "Design System"],
  },
  {
    icon: Film,
    title: "Video Editing",
    description:
      "Professional video editing for brands, events, and social media, with motion graphics and color correction.",
    tags: ["Premiere Pro", "After Effects", "Color"],
  },
];

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  tags: string[];
}

function ServiceCard({ icon: Icon, title, description, tags }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#181818" : "#131313",
        border: `1px solid ${hovered ? "rgba(244,179,33,0.2)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: "16px",
        padding: "32px 28px",
        cursor: "default",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.4)" : "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Hover glow */}
      {hovered && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, #F4B321, transparent)",
          }}
        />
      )}

      <div
        style={{
          width: "48px",
          height: "48px",
          background: hovered ? "rgba(244,179,33,0.15)" : "rgba(244,179,33,0.08)",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F4B321",
          marginBottom: "20px",
          transition: "all 0.25s ease",
        }}
      >
        <Icon size={22} />
      </div>

      <h3
        style={{
          color: hovered ? "#fff" : "rgba(255,255,255,0.9)",
          fontSize: "17px",
          fontWeight: 600,
          marginBottom: "12px",
          transition: "color 0.2s ease",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "rgba(255,255,255,0.45)",
          fontSize: "14px",
          lineHeight: 1.7,
          marginBottom: "20px",
        }}
      >
        {description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              color: "rgba(255,255,255,0.45)",
              fontSize: "11px",
              padding: "4px 10px",
              borderRadius: "100px",
              letterSpacing: "0.04em",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        minHeight: "100vh",
        padding: "100px 80px 100px 60px",
        position: "relative",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          bottom: "100px",
          left: "-100px",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(244,179,33,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div style={{ marginBottom: "60px" }}>
        <p
          style={{
            color: "#F4B321",
            fontSize: "12px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: "12px",
          }}
        >
          What I Do
        </p>
        <h2
          style={{
            color: "#fff",
            fontSize: "52px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          Services
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "15px",
            maxWidth: "480px",
            lineHeight: 1.6,
          }}
        >
          From concept to delivery — I offer a complete range of creative services tailored to your needs.
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            tags={service.tags}
          />
        ))}
      </div>
    </section>
  );
}
