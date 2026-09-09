import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, ExternalLink, ArrowLeft, Play } from "lucide-react";

export type ModalType = "video" | "web" | "3d";
export type MediaKind = "video" | "youtube" | "gdrive" | "sketchfab" | "image" | "web-preview";

export interface Project {
  id: string;
  title: string;
  category: string;
  type: ModalType;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  mediaKind: MediaKind;
  mediaUrl?: string;
  mediaPoster?: string;
  websiteUrl?: string;
  theme?: string;
}

interface ProjectModalProps {
  project: Project;
  projects: Project[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

/* ── Media renderer for "Pantalla grande" ── */
function MediaPlayer({ project }: { project: Project }) {
  const commonStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    border: "none",
    display: "block",
  };

  if (project.mediaKind === "youtube") {
    return (
      <iframe
        src={project.mediaUrl ?? "https://www.youtube.com/embed/dQw4w9WgXcQ"}
        title={project.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={commonStyle}
      />
    );
  }

  if (project.mediaKind === "gdrive") {
    return (
      <iframe
        src={project.mediaUrl ?? "https://drive.google.com/file/d/FILE_ID/preview"}
        title={project.title}
        allow="autoplay"
        style={commonStyle}
      />
    );
  }

  if (project.mediaKind === "video") {
    return (
      <video
        controls
        poster={project.mediaPoster}
        style={commonStyle}
      >
        <source src={project.mediaUrl ?? ""} type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>
    );
  }

  if (project.mediaKind === "sketchfab") {
    return (
      <div className="sketchfab-embed-wrapper" style={{ width: "100%", height: "100%" }}>
        <iframe
          title={project.title}
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src={project.mediaUrl ?? "https://sketchfab.com/models/41d373739fd84506bf7d1d6ec9416941/embed?autospin=1&autostart=1&preload=1"}
          style={commonStyle}
        />
      </div>
    );
  }

  if (project.mediaKind === "web-preview") {
    return (
      <a
        href={project.websiteUrl ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="website-preview"
        style={{ display: "block", width: "100%", height: "100%", overflow: "hidden" }}
      >
        <img
          src={project.mediaUrl ?? ""}
          alt={`${project.title} website preview`}
          className="project-image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        {!project.mediaUrl && (
          <div style={{
            width: "100%", height: "100%", display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: "12px",
            background: "#0a0a0a",
          }}>
            <span style={{ fontSize: "40px", opacity: 0.2 }}>🌐</span>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "12px", letterSpacing: "0.1em" }}>
              WEBSITE PREVIEW
            </span>
          </div>
        )}
      </a>
    );
  }

  /* fallback image */
  return (
    <img
      src={project.mediaUrl ?? ""}
      alt={`${project.title} preview`}
      className="project-image"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
    />
  );
}

/* ── Thumbnail for Visualizar mode ── */
function MediaThumb({ project }: { project: Project }) {
  return (
    <div style={{
      width: "100%", height: "200px", background: "#0a0a0a",
      borderRadius: "10px", overflow: "hidden",
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative",
    }}>
      {project.mediaPoster ? (
        <img
          src={project.mediaPoster}
          alt={project.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <span style={{ fontSize: "40px", opacity: 0.2 }}>
          {project.type === "video" ? "▶" : project.type === "web" ? "🌐" : "🎲"}
        </span>
      )}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
      }} />
    </div>
  );
}

export function ProjectModal({ project, projects, currentIndex, onClose, onNavigate }: ProjectModalProps) {
  const [mode, setMode] = useState<"visualizar" | "grande">("visualizar");

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const handlePrev = () => {
    const i = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
    onNavigate(i);
    setMode("visualizar");
  };
  const handleNext = () => {
    const i = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
    onNavigate(i);
    setMode("visualizar");
  };

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed", inset: 0,
        background: "rgba(0,0,0,0.88)",
        backdropFilter: "blur(8px)",
        zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "40px",
        overflow: "hidden",
      }}
    >
      {mode === "visualizar" ? (
        /* ── VISUALIZAR MODE ── */
        <div style={{
          background: "#141414",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          width: "100%", maxWidth: "600px",
          overflow: "hidden",
          position: "relative",
        }}>
          {/* Close */}
          <button onClick={onClose} style={closeBtnStyle}>
            <X size={15} />
          </button>

          <div style={{ padding: "32px" }}>
            {/* Thumbnail */}
            <MediaThumb project={project} />

            <div style={{ marginTop: "24px" }}>
              {/* Category badge */}
              <span style={badgeStyle}>{project.category}</span>

              <h3 style={{ color: "#fff", fontSize: "22px", fontWeight: 700, margin: "10px 0 10px", letterSpacing: "-0.01em" }}>
                {project.title}
              </h3>

              {project.theme && (
                <p style={{ color: "#F4B321", fontSize: "12px", letterSpacing: "0.06em", marginBottom: "10px" }}>
                  {project.theme}
                </p>
              )}

              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>
                {project.shortDescription}
              </p>

              {/* Tools */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "28px" }}>
                {project.technologies.map((t) => (
                  <span key={t} style={tagStyle}>{t}</span>
                ))}
              </div>

              {/* Actions */}
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <button
                  onClick={() => setMode("grande")}
                  style={{
                    flex: 1,
                    background: "#F4B321", color: "#111",
                    border: "none", borderRadius: "8px",
                    padding: "12px 20px", fontSize: "13px", fontWeight: 700,
                    cursor: "pointer", transition: "all 0.2s",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#c98f10"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#F4B321"; }}
                >
                  <Play size={14} fill="#111" />
                  {project.type === "video" ? "Reproducir" : project.type === "web" ? "Ver proyecto" : "Ver en 3D"}
                </button>

                <button onClick={handlePrev} style={navBtnStyle}>←</button>
                <button onClick={handleNext} style={navBtnStyle}>→</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ── PANTALLA GRANDE ── */
        <div className="project-modal-content" style={{
          background: "#141414",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          width: "min(980px, calc(100vw - 32px))",
          maxHeight: "calc(100vh - 32px)",
          overflowY: "auto",
          overflowX: "hidden",
          display: "flex", flexDirection: "column",
          position: "relative",
        }}>
          {/* Close */}
          <button onClick={onClose} style={closeBtnStyle}>
            <X size={15} />
          </button>

          {/* Media area */}
          <div style={{
            height: "min(460px, 50vh)", minHeight: "220px", flexShrink: 0,
            background: "#0a0a0a",
            position: "relative", overflow: "hidden",
          }}>
            <MediaPlayer project={project} />

            {/* Prev/Next arrows */}
            <button onClick={handlePrev} style={arrowBtnStyle("left")}>
              <ChevronLeft size={20} />
            </button>
            <button onClick={handleNext} style={arrowBtnStyle("right")}>
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div style={{ position: "absolute", bottom: "14px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "6px" }}>
              {projects.map((_, i) => (
                <button key={i} onClick={() => { onNavigate(i); setMode("grande"); }} style={{
                  width: i === currentIndex ? "20px" : "6px", height: "6px",
                  background: i === currentIndex ? "#F4B321" : "rgba(255,255,255,0.2)",
                  borderRadius: "3px", border: "none", cursor: "pointer", padding: 0,
                  transition: "all 0.2s",
                }} />
              ))}
            </div>
          </div>

          {/* Info panel */}
          <div style={{ padding: "28px 36px 32px", position: "relative" }}>
            <div style={{ display: "block" }}>
              {/* Left info */}
              <div style={{ width: "100%", minWidth: 0 }}>
                {/* Back button */}
                <button
                  onClick={() => setMode("visualizar")}
                  style={{
                    display: "flex", alignItems: "center", gap: "6px",
                    background: "transparent", border: "none",
                    color: "rgba(255,255,255,0.4)", fontSize: "12px",
                    cursor: "pointer", padding: "0 0 16px 0",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#F4B321"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.4)"; }}
                >
                  <ArrowLeft size={14} /> Volver a descripción
                </button>

                <span style={badgeStyle}>{project.category}</span>
                <h3 style={{ color: "#fff", fontSize: "20px", fontWeight: 700, margin: "10px 0 12px", letterSpacing: "-0.01em" }}>
                  {project.title}
                </h3>
                {project.theme && (
                  <p style={{ color: "#F4B321", fontSize: "12px", letterSpacing: "0.06em", marginBottom: "10px" }}>
                    {project.theme}
                  </p>
                )}

                <div className="project-description" style={{ paddingRight: "8px" }}>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.8 }}>
                    {project.longDescription}
                  </p>
                </div>
              </div>

              {/* Right: tools + action */}
              <div style={{ position: "absolute", top: "28px", right: "36px", width: "min(360px, 40%)", minWidth: "200px" }}>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
                  {project.type === "3d" ? "Software utilizado" : "Tecnologías"}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
                  {project.technologies.map((t) => (
                    <span key={t} style={tagStyle}>{t}</span>
                  ))}
                </div>

                {project.type === "web" && project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                      background: "#F4B321", color: "#111",
                      borderRadius: "8px", padding: "11px 18px",
                      fontSize: "13px", fontWeight: 700,
                      textDecoration: "none", transition: "background 0.2s",
                      width: "100%",
                    }}
                  >
                    <ExternalLink size={13} /> Ver sitio web
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Shared styles ── */
const closeBtnStyle: React.CSSProperties = {
  position: "absolute", top: "16px", right: "16px",
  width: "32px", height: "32px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "8px", color: "rgba(255,255,255,0.6)",
  cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
  zIndex: 10, transition: "all 0.2s",
};

const badgeStyle: React.CSSProperties = {
  display: "inline-block",
  background: "rgba(244,179,33,0.1)",
  color: "#F4B321",
  fontSize: "11px", fontWeight: 600,
  letterSpacing: "0.08em", textTransform: "uppercase",
  padding: "4px 10px", borderRadius: "100px",
  border: "1px solid rgba(244,179,33,0.2)",
};

const tagStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "rgba(255,255,255,0.6)",
  fontSize: "11px", padding: "4px 10px", borderRadius: "6px",
};

const navBtnStyle: React.CSSProperties = {
  width: "38px", height: "38px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "8px", color: "rgba(255,255,255,0.6)",
  cursor: "pointer", fontSize: "14px",
  display: "flex", alignItems: "center", justifyContent: "center",
  transition: "all 0.2s",
};

function arrowBtnStyle(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute",
    [side]: "16px",
    top: "50%", transform: "translateY(-50%)",
    width: "40px", height: "40px",
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "50%", color: "rgba(255,255,255,0.7)",
    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
    transition: "all 0.2s",
  };
}
