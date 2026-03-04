import review1 from "figma:asset/ae5667339b3a4109479bf65e0b4a70aacfb4afc0.png";
import review2 from "figma:asset/c239cb1336224037c7fafbbd4d6c53bfc832cc2c.png";
import review3 from "figma:asset/f634ab5d877155485295be2154eea74c84536fe4.png";
import review4 from "figma:asset/709c31d97fa926d04220fb9df8811df62b28f289.png";
import review5 from "figma:asset/19872ed2e05a3f04c43dcaa27f15545d3d9cc803.png";
import review6 from "figma:asset/d43240f1f99bf954aa2ec279f1b87b3ec5108e26.png";
import review7 from "figma:asset/34a3f1cb089feccfd0ce0f337f279ffc4a09084b.png";
import review8 from "figma:asset/373339a18f0b2567b1a7f8df8e0841051929c2d1.png";
import review9 from "figma:asset/59f8f50a97c271b39c453168adc07e6a69d51b5a.png";
import { useState, useEffect, useCallback } from "react";

const TRUSTPILOT_GREEN = "#00B67A";

// Row 1 – user-specified screenshots (row 1)
const ROW_1 = [review1, review2, review3, review4];
// Row 2 – user-specified screenshots (row 2)
const ROW_2 = [review5, review6, review7, review8, review9];

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={filled ? TRUSTPILOT_GREEN : "rgba(255,255,255,0.18)"}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-[3px]">
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon key={i} filled={i <= rating} />
      ))}
    </div>
  );
}

function TrustpilotLogo() {
  return (
    <div className="flex items-center gap-2">
      <div
        className="flex items-center justify-center rounded-[3px] size-8 shrink-0"
        style={{ backgroundColor: TRUSTPILOT_GREEN }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
      <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-white text-[20px] tracking-[-0.3px] leading-none">
        Trustpilot
      </span>
    </div>
  );
}

function RatingBadge() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <TrustpilotLogo />
      <div className="flex items-center gap-3">
        <Stars rating={5} />
        <div className="flex flex-col items-start">
          <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-white text-[15px] leading-none">
            Excellent
          </span>
          <span
            className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[12px] leading-none mt-[4px]"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Based on 379 reviews
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Lightbox Modal ──────────────────────────────────────────────────────────
interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

function Lightbox({ src, alt, onClose }: LightboxProps) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
      style={{ background: "rgba(5, 7, 30, 0.88)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center justify-center w-10 h-10 rounded-full transition-colors cursor-pointer"
        style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
        aria-label="Close"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Image container — stop propagation so clicking image itself doesn't close */}
      <div
        className="relative max-w-[90vw] max-h-[88vh] rounded-2xl overflow-hidden"
        style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(170,69,232,0.25)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="block w-auto h-auto max-w-[90vw] max-h-[88vh] object-contain"
          style={{ background: "white" }}
        />
      </div>

      {/* Hint */}
      <p
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[12px] pointer-events-none select-none"
        style={{ color: "rgba(255,255,255,0.35)" }}
      >
        Click outside or press Esc to close
      </p>
    </div>
  );
}

// ── Marquee Row ─────────────────────────────────────────────────────────────
interface MarqueeRowProps {
  images: string[];
  direction: "left" | "right";
  duration?: number;
  onImageClick: (src: string, index: number) => void;
}

function MarqueeRow({ images, direction, duration = 40, onImageClick }: MarqueeRowProps) {
  const [paused, setPaused] = useState(false);
  // Duplicate images for seamless loop
  const items = [...images, ...images, ...images];
  const animationName = direction === "left" ? "marquee-scroll-left" : "marquee-scroll-right";

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Left fade */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(to right, #0d1353, transparent)" }}
      />
      {/* Right fade */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(to left, #0d1353, transparent)" }}
      />

      <div
        className="flex gap-4 items-start w-max"
        style={{
          animation: `${animationName} ${duration}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {items.map((img, i) => (
          <div
            key={i}
            className="shrink-0 w-[300px] sm:w-[340px] rounded-xl overflow-hidden bg-white cursor-zoom-in transition-transform duration-200 hover:scale-[1.03] hover:shadow-2xl"
            style={{
              boxShadow: "0 4px 24px rgba(0,0,0,0.22)",
            }}
            onClick={() => onImageClick(img, i % images.length)}
            role="button"
            tabIndex={0}
            aria-label={`View Trustpilot review ${(i % images.length) + 1} enlarged`}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onImageClick(img, i % images.length); }}
          >
            <img
              src={img}
              alt={`Trustpilot review ${(i % images.length) + 1}`}
              className="w-full h-auto block pointer-events-none"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Section ────────────────────────────────────────────────────────────
export default function TrustpilotSection() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState("");

  const openLightbox = useCallback((src: string, index: number) => {
    setLightboxSrc(src);
    setLightboxAlt(`Trustpilot review ${index + 1}`);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxSrc(null);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0d1353 0%, #120f40 55%, #16093a 100%)" }}
      data-name="Trustpilot Section"
    >
      {/* Keyframes injected via style tag */}
      <style>{`
        @keyframes marquee-scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        @keyframes marquee-scroll-right {
          0%   { transform: translateX(calc(-100% / 3)); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Lightbox */}
      {lightboxSrc && (
        <Lightbox src={lightboxSrc} alt={lightboxAlt} onClose={closeLightbox} />
      )}

      {/* Ambient glow orbs */}
      <div
        className="pointer-events-none absolute -top-20 -left-20 size-[420px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(36,69,255,0.13) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-10 size-[380px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(170,69,232,0.14) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 flex flex-col gap-10 items-center py-16 md:py-20 w-full">

        {/* Section header — centred within MacBook Pro 16-inch max-width */}
        <div className="max-w-[1728px] mx-auto w-full flex flex-col items-center gap-4 text-center px-4 sm:px-8">
          <p
            className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[11px] tracking-[3px] uppercase"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Verified Reviews
          </p>

          <h2
            className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-tight tracking-[-1.4px] text-white text-[28px] sm:text-[34px] md:text-[38.657px] max-w-3xl whitespace-nowrap"
          >
            {"Professionals Are Talking. "}
            <span className="font-['Playfair_Display:SemiBold_Italic',sans-serif] font-semibold italic">
              Here's What They Say.
            </span>
          </h2>

          <div className="mt-1">
            <RatingBadge />
          </div>
        </div>

        {/* Marquee rows — intentionally full-width for the edge-to-edge scroll effect */}
        <div className="flex flex-col gap-5 w-full">
          {/* Row 1 – scrolls left */}
          <MarqueeRow images={ROW_1} direction="left" duration={45} onImageClick={openLightbox} />
          {/* Row 2 – scrolls right */}
          <MarqueeRow images={ROW_2} direction="right" duration={50} onImageClick={openLightbox} />
        </div>

        {/* CTA — centred within max-width */}
        <div className="max-w-[1728px] mx-auto w-full flex items-center justify-center gap-2 group mt-2">
          <a
            href="https://www.trustpilot.com/review/industryrockstar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group"
          >
            <span
              className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[13px] underline underline-offset-2 group-hover:opacity-100 transition-opacity"
              style={{ color: "rgba(255,255,255,0.45)", textDecorationColor: "rgba(255,255,255,0.2)" }}
            >
              Read all reviews on Trustpilot
            </span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
