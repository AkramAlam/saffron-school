import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  {
    label: 'About Us', href: '#about',
    dropdown: [
      { icon: '🏫', label: 'About School',    href: '#about' },
      { icon: '💬', label: "Chairman's Desk", href: '#chairman' },
      { icon: '🎯', label: "Director's Desk", href: '#director' },
      { icon: '🌟', label: "Principal's Desk", href: '#principal' },
    ],
  },
  { label: 'Facilities', href: '#facilities' },
  {
    label: 'Students', href: '#students',
    dropdown: [
      { icon: '📄', label: 'Transfer Certificate', href: '#tc' },
      { icon: '📢', label: 'Circulars',             href: '#circulars' },
      { icon: '📚', label: 'Curriculum',            href: '#curriculum' },
      { icon: '📝', label: 'Assignments',           href: '#assignments' },
      { icon: '📊', label: 'Annual Report',         href: '#report' },
    ],
  },
  { label: 'Gallery',    href: '#gallery' },
  { label: 'Activities', href: '#activities' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const [activeLink,   setActiveLink]   = useState('Home')
  const [openDropdown, setOpenDropdown] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleClick = (e, href, label) => {
    e.preventDefault()
    setActiveLink(label)
    setMobileOpen(false)
    setOpenDropdown(null)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* TOP BAR */}
      <div style={{ background: '#0f0800' }} className="hidden md:flex items-center justify-between py-2" >
        <div style={{ width: '90%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, letterSpacing: '0.03em' }}>
            <span style={{ background: '#E8720C', borderRadius: 4, width: 18, height: 18, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, flexShrink: 0 }}>📍</span>
            Ashoka Enclave-II, Sec-37, Faridabad — 121003
          </span>
          <span style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.1)', display: 'inline-block' }} />
          <span className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, letterSpacing: '0.03em' }}>
            <span style={{ background: '#E8720C', borderRadius: 4, width: 18, height: 18, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, flexShrink: 0 }}>🕗</span>
            Mon – Sat &nbsp;|&nbsp; 8:00 AM – 2:00 PM
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a href="tel:01294128196" className="flex items-center gap-2 transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.color = '#f0a050'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
          >
            <span style={{ background: '#E8720C', borderRadius: 4, width: 18, height: 18, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, flexShrink: 0 }}>📞</span>
            0129-4128196
          </a>
          <span style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.1)', display: 'inline-block' }} />
          <a href="mailto:info@saffronpublicschool.ac.in" className="flex items-center gap-2 transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.color = '#f0a050'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
          >
            <span style={{ background: '#E8720C', borderRadius: 4, width: 18, height: 18, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, flexShrink: 0 }}>✉</span>
            info@saffronpublicschool.ac.in
          </a>
        </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav
        className="sticky top-0 z-50 bg-white transition-all duration-300"
        style={{
          borderBottom: '1px solid rgba(232,114,12,0.12)',
          boxShadow: scrolled ? '0 4px 30px rgba(232,114,12,0.10)' : 'none',
        }}
      >
        <div style={{ width: '90%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 74, gap: 16 }}>

          {/* LOGO */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home', 'Home')}
            className="flex items-center group"
            style={{ gap: 14, textDecoration: 'none', flexShrink: 0 }}
          >
            <div
              className="flex items-center justify-center transition-all duration-300 group-hover:scale-105"
              style={{ width: 46, height: 46, borderRadius: 14, background: 'linear-gradient(135deg, #E8720C, #a04800)', fontSize: 20, boxShadow: '0 6px 20px rgba(232,114,12,0.30)' }}
            >
              🌸
            </div>
            <div style={{ lineHeight: 1 }}>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#1a0f00', fontFamily: 'Georgia, serif', letterSpacing: '-0.01em', lineHeight: 1.2, margin: 0 }}>
                Saffron Public School
              </p>
              <p style={{ fontSize: 9.5, fontWeight: 600, color: '#E8720C', letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 4, display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ width: 16, height: 1.5, background: '#E8720C', display: 'inline-block', flexShrink: 0 }} />
                Affiliated to CBSE
              </p>
            </div>
          </a>

          {/* DESKTOP LINKS */}
          <ul className="hidden lg:flex items-center justify-center" style={{ gap: 2, listStyle: 'none', margin: '0 auto', padding: 0 }}>
            {NAV_LINKS.map((item) => (
              <li
                key={item.label}
                style={{ position: 'relative' }}
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href, item.label)}
                  className="flex items-center transition-all duration-200"
                  style={{
                    gap: 4,
                    padding: '9px 14px',
                    fontSize: 13.5,
                    fontWeight: activeLink === item.label ? 600 : 500,
                    color: activeLink === item.label ? '#E8720C' : '#2a1a0a',
                    background: activeLink === item.label ? '#fff5ee' : 'transparent',
                    borderRadius: 10,
                    textDecoration: 'none',
                    position: 'relative',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => {
                    if (activeLink !== item.label) {
                      e.currentTarget.style.background = '#fff5ee'
                      e.currentTarget.style.color = '#E8720C'
                    }
                  }}
                  onMouseLeave={e => {
                    if (activeLink !== item.label) {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = '#2a1a0a'
                    }
                  }}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg style={{ width: 10, height: 10, opacity: 0.45, transition: 'transform 0.2s', transform: openDropdown === item.label ? 'rotate(180deg)' : 'rotate(0)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  {activeLink === item.label && (
                    <span style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #E8720C, #f59340)', borderRadius: '2px 2px 0 0' }} />
                  )}
                </a>

                {/* DROPDOWN */}
                {item.dropdown && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      paddingTop: 8,
                      width: 224,
                      zIndex: 50,
                      opacity: openDropdown === item.label ? 1 : 0,
                      pointerEvents: openDropdown === item.label ? 'all' : 'none',
                      transform: openDropdown === item.label ? 'translateY(0) scale(1)' : 'translateY(-6px) scale(0.97)',
                      transformOrigin: 'top left',
                      transition: 'all 0.2s cubic-bezier(0.34,1.4,0.64,1)',
                    }}
                  >
                    <div style={{
                      background: 'white',
                      borderRadius: 16,
                      border: '1px solid rgba(232,114,12,0.12)',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(232,114,12,0.08)',
                      padding: 8,
                      position: 'relative',
                    }}>
                    <div style={{ position: 'absolute', top: -6, left: 18, width: 12, height: 12, background: 'white', borderLeft: '1px solid rgba(232,114,12,0.12)', borderTop: '1px solid rgba(232,114,12,0.12)', transform: 'rotate(45deg)' }} />
                    {item.dropdown.map((sub, i) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        onClick={(e) => handleClick(e, sub.href, item.label)}
                        className="flex items-center transition-all duration-150"
                        style={{
                          gap: 10,
                          padding: '9px 10px',
                          borderRadius: 10,
                          fontSize: 13,
                          color: '#2C1810',
                          textDecoration: 'none',
                          borderBottom: i < item.dropdown.length - 1 ? '1px solid rgba(232,114,12,0.06)' : 'none',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = '#fff5ee'
                          e.currentTarget.style.color = '#C4600A'
                          e.currentTarget.style.paddingLeft = '14px'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = 'transparent'
                          e.currentTarget.style.color = '#2C1810'
                          e.currentTarget.style.paddingLeft = '10px'
                        }}
                      >
                        <span style={{ width: 28, height: 28, borderRadius: 8, background: '#fff0e6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, flexShrink: 0 }}>
                          {sub.icon}
                        </span>
                        {sub.label}
                      </a>
                    ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center" style={{ gap: 10, flexShrink: 0 }}>

            <a
              href="#admission"
              onClick={(e) => handleClick(e, '#admission', 'Admission')}
              className="hidden lg:flex items-center transition-all duration-200"
              style={{ gap: 7, padding: '10px 22px', borderRadius: 11, background: '#E8720C', color: 'white', fontSize: 13.5, fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 16px rgba(232,114,12,0.38)', letterSpacing: '0.01em' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#b85a08'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(232,114,12,0.50)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#E8720C'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(232,114,12,0.38)' }}
            >
              Apply Now
              <svg style={{ width: 13, height: 13 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex flex-col justify-center items-center transition-colors duration-200"
              style={{ gap: 5, width: 42, height: 42, borderRadius: 12, background: '#fff5ee', border: 'none', cursor: 'pointer' }}
              aria-label="Open menu"
            >
              <span style={{ width: 20, height: 2, background: '#1A0F00', borderRadius: 2 }} />
              <span style={{ width: 13, height: 2, background: '#1A0F00', borderRadius: 2 }} />
              <span style={{ width: 20, height: 2, background: '#1A0F00', borderRadius: 2 }} />
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        onClick={() => setMobileOpen(false)}
        style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 998,
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s',
        }}
      />

      {/* MOBILE PANEL */}
      <div style={{
        position: 'fixed', top: 0, right: 0, zIndex: 999,
        height: '100%', width: 290, background: 'white',
        display: 'flex', flexDirection: 'column',
        boxShadow: '-12px 0 50px rgba(0,0,0,0.15)',
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease-in-out',
      }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px', borderBottom: '1px solid rgba(232,114,12,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 38, height: 38, borderRadius: 12, background: 'linear-gradient(135deg, #E8720C, #a04800)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, boxShadow: '0 4px 12px rgba(232,114,12,0.3)' }}>🌸</div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#1A0F00', fontFamily: 'Georgia, serif', margin: 0 }}>Saffron Public School</p>
              <p style={{ fontSize: 9, fontWeight: 600, color: '#E8720C', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '2px 0 0' }}>CBSE Affiliated</p>
            </div>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            style={{ width: 32, height: 32, borderRadius: 8, background: '#f3f4f6', border: 'none', cursor: 'pointer', fontSize: 12, fontWeight: 700, color: '#6b7280', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >✕</button>
        </div>

        {/* Links */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '12px' }}>
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href, item.label)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '13px 16px', marginBottom: 3, borderRadius: 12,
                fontSize: 14, fontWeight: activeLink === item.label ? 600 : 500,
                color: activeLink === item.label ? '#E8720C' : '#2C1810',
                background: activeLink === item.label ? '#fff5ee' : 'transparent',
                textDecoration: 'none', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { if (activeLink !== item.label) { e.currentTarget.style.background = '#fff5ee'; e.currentTarget.style.color = '#E8720C' } }}
              onMouseLeave={e => { if (activeLink !== item.label) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#2C1810' } }}
            >
              {item.label}
              {activeLink === item.label && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E8720C', flexShrink: 0 }} />}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding: '16px', borderTop: '1px solid rgba(232,114,12,0.1)' }}>
          <a
            href="#admission"
            onClick={(e) => handleClick(e, '#admission', 'Admission')}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', padding: '13px', borderRadius: 12, background: '#E8720C', color: 'white', fontSize: 14, fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 16px rgba(232,114,12,0.35)' }}
          >
            Apply Now 🎓
          </a>
          <p style={{ textAlign: 'center', fontSize: 11, color: '#9ca3af', marginTop: 10 }}>📞 0129-4128196</p>
        </div>
      </div>
    </>
  )
}