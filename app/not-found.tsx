"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const STARS = [
  { top: "8%", left: "12%", delay: "0s", opacity: 0.55 },
  { top: "18%", left: "82%", delay: "1.2s", opacity: 0.3 },
  { top: "26%", left: "34%", delay: "2.4s", opacity: 0.7 },
  { top: "12%", left: "60%", delay: "0.6s", opacity: 0.4 },
  { top: "40%", left: "6%", delay: "1.8s", opacity: 0.5 },
  { top: "35%", left: "92%", delay: "0.3s", opacity: 0.35 },
  { top: "55%", left: "18%", delay: "2.1s", opacity: 0.6 },
  { top: "62%", left: "88%", delay: "1.5s", opacity: 0.3 },
  { top: "72%", left: "40%", delay: "0.9s", opacity: 0.45 },
  { top: "80%", left: "70%", delay: "2.7s", opacity: 0.55 },
  { top: "88%", left: "10%", delay: "0.2s", opacity: 0.3 },
  { top: "5%", left: "45%", delay: "1.1s", opacity: 0.4 },
  { top: "48%", left: "50%", delay: "1.9s", opacity: 0.25 },
  { top: "92%", left: "55%", delay: "0.7s", opacity: 0.5 },
] as const;

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="nf404-wrap" suppressHydrationWarning>
      <style>{CSS}</style>

      <div className="nf404-stars" aria-hidden="true" suppressHydrationWarning>
        {STARS.map((s, i) => (
          <span
            key={i}
            className="nf404-star"
            style={{
              top: s.top,
              left: s.left,
              animationDelay: s.delay,
              opacity: s.opacity,
            }}
          />
        ))}
      </div>

      <div className="nf404-vignette" aria-hidden="true" />

      <main className="nf404-card">
        <div className="nf404-crewmate-wrap" aria-hidden="true">
          <svg
            className="nf404-crewmate"
            viewBox="0 0 120 140"
            width="64"
            height="74"
            fill="none"
          >
            <path
              d="M40 8C40 3.6 47 0 60 0s20 3.6 20 8v10c14 3 22 13 22 27v55c0 8-6 14-14 14H32c-8 0-14-6-14-14V45c0-14 8-24 22-27V8z"
              fill="url(#nf404-suit)"
            />
            <rect x="34" y="46" width="34" height="26" rx="10" fill="#8FE3E0" opacity="0.9" />
            <rect x="16" y="60" width="12" height="34" rx="6" fill="url(#nf404-suit)" />
            <defs>
              <linearGradient id="nf404-suit" x1="20" y1="0" x2="100" y2="140" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF4B4B" />
                <stop offset="1" stopColor="#8A0E12" />
              </linearGradient>
            </defs>
          </svg>
          <div className="nf404-tether" />
        </div>

        <p className="nf404-eyebrow">EMERGENCY MEETING CALLED</p>

        <div className="nf404-digits" role="img" aria-label="404">
          <span className="nf404-digit">4</span>
          <span className="nf404-digit">0</span>
          <span className="nf404-digit">4</span>
          <span className="nf404-bar nf404-bar-a" />
          <span className="nf404-bar nf404-bar-b" />
          <span className="nf404-bar nf404-bar-c" />
        </div>

        <h1 className="nf404-headline">PAGE EJECTED</h1>
        <p className="nf404-body">
          No body found here. The page you&apos;re looking for was voted off
          before anyone could file a report — check the URL, or head back to
          a safer room.
        </p>

        <div className="nf404-meter" aria-hidden="true">
          <span className="nf404-meter-label">SUS METER</span>
          <div className="nf404-meter-track">
            <div className="nf404-meter-fill" />
          </div>
          <span className="nf404-meter-value">100%</span>
        </div>

        <div className="nf404-actions">
          <Link href="/" className="nf404-btn nf404-btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 11.5 12 5l8 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 10v9a1 1 0 0 0 1 1h4v-6h2v6h4a1 1 0 0 0 1-1v-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Base
          </Link>
          <button type="button" onClick={() => router.back()} className="nf404-btn nf404-btn-ghost">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M19 12H5M5 12l6-6M5 12l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Go Back
          </button>
        </div>
      </main>
    </div>
  );
}

// Plain CSS string injected via a <style> tag — no styled-jsx / compiler
// transform required, so this renders correctly regardless of bundler
// (webpack, Turbopack, etc). Every class is prefixed with nf404- so it
// can't collide with or leak into the rest of the app's styles.
const CSS = `
        .nf404-wrap {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(120% 90% at 50% -10%, #2a0709 0%, #0a0708 55%, #060506 100%);
          overflow: hidden;
          padding: 32px 20px;
          font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
        }

        .nf404-stars {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .nf404-star {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 999px;
          background: #ffb4a8;
          animation: nf404-twinkle 3.6s ease-in-out infinite;
        }
        @keyframes nf404-twinkle {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.6); }
        }

        .nf404-vignette {
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 180px 40px rgba(0, 0, 0, 0.85);
          pointer-events: none;
        }

        .nf404-card {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 460px;
          width: 100%;
        }

        .nf404-crewmate-wrap {
          position: relative;
          margin-bottom: 4px;
          animation: nf404-drift 5s ease-in-out infinite;
        }
        @keyframes nf404-drift {
          0%, 100% { transform: translate(0, 0) rotate(-3deg); }
          50% { transform: translate(6px, -8px) rotate(3deg); }
        }
        .nf404-tether {
          width: 1px;
          height: 22px;
          margin: 0 auto;
          background: linear-gradient(180deg, rgba(255, 92, 92, 0.6), transparent);
        }

        .nf404-eyebrow {
          margin: 4px 0 18px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.28em;
          color: #ff8a7a;
          text-transform: uppercase;
        }

        .nf404-digits {
          position: relative;
          display: inline-flex;
          gap: 6px;
          margin-bottom: 18px;
          overflow: hidden;
          padding: 10px 4px;
          border-radius: 14px;
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 16%, black 84%, transparent 100%);
          mask-image: linear-gradient(to bottom, transparent 0%, black 16%, black 84%, transparent 100%);
        }
        .nf404-digit {
          font-size: 96px;
          line-height: 0.9;
          font-weight: 900;
          letter-spacing: -0.02em;
          font-stretch: condensed;
          transform: skewX(-6deg);
          background: linear-gradient(180deg, #ffb3a3 0%, #ff2e2e 55%, #7a0e12 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          filter: drop-shadow(0 0 26px rgba(255, 46, 46, 0.35));
        }
        .nf404-bar {
          position: absolute;
          top: 6px;
          bottom: 6px;
          width: 33.33%;
          background: #0c0a0a;
          border-radius: 3px;
          animation: nf404-reveal 1.1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
        .nf404-bar-a { left: 0%; animation-delay: 0.15s; }
        .nf404-bar-b { left: 33.33%; animation-delay: 0.35s; }
        .nf404-bar-c { left: 66.66%; width: 40%; animation-delay: 0.55s; animation-name: nf404-reveal-stuck; }
        @keyframes nf404-reveal {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(120%); opacity: 0; }
        }
        @keyframes nf404-reveal-stuck {
          0% { transform: translateY(0); opacity: 1; }
          70% { transform: translateY(78%); opacity: 1; }
          100% { transform: translateY(78%); opacity: 1; }
        }

        .nf404-headline {
          margin: 0 0 10px;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #f3edee;
          text-transform: uppercase;
        }

        .nf404-body {
          margin: 0 0 24px;
          font-size: 14.5px;
          line-height: 1.65;
          color: #a89a9b;
        }

        .nf404-meter {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 30px;
        }
        .nf404-meter-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #7a6e70;
          white-space: nowrap;
        }
        .nf404-meter-track {
          flex: 1;
          height: 6px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          overflow: hidden;
        }
        .nf404-meter-fill {
          height: 100%;
          width: 92%;
          border-radius: 999px;
          background: linear-gradient(90deg, #7a0e12, #ff2e2e);
          animation: nf404-pulse 2.4s ease-in-out infinite;
        }
        @keyframes nf404-pulse {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.35); }
        }
        .nf404-meter-value {
          font-size: 11px;
          font-weight: 700;
          color: #ff8a7a;
        }

        .nf404-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .nf404-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 20px;
          border-radius: 10px;
          font-size: 13.5px;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-decoration: none;
          cursor: pointer;
          border: 1px solid transparent;
          transition: transform 0.15s ease, filter 0.15s ease, background 0.15s ease;
        }
        .nf404-btn:hover {
          transform: translateY(-1px);
        }
        .nf404-btn:focus-visible {
          outline: 2px solid #ff8a7a;
          outline-offset: 2px;
        }
        .nf404-btn-primary {
          color: #1a0505;
          background: linear-gradient(90deg, #ff5c5c, #ff2e2e);
          box-shadow: 0 8px 24px rgba(255, 46, 46, 0.28);
        }
        .nf404-btn-primary:hover {
          filter: brightness(1.08);
        }
        .nf404-btn-ghost {
          color: #d8caca;
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.12);
        }
        .nf404-btn-ghost:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        @media (prefers-reduced-motion: reduce) {
          .nf404-star, .nf404-crewmate-wrap, .nf404-meter-fill, .nf404-bar {
            animation: none !important;
          }
          .nf404-bar { transform: translateY(120%); opacity: 0; }
          .nf404-bar-c { transform: translateY(78%); opacity: 1; }
        }

        @media (max-width: 420px) {
          .nf404-digit { font-size: 68px; }
        }
`;
