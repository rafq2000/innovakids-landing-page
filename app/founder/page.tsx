import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Ricardo Farías Quitral — Founder & CEO, InnovaKids Latam",
  description:
    "Chilean founder building AI-driven companies for the Spanish-speaking world. Founder of InnovaKids Latam.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: "/founder",
  },
}

export default function FounderPage() {
  return (
    <>
      <style>{`
        /* ── Reset & base ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .founder-root {
          font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
          background: #fafafa;
          color: #111111;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* ── Inter font via Google ── */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        /* ── Layout helpers ── */
        .fp-container {
          max-width: 720px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── Divider ── */
        .fp-divider {
          border: none;
          border-top: 1px solid #e5e5e5;
          margin: 64px 0;
        }

        /* ── HERO ── */
        .fp-hero {
          padding: 96px 0 80px;
          position: relative;
        }

        .fp-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 28px;
        }

        .fp-hero-name {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.08;
          color: #0a0a0a;
          margin-bottom: 12px;
        }

        .fp-hero-role {
          font-size: 18px;
          font-weight: 500;
          color: #444;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }

        .fp-hero-tagline {
          font-size: 17px;
          color: #555;
          max-width: 480px;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .fp-hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }

        .fp-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 22px;
          background: #0a0a0a;
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          border-radius: 8px;
          text-decoration: none;
          letter-spacing: -0.01em;
          transition: background 0.18s ease, transform 0.18s ease;
        }

        .fp-btn-primary:hover {
          background: #222;
          transform: translateY(-1px);
        }

        .fp-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 22px;
          background: transparent;
          color: #0a0a0a;
          font-size: 14px;
          font-weight: 500;
          border-radius: 8px;
          border: 1px solid #d5d5d5;
          text-decoration: none;
          letter-spacing: -0.01em;
          transition: border-color 0.18s ease, background 0.18s ease, transform 0.18s ease;
        }

        .fp-btn-secondary:hover {
          border-color: #aaa;
          background: #f5f5f5;
          transform: translateY(-1px);
        }

        /* ── Photo placeholder ── */
        .fp-photo-placeholder {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%);
          margin-bottom: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #aaa;
          overflow: hidden;
          flex-shrink: 0;
        }

        /* ── Section header ── */
        .fp-section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #999;
          margin-bottom: 20px;
        }

        /* ── BIO ── */
        .fp-bio p {
          font-size: 17px;
          color: #2d2d2d;
          margin-bottom: 20px;
          line-height: 1.72;
        }

        .fp-bio p:last-child { margin-bottom: 0; }

        .fp-bio p:first-child {
          font-size: 19px;
          font-weight: 400;
          color: #111;
          line-height: 1.65;
        }

        /* ── WHAT I'M BUILDING ── */
        .fp-thesis {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 12px;
          padding: 36px 40px;
          position: relative;
        }

        .fp-thesis-quote {
          font-size: 18px;
          font-weight: 400;
          color: #1a1a1a;
          line-height: 1.7;
          font-style: normal;
        }

        .fp-thesis-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 24px;
          font-size: 12px;
          font-weight: 600;
          color: #888;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .fp-thesis-dot {
          width: 6px;
          height: 6px;
          background: #22c55e;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 6px rgba(34, 197, 94, 0.5);
        }

        /* ── TRACTION ── */
        .fp-traction-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        @media (min-width: 520px) {
          .fp-traction-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .fp-traction-card {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 10px;
          padding: 24px 26px;
          transition: border-color 0.2s ease;
        }

        .fp-traction-card:hover {
          border-color: #c8c8c8;
        }

        .fp-traction-value {
          font-size: 28px;
          font-weight: 700;
          color: #0a0a0a;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 6px;
        }

        .fp-traction-label {
          font-size: 13px;
          color: #777;
          line-height: 1.4;
        }

        .fp-traction-bullet {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 18px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .fp-traction-bullet:last-child {
          border-bottom: none;
        }

        .fp-traction-icon {
          width: 7px;
          height: 7px;
          background: #0a0a0a;
          border-radius: 50%;
          margin-top: 6px;
          flex-shrink: 0;
        }

        .fp-traction-text {
          font-size: 16px;
          color: #333;
        }

        /* ── BACKGROUND ── */
        .fp-bg-list {
          list-style: none;
        }

        .fp-bg-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .fp-bg-item:last-child { border-bottom: none; }
        .fp-bg-item:first-child { padding-top: 0; }

        .fp-bg-icon {
          width: 32px;
          height: 32px;
          background: #f4f4f4;
          border-radius: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .fp-bg-title {
          font-size: 15px;
          font-weight: 500;
          color: #111;
          line-height: 1.4;
        }

        .fp-bg-sub {
          font-size: 13px;
          color: #888;
          margin-top: 2px;
        }

        /* ── VISION ── */
        .fp-vision-text {
          font-size: 20px;
          font-weight: 400;
          color: #111;
          line-height: 1.65;
          letter-spacing: -0.01em;
          border-left: 3px solid #0a0a0a;
          padding-left: 24px;
        }

        /* ── CONTACT ── */
        .fp-contact-grid {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .fp-contact-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 0;
          border-bottom: 1px solid #f0f0f0;
          gap: 12px;
        }

        .fp-contact-row:last-child { border-bottom: none; }

        .fp-contact-label {
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #999;
          min-width: 80px;
        }

        .fp-contact-value {
          font-size: 15px;
          color: #111;
          text-decoration: none;
          font-weight: 400;
          transition: color 0.15s ease;
        }

        .fp-contact-value:hover {
          color: #555;
        }

        .fp-contact-placeholder {
          font-size: 15px;
          color: #bbb;
          font-style: italic;
        }

        .fp-closing {
          margin-top: 40px;
          padding: 28px 32px;
          background: #f5f5f5;
          border-radius: 10px;
          font-size: 15px;
          color: #555;
          line-height: 1.6;
        }

        /* ── FOOTER ── */
        .fp-footer {
          padding: 48px 0;
          text-align: center;
        }

        .fp-footer-text {
          font-size: 13px;
          color: #bbb;
        }

        /* ── Responsive ── */
        @media (max-width: 540px) {
          .fp-hero { padding: 72px 0 60px; }
          .fp-hero-name { font-size: 34px; }
          .fp-thesis { padding: 28px 24px; }
          .fp-thesis-quote { font-size: 16px; }
          .fp-traction-grid { grid-template-columns: 1fr; }
          .fp-vision-text { font-size: 17px; }
          .fp-contact-row { flex-direction: column; align-items: flex-start; gap: 4px; }
        }
      `}</style>

      <div className="founder-root">
        <div className="fp-container">

          {/* ── HERO ── */}
          <section className="fp-hero">
            <div className="fp-photo-placeholder" aria-label="Founder photo">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>

            <span className="fp-eyebrow">Founder</span>
            <h1 className="fp-hero-name">Ricardo Farías Quitral</h1>
            <p className="fp-hero-role">Founder &amp; CEO, InnovaKids Latam</p>
            <p className="fp-hero-tagline">
              Chilean founder building AI-driven companies for the Spanish-speaking world.
            </p>

            <div className="fp-hero-actions">
              <a
                href="https://www.innovakidslatam.com"
                target="_blank"
                rel="noopener noreferrer"
                className="fp-btn-primary"
              >
                View InnovaKids Latam
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
              <a href="#contact" className="fp-btn-secondary">
                Contact
              </a>
            </div>
          </section>

          <hr className="fp-divider" style={{marginTop: 0}} />

          {/* ── BIO ── */}
          <section id="bio" aria-labelledby="bio-heading">
            <p className="fp-section-label" id="bio-heading">About</p>
            <div className="fp-bio">
              <p>
                Ricardo Farías Quitral is a Chilean founder building AI-driven companies for the Spanish-speaking world.
              </p>
              <p>
                He is the founder of InnovaKids Latam, an online academy that teaches artificial intelligence, app creation, and digital skills to children and teenagers across Latin America. The company has already served more than 30 families, launched its program commercially, and now operates regionally through a practical, live, project-based model.
              </p>
              <p>
                Ricardo started InnovaKids after identifying a clear gap in the market: most school systems are still not teaching children the skills they will need for the future. His mission is to help Latin American children develop their full potential through high-impact tools, and he believes AI can be a powerful lever to expand creativity, autonomy, and real-world building capacity from an early age.
              </p>
              <p>
                Before InnovaKids, he built projects at the intersection of law and technology, including legal services and document automation platforms. Through that journey, he learned not only how to design products, but also how to sell, understand decision psychology, and build trust by connecting deeply with people's real needs.
              </p>
              <p>
                Ricardo holds a Master's in Data Science from the University of Valencia and a Master's in Law and Artificial Intelligence from the University of Salamanca. He is currently focused on building scalable technology companies with meaningful impact across Latin America and the global Spanish-speaking market.
              </p>
            </div>
          </section>

          <hr className="fp-divider" />

          {/* ── WHAT I'M BUILDING ── */}
          <section id="building" aria-labelledby="building-heading">
            <p className="fp-section-label" id="building-heading">What I'm Building</p>
            <div className="fp-thesis">
              <p className="fp-thesis-quote">
                InnovaKids Latam is building practical AI education for children and teenagers in Spanish-speaking markets through live, project-based programs that help students create, not just consume technology.
              </p>
              <div className="fp-thesis-tag">
                <span className="fp-thesis-dot" aria-hidden="true"></span>
                Active &amp; Operating
              </div>
            </div>
          </section>

          <hr className="fp-divider" />

          {/* ── TRACTION ── */}
          <section id="traction" aria-labelledby="traction-heading">
            <p className="fp-section-label" id="traction-heading">Early Traction</p>

            <div className="fp-traction-grid" style={{marginBottom: '28px'}}>
              <div className="fp-traction-card">
                <div className="fp-traction-value">30+</div>
                <div className="fp-traction-label">Families served</div>
              </div>
              <div className="fp-traction-card">
                <div className="fp-traction-value">LATAM</div>
                <div className="fp-traction-label">Regional reach</div>
              </div>
            </div>

            <div>
              <div className="fp-traction-bullet">
                <div className="fp-traction-icon" aria-hidden="true"></div>
                <span className="fp-traction-text">Live, project-based learning model</span>
              </div>
              <div className="fp-traction-bullet">
                <div className="fp-traction-icon" aria-hidden="true"></div>
                <span className="fp-traction-text">Operating across Latin America</span>
              </div>
              <div className="fp-traction-bullet">
                <div className="fp-traction-icon" aria-hidden="true"></div>
                <span className="fp-traction-text">AI education for Spanish-speaking children and teens</span>
              </div>
              <div className="fp-traction-bullet">
                <div className="fp-traction-icon" aria-hidden="true"></div>
                <span className="fp-traction-text">Commercially launched program with paying families</span>
              </div>
            </div>
          </section>

          <hr className="fp-divider" />

          {/* ── BACKGROUND ── */}
          <section id="background" aria-labelledby="background-heading">
            <p className="fp-section-label" id="background-heading">Background</p>
            <ul className="fp-bg-list">
              <li className="fp-bg-item">
                <div className="fp-bg-icon" aria-hidden="true">🚀</div>
                <div>
                  <div className="fp-bg-title">Founder of InnovaKids Latam</div>
                  <div className="fp-bg-sub">AI education platform for children and teens across Latin America</div>
                </div>
              </li>
              <li className="fp-bg-item">
                <div className="fp-bg-icon" aria-hidden="true">⚖️</div>
                <div>
                  <div className="fp-bg-title">Legal Technology &amp; Document Automation</div>
                  <div className="fp-bg-sub">Built products at the intersection of law and technology</div>
                </div>
              </li>
              <li className="fp-bg-item">
                <div className="fp-bg-icon" aria-hidden="true">📊</div>
                <div>
                  <div className="fp-bg-title">Master's in Data Science</div>
                  <div className="fp-bg-sub">University of Valencia</div>
                </div>
              </li>
              <li className="fp-bg-item">
                <div className="fp-bg-icon" aria-hidden="true">🤖</div>
                <div>
                  <div className="fp-bg-title">Master's in Law &amp; Artificial Intelligence</div>
                  <div className="fp-bg-sub">University of Salamanca</div>
                </div>
              </li>
            </ul>
          </section>

          <hr className="fp-divider" />

          {/* ── VISION ── */}
          <section id="vision" aria-labelledby="vision-heading">
            <p className="fp-section-label" id="vision-heading">Long-Term Vision</p>
            <blockquote className="fp-vision-text">
              To build scalable technology companies that expand access to high-value skills, tools, and opportunities across Latin America and the global Spanish-speaking market.
            </blockquote>
          </section>

          <hr className="fp-divider" />

          {/* ── CONTACT ── */}
          <section id="contact" aria-labelledby="contact-heading">
            <p className="fp-section-label" id="contact-heading">Contact</p>
            <div className="fp-contact-grid">
              <div className="fp-contact-row">
                <span className="fp-contact-label">Website</span>
                <a
                  href="https://www.innovakidslatam.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fp-contact-value"
                >
                  innovakidslatam.com
                </a>
              </div>
              <div className="fp-contact-row">
                <span className="fp-contact-label">Email</span>
                <a
                  href="mailto:ricardo.farias.q@gmail.com"
                  className="fp-contact-value"
                >
                  ricardo.farias.q@gmail.com
                </a>
              </div>
            </div>

            <div className="fp-closing">
              Open to conversations with founders, mentors, partners, and mission-aligned investors.
            </div>
          </section>

          {/* ── FOOTER ── */}
          <footer className="fp-footer">
            <p className="fp-footer-text">
              Ricardo Farías Quitral · InnovaKids Latam · {new Date().getFullYear()}
            </p>
          </footer>

        </div>
      </div>
    </>
  )
}
