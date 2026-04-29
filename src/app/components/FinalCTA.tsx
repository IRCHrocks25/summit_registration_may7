import React, { useState, useEffect } from "react";
import { Shield, Users, CheckCircle } from "lucide-react";
import bgImage from "figma:asset/4481ebc46d957e81b10819e084552dae04c662fe.png";

function Countdown() {
  const targetDate = new Date("2026-05-07T09:00:00+01:00");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) return;
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

  return (
    <div className="flex gap-3 justify-center flex-wrap">
      {[
        { label: "Days", value: pad(timeLeft.days) },
        { label: "Hours", value: pad(timeLeft.hours) },
        { label: "Mins", value: pad(timeLeft.minutes) },
        { label: "Secs", value: pad(timeLeft.seconds) },
      ].map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1.5px solid rgba(214,51,132,0.25)",
              fontSize: "1.6rem",
              fontWeight: 800,
              color: "white",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {value}
          </div>
          <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.35)", marginTop: 5, letterSpacing: "0.12em" }}>
            {label.toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  );
}

export function FinalCTA() {
  return (
    <section
      style={{
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Dot texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(214,51,132,0.07) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />
      {/* Central glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "500px",
          background: "radial-gradient(ellipse, rgba(214,51,132,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative text-center">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
          style={{
            background: "rgba(214,51,132,0.1)",
            border: "1px solid rgba(214,51,132,0.32)",
            color: "#D63384",
            fontSize: "0.72rem",
            letterSpacing: "0.18em",
            fontWeight: 700,
          }}
        >
          ✦ THE TIME IS NOW
        </div>

        {/* Headline */}
        <h2
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            marginBottom: "20px",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          The window to be early{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #D63384, #FFADD6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            is still open.
          </span>
        </h2>

        {/* Urgency line */}
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: "0 auto 28px",
          }}
        >
          But it won't stay open.{" "}
          <strong
            style={{
              background: "linear-gradient(90deg, #D63384, #FFADD6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Register free. Show up ready. Build your agent team.
          </strong>
        </p>

        {/* Countdown */}
        <div className="mb-10">
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Summit starts in
          </p>
          <Countdown />
        </div>

        {/* CTA button */}
        <button
          className="cta-btn px-14 py-5 block mx-auto mb-4"
          onClick={() => {
            window.dispatchEvent(new Event("open-registration-modal"));
          }}
          style={{
            fontSize: "1rem",
          }}
        >
          SAVE MY FREE SEAT — I'M IN →
        </button>

        <p
          style={{
            fontSize: "0.82rem",
            color: "rgba(214,51,132,0.75)",
            fontWeight: 600,
            letterSpacing: "0.05em",
            marginBottom: "32px",
          }}
        >
          May 7, 2026 | Free | Hands-On | Limited Seats
        </p>

        {/* Trust signals */}
        <div className="flex flex-wrap gap-6 justify-center mb-8">
          {[
            { icon: <Shield size={14} />, text: "SSL Secured" },
            { icon: <Users size={14} />, text: "3M+ Entrepreneurs Trained" },
            { icon: <CheckCircle size={14} />, text: "No Spam. Ever." },
          ].map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2"
              style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.78rem" }}
            >
              <span style={{ color: "#D63384" }}>{icon}</span>
              {text}
            </div>
          ))}
        </div>

        {/* Privacy text */}
        <p
          style={{
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.3)",
            lineHeight: 1.6,
            marginBottom: "10px",
          }}
        >
          Your information is safe. We respect your privacy and will never share your data.
        </p>
        <div className="flex items-center justify-center gap-4">
          <span
            style={{
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.25)",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Privacy Policy
          </span>
          <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "0.72rem" }}>|</span>
          <span
            style={{
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.25)",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Terms &amp; Conditions
          </span>
        </div>

      </div>
    </section>
  );
}