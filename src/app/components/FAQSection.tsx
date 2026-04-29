import React, { useState } from "react";

const faqs = [
  {
    question: "Is this really free?",
    answer: (
      <p>100% free. No credit card. The only investment is 6 hours of your focused attention — and we're confident you'll walk away saying it was the most valuable training day of your year.</p>
    ),
  },
  {
    question: "Do I need technical skills to build agents?",
    answer: (
      <p>No coding required. The agent-building methodology we teach is designed for entrepreneurs and business operators, not developers. If you can follow a step-by-step process and think strategically about your business, you can build agents. About half our students start with <strong style={{ color: "#0B1D3A" }}>no technical background.</strong></p>
    ),
  },
  {
    question: "How is this different from other AI events?",
    answer: (
      <p>Most AI events show you tools and talk about possibilities. This summit shows you how to <strong style={{ color: "#0B1D3A" }}>build and deploy autonomous AI agent teams</strong> across six specific business functions on screen, step by step. You'll watch agents being built in real time. You'll leave with a deployable blueprint, not a list of apps to download.</p>
    ),
  },
  {
    question: "What if I'm just getting started with AI?",
    answer: (
      <p>You'll be able to follow along and build your first agents even if you're early in your AI journey. That said, this summit is designed for people ready to build, not for a basic introduction to what AI is. If you're looking for fundamentals first, check out our AI Unleashed Summit for tools and workflows, then come to this event ready to deploy.</p>
    ),
  },
  {
    question: "When is it and will there be a replay?",
    answer: (
      <>
        <p>May 7, 2026. 9 AM UK / 10 AM Central European. Approximately 6 hours, interactive and hands-on.</p>
        <div className="mt-3 flex flex-wrap gap-3">
          {[
            { time: "9 A.M.", zone: "UK TIME" },
            { time: "10 A.M.", zone: "CENTRAL EUROPEAN TIME" },
          ].map((t, i) => (
            <div
              key={i}
              className="flex flex-col items-center px-5 py-3 rounded-xl"
              style={{
                background: "linear-gradient(135deg, #0B1D3A 0%, #142d57 100%)",
                border: "1px solid rgba(214,51,132,0.25)",
                minWidth: "120px",
              }}
            >
              <span
                style={{
                  background: "linear-gradient(90deg, #D63384, #FFADD6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "1.2rem",
                  fontWeight: 800,
                }}
              >
                {t.time}
              </span>
              <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.55)", letterSpacing: "0.1em", fontWeight: 600 }}>
                {t.zone}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3" style={{ color: "#5a5a72" }}>This event is designed around real-time participation, hands-on builds, and Q&A. Register now and show up for the full session — <strong style={{ color: "#0B1D3A" }}>the experience is not the same on replay.</strong></p>
      </>
    ),
  },
];

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all"
      style={{
        background: "white",
        border: isOpen
          ? "1.5px solid rgba(214,51,132,0.35)"
          : "1.5px solid rgba(214,51,132,0.1)",
        boxShadow: isOpen
          ? "0 8px 32px rgba(11,29,58,0.08)"
          : "0 2px 12px rgba(11,29,58,0.04)",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left transition-all"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <span
          style={{
            fontSize: "0.97rem",
            fontWeight: 700,
            color: isOpen ? "#0B1D3A" : "#1a2e4a",
            lineHeight: 1.4,
          }}
        >
          {question}
        </span>
        <div
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all"
          style={{
            background: isOpen
              ? "linear-gradient(135deg, #D63384, #F272B6)"
              : "rgba(214,51,132,0.1)",
            boxShadow: isOpen ? "0 4px 12px rgba(214,51,132,0.3)" : "none",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease, background 0.2s ease",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isOpen ? "white" : "#A01F6A"}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </button>

      <div
        style={{
          maxHeight: isOpen ? "600px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <div
          className="px-7 pb-6"
          style={{
            fontSize: "0.93rem",
            color: "#5a5a72",
            lineHeight: 1.8,
            fontFamily: "'DM Sans', sans-serif",
            borderTop: "1px solid rgba(214,51,132,0.1)",
            paddingTop: "16px",
          }}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative">

        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-7"
            style={{
              background: "rgba(214,51,132,0.1)",
              border: "1px solid rgba(214,51,132,0.32)",
              color: "#A01F6A",
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              fontWeight: 700,
            }}
          >
            ✦ GOT QUESTIONS?
          </div>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              color: "#0B1D3A",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
              maxWidth: "560px",
              margin: "0 auto 14px",
            }}
          >
            Frequently Asked{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #D63384, #A01F6A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Questions
            </span>
          </h2>

          <p
            style={{
              fontSize: "1rem",
              color: "#5a5a72",
              lineHeight: 1.7,
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Everything you need to know about the free AI Agents Summit.
          </p>
        </div>

        {/* FAQ list */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            className="cta-btn px-12 py-4 block mx-auto mb-4"
            onClick={() => {
              window.dispatchEvent(new Event("open-registration-modal"));
            }}
            style={{
              fontSize: "0.92rem",
            }}
          >
            SAVE MY FREE SEAT →
          </button>
          <p
            style={{
              fontSize: "0.82rem",
              color: "#A01F6A",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            Only 2,000 seats available — reserve yours now.
          </p>
        </div>

      </div>
    </section>
  );
}
