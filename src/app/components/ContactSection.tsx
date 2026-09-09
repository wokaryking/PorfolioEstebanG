import { useState } from "react";
import { ArrowRight, Github, Twitter, Instagram, Linkedin, Youtube, Mail, Paperclip, X } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const trustedBrands = [
  "Awwwards",
  "Behance",
  "Dribbble",
  "99designs",
  "Upwork",
];

function ContactModal({ isSpanish, onClose }: { isSpanish: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");

  const inputStyle: React.CSSProperties = {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px 14px",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const attachmentNote = fileName
      ? `\n\nArchivo seleccionado: ${fileName}\nNota: adjunta este archivo en tu cliente de correo antes de enviar.`
      : "";
    const body = `Nombre: ${name}\nCorreo: ${email}\n\n${message}${attachmentNote}`;
    window.location.href = `mailto:estebanguzmangod@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 600,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        background: "rgba(0,0,0,0.78)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          width: "min(520px, 100%)",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "28px",
          border: "1px solid rgba(244,179,33,0.2)",
          borderRadius: "16px",
          background: "#151515",
          boxShadow: "0 24px 80px rgba(0,0,0,0.55)",
          animation: "contactModalIn 0.25s ease both",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "20px", marginBottom: "22px" }}>
          <div>
            <p style={{ margin: "0 0 6px", color: "#F4B321", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              {isSpanish ? "Contacto directo" : "Direct contact"}
            </p>
            <h3 id="contact-modal-title" style={{ margin: 0, color: "#fff", fontSize: "26px" }}>
              {isSpanish ? "Envíame un mensaje" : "Send me a message"}
            </h3>
          </div>
          <button type="button" onClick={onClose} aria-label={isSpanish ? "Cerrar ventana" : "Close window"} style={{ display: "flex", padding: "6px", border: 0, background: "transparent", color: "rgba(255,255,255,0.5)", cursor: "pointer" }}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <input style={inputStyle} value={name} onChange={(event) => setName(event.target.value)} placeholder={isSpanish ? "Tu nombre *" : "Your name *"} required />
          <input style={inputStyle} type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={isSpanish ? "Tu correo electrónico *" : "Your email *"} required />
          <input style={inputStyle} value={subject} onChange={(event) => setSubject(event.target.value)} placeholder={isSpanish ? "Asunto *" : "Subject *"} required />
          <textarea style={{ ...inputStyle, minHeight: "130px", resize: "vertical" }} value={message} onChange={(event) => setMessage(event.target.value)} placeholder={isSpanish ? "Escribe tu mensaje... *" : "Write your message... *"} required />

          <label style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.6)", fontSize: "13px", cursor: "pointer" }}>
            <Paperclip size={16} color="#F4B321" />
            <span>{fileName || (isSpanish ? "Seleccionar archivo" : "Choose a file")}</span>
            <input type="file" onChange={(event) => setFileName(event.target.files?.[0]?.name || "")} style={{ display: "none" }} />
          </label>

          <button type="submit" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "6px", padding: "13px 20px", border: 0, borderRadius: "8px", background: "#F4B321", color: "#111", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>
            <Mail size={17} /> {isSpanish ? "Enviar mensaje" : "Send message"}
          </button>
        </form>
      </div>
      <style>{`@keyframes contactModalIn { from { opacity: 0; transform: translateY(12px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }`}</style>
    </div>
  );
}

export function ContactSection() {
  const { language } = useLanguage();
  const isSpanish = language === "es";
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section
      id="contact"
      style={{
        padding: "100px 80px 0 60px",
        position: "relative",
      }}
    >
      {/* CTA Block */}
      <div
        style={{
          background: "#0f0f0f",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "24px",
          padding: "80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          marginBottom: "60px",
        }}
      >
        {/* Background radial */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "300px",
            background: "radial-gradient(ellipse, rgba(244,179,33,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <p
          style={{
            color: "#F4B321",
            fontSize: "12px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: "20px",
          }}
        >
          {isSpanish ? "Contacto" : "Get In Touch"}
        </p>

        <h2
          style={{
            color: "#fff",
            fontSize: "56px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          {isSpanish ? "Construyamos algo" : "Let's build something"}
          <br />
          <span style={{ color: "#F4B321" }}>{isSpanish ? "memorable." : "memorable."}</span>
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "16px",
            lineHeight: 1.6,
            maxWidth: "480px",
            margin: "0 auto 40px",
          }}
        >
          {isSpanish
            ? "¿Tienes un proyecto en mente? Conectemos y creemos algo que te diferencie."
            : "Have a project in mind? Let's connect and create something that sets you apart from the crowd."}
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginBottom: "48px" }}>
          <button
            type="button"
            onClick={() => setContactModalOpen(true)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#F4B321",
              color: "#111",
              border: "none",
              borderRadius: "10px",
              padding: "16px 32px",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#e6a81e";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(244,179,33,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#F4B321";
              (e.currentTarget as HTMLButtonElement).style.transform = "none";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
            }}
          >
            <Mail size={18} /> {isSpanish ? "Enviar un mensaje" : "Send a Message"}
          </button>

          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "transparent",
              color: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "10px",
              padding: "16px 32px",
              fontSize: "15px",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.3)";
              (e.currentTarget as HTMLButtonElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.12)";
              (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.7)";
            }}
          >
            {isSpanish ? "Agendar una llamada" : "Schedule a Call"} <ArrowRight size={16} />
          </button>
        </div>

        {/* Trusted By */}
        <div>
          <p
            style={{
              color: "rgba(255,255,255,0.25)",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Trusted by International Brands
          </p>
          <div
            style={{
              display: "flex",
              gap: "32px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {trustedBrands.map((brand) => (
              <span
                key={brand}
                style={{
                  color: "rgba(255,255,255,0.18)",
                  fontSize: "16px",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  fontStyle: "italic",
                }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {contactModalOpen && <ContactModal isSpanish={isSpanish} onClose={() => setContactModalOpen(false)} />}

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "40px 0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              background: "#F4B321",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "14px",
              color: "#111",
            }}
          >
            P
          </div>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>
            © 2026 Esteban — All rights reserved
          </span>
        </div>

        {/* Social */}
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          {[Github, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              style={{
                color: "rgba(255,255,255,0.3)",
                transition: "color 0.2s ease",
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#F4B321";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.3)";
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </footer>
    </section>
  );
}
