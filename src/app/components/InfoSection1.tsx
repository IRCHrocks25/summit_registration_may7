import React from "react";

import img1 from "figma:asset/783fe7facd665fca93acc79aeb750cfbec7910f6.png";
import img2 from "figma:asset/51e7d94806b0317ed23024759a1563f0fbbf942d.png";
import img3 from "figma:asset/485d655c97e8425d4bd56595cf8ccbc4910c8d3b.png";
import img4 from "figma:asset/175b91143f9c73ecf294de26273617a162b7969d.png";
import img5 from "figma:asset/031f9e9ce5653b08e951072698a97d01589ef5e3.png";

export function InfoSection1() {
  return (
    <section
      style={{
        background: "#EEF2FF",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle dot texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(214,51,132,0.08) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative">

        {/* Header — full width above grid */}
        <div className="text-center mb-12">
          <h2
            style={{
              fontSize: "clamp(1.7rem, 3.2vw, 2.5rem)",
              fontWeight: 800,
              color: "#0B1D3A",
              lineHeight: 1.22,
              letterSpacing: "-0.025em",
              maxWidth: "720px",
              margin: "0 auto 12px",
            }}
          >
            Let's be real about what's happening in{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #D63384, #A01F6A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontStyle: "italic",
              }}
            >
              your business right now.
            </span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[5fr_7fr] gap-10 items-start">

          {/* Left — stacked images */}
          <div className="relative flex flex-col gap-3">
            {/* Image 1 */}
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{
                boxShadow: "0 30px 80px rgba(11,29,58,0.18), 0 0 0 1.5px rgba(214,51,132,0.2)",
              }}
            >
              <img
                src={img1}
                alt="Summit audience engaged in learning"
                style={{
                  width: "100%",
                  height: "340px",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "40%",
                  background: "linear-gradient(0deg, rgba(11,29,58,0.65) 0%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div
                  className="px-4 py-2.5 rounded-xl inline-block"
                  style={{
                    background: "rgba(11,29,58,0.8)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(214,51,132,0.3)",
                  }}
                >
                  <p style={{ color: "#F272B6", fontSize: "0.65rem", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 2 }}>
                    AI AGENTS SUMMIT
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.78rem", fontWeight: 600 }}>
                    3M+ Entrepreneurs Trained Worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 12px 40px rgba(11,29,58,0.13), 0 0 0 1.5px rgba(214,51,132,0.15)",
              }}
            >
              <img
                src={img2}
                alt="Be Heard Be Seen event attendees"
                style={{
                  width: "100%",
                  height: "340px",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
            </div>

            {/* Image 5 */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 12px 40px rgba(11,29,58,0.13), 0 0 0 1.5px rgba(214,51,132,0.15)",
              }}
            >
              <img
                src={img5}
                alt="Alessia Minkus with Richard Branson"
                style={{
                  width: "100%",
                  height: "340px",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-5 -right-4 md:-right-6 rounded-2xl px-5 py-4 hidden sm:block"
              style={{
                background: "linear-gradient(135deg, #D63384, #A01F6A)",
                boxShadow: "0 12px 40px rgba(214,51,132,0.4)",
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.62rem", letterSpacing: "0.14em", fontWeight: 600, marginBottom: 4 }}>
                MAY 7, 2026
              </p>
              <p style={{ color: "white", fontSize: "1.7rem", fontWeight: 800, lineHeight: 1 }}>6 HRS</p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.7rem", marginTop: 2 }}>Hands-on agent builds</p>
            </div>
          </div>

          {/* Right — letter card */}
          <div className="flex flex-col gap-6">
            <div
              className="rounded-2xl px-7 sm:px-9 py-9 space-y-5"
              style={{
                background: "white",
                border: "1.5px solid rgba(214,51,132,0.13)",
                boxShadow: "0 4px 40px rgba(11,29,58,0.06)",
              }}
            >
              <p style={{ fontSize: "1rem", color: "#4a4a60", lineHeight: 1.85 }}>
                You're the lead generator. You're the content creator. You're the marketer. You're the sales team. You're the product developer. You're the admin. You're doing the work of six people with the time and energy of one — and no matter how many AI tools you've tried, you still feel like you're running on a hamster wheel.
              </p>

              <p style={{ fontSize: "1rem", color: "#4a4a60", lineHeight: 1.85 }}>
                Here's why: tools don't replace roles. They make individual tasks faster. But you're still the one deciding what to do, when to do it, and how to execute — for every single function in your business.
              </p>

              {/* Callout block 1 — Agents are different */}
              <div
                className="rounded-xl px-6 py-5"
                style={{
                  background: "linear-gradient(135deg, #0B1D3A 0%, #142d57 100%)",
                  border: "1px solid rgba(214,51,132,0.25)",
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.15rem)",
                    fontWeight: 700,
                    color: "white",
                    lineHeight: 1.5,
                    letterSpacing: "-0.01em",
                    marginBottom: "12px",
                  }}
                >
                  Agents are fundamentally different.
                </p>
                <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.8 }}>
                  An agent doesn't wait for you to prompt it. You give it a role — "you are my lead generation agent" or "you are my content agent" — and it executes that role autonomously. Continuously. Intelligently. It finds leads while you sleep. It creates content while you're in meetings. It qualifies prospects while you're building strategy.
                </p>
              </div>

              {/* Callout block 2 — Agentic operating system */}
              <div
                className="rounded-xl px-6 py-5"
                style={{
                  background: "rgba(214,51,132,0.06)",
                  border: "1px solid rgba(214,51,132,0.2)",
                }}
              >
                <p style={{ fontSize: "0.97rem", color: "#1a2a44", lineHeight: 1.8 }}>
                  When you connect those agents into a coordinated team — an{" "}
                  <strong style={{ color: "#0B1D3A" }}>agentic operating system</strong>{" "}
                  — you go from doing the work of six people to{" "}
                  <strong
                    style={{
                      background: "linear-gradient(90deg, #D63384, #A01F6A)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    managing six agents that do the work for you.
                  </strong>
                </p>
              </div>

              <p style={{ fontSize: "1rem", color: "#4a4a60", lineHeight: 1.85 }}>
                That's the shift. Not learning another tool. Not sitting through another surface-level AI tutorial. Building an actual business team made of agents — each one handling a core function that used to eat your time, your energy, and your growth.
              </p>

              <p style={{ fontSize: "1rem", color: "#4a4a60", lineHeight: 1.85 }}>
                On May 7th, at the free AI Agents Summit Europe, we're showing you how to build that team.{" "}
                <strong style={{ color: "#0B1D3A" }}>Agent by agent. Function by function. Hands-on.</strong>
              </p>

              {/* Signature */}
              <div
                className="pt-4"
                style={{ borderTop: "1px solid rgba(214,51,132,0.1)" }}
              >
                <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0B1D3A" }}>
                  Sincerely,
                </p>
                <p style={{ fontSize: "0.8rem", color: "#A01F6A", marginTop: 2, letterSpacing: "0.04em", fontWeight: 600 }}>
                  Kane &amp; Alessia Minkus · Silicon Valley's Most Sought-After AI Business Mentors
                </p>
              </div>
            </div>

            {/* CTA block */}
            <div className="text-center">
              <button
                className="cta-btn px-12 py-4 block mx-auto mb-3"
                onClick={() => {
                  window.dispatchEvent(new Event("open-registration-modal"));
                }}
                style={{
                  fontSize: "0.92rem",
                }}
              >
                SAVE MY FREE SEAT →
              </button>
              <p style={{ fontSize: "0.82rem", color: "#A01F6A", fontWeight: 600, letterSpacing: "0.04em" }}>
                Only 2,000 seats available — reserve yours now.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}