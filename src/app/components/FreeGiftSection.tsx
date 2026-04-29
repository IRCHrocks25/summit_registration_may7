import React from "react";

import { Gift } from "lucide-react";
import summitPhoto from "figma:asset/293d15ce4546177ba2eb6b975c9824860324ed96.png";

const outcomes = [
  {
    number: "1",
    heading: "The complete architecture for your AI agent team",
    body: "A mapped-out blueprint showing which agents to build for your specific business, how they connect to each other, and the exact order to deploy them for maximum impact across lead gen, content, product dev, marketing, sales, and operations.",
  },
  {
    number: "2",
    heading: "The builder's playbook for agent construction",
    body: "The step-by-step process for building, training, and deploying your first agents using context engineering, your own data, and your own business intelligence. Not theory. Not slides. The actual build methodology.",
  },
  {
    number: "3",
    heading: "A clear monetization path",
    body: "Whether that's using your agent team to scale your own business, launching new products and services at lightning speed, or building a high-value practice as an AI consultant helping companies deploy these systems.",
  },
];

export function FreeGiftSection() {
  return (
    <section
      style={{
        background: "linear-gradient(160deg, #070F22 0%, #0B1D3A 60%, #0D2248 100%)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(214,51,132,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D63384' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          pointerEvents: "none",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative">
        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — copy */}
          <div>
            {/* Badge */}
            <div className="flex justify-start mb-5">
              <div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full"
                style={{
                  background: "rgba(214,51,132,0.15)",
                  border: "1.5px solid rgba(214,51,132,0.5)",
                  color: "#FFADD6",
                  fontSize: "0.78rem",
                  letterSpacing: "0.12em",
                  fontWeight: 700,
                }}
              >
                <Gift size={14} color="#F272B6" />
                WHAT YOU'LL WALK AWAY WITH
              </div>
            </div>

            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.9rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: "24px",
              }}
            >
              By the End of This{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #D63384, #FFADD6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                6-Hour Summit
              </span>
              , You'll Have:
            </h2>

            {/* Numbered outcomes */}
            <div className="flex flex-col gap-5 mb-7">
              {outcomes.map((item) => (
                <div key={item.number} className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #D63384, #F272B6)",
                      boxShadow: "0 3px 12px rgba(214,51,132,0.35)",
                      fontSize: "0.82rem",
                      fontWeight: 800,
                      color: "white",
                    }}
                  >
                    {item.number}
                  </div>
                  <div>
                    <p style={{ color: "white", fontWeight: 700, fontSize: "0.97rem", marginBottom: "4px", lineHeight: 1.3 }}>
                      {item.heading}
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", lineHeight: 1.75 }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Free gift line */}
            <div
              className="flex items-center gap-3 rounded-xl px-5 py-3.5 mb-8"
              style={{
                background: "rgba(214,51,132,0.1)",
                border: "1px solid rgba(214,51,132,0.25)",
              }}
            >
              <Gift size={16} color="#F272B6" className="shrink-0" />
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
                <strong style={{ color: "#FFADD6" }}>PLUS:</strong> A free gift for every attendee — details revealed at the summit.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                className="cta-btn px-8 py-4"
                onClick={() => {
                  window.dispatchEvent(new Event("open-registration-modal"));
                }}
                style={{
                  fontSize: "1rem",
                  whiteSpace: "nowrap",
                }}
              >
                I'M READY TO BUILD — REGISTER FREE →
              </button>
            </div>
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", marginTop: "10px", lineHeight: 1.5 }}>
              Interactive and hands-on. Seats are limited. This is not a passive webinar.
            </p>
          </div>

          {/* Right — image */}
          <div className="flex flex-col items-center">
            <div
              className="relative w-full rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src={summitPhoto}
                alt="AI Agents Summit — Kane & Alessia on stage with global audience"
                className="w-full h-full object-cover"
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
