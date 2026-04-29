import React from "react";

const bullets = [
  "The \"agentic mindset\" shift that separates entrepreneurs still dabbling with AI tools from those deploying autonomous agent teams — and why making this shift is the single highest-leverage move you can make in your business right now",
  "How to build your first AI agent in under 2 hours — with no code, no developer, and no prior technical experience — and have it performing a real business function by the end of the day",
  "The orchestration blueprint for connecting your agents into one coordinated operating system where lead gen feeds sales, content feeds marketing, and every agent makes the others smarter over time",
  "Why \"context engineering\" is the real skill behind powerful agents — and how to train your agents on your data, your voice, your frameworks, and your business intelligence so they don't just work generically, they work like YOU",
  "The fastest path from zero to revenue using AI agents — whether you're launching a new business, scaling an existing one, or building a practice as an AI consultant helping companies adopt these systems",
  "Agent builds on stage — you'll watch real agents being constructed and deployed in real time, not slides about theory. You'll see exactly how the architecture works and leave with a replicable blueprint",
  "How to validate any new business idea in 48 hours using agents for market intelligence — so you never waste months building something nobody wants",
  "The emerging six-figure opportunity in AI consulting — how everyday professionals are building practices helping businesses adopt AI agent systems, and why the window to establish yourself is right now before the market crowds",
  "How students from the AI Unleashed community have used these exact systems to launch businesses, build consulting practices, and create income streams that didn't exist for them 12 months ago",
];

export function ExclusiveTopics() {
  return (
    <section
      style={{
        background: "#EEF2FF",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle dot pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(214,51,132,0.12) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative">

        {/* Eyebrow */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full"
            style={{
              background: "rgba(214,51,132,0.12)",
              border: "1px solid rgba(214,51,132,0.35)",
              color: "#A01F6A",
              fontSize: "0.72rem",
              letterSpacing: "0.16em",
              fontWeight: 700,
            }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="#A01F6A">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            YOU'LL ALSO DISCOVER
          </div>
        </div>

        {/* Headline */}
        <h2
          className="text-center mb-12"
          style={{
            fontSize: "clamp(1.7rem, 3.5vw, 2.7rem)",
            fontWeight: 800,
            color: "#0B1D3A",
            lineHeight: 1.2,
            letterSpacing: "-0.025em",
          }}
        >
          You'll Also{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #D63384, #A01F6A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Discover:
          </span>
        </h2>

        {/* Bullets list */}
        <div className="flex flex-col gap-4 mb-16">
          {bullets.map((bullet, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl px-6 py-5 group transition-all hover:-translate-y-0.5"
              style={{
                background: "white",
                border: "1.5px solid rgba(214,51,132,0.15)",
                boxShadow: "0 2px 16px rgba(11,29,58,0.05)",
              }}
            >
              {/* Pink checkmark */}
              <div
                className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5"
                style={{
                  background: "linear-gradient(135deg, #D63384, #F272B6)",
                  boxShadow: "0 3px 10px rgba(214,51,132,0.3)",
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <p
                style={{
                  fontSize: "1rem",
                  color: "#1a2a44",
                  lineHeight: 1.6,
                  fontWeight: 500,
                }}
              >
                {bullet}
              </p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div
          className="rounded-2xl px-8 py-10 text-center"
          style={{
            background: "linear-gradient(135deg, #0B1D3A 0%, #142d57 100%)",
            border: "1.5px solid rgba(214,51,132,0.25)",
            boxShadow: "0 20px 60px rgba(11,29,58,0.15)",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.8,
              marginBottom: "16px",
            }}
          >
            This summit is about building. It's about architecture. It's about deploying{" "}
            <strong style={{ color: "white" }}>real agents for real business functions.</strong>{" "}
            Come ready to{" "}
            <strong
              style={{
                background: "linear-gradient(90deg, #D63384, #FFADD6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              take notes and take action.
            </strong>
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div
              style={{
                height: "1px",
                width: "40px",
                background: "linear-gradient(90deg, transparent, rgba(214,51,132,0.5))",
              }}
            />
            <p
              style={{
                fontSize: "0.88rem",
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.06em",
                fontStyle: "italic",
              }}
            >
              May 7, 2026 · Hands-On · Free
            </p>
            <div
              style={{
                height: "1px",
                width: "40px",
                background: "linear-gradient(90deg, rgba(214,51,132,0.5), transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
