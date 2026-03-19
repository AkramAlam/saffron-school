import { useState } from 'react'

const QUICK_LINKS = [
  { label: 'Home',        href: '#home' },
  { label: 'About Us',    href: '#about' },
  { label: 'Facilities',  href: '#facilities' },
  { label: 'Admissions',  href: '#admission' },
  { label: 'Gallery',     href: '#gallery' },
  { label: 'Contact',     href: '#contact' },
]

const STUDENT_LINKS = [
  { label: 'Transfer Certificate', href: '#students' },
  { label: 'Circulars',            href: '#students' },
  { label: 'Curriculum',           href: '#students' },
  { label: 'Assignments',          href: '#students' },
  { label: 'Annual Report',        href: '#students' },
  { label: 'Feedback',             href: '#students' },
]

const CONTACT_LINKS = [
  { label: '0129-4128196',                    href: 'tel:01294128196' },
  { label: 'info@saffronpublicschool.ac.in',  href: 'mailto:info@saffronpublicschool.ac.in' },
  { label: 'Sec-37, Faridabad 121003',        href: '#contact' },
]

const SOCIALS = [
  { icon: '📘', label: 'Facebook' },
  { icon: '📸', label: 'Instagram' },
  { icon: '🐦', label: 'Twitter' },
  { icon: '▶️', label: 'YouTube' },
]

function FooterLink({ item }) {
  const [hovered, setHovered] = useState(false)

  const handleClick = (e) => {
    if (item.href.startsWith('#')) {
      e.preventDefault()
      const el = document.querySelector(item.href)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <li style={{ marginBottom: 10 }}>
      <a
        href={item.href}
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          fontSize: 13.5,
          color: hovered ? '#f0a050' : 'rgba(255,255,255,0.45)',
          textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: 6,
          transition: 'color 0.2s',
          cursor: 'pointer',
        }}
      >
        <span style={{ color: '#E8720C', fontSize: 14 }}>›</span>
        {item.label}
      </a>
    </li>
  )
}

export default function Footer() {
  const [email, setEmail]         = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [hoveredSocial, setHoveredSocial] = useState(null)

  const handleSubscribe = () => {
    if (!email) return
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer style={{ background: '#0f0800', fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <div style={{ width: '90%', margin: '0 auto', padding: '72px 0 0' }}>

        {/* ── NEWSLETTER ── */}
        <div style={{
          background: 'rgba(232,114,12,0.06)',
          border: '1px solid rgba(232,114,12,0.15)',
          borderRadius: 16, padding: '28px 32px',
          marginBottom: 56,
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 24,
        }}>
          <div>
            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 4 }}>
              Stay Updated
            </h3>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
              Get latest news, circulars and updates from Saffron Public School
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10, flex: 1, maxWidth: 400 }}>
            {subscribed ? (
              <div style={{ flex: 1, padding: '11px 16px', background: 'rgba(80,200,120,0.1)', border: '1px solid rgba(80,200,120,0.3)', borderRadius: 10, fontSize: 13.5, color: '#50c878', fontWeight: 500 }}>
                ✅ Subscribed successfully!
              </div>
            ) : (
              <>
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
                  placeholder="Enter your email address"
                  style={{
                    flex: 1, padding: '11px 16px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 10, fontSize: 13.5,
                    color: 'white', outline: 'none',
                    fontFamily: 'inherit',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(232,114,12,0.4)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
                <button
                  onClick={handleSubscribe}
                  style={{
                    padding: '11px 22px', background: '#E8720C',
                    color: 'white', border: 'none', borderRadius: 10,
                    fontSize: 13.5, fontWeight: 700, cursor: 'pointer',
                    whiteSpace: 'nowrap', transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#b85a08'}
                  onMouseLeave={e => e.currentTarget.style.background = '#E8720C'}
                >
                  Subscribe
                </button>
              </>
            )}
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="footer-grid" style={{ paddingBottom: 56, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>

          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              <div style={{
                width: 46, height: 46, borderRadius: 14,
                background: 'linear-gradient(135deg, #E8720C, #a04800)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, flexShrink: 0,
                boxShadow: '0 4px 14px rgba(232,114,12,0.3)',
              }}>
                🌸
              </div>
              <div>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: 16, fontWeight: 700, color: 'white', lineHeight: 1.2 }}>
                  Saffron Public School
                </div>
                <div style={{ fontSize: 9.5, fontWeight: 600, color: '#E8720C', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 3 }}>
                  CBSE Affiliated · Est. 1998
                </div>
              </div>
            </div>

            <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, marginBottom: 28, maxWidth: 280 }}>
              Amulya Jeevan — Atulya Jeevan Sanskar. Shaping futures with value-based education for over 27 years in Faridabad.
            </p>

            {/* Social buttons */}
            <div style={{ display: 'flex', gap: 10 }}>
              {SOCIALS.map((s, i) => (
                <div
                  key={s.label}
                  onMouseEnter={() => setHoveredSocial(i)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: hoveredSocial === i ? 'rgba(232,114,12,0.15)' : 'rgba(255,255,255,0.06)',
                    border: `1px solid ${hoveredSocial === i ? 'rgba(232,114,12,0.3)' : 'rgba(255,255,255,0.08)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 15, cursor: 'pointer',
                    transition: 'all 0.2s',
                    transform: hoveredSocial === i ? 'translateY(-2px)' : 'translateY(0)',
                  }}
                  title={s.label}
                >
                  {s.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 700, color: 'white', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20, paddingBottom: 12, borderBottom: '2px solid #E8720C', display: 'inline-block' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none' }}>
              {QUICK_LINKS.map(item => <FooterLink key={item.label} item={item} />)}
            </ul>
          </div>

          {/* Students */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 700, color: 'white', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20, paddingBottom: 12, borderBottom: '2px solid #E8720C', display: 'inline-block' }}>
              Students
            </h4>
            <ul style={{ listStyle: 'none' }}>
              {STUDENT_LINKS.map(item => <FooterLink key={item.label} item={item} />)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 700, color: 'white', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20, paddingBottom: 12, borderBottom: '2px solid #E8720C', display: 'inline-block' }}>
              Contact
            </h4>
            <ul style={{ listStyle: 'none' }}>
              {CONTACT_LINKS.map(item => <FooterLink key={item.label} item={item} />)}
            </ul>

            <div style={{ marginTop: 24, padding: '14px 16px', background: 'rgba(232,114,12,0.06)', border: '1px solid rgba(232,114,12,0.12)', borderRadius: 10 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#E8720C', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
                School Hours
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                Mon – Sat: 8:00 AM – 2:00 PM
              </div>
            </div>
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 0',
          flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            © 2026 <span style={{ color: '#E8720C' }}>Saffron Public School</span>. All rights reserved.
          </p>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['Affiliation No. 530647', 'CBSE Affiliated', 'Est. 1998'].map(badge => (
              <span key={badge} style={{
                fontSize: 11, color: 'rgba(255,255,255,0.4)',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '4px 12px', borderRadius: 100,
              }}>
                {badge}
              </span>
            ))}
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'rgba(232,114,12,0.15)',
              border: '1px solid rgba(232,114,12,0.25)',
              color: '#E8720C', fontSize: 16, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(232,114,12,0.25)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(232,114,12,0.15)'; e.currentTarget.style.transform = 'translateY(0)' }}
            title="Back to top"
          >
            ↑
          </button>
        </div>

        {/* ── DESIGNED BY ── */}
        <div style={{
          textAlign: 'center',
          padding: '14px 0',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>
            Design & Developed by{' '}
            <a
              href="mailto:akramalam7544@gmail.com"
              style={{
                color: '#E8720C', fontWeight: 600,
                textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#f59340'}
              onMouseLeave={e => e.currentTarget.style.color = '#E8720C'}
            >
              Akram Alam
            </a>
          </p>
          {/* <a
            href="mailto:akramalam7544@gmail.com"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              fontSize: 11, color: 'rgba(255,255,255,0.35)',
              background: 'rgba(232,114,12,0.08)',
              border: '1px solid rgba(232,114,12,0.15)',
              padding: '3px 10px', borderRadius: 100,
              textDecoration: 'none', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(232,114,12,0.15)'; e.currentTarget.style.color = '#f0a050' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(232,114,12,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
          >
            ✉ akramalam7544@gmail.com
          </a> */}
        </div>

      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
        }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  )
}