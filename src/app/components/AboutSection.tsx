import { useState } from "react";
import estebanPortrait from "../../imports/Esteban.png";
import { useLanguage } from "../LanguageContext";

const skills = [
 /*  { name: "Brand Identity", level: 50 }, */
  { name: "3D Design (Cinema 4D)", level: 90 },
  /* { name: "Photoshop Composition", level: 92 }, */
 /*  { name: "Editorial Design", level: 85 }, */
  { name: "Web Design (Figma)", level: 80 },
  { name: "Video Editing", level: 85 },
];

const infoCards = [
  { label: "Location", value: "Santo Domingo" },
  { label: "Languages", value: "ES / EN" },
  { label: "Education", value: "ITLA-Multimedia" },
  { label: "Availability", value: "Freelance Open" },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>{name}</span>
        <span style={{ color: "#F4B321", fontSize: "13px", fontWeight: 600 }}>{level}%</span>
      </div>
      <div
        style={{
          height: "4px",
          background: "rgba(255,255,255,0.08)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${level}%`,
            background: "linear-gradient(90deg, #F4B321 0%, #e6a81e 100%)",
            borderRadius: "2px",
            transition: "width 1s ease",
          }}
        />
      </div>
    </div>
  );
}

export function AboutSection() {
  const { language } = useLanguage();
  const isSpanish = language === "es";

  return (
    <section
      id="about"
      className="about-section"
      style={{
        minHeight: "100vh",
        padding: "100px 80px 100px 60px",
        position: "relative",
      }}
    >
      {/* Section label */}
      <div className="section-heading" style={{ marginBottom: "60px" }}>
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
          {isSpanish ? "Sobre mí" : "About Me"}
        </p>
        <h2
          className="section-title"
          style={{
            color: "#fff",
            fontSize: "52px",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: "500px",
          }}
        >
          {isSpanish ? "Diseñador con fuerza en marca," : "Designer focused on brand identity,"}
          <br />
          <span style={{ color: "#F4B321" }}>{isSpanish ? "3D y composición." : "3D and composition."}</span>
        </h2>
      </div>

      <div className="about-layout" style={{ display: "flex", gap: "80px", alignItems: "flex-start" }}>
        {/* Left — Portrait + Info Cards */}
        <div className="about-media" style={{ flexShrink: 0 }}>
          {/* Portrait */}
          <div
            className="about-portrait"
            style={{
              width: "320px",
              height: "380px",
              background: "#1a1a1a",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.06)",
              marginBottom: "20px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={estebanPortrait}
              alt="Esteban"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "72% center",
                zIndex: 1,
              }}
            />
            {/* Corner accent */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "60px",
                height: "60px",
                background: "#F4B321",
                borderRadius: "16px 0 0 0",
                zIndex: 2,
              }}
            />
          </div>

          {/* Info Cards Grid */}
          <div className="about-info-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", width: "320px" }}>
            {infoCards.map((card) => (
              <div
                key={card.label}
                style={{
                  background: "#161616",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px",
                  padding: "16px",
                }}
              >
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>
                  {card.label}
                </div>
                <div style={{ color: "#fff", fontSize: "13px", fontWeight: 500 }}>{card.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Description + Skills */}
        <div className="about-copy" style={{ flex: 1 }}>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "15px",
              lineHeight: 1.8,
              marginBottom: "48px",
              maxWidth: "560px",
            }}
          >
            {isSpanish
              ? "Soy diseñador,y Estudiante del Intituto tecnologico de las america. Mi trabajo combina estética y estrategia; cada pieza busca conectar con su audiencia a un nivel más profundo."
              : "I am a designer and a student at the Instituto Tecnológico de las Américas. My work combines aesthetics and strategy; each piece is designed to connect with its audience on a deeper level."}
            <br /><br />
            {isSpanish
              ? "Me identifico con el esfuerzo, la creatividad y la disciplina. Me gusta aprender cosas nuevas, diferentes y explorar otros campos. Puedo aprender varias cosas y mejorar continuamente."
              : "I identify with effort, creativity, and discipline. I enjoy learning new, different things and exploring other fields. I’m able to learn many things and keep improving."}
          </p>

          {/* Skills */}
          <h3
            style={{
              color: "#fff",
              fontSize: "18px",
              fontWeight: 600,
              marginBottom: "28px",
              letterSpacing: "0.01em",
            }}
          >
            {isSpanish ? "Últimos proyectos" :  "Recent Projects"}
          </h3>
          {skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  );
}
