import React, { useEffect, useState } from "react";
import Cred from "../../imports/Cred";

function CountdownTimer() {
  const targetDate = new Date("2026-05-07T09:00:00+01:00");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) { setExpired(true); return; }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");
  if (expired) return null;

  return (
    <div className="flex gap-3 justify-center">
      {[
        { label: "DAYS", value: pad(timeLeft.days) },
        { label: "HOURS", value: pad(timeLeft.hours) },
        { label: "MINS", value: pad(timeLeft.minutes) },
        { label: "SECS", value: pad(timeLeft.seconds) },
      ].map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <div
            className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center"
            style={{
              background: "rgba(214,51,132,0.15)",
              border: "1.5px solid rgba(214,51,132,0.5)",
              fontSize: "1.8rem",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              color: "#D63384",
            }}
          >
            {value}
          </div>
          <span
            className="mt-1"
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.5)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #070F22 0%, #0B1D3A 50%, #0D2248 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(214,51,132,0.07) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(100,130,200,0.06) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D63384' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Top ribbon */}
      <div
        className="w-full py-2.5 text-center"
        style={{
          background: "linear-gradient(90deg, #D63384, #F272B6, #D63384)",
          fontSize: "0.75rem",
          letterSpacing: "0.12em",
          fontWeight: 600,
          color: "white",
        }}
      >
        FREE 1-DAY VIRTUAL SUMMIT &nbsp;·&nbsp; AI AGENTS SUMMIT EUROPE &nbsp;|&nbsp; MAY 7, 2026 &nbsp;|&nbsp; REGISTER NOW - SEATS ARE LIMITED
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">

        {/* Headline */}
        <div className="text-center mb-4">
          <p
            style={{
              fontSize: "clamp(0.8rem, 1.6vw, 0.95rem)",
              color: "rgba(255,255,255,0.75)",
              fontWeight: 400,
              maxWidth: "700px",
              margin: "0 auto 16px",
              lineHeight: 1.5,
            }}
          >
            For Entrepreneurs Who Are Done With Generic AI Training and Ready to Actually Build Something
          </p>
          <h1
            className="mx-auto"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1.4rem, 3vw, 2.6rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#FFFFFF",
              maxWidth: "960px",
              letterSpacing: "-0.02em",
            }}
          >
            Deploy AI Agents Across Lead Generation, Content, Product Development, Marketing, Sales, and Operations{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #D63384, #FFADD6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              — And Finally Run Your Business Like a CEO
            </span>{" "}
            Instead of a One-Person Assembly Line
          </h1>
        </div>

        {/* Countdown */}
        <div className="mb-10 mt-8">
          <CountdownTimer />
        </div>

        {/* Centered Video */}
        <div className="flex flex-col items-center">
          <div style={{ width: "100%", maxWidth: "780px" }}>

            {/* Video */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: "#000",
                border: "1.5px solid rgba(214,51,132,0.3)",
                aspectRatio: "16/9",
                boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
              }}
            >
              <div
                className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full"
                style={{
                  background: "rgba(214,51,132,0.9)",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "white",
                }}
              >
                PREVIEW
              </div>
              <iframe
                src="https://drive.google.com/file/d/1ZVzIxJjkxazV5ZQhv3DJTwlrmdZZEIqb/preview"
                title="Summit Preview"
                allow="autoplay; fullscreen"
                allowFullScreen
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>

            <button
              className="cta-btn px-12 py-4 block mx-auto mt-5"
              onClick={() => {
                window.dispatchEvent(new Event("open-registration-modal"));
              }}
              style={{
                fontSize: "0.92rem",
              }}
            >
              SAVE MY FREE SEAT →
            </button>

            {/* Body paragraph — moved under video */}
            <p
              className="mt-5 text-center"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              The free AI Agents Summit shows you how to build and orchestrate an AI agent team for every major function in your business — so you stop drowning in execution and start focusing on the work that actually grows your income.{" "}
              <strong style={{ color: "white" }}>May 7, 2026. Hands-on. Not another intro class.</strong>
            </p>

            {/* Tony Robbins authority quote */}
            <div
              className="mt-5 rounded-xl px-5 py-4"
              style={{
                background: "rgba(214,51,132,0.07)",
                border: "1px solid rgba(214,51,132,0.2)",
              }}
            >
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                  marginBottom: "10px",
                }}
              >
                "Kane and Alessia crushed it on my stage at Business Mastery and set the audience on fire with how to leverage AI to grow your business."
              </p>
              <div className="flex items-center gap-2">
                <div
                  style={{
                    width: "28px",
                    height: "2px",
                    background: "linear-gradient(90deg, #D63384, #F272B6)",
                    borderRadius: "2px",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <span style={{ color: "#F272B6", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    Tony Robbins
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.72rem", marginLeft: "6px" }}>
                    · The World's Leading Transformational Coach
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* As Seen In logos */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "22px",
            paddingBottom: "26px",
            marginTop: "32px",
          }}
        >
          <p
            className="text-center mb-4"
            style={{
              fontSize: "0.62rem",
              letterSpacing: "0.22em",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            As Seen In
          </p>
          <div className="max-w-4xl mx-auto overflow-hidden" style={{ height: 64 }}>
            <Cred />
          </div>
        </div>

      </div>
    </section>
  );
}
