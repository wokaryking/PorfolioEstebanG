import { useEffect, useRef, useState, useCallback } from "react";
import { Github, Twitter, Instagram, Linkedin, Youtube, Star, X, Send, ChevronUp, ChevronDown, Loader2 } from "lucide-react";
import { projectId, publicAnonKey } from "/utils/supabase/info";
import { useLanguage } from "../LanguageContext";

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-6c8ccaad`;

interface SidebarProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

const navItems = [
  { id: "home", label: { es: "Inicio", en: "Home" } },
  { id: "about", label: { es: "Sobre mí", en: "About" } },
  { id: "projects", label: { es: "Proyectos", en: "Projects" } },
  { id: "services", label: { es: "Servicios", en: "Services" } },
  { id: "pricing", label: { es: "Precios", en: "Pricing" } },
  { id: "contact", label: { es: "Contacto", en: "Contact" } },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/wokaryking" },
  { icon: Twitter, href: "https://x.com/Estebangod12" },
  { icon: Instagram, href: "https://www.instagram.com/estebanguzman641/" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/esteban-guzman-23687825a/" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UCTLDVOviCjcgaK6jzVBwmiA" },
];

interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
  createdAt: number;
}

const fallbackReviews: Review[] = [];

function StarRating({ rating, size = 12 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={size}
          fill={s <= rating ? "#F4B321" : "none"}
          stroke={s <= rating ? "#F4B321" : "rgba(255,255,255,0.2)"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      style={{
        padding: "10px 12px",
        background: "rgba(244,179,33,0.04)",/*255,0,0  */
        borderRadius: "8px",
        border: "1px solid rgba(244,179,33,0.1)",
        marginBottom: "8px",
        flexShrink: 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
        <div
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            background: "#F4B321",/*perfil en form  */
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "11px",
            fontWeight: 700,
            color: "#111",
            flexShrink: 0,
          }}
        >
          {review.avatar}
        </div>
        <div style={{ minWidth: 0, flex: 1, overflow: "hidden" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, color: "#fff", lineHeight: 1.2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {review.name}
          </div>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", lineHeight: 1.2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {review.role}
          </div>
        </div>
        <div style={{ marginLeft: "auto", flexShrink: 0 }}>
          <StarRating rating={review.rating} size={10} />
        </div>
      </div>
      <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.65)", lineHeight: 1.5, margin: 0 }}>
        "{review.text}"
      </p>
    </div>
  );
}

function ReviewsModal({
  reviews,
  onClose,
  onSubmit,
}: {
  reviews: Review[];
  onClose: () => void;
  onSubmit: (r: Omit<Review, "id" | "createdAt">) => Promise<void>;
}) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [hovered, setHovered] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !text.trim()) return;
    setSubmitting(true);
    setError("");
    try {
      await onSubmit({
        name: email.trim(),
        role: role.trim() || "Cliente",
        text: text.trim(),
        rating,
        avatar: email.trim()[0].toUpperCase(),
      });
      setSubmitted(true);
      setTimeout(() => {
        setEmail(""); setRole(""); setText(""); setRating(5); setSubmitted(false);
      }, 2500);
    } catch {
      setError("No se pudo enviar. Intenta de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    padding: "8px 12px",
    color: "#fff",
    fontSize: "13px",
    outline: "none",
    boxSizing: "border-box",
  };

  const avg = reviews.length
    ? (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1)
    : "5.0";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "500px",
          maxWidth: "92vw",
          maxHeight: "82vh",
          background: "#161616",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          
          }}
        >
          <div>
            <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: "#fff" }}>
              Customer Reviews
            </h3>
            <p style={{ margin: "2px 0 0", fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
              {reviews.length} reseñas · Promedio {avg} ★
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              type="button"
              onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                background: "rgba(244,179,33,0.1)",
                border: "1px solid rgba(244,179,33,0.3)",
                borderRadius: "6px",
                padding: "6px 9px",
                color: "#F4B321",
                fontSize: "11px",
                cursor: "pointer",
              }}
            >
              <ChevronDown size={13} />
              Escribir reseña
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar reseñas"
              style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.4)", padding: "4px" }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px" }}>
          {/* Reviews list */}
          <div style={{ marginBottom: "24px" }}>
            {reviews.map((r) => (
              <div
                key={r.id}
                style={{
                  padding: "14px",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  marginBottom: "10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "#F4B321",/* perfil en cuestionario  */
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "13px",
                      color: "#111",
                      flexShrink: 0,
                    }}
                  >
                    {r.avatar}
                  </div>
                  <div style={{ minWidth: 0, flex: 1, overflow: "hidden" }}>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "#fff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.name}</div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.role}</div>
                  </div>
                  <div style={{ marginLeft: "auto", flexShrink: 0 }}>
                    <StarRating rating={r.rating} size={13} />
                  </div>
                </div>
                <p style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                  "{r.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Submit form */}
          <div
            ref={formRef}
            style={{
              padding: "16px",
              background: "rgba(244,179,33,0.04)",
              borderRadius: "12px",
              border: "1px solid rgba(244,179,33,0.12)",
            }}
          >
            <h4 style={{ margin: "0 0 14px", fontSize: "13px", fontWeight: 600, color: "#F4B321" }}>
              Deja tu reseña
            </h4>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "20px 0", color: "#F4B321", fontSize: "14px", fontWeight: 600 }}>
                ¡Gracias por tu reseña! 🙌
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    type="email"
                    style={inputStyle}
                    placeholder="Tu correo electrónico *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                  />
                  <input
                    style={inputStyle}
                    placeholder="Rol / Empresa"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </div>
                <textarea
                  style={{ ...inputStyle, resize: "none", minHeight: "72px" }}
                  placeholder="Tu experiencia... *"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                />
                {error && (
                  <p style={{ margin: 0, fontSize: "12px", color: "#ff6b6b" }}>{error}</p>
                )}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", gap: "4px" }}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onMouseEnter={() => setHovered(s)}
                        onMouseLeave={() => setHovered(0)}
                        onClick={() => setRating(s)}
                        style={{ background: "none", border: "none", cursor: "pointer", padding: "2px" }}
                      >
                        <Star
                          size={18}
                          fill={s <= (hovered || rating) ? "#F4B321" : "none"}
                          stroke={s <= (hovered || rating) ? "#F4B321" : "rgba(255,255,255,0.3)"}
                          strokeWidth={1.5}
                        />
                      </button>
                    ))}
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      background: submitting ? "rgba(244,179,33,0.5)" : "#F4B321",
                      border: "none",
                      borderRadius: "8px",
                      padding: "8px 16px",
                      color: "#111", /*  */
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: submitting ? "not-allowed" : "pointer",
                    }}
                  >
                    {submitting ? <Loader2 size={13} style={{ animation: "spin 1s linear infinite" }} /> : <Send size={13} />}
                    {submitting ? "Enviando..." : "Enviar"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewsTicker({ reviews, onOpenModal }: { reviews: Review[]; onOpenModal: () => void }) {
  const tickerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  const doubled = [...reviews, ...reviews];

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    const speed = 0.4;

    const step = (timestamp: number) => {
      if (lastTimeRef.current === 0) lastTimeRef.current = timestamp;
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (!paused) {
        posRef.current += speed * (delta / 16.67);
        const half = ticker.scrollHeight / 2;
        if (posRef.current >= half) posRef.current -= half;
        ticker.style.transform = `translateY(-${posRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = 0;
    };
  }, [paused, reviews.length]);

  return (
    <div
      style={{
        flex: 1,
        minHeight: 0,
        margin: "16px 0",
        borderTop: "1px solid #1c1c1c",
        borderBottom: "1px solid #1c1c1c",
        paddingTop: "14px",
        paddingBottom: "14px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px", flexShrink: 0 }}>
        <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Clientes
        </span>
        <button
          onClick={onOpenModal}
          style={{
            background: "none",
            border: "1px solid rgba(244,179,33,0.3)",
            borderRadius: "4px",
            padding: "2px 8px",
            color: "#F4B321",
            fontSize: "10px",
            cursor: "pointer",
            letterSpacing: "0.05em",
          }}
        >
          Escribir una
        </button>
      </div>

      <div
        style={{ flex: 1, minHeight: 0, overflow: "hidden", position: "relative" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "24px",
            background: "linear-gradient(to bottom, #0a0a0a, transparent)",
            zIndex: 2, pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "24px",
            background: "linear-gradient(to top, #0a0a0a, transparent)",
            zIndex: 2, pointerEvents: "none",
          }}
        />
        <div ref={tickerRef} style={{ willChange: "transform" }}>
          {doubled.map((review, i) => (
            <ReviewCard key={`${review.id}-${i}`} review={review} />
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "8px" }}>
        <ChevronUp size={12} color="rgba(255,255,255,0.2)" />
        <ChevronDown size={12} color="rgba(255,255,255,0.2)" />
      </div>
    </div>
  );
}

export function Sidebar({ activeSection, onNavClick }: SidebarProps) {
  const { language } = useLanguage();
  const [reviews, setReviews] = useState<Review[]>(fallbackReviews);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchReviews = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/reviews`, {
        headers: { Authorization: `Bearer ${publicAnonKey}` },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (Array.isArray(data.reviews) && data.reviews.length > 0) {
        setReviews(data.reviews);
      }
    } catch (err) {
      console.log("Could not load reviews:", err);
    }
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const handleSubmitReview = async (r: Omit<Review, "id" | "createdAt">) => {
    const res = await fetch(`${API_BASE}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${publicAnonKey}`,
      },
      body: JSON.stringify(r),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `HTTP ${res.status}`);
    }
    const data = await res.json();
    // Append the new review immediately so it appears without reload
    setReviews((prev) => [...prev, data.review]);
  };

  return (
    <>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      <aside className="mx-[0px] my-0"
        style={{
          width: "240px",
          minWidth: "240px",
          backgroundColor: "#0a0a0a",/*#0a0a0a  */
          borderRight: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          flexDirection: "column",
          padding: "40px 24px 24px",
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          zIndex: 100,
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {/* Logo */}
        <div style={{ marginBottom: "36px", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                background: "#F4B321",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "16px",
                color: "#111",
                flexShrink: 0,
              }}
            >
              P
            </div>
            <span style={{ color: "#fff", fontSize: "18px", fontWeight: 600, letterSpacing: "0.02em" }}>
              Portfolio
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ display: "flex", flexDirection: "column", gap: "4px", flexShrink: 0 }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "8px 16px",/* menu espacio  */
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: activeSection === item.id ? 600 : 400,
                color: activeSection === item.id ? "#F4B321" : "rgba(255,255,255,0.6)",
                background: activeSection === item.id ? "rgba(244,179,33,0.08)" : "transparent",
                transition: "all 0.2s ease",
                textAlign: "left",
                width: "100%",
                letterSpacing: "0.01em",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                if (activeSection !== item.id) {
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.04)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.6)";
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                }
              }}
            >
              {activeSection === item.id && (
                <span
                  style={{
                    width: "3px",   
                    height: "20px",
                    background: "#F4B321",
                    borderRadius: "2px",
                    position: "absolute",
                    left: "0px",
                  }}
                />
              )}
              <span style={{ marginLeft: activeSection === item.id ? "12px" : "0" }}>
                {item.label[language]}
              </span>
            </button>
          ))}
        </nav>

        {/* Reviews Ticker */}
        <ReviewsTicker reviews={reviews} onOpenModal={() => setModalOpen(true)} />

        {/* Social Icons */}
        <div style={{ flexShrink: 0, marginTop: "auto" }}>
          <p
            style={{
              fontSize: "11px",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "12px",
              marginTop: "8px",
            }}
          >
            Follow Me
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    transition: "color 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#F4B321";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)";
                  }}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </aside>

      {modalOpen && (
        <ReviewsModal
          reviews={reviews}
          onClose={() => setModalOpen(false)}
          onSubmit={handleSubmitReview}
        />
      )}
    </>
  );
}
