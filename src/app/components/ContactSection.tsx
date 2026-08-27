import { ArrowRight, Github, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react";

const trustedBrands = [
  "Awwwards",
  "Behance",
  "Dribbble",
  "99designs",
  "Upwork",
];

export function ContactSection() {
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
          Get In Touch
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
          Let's build something
          <br />
          <span style={{ color: "#F4B321" }}>memorable.</span>
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
          Have a project in mind? Let's connect and create something that sets you apart from the crowd.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginBottom: "48px" }}>
          <button
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
            <Mail size={18} /> Send a Message
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
            Schedule a Call <ArrowRight size={16} />
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
