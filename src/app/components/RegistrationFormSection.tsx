import React, { useEffect, useRef, useState } from "react";

const FORM_SCRIPT_SRC = "https://l.industryrockstars.ch/js/form_embed.js";
const FORM_SCRIPT_ID = "industry-rockstars-form-embed";
const OPEN_REGISTRATION_MODAL_EVENT = "open-registration-modal";

export function RegistrationFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const hasOpenedOnceRef = useRef(false);
  const targetDate = new Date("2026-05-07T09:00:00+01:00");

  useEffect(() => {
    const openModal = () => {
      hasOpenedOnceRef.current = true;
      setIsOpen(true);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener(OPEN_REGISTRATION_MODAL_EVENT, openModal);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener(OPEN_REGISTRATION_MODAL_EVENT, openModal);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (document.getElementById(FORM_SCRIPT_ID)) {
      return;
    }

    const script = document.createElement("script");
    script.id = FORM_SCRIPT_ID;
    script.src = FORM_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  useEffect(() => {
    const autoOpenTimer = window.setTimeout(() => {
      if (hasOpenedOnceRef.current) {
        return;
      }

      hasOpenedOnceRef.current = true;
      setIsOpen(true);
    }, 10000);

    return () => {
      window.clearTimeout(autoOpenTimer);
    };
  }, []);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    update();
    const timer = window.setInterval(update, 1000);
    return () => {
      window.clearInterval(timer);
    };
  }, [targetDate]);

  const pad = (n: number) => String(n).padStart(2, "0");

  if (!isOpen) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Registration form"
      onClick={() => setIsOpen(false)}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(4, 10, 21, 0.82)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      <div
        className="w-full max-w-3xl relative"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close registration form"
          onClick={() => setIsOpen(false)}
          style={{
            position: "absolute",
            top: "-14px",
            right: "-14px",
            width: "36px",
            height: "36px",
            borderRadius: "9999px",
            border: "1px solid rgba(214,51,132,0.45)",
            background: "#0B1D3A",
            color: "white",
            cursor: "pointer",
            fontSize: "18px",
            lineHeight: 1,
          }}
        >
          x
        </button>
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1.5px solid rgba(214,51,132,0.32)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
            background: "linear-gradient(160deg, #070F22 0%, #0B1D3A 60%, #0D2248 100%)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <div
            style={{
              background: "linear-gradient(90deg, #D63384, #F272B6, #D63384)",
              color: "white",
              textAlign: "center",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              padding: "10px 12px",
            }}
          >
            FREE 1-DAY VIRTUAL SUMMIT · AI AGENTS SUMMIT EUROPE | MAY 7, 2026 | 9AM UK / 10AM CET | REGISTER NOW - SEATS ARE LIMITED
          </div>
          <div
            style={{
              padding: "16px 12px 16px",
              textAlign: "center",
              borderBottom: "1px solid rgba(214,51,132,0.2)",
              background: "rgba(4, 13, 34, 0.35)",
            }}
          >
            <p
              style={{
                fontSize: "0.74rem",
                letterSpacing: "0.16em",
                color: "rgba(255,255,255,0.62)",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              Countdown to May 7th
            </p>
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.06em",
                color: "rgba(255,255,255,0.68)",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "12px",
              }}
            >
              9AM UK / 10AM CET
            </p>
            <div className="flex items-center justify-center gap-3.5">
              {[
                { label: "Days", value: pad(timeLeft.days) },
                { label: "Hours", value: pad(timeLeft.hours) },
                { label: "Mins", value: pad(timeLeft.minutes) },
                { label: "Secs", value: pad(timeLeft.seconds) },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col items-center">
                  <div
                    style={{
                      minWidth: "56px",
                      padding: "9px 10px",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.1)",
                      border: "1.5px solid rgba(214,51,132,0.4)",
                      boxShadow: "0 10px 22px rgba(214,51,132,0.22)",
                      color: "white",
                      fontWeight: 800,
                      fontSize: "1.15rem",
                      lineHeight: 1.1,
                    }}
                  >
                    {value}
                  </div>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.58)",
                      fontSize: "0.58rem",
                      letterSpacing: "0.12em",
                      marginTop: "5px",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <iframe
            src="https://l.industryrockstars.ch/widget/form/oMuKuvZ15ZgYBOZ9gFeM"
            style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px", minHeight: "570px" }}
            id="inline-oMuKuvZ15ZgYBOZ9gFeM"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="FB - AI Assisted Global Summit Europe - May 7, 2026"
            data-height="570"
            data-layout-iframe-id="inline-oMuKuvZ15ZgYBOZ9gFeM"
            data-form-id="oMuKuvZ15ZgYBOZ9gFeM"
            title="FB - AI Assisted Global Summit Europe - May 7, 2026"
          />
        </div>
      </div>
    </div>
  );
}
