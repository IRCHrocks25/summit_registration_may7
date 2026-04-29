import React from "react";
import decisionBg from "figma:asset/b235cbe45040abbf4791fdb71709e2bae7d8d18e.png";

export function TwoChoices() {
  return (
    <section
      style={{
        background: "#0B1D3A",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${decisionBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.18,
          pointerEvents: "none",
        }}
      />
      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(11,29,58,0.7) 0%, rgba(11,29,58,0.55) 50%, rgba(11,29,58,0.7) 100%)",
          pointerEvents: "none",
        }}
      />
      {/* Background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(214,51,132,0.07) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(214,51,132,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative">

        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-7"
            style={{
              background: "rgba(214,51,132,0.12)",
              border: "1px solid rgba(214,51,132,0.32)",
              color: "#D63384",
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              fontWeight: 700,
            }}
          >
            ✦ YOUR MOMENT OF DECISION
          </div>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
              maxWidth: "640px",
              margin: "0 auto 16px",
            }}
          >
            Two Paths{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #D63384, #FFADD6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              From Here
            </span>
          </h2>
        </div>

        {/* Two options */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          {/* Option 1 — Stay */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-5"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1.5px solid rgba(255,255,255,0.1)",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1.5px solid rgba(255,255,255,0.15)",
                }}
              >
                <span style={{ color: "white", fontSize: "0.85rem", fontWeight: 700 }}>1</span>
              </div>
              <span style={{ fontSize: "0.72rem", letterSpacing: "0.16em", fontWeight: 700, color: "white" }}>
                OPTION #1
              </span>
            </div>

            <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />

            <p style={{ fontSize: "0.95rem", color: "white", lineHeight: 1.85 }}>
              You can keep experimenting with AI tools on your own. Keep watching tutorials. Keep adding one more app to the pile. Keep doing the work of six people and hoping that someday it all clicks into a system.
            </p>

            <div className="flex items-center gap-3 mt-auto pt-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "rgba(220,60,60,0.12)", border: "1px solid rgba(220,60,60,0.2)" }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(220,80,80,0.7)" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.25)", fontWeight: 600 }}>
                Same results. Same ceiling.
              </span>
            </div>
          </div>

          {/* Option 2 — Build */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-5 relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #1a3060 0%, #0f2245 100%)",
              border: "1.5px solid rgba(214,51,132,0.4)",
              boxShadow: "0 20px 60px rgba(214,51,132,0.12)",
            }}
          >
            {/* Corner glow */}
            <div
              style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "180px",
                height: "180px",
                background: "radial-gradient(circle, rgba(214,51,132,0.18) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, #D63384, #F272B6)",
                  boxShadow: "0 4px 14px rgba(214,51,132,0.4)",
                }}
              >
                <span style={{ color: "white", fontSize: "0.85rem", fontWeight: 800 }}>2</span>
              </div>
              <span style={{ fontSize: "0.72rem", letterSpacing: "0.16em", fontWeight: 700, color: "#D63384" }}>
                OPTION #2
              </span>
            </div>

            <div style={{ height: "1px", background: "rgba(214,51,132,0.2)" }} />

            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.85 }}>
              Or you can spend 10 seconds registering for a free event where two of the world's most respected AI business mentors show you, step by step, how to build an AI agent team that handles your lead generation, content creation, product development, marketing, sales, and operations.
            </p>

            <div className="flex items-center gap-3 mt-auto pt-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, #D63384, #F272B6)",
                  boxShadow: "0 3px 10px rgba(214,51,132,0.35)",
                }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                Real agents. Real leverage. Real results.
              </span>
            </div>
          </div>
        </div>

        {/* Closing paragraph */}
        <p
          className="text-center mx-auto mb-10"
          style={{
            fontSize: "1rem",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.85,
            maxWidth: "680px",
          }}
        >
          The entrepreneurs who are building agent teams right now are creating a level of leverage that didn't exist a year ago. The window to be early is still open.{" "}
          <strong style={{ color: "white" }}>But it won't stay open.</strong>
        </p>

        {/* CTA */}
        <div className="text-center">
          <button
            className="cta-btn px-12 py-4 inline-block mb-4"
            onClick={() => {
              window.dispatchEvent(new Event("open-registration-modal"));
            }}
            style={{
              fontSize: "0.92rem",
            }}
          >
            SAVE MY FREE SEAT — I'M IN →
          </button>
          <p
            style={{
              fontSize: "0.82rem",
              color: "rgba(214,51,132,0.7)",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            May 7, 2026 | Free | Hands-On | Limited Seats
          </p>
        </div>

      </div>
    </section>
  );
}
