import { useEffect, useRef, useState } from 'react'

const TABS = [
  {
    id: 'school',
    icon: '🏫',
    label: 'About School',
    visual: '🏫',
    accentNum: '1998',
    accentLabel: 'Founded &\nGoing Strong',
    contentLabel: 'Our School',
    heading: 'A Legacy of',
    headingAccent: 'Excellence',
    desc: "Saffron Public School is a co-educational English medium CBSE school in Faridabad, close to Delhi Badarpur Border. Recognized in India's top school rankings for social footprints, online presence, and academic excellence for 27+ years.",
    quote: '"We Ensure Value Based Education — Amulya Jeevan, Atulya Jeevan Sanskar"',
    quoteAuthor: '— Our Mission',
    btnText: 'Learn More',
  },
  {
    id: 'chairman',
    icon: '👑',
    label: "Chairman's Desk",
    visual: '👑',
    accentNum: '27+',
    accentLabel: 'Years of\nLeadership',
    contentLabel: "Chairman's Desk",
    heading: 'A Message from',
    headingAccent: 'Chairman',
    desc: 'With immense pride, I welcome you to Saffron Public School. Our journey stands as a testament to unwavering commitment to quality education and holistic development of every student.',
    quote: '"Education is not just about academics — it is about building character, instilling values, and preparing our students for life."',
    quoteAuthor: '— Chairman, Saffron Public School',
    btnText: 'Read Full Message',
  },
  {
    id: 'director',
    icon: '🎯',
    label: "Director's Desk",
    visual: '🎯',
    accentNum: '1000+',
    accentLabel: 'Students\nEnrolled',
    contentLabel: "Director's Desk",
    heading: 'A Message from',
    headingAccent: 'Director',
    desc: "Dear Parents, education is a partnership between school and home. Together, we create an environment where every child's potential is nurtured and celebrated to the fullest.",
    quote: '"Every child is unique and deserves the best environment to grow, learn, and flourish into a confident individual."',
    quoteAuthor: '— Director, Saffron Public School',
    btnText: 'Read Full Message',
  },
  {
    id: 'principal',
    icon: '🌟',
    label: "Principal's Desk",
    visual: '🌟',
    accentNum: '50+',
    accentLabel: 'Expert\nFaculty',
    contentLabel: "Principal's Desk",
    heading: 'A Message from',
    headingAccent: 'Principal',
    desc: 'Education is the key that unlocks the world — a passport to freedom. At Saffron, we believe in empowering every student to become the best version of themselves.',
    quote: '"The goal of education is not to fill a bucket, but to light a fire. We strive to ignite curiosity in every student."',
    quoteAuthor: '— Principal, Saffron Public School',
    btnText: 'Read Full Message',
  },
]

export default function About() {
  const [visible,    setVisible]    = useState(false)
  const [activeTab,  setActiveTab]  = useState('school')
  const [animating,  setAnimating]  = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleTabChange = (id) => {
    if (id === activeTab) return
    setAnimating(true)
    setTimeout(() => {
      setActiveTab(id)
      setAnimating(false)
    }, 200)
  }

  const current = TABS.find(t => t.id === activeTab)

  return (
    <section
      id="about"
      ref={ref}
      style={{ background: '#fdf6ed', padding: '100px 0', fontFamily: "'Segoe UI', system-ui, sans-serif" }}
    >
      <div style={{ width: '90%', margin: '0 auto' }}>

        {/* Section Label */}
        <div
          style={{
            display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.6s ease',
          }}
        >
          <span style={{ width: 24, height: 2, background: '#E8720C', display: 'inline-block' }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: '#E8720C', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            About Us
          </span>
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(30px, 3.5vw, 42px)',
            fontWeight: 900, color: '#1a0f00',
            lineHeight: 1.1, marginBottom: 36,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.6s ease 0.1s',
          }}
        >
          Know Our{' '}
          <span style={{ color: '#E8720C', fontStyle: 'italic' }}>School</span>
        </h2>

        {/* Tabs */}
        <div
          style={{
            display: 'flex', gap: 6, flexWrap: 'wrap',
            borderBottom: '2px solid rgba(232,114,12,0.12)',
            marginBottom: 40,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.6s ease 0.2s',
          }}
        >
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '11px 20px',
                fontSize: 13.5, fontWeight: 600,
                borderRadius: '10px 10px 0 0',
                border: activeTab === tab.id
                  ? '2px solid rgba(232,114,12,0.15)'
                  : '2px solid transparent',
                borderBottom: activeTab === tab.id
                  ? '2px solid #fdf6ed'
                  : '2px solid transparent',
                background: activeTab === tab.id ? 'white' : 'transparent',
                color: activeTab === tab.id ? '#E8720C' : '#7a5c48',
                cursor: 'pointer',
                position: 'relative', bottom: -2,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.color = '#E8720C'
                  e.currentTarget.style.background = 'rgba(232,114,12,0.05)'
                }
              }}
              onMouseLeave={e => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.color = '#7a5c48'
                  e.currentTarget.style.background = 'transparent'
                }
              }}
            >
              <span style={{ fontSize: 14 }}>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Panel */}
        <div
          style={{
            display: 'grid',
            gap: 60,
            alignItems: 'center',
            opacity: animating ? 0 : 1,
            transform: animating ? 'translateY(10px)' : 'translateY(0)',
            transition: 'all 0.2s ease',
          }}
          className="about-panel-grid"
        >

          {/* Visual */}
          <div style={{ position: 'relative', height: 380 }}>
            <div style={{
              position: 'absolute', top: 0, left: 0,
              width: '72%', height: '72%',
              background: 'linear-gradient(135deg, #E8720C, #8a3a00)',
              borderRadius: 24,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 72,
              boxShadow: '0 20px 60px rgba(232,114,12,0.25)',
              transition: 'all 0.3s ease',
            }}>
              {current.visual}
            </div>
            <div style={{
              position: 'absolute', bottom: 0, right: 0,
              width: '50%', height: '48%',
              background: '#1a0f00', borderRadius: 20,
              border: '3px solid white',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 16px 48px rgba(0,0,0,0.2)',
            }}>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 36, fontWeight: 900, color: '#f59340', lineHeight: 1 }}>
                {current.accentNum}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 6, textAlign: 'center', lineHeight: 1.4, whiteSpace: 'pre-line' }}>
                {current.accentLabel}
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ width: 20, height: 2, background: '#E8720C', display: 'inline-block' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#E8720C', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {current.contentLabel}
              </span>
            </div>

            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(24px, 2.8vw, 32px)', fontWeight: 900, color: '#1a0f00', marginBottom: 16, lineHeight: 1.2 }}>
              {current.heading}{' '}
              <span style={{ color: '#E8720C', fontStyle: 'italic' }}>{current.headingAccent}</span>
            </h3>

            <p style={{ fontSize: 14.5, color: '#7a5c48', lineHeight: 1.8, marginBottom: 20 }}>
              {current.desc}
            </p>

            <div style={{
              background: 'white',
              borderLeft: '4px solid #E8720C',
              borderRadius: '0 12px 12px 0',
              padding: '18px 22px', marginBottom: 24,
              boxShadow: '0 4px 20px rgba(232,114,12,0.06)',
            }}>
              <p style={{ fontSize: 13.5, color: '#7a5c48', fontStyle: 'italic', lineHeight: 1.7 }}>
                {current.quote}
              </p>
              <p style={{ fontSize: 12, fontWeight: 600, color: '#1a0f00', marginTop: 8 }}>
                {current.quoteAuthor}
              </p>
            </div>

            <button
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '11px 24px', background: '#E8720C',
                color: 'white', borderRadius: 10,
                fontSize: 13.5, fontWeight: 700,
                border: 'none', cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(232,114,12,0.35)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#b85a08'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(232,114,12,0.45)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#E8720C'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(232,114,12,0.35)'
              }}
            >
              {current.btnText}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      <style>{`
        .about-panel-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
          .about-panel-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .about-panel-grid > div:first-child {
            height: 280px !important;
          }
        }
      `}</style>
    </section>
  )
}