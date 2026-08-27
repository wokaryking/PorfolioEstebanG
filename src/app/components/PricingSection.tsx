import { Check, Zap } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "/ project",
    description: "Perfect for small businesses and personal projects",
    features: [
      "Logo Design",
      "2 Revision Rounds",
      "Brand Guidelines (Basic)",
      "Social Media Kit",
      "File Delivery (PNG, PDF)",
      "5-Day Turnaround",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$1,299",
    period: "/ project",
    description: "For growing brands that need complete creative direction",
    features: [
      "Full Brand Identity",
      "Unlimited Revisions",
      "Brand Guidelines (Full)",
      "Social Media Pack",
      "Print & Digital Files",
      "3D Visual (1 render)",
      "Web Design (5 screens)",
      "10-Day Turnaround",
      "Priority Support",
    ],
    cta: "Most Popular",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "/ month",
    description: "Dedicated creative partnership for large-scale projects",
    features: [
      "Everything in Pro",
      "Ongoing Monthly Work",
      "Dedicated Designer",
      "Video Production",
      "3D Animations",
      "Design System",
      "Brand Strategy",
      "Weekly Check-ins",
      "Slack Access",
      "Source Files",
    ],
    cta: "Let's Talk",
    highlighted: false,
  },
];

interface PricingCardProps {
  plan: (typeof plans)[0];
}

function PricingCard({ plan }: PricingCardProps) {
  const [hovered, setHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: plan.highlighted
          ? hovered ? "linear-gradient(135deg, #1a1500 0%, #111000 100%)" : "#131313"
          : "#131313",
        border: `1px solid ${hovered ? "rgba(244,179,33,0.5)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: "20px",
        padding: "36px 32px",
        flex: 1,
        position: "relative",
        overflow: "hidden",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-6px)" : "none",
        boxShadow: hovered
          ? "0 0 0 1px rgba(244,179,33,0.15), 0 20px 48px rgba(0,0,0,0.5)"
          : "none",
      }}
    >
      {/* Yellow top line on hover — all cards */}
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

      {plan.highlighted && (
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "#F4B321",
            color: "#111",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "4px 10px",
            borderRadius: "100px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <Zap size={10} fill="#111" /> Recommended
        </div>
      )}

      {/* Plan name */}
      <p
        style={{
          color: plan.highlighted ? "#F4B321" : "rgba(255,255,255,0.5)",
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "16px",
        }}
      >
        {plan.name}
      </p>

      {/* Price */}
      <div style={{ marginBottom: "8px" }}>
        <span
          style={{
            color: "#fff",
            fontSize: "48px",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          {plan.price}
        </span>
        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "14px", marginLeft: "4px" }}>
          {plan.period}
        </span>
      </div>

      <p
        style={{
          color: "rgba(255,255,255,0.4)",
          fontSize: "13px",
          lineHeight: 1.5,
          marginBottom: "32px",
        }}
      >
        {plan.description}
      </p>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background: plan.highlighted ? "rgba(244,179,33,0.15)" : "rgba(255,255,255,0.06)",
          marginBottom: "28px",
        }}
      />

      {/* Features */}
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px 0" }}>
        {plan.features.map((feature) => (
          <li
            key={feature}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                width: "18px",
                height: "18px",
                background: plan.highlighted ? "rgba(244,179,33,0.15)" : "rgba(255,255,255,0.06)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Check size={10} color={plan.highlighted ? "#F4B321" : "rgba(255,255,255,0.5)"} strokeWidth={3} />
            </div>
            <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px" }}>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{
          width: "100%",
          background: plan.highlighted
            ? btnHovered ? "#c98f10" : "#F4B321"
            : btnHovered ? "#ffffff" : "transparent",
          color: plan.highlighted
            ? "#111"
            : btnHovered ? "#111" : "rgba(255,255,255,0.7)",
          border: plan.highlighted
            ? "none"
            : `1px solid ${btnHovered ? "#ffffff" : "rgba(255,255,255,0.12)"}`,
          borderRadius: "10px",
          padding: "14px 24px",
          fontSize: "14px",
          fontWeight: 600,
          cursor: "pointer",
          transition: "all 0.2s ease",
          letterSpacing: "0.02em",
        }}
      >
        {plan.cta}
      </button>
    </div>
  );
}

export function PricingSection() {
  return (
    <section
      id="pricing"
      style={{
        minHeight: "100vh",
        padding: "100px 80px 100px 60px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "100px",
          right: "100px",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(244,179,33,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div style={{ marginBottom: "64px" }}>
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
          Investment
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
          My Pricing Plan
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "15px",
            maxWidth: "480px",
            lineHeight: 1.6,
          }}
        >
          Transparent, flexible pricing for every stage of your creative journey. No hidden fees.
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "flex-start",
        }}
      >
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
}
