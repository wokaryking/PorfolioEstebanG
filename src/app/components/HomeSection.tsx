import { ArrowRight, Download } from "lucide-react";
import profileImg from "../../imports/Perfilhomeporfolio.png";
import { useLanguage } from "../LanguageContext";

export function HomeSection() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 80px 80px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          right: "0",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(244,179,33,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          gap: "60px",
          maxWidth: "1200px",
        }}
      >
        {/* Left Content */}
        <div style={{ flex: 1, maxWidth: "600px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(244,179,33,0.1)",
              border: "1px solid rgba(244,179,33,0.2)",
              borderRadius: "100px",
              padding: "6px 16px",
              marginBottom: "32px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                background: "#F4B321",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
            <span style={{ color: "#F4B321", fontSize: "12px", letterSpacing: "0.08em", fontWeight: 500 }}>
              {isSpanish ? "Disponible para trabajar" : "Available for work"}
            </span>
          </div>

          <h1
            style={{
              color: "#fff",
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            {isSpanish ? "Hola, soy Esteban," : "Hi, I'm Esteban,"}
            <br />
            <span style={{ color: "#F4B321" }}>{isSpanish ? "Diseñador Gráfico" : "Graphic Designer"}</span>
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "16px",
              lineHeight: 1.7,
              marginBottom: "40px",
              maxWidth: "480px",
            }}
          >
            {isSpanish
              ? "Creo experiencias visuales impactantes a través de identidad de marca, diseño 3D y composición digital. Convierto ideas en diseños memorables que hablan por sí mismos."
              : "I create stunning visual experiences through brand identity, 3D design, and digital composition. Turning ideas into memorable, impactful designs that speak for themselves."}
          </p>

          <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "64px" }}>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#F4B321",
                color: "#111",
                border: "none",
                borderRadius: "8px",
                padding: "14px 28px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#e6a81e";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#F4B321";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              }}
            >
              {isSpanish ? "Ver mis proyectos" : "View My Work"} <ArrowRight size={16} />
            </button>

            <a
              href="/CV-Esteban-Guzman.pdf"
              download="CV-Esteban-Guzman.pdf"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "8px",
                padding: "14px 28px",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)";
              }}
            >
              <Download size={16} /> {isSpanish ? "Descargar CV" : "Download CV"}
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: "48px" }}>
            {[
              { value: "5+", label: isSpanish ? "Años de experiencia" : "Years of Experience" },
              { value: "120+", label: isSpanish ? "Proyectos completados" : "Projects Completed" },
              { value: "40+", label: isSpanish ? "Clientes satisfechos" : "Happy Clients" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    color: "#F4B321",
                    fontSize: "36px",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    marginBottom: "6px",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", letterSpacing: "0.01em" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Profile Photo */}
        <div style={{ position: "relative", flexShrink: 0 }}>
          {/* Outer glow ring */}
          <div
            style={{
              width: "420px",
              height: "520px",
              borderRadius: "220px 220px 180px 180px",
              background: "linear-gradient(180deg, rgba(244,179,33,0.12) 0%, rgba(244,179,33,0.04) 60%, transparent 100%)",
              border: "1px solid rgba(244,179,33,0.18)",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <img
              src={profileImg}
              alt="Esteban — Graphic Designer"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
              }}
            />
            {/* Bottom fade */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "80px",
                background: "linear-gradient(to top, #111 0%, transparent 100%)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Floating badge */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              left: "-24px",
              background: "#F4B321",
              borderRadius: "12px",
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              boxShadow: "0 8px 32px rgba(244,179,33,0.25)",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                background: "rgba(0,0,0,0.15)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#111",
                fontSize: "16px",
              }}
            >
              ⭐
            </div>
            <div>
              <div style={{ color: "#111", fontSize: "13px", fontWeight: 700, lineHeight: 1 }}>
                Top Rated
              </div>
              <div style={{ color: "rgba(0,0,0,0.6)", fontSize: "11px" }}>Designer</div>
            </div>
          </div>

          {/* Floating experience card */}
          <div
            style={{
              position: "absolute",
              top: "40px",
              right: "-24px",
              background: "#1a1a1a",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              padding: "12px 16px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            <div style={{ color: "#F4B321", fontSize: "20px", fontWeight: 700, lineHeight: 1 }}>5+</div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px" }}>Years exp.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
