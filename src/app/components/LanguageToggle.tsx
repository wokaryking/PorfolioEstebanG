import { Languages } from "lucide-react";
import { useLanguage, type Language } from "../LanguageContext";

const labels: Record<Language, string> = { es: "ES", en: "EN" };

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="language-toggle"
      role="group"
      aria-label="Seleccionar idioma / Select language"
      style={{
        position: "absolute",
        top: "40px",
        left: "60px",
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "5px",
        border: "1px solid rgba(244,179,33,0.22)",
        borderRadius: "999px",
        background: "rgba(17,17,17,0.82)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.22)",
        backdropFilter: "blur(12px)",
        animation: "languageToggleEnter 0.6s ease both",
      }}
    >
      <Languages size={14} color="#F4B321" aria-hidden="true" />
      <div style={{ display: "flex", gap: "2px" }}>
        {(["es", "en"] as Language[]).map((option) => {
          const active = language === option;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              aria-label={option === "es" ? "Cambiar a español" : "Switch to English"}
              onClick={() => setLanguage(option)}
              style={{
                position: "relative",
                minWidth: "35px",
                padding: "6px 8px",
                border: 0,
                borderRadius: "999px",
                background: active ? "#F4B321" : "transparent",
                color: active ? "#111" : "rgba(255,255,255,0.48)",
                fontSize: "10px",
                fontWeight: 800,
                letterSpacing: "0.08em",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            >
              {labels[option]}
            </button>
          );
        })}
      </div>
      <style>{`@keyframes languageToggleEnter { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
}
