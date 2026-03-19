import { useEffect, useState } from 'react'

const STATS = [
  { number: '27+',   label: 'Years of\nExcellence' },
  { number: '1000+', label: 'Students\nEnrolled' },
  { number: '50+',   label: 'Expert\nFaculty' },
  { number: '8th',   label: 'Faridabad\nRanking' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const [activeStat, setActiveStat] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  // Mobile pe auto rotate stats
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStat(prev => (prev + 1) % STATS.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const handleClick = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="home"
      style={{
        background: '#1a0f00',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '80px 0',
      }}
    >

      {/* ── BACKGROUND EFFECTS ── */}
      <div style={{
        position: 'absolute', top: -80, right: -80,
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,114,12,0.15), transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -100, left: -60,
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(180,80,0,0.10), transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* ── MAIN CONTENT ── */}
      <div style={{
        width: '90%',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 40,
        position: 'relative',
        zIndex: 2,
      }}>

        {/* LEFT — Text */}
        <div style={{ flex: 1, maxWidth: 600 }}>

          {/* Badge */}
          <div
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(232,114,12,0.12)',
              border: '1px solid rgba(232,114,12,0.25)',
              padding: '6px 14px', borderRadius: 100,
              marginBottom: 28,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'all 0.7s ease',
            }}
          >
            <span style={{
              width: 6, height: 6, borderRadius: '50%', background: '#E8720C',
              animation: 'heroPulse 2s infinite',
            }} />
            <span style={{ fontSize: 11, color: '#f0a050', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
              Top 10 Faridabad Schools — Times of India 2023
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: 'Georgia, "Playfair Display", serif',
              fontSize: 'clamp(40px, 5.5vw, 64px)',
              lineHeight: 1.08,
              color: 'white',
              fontWeight: 900,
              marginBottom: 20,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease 0.1s',
            }}
          >
            Shaping{' '}
            <span style={{ color: '#f59340', fontStyle: 'italic', display: 'block' }}>
              Futures,
            </span>
            Building{' '}
            <span style={{ color: '#E8720C' }}>Character</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 16, color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.75, marginBottom: 36, maxWidth: 480,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease 0.2s',
            }}
          >
            <span style={{ color: '#f0a050', fontStyle: 'italic', fontWeight: 500 }}>
              "Amulya Jeevan — Atulya Jeevan Sanskar"
            </span>
            <br />
            A CBSE affiliated institution committed to value-based education
            and holistic development since 1998.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: 'flex', alignItems: 'center',
              flexWrap: 'wrap', gap: 14, marginBottom: 44,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease 0.3s',
            }}
          >
            <button
              onClick={() => handleClick('#admission')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 28px', background: '#E8720C',
                color: 'white', borderRadius: 12, fontSize: 14.5,
                fontWeight: 700, border: 'none', cursor: 'pointer',
                boxShadow: '0 6px 24px rgba(232,114,12,0.45)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#b85a08'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 10px 32px rgba(232,114,12,0.55)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#E8720C'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(232,114,12,0.45)'
              }}
            >
              Apply for Admission
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <button
              onClick={() => handleClick('#about')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 28px',
                background: 'rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.8)',
                borderRadius: 12, fontSize: 14.5, fontWeight: 500,
                border: '1px solid rgba(255,255,255,0.12)',
                cursor: 'pointer', transition: 'all 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.10)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
              }}
            >
              Explore School
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Trust Badges */}
          <div
            style={{
              display: 'flex', alignItems: 'center',
              flexWrap: 'wrap', gap: 24,
              paddingTop: 28,
              borderTop: '1px solid rgba(255,255,255,0.08)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease 0.4s',
            }}
          >
            {[
              { icon: '🎓', text: 'CBSE Affiliated' },
              { icon: '📅', text: 'Est. 1998' },
              { icon: '⭐', text: 'Silver Jubilee School' },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 8,
                  background: 'rgba(232,114,12,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13,
                }}>
                  {item.icon}
                </div>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Stats (desktop) */}
        <div
          style={{
            display: 'flex', flexDirection: 'column', gap: 14, flexShrink: 0,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.7s ease 0.5s',
          }}
          className="hero-stats-desktop"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.number}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20, padding: '22px 28px',
                textAlign: 'center', minWidth: 150,
                transition: 'all 0.3s',
                animationDelay: `${i * 0.15}s`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.borderColor = 'rgba(232,114,12,0.3)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                fontFamily: 'Georgia, serif', fontSize: 38,
                fontWeight: 900, color: '#f59340', lineHeight: 1,
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: 11, color: 'rgba(255,255,255,0.4)',
                marginTop: 6, letterSpacing: '0.04em', lineHeight: 1.4,
                whiteSpace: 'pre-line',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div style={{
        position: 'absolute', bottom: 28, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 6, zIndex: 2,
      }}>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div style={{
          width: 1, height: 32,
          background: 'linear-gradient(to bottom, rgba(232,114,12,0.5), transparent)',
          animation: 'heroScroll 1.5s ease-in-out infinite',
        }} />
      </div>

      {/* ── KEYFRAMES ── */}
      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.8); }
        }
        @keyframes heroScroll {
          0%   { transform: scaleY(0); transform-origin: top; }
          50%  { transform: scaleY(1); transform-origin: top; }
          51%  { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        .hero-stats-desktop {
          display: flex !important;
        }
        @media (max-width: 768px) {
          .hero-stats-desktop {
            display: none !important;
          }
        }
      `}</style>

    </section>
  )
}