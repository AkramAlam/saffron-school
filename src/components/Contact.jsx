import { useEffect, useRef, useState } from 'react'

const INFO = [
  {
    icon: '📍',
    label: 'Address',
    value: 'Ashoka Enclave-II, Sec-37\nFaridabad — 121003\nNear Delhi Badarpur Border',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '0129-4128196',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'info@saffronpublicschool.ac.in\nsaffron_publicschool@yahoo.co.in',
  },
]

export default function Contact() {
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', enquiry: 'Admission Inquiry', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [btnHovered, setBtnHovered] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = () => {
    if (!form.firstName || !form.email) return
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ firstName: '', lastName: '', email: '', phone: '', enquiry: 'Admission Inquiry', message: '' })
  }

  const inputStyle = {
    width: '100%', padding: '11px 14px',
    border: '1px solid rgba(232,114,12,0.2)',
    borderRadius: 10, fontSize: 14,
    fontFamily: 'inherit', outline: 'none',
    color: '#1a0f00', transition: 'border-color 0.2s',
    background: 'white',
  }

  const labelStyle = {
    display: 'block', fontSize: 11, fontWeight: 700,
    color: '#1a0f00', textTransform: 'uppercase',
    letterSpacing: '0.06em', marginBottom: 6,
  }

  return (
    <section
      id="contact"
      ref={ref}
      style={{ background: '#1a0f00', padding: '100px 0', fontFamily: "'Segoe UI', system-ui, sans-serif" }}
    >
      <div style={{ width: '90%', margin: '0 auto' }} className="contact-grid">

        {/* ── LEFT: Info ── */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(-30px)',
          transition: 'all 0.7s ease',
        }}>
          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span style={{ width: 24, height: 2, background: '#E8720C', display: 'inline-block' }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#E8720C', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              Contact Us
            </span>
          </div>

          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(30px, 3.5vw, 40px)',
            fontWeight: 900, color: 'white',
            lineHeight: 1.1, marginBottom: 16,
          }}>
            Get In{' '}
            <span style={{ color: '#f59340', fontStyle: 'italic' }}>Touch</span>
          </h2>

          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 40 }}>
            We'd love to hear from you. Reach out for admissions, queries or to know more about Saffron Public School.
          </p>

          {/* Info Items */}
          {INFO.map((item, i) => (
            <div
              key={item.label}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: 16,
                marginBottom: 24,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transition: `all 0.6s ease ${0.1 + i * 0.1}s`,
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                background: 'rgba(232,114,12,0.12)',
                border: '1px solid rgba(232,114,12,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18,
              }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#E8720C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
                  {item.label}
                </div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                  {item.value}
                </div>
              </div>
            </div>
          ))}

          {/* Divider */}
          <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />

          {/* Timing Cards */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {[
              { title: 'School Hours', val: 'Mon – Sat\n8:00 AM – 2:00 PM' },
              { title: 'Office Hours', val: 'Mon – Fri\n9:00 AM – 4:00 PM' },
            ].map(t => (
              <div key={t.title} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12, padding: '14px 18px', flex: 1, minWidth: 140,
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#E8720C', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
                  {t.title}
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                  {t.val}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Form ── */}
        <div style={{
          background: 'white', borderRadius: 24, padding: 36,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(30px)',
          transition: 'all 0.7s ease 0.15s',
        }}>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 22, fontWeight: 700, color: '#1a0f00', marginBottom: 24 }}>
            Send Us a Message
          </h3>

          {/* Success Message */}
          {submitted && (
            <div style={{
              background: 'rgba(80,200,120,0.1)', border: '1px solid rgba(80,200,120,0.3)',
              borderRadius: 10, padding: '12px 16px', marginBottom: 20,
              fontSize: 14, color: '#1a6b3a', fontWeight: 500,
            }}>
              ✅ Message sent successfully! We'll get back to you soon.
            </div>
          )}

          {/* Name Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }}>
            <div>
              <label style={labelStyle}>First Name</label>
              <input
                value={form.firstName}
                onChange={e => setForm({ ...form, firstName: e.target.value })}
                placeholder="Your name"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#E8720C'}
                onBlur={e => e.target.style.borderColor = 'rgba(232,114,12,0.2)'}
              />
            </div>
            <div>
              <label style={labelStyle}>Last Name</label>
              <input
                value={form.lastName}
                onChange={e => setForm({ ...form, lastName: e.target.value })}
                placeholder="Last name"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#E8720C'}
                onBlur={e => e.target.style.borderColor = 'rgba(232,114,12,0.2)'}
              />
            </div>
          </div>

          {/* Email */}
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Email</label>
            <input
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              placeholder="you@email.com"
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#E8720C'}
              onBlur={e => e.target.style.borderColor = 'rgba(232,114,12,0.2)'}
            />
          </div>

          {/* Phone */}
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Phone</label>
            <input
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              placeholder="Your phone number"
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#E8720C'}
              onBlur={e => e.target.style.borderColor = 'rgba(232,114,12,0.2)'}
            />
          </div>

          {/* Enquiry */}
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Enquiry Type</label>
            <select
              value={form.enquiry}
              onChange={e => setForm({ ...form, enquiry: e.target.value })}
              style={{ ...inputStyle, background: 'white' }}
              onFocus={e => e.target.style.borderColor = '#E8720C'}
              onBlur={e => e.target.style.borderColor = 'rgba(232,114,12,0.2)'}
            >
              <option>Admission Inquiry</option>
              <option>General Query</option>
              <option>Transfer Certificate</option>
              <option>Fee Structure</option>
              <option>Other</option>
            </select>
          </div>

          {/* Message */}
          <div style={{ marginBottom: 24 }}>
            <label style={labelStyle}>Message</label>
            <textarea
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              placeholder="How can we help you?"
              style={{ ...inputStyle, height: 100, resize: 'vertical' }}
              onFocus={e => e.target.style.borderColor = '#E8720C'}
              onBlur={e => e.target.style.borderColor = 'rgba(232,114,12,0.2)'}
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              width: '100%', padding: 13,
              background: btnHovered ? '#b85a08' : '#E8720C',
              color: 'white', border: 'none', borderRadius: 10,
              fontSize: 14, fontWeight: 700, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              transform: btnHovered ? 'translateY(-1px)' : 'translateY(0)',
              boxShadow: btnHovered ? '0 6px 20px rgba(232,114,12,0.4)' : '0 4px 14px rgba(232,114,12,0.3)',
              transition: 'all 0.2s',
            }}
          >
            Send Message
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

      </div>

      {/* ── MAP ── */}
      <div style={{ width: '90%', margin: '60px auto 0' }}>
        <div style={{
          borderRadius: 20, overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          position: 'relative',
        }}>
          {/* Map label */}
          <div style={{
            position: 'absolute', top: 16, left: 16, zIndex: 10,
            background: '#1a0f00',
            border: '1px solid rgba(232,114,12,0.3)',
            borderRadius: 10, padding: '8px 14px',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{ fontSize: 14 }}>📍</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#f0a050' }}>
              Saffron Public School, Faridabad
            </span>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.1327420727425!2d77.3106662761888!3d28.475548775750887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce714459d670d%3A0xd2005fd81352e7a2!2sSaffron%20Public%20School!5e0!3m2!1sen!2sin!4v1773927887595!5m2!1sen!2sin"
            width="100%"
            height="380"
            style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Saffron Public School Location"
          />

          {/* Open in Maps button */}
          <a
            href="https://maps.google.com/?q=Saffron+Public+School+Ashoka+Enclave+II+Sector+37+Faridabad"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute', bottom: 16, right: 16, zIndex: 10,
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: '#E8720C', color: 'white',
              padding: '8px 16px', borderRadius: 8,
              fontSize: 12, fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(232,114,12,0.4)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#b85a08'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#E8720C'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Open in Maps
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}