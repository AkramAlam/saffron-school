import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

const CLASSES = [
  'Select Class', 'Nursery', 'Prep',
  'Class I', 'Class II', 'Class III', 'Class IV', 'Class V',
  'Class VI', 'Class VII', 'Class VIII',
  'Class IX', 'Class X', 'Class XI', 'Class XII',
]

const STEPS = [
  { num: 1, title: 'Fill Form',    sub: 'Personal details' },
  { num: 2, title: 'Documents',    sub: 'Upload docs' },
  { num: 3, title: 'Fee Payment',  sub: 'Pay online' },
  { num: 4, title: 'Confirmation', sub: 'Get admitted' },
]

const ADMISSION_INFO = [
  { label: 'Academic Year',   value: '2025 – 26' },
  { label: 'Classes Open',    value: 'Nursery to XII' },
  { label: 'Medium',          value: 'English' },
  { label: 'Board',           value: 'CBSE' },
  { label: 'Affiliation No.', value: '530647' },
]

const DOCUMENTS = [
  { label: 'Birth Certificate',    value: '✅ Required' },
  { label: 'Aadhar Card',          value: '✅ Required' },
  { label: 'Previous Marksheet',   value: '✅ Required' },
  { label: 'Passport Photo',       value: '✅ Required' },
  { label: 'Transfer Certificate', value: 'If applicable' },
]

function InfoCard({ title, rows }) {
  return (
    <div style={{ background: 'white', borderRadius: 16, border: '1px solid rgba(232,114,12,0.12)', padding: 24 }}>
      <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 16, fontWeight: 700, color: '#1a0f00', marginBottom: 14 }}>
        {title}
      </h3>
      {rows.map((row, i) => (
        <div key={i} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '8px 0',
          borderBottom: i < rows.length - 1 ? '1px solid rgba(232,114,12,0.06)' : 'none',
          fontSize: 13,
        }}>
          <span style={{ color: '#7a5c48' }}>{row.label}</span>
          <span style={{ fontWeight: 600, color: '#1a0f00' }}>{row.value}</span>
        </div>
      ))}
    </div>
  )
}

export default function AdmissionPage() {
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = useState(1)
  const [submitted,  setSubmitted]  = useState(false)
  const [btnHovered, setBtnHovered] = useState(false)
  const [form, setForm] = useState({
    firstName: '', lastName: '', dob: '',
    applyClass: 'Select Class', parentName: '',
    mobile: '', email: '', prevSchool: '',
  })

  const handleSubmit = () => {
    if (!form.firstName || !form.mobile || form.applyClass === 'Select Class') return
    setSubmitted(true)
    setActiveStep(4)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ firstName: '', lastName: '', dob: '', applyClass: 'Select Class', parentName: '', mobile: '', email: '', prevSchool: '' })
  }

  const inputStyle = {
    width: '100%', padding: '11px 14px',
    border: '1px solid rgba(232,114,12,0.2)',
    borderRadius: 10, fontSize: 14,
    fontFamily: 'inherit', outline: 'none',
    color: '#1a0f00', background: 'white',
    transition: 'border-color 0.2s',
  }

  const labelStyle = {
    display: 'block', fontSize: 11, fontWeight: 700,
    color: '#1a0f00', textTransform: 'uppercase',
    letterSpacing: '0.06em', marginBottom: 6,
  }

  return (
    <>
      <div style={{ background: '#fdf6ed', minHeight: '100vh', fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

        {/* ── NAVBAR ── */}
        <nav style={{
          background: 'white', borderBottom: '1px solid rgba(232,114,12,0.12)',
          padding: '0 5%', height: 70,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          position: 'sticky', top: 0, zIndex: 50,
          boxShadow: '0 2px 20px rgba(232,114,12,0.08)',
        }}>
          <button onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'none', border: 'none', cursor: 'pointer' }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: 'linear-gradient(135deg,#E8720C,#a04800)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
              🌸
            </div>
            <div>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 15, fontWeight: 700, color: '#1a0f00', lineHeight: 1.2 }}>Saffron Public School</div>
              <div style={{ fontSize: 9.5, fontWeight: 600, color: '#E8720C', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Affiliated to CBSE</div>
            </div>
          </button>
          <button
            onClick={() => navigate('/')}
            style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: '#7a5c48', background: 'none', padding: '8px 16px', border: '1px solid rgba(232,114,12,0.2)', borderRadius: 8, cursor: 'pointer', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#E8720C'; e.currentTarget.style.borderColor = '#E8720C' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#7a5c48'; e.currentTarget.style.borderColor = 'rgba(232,114,12,0.2)' }}
          >
            ← Back to Home
          </button>
        </nav>

        <div style={{ width: '90%', margin: '0 auto', padding: '60px 0' }}>

          {/* ── HERO BANNER ── */}
          <div style={{
            background: '#1a0f00', borderRadius: 24, padding: '48px',
            marginBottom: 48, position: 'relative', overflow: 'hidden',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', gap: 32, flexWrap: 'wrap',
          }}>
            <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(232,114,12,0.2),transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E8720C', display: 'inline-block' }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: '#f0a050', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Admissions Open</span>
              </div>
              <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: 14 }}>
                Admissions <span style={{ color: '#f59340', fontStyle: 'italic' }}>Open</span><br />2025 – 26
              </h1>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 440 }}>
                Join the Saffron family and give your child the gift of value-based education, holistic development and academic excellence.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 16, flexShrink: 0, position: 'relative', zIndex: 1 }}>
              {[{ num: '27+', lbl: 'Years of\nExcellence' }, { num: '1000+', lbl: 'Happy\nStudents' }].map(s => (
                <div key={s.num} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: '20px 24px', textAlign: 'center', minWidth: 110 }}>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: 32, fontWeight: 900, color: '#f59340' }}>{s.num}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 4, whiteSpace: 'pre-line', lineHeight: 1.4 }}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── MAIN GRID ── */}
          <div className="adm-grid">

            {/* Left Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <InfoCard title="📋 Admission Details"  rows={ADMISSION_INFO} />
              <InfoCard title="📄 Documents Required" rows={DOCUMENTS} />
              <InfoCard title="📞 Need Help?" rows={[
                { label: 'Phone',  value: '0129-4128196' },
                { label: 'Email',  value: 'info@saffronpublicschool.ac.in' },
                { label: 'Timing', value: '9AM – 4PM (Mon-Fri)' },
              ]} />
            </div>

            {/* Right Form */}
            <div style={{ background: 'white', borderRadius: 20, border: '1px solid rgba(232,114,12,0.12)', padding: 36 }}>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 22, fontWeight: 700, color: '#1a0f00', marginBottom: 8 }}>Apply for Admission</h3>
              <p style={{ fontSize: 13, color: '#7a5c48', marginBottom: 28 }}>Fill in the details below and our team will contact you within 24 hours.</p>

              {submitted && (
                <div style={{ background: 'rgba(80,200,120,0.1)', border: '1px solid rgba(80,200,120,0.3)', borderRadius: 10, padding: '14px 18px', marginBottom: 20, fontSize: 14, color: '#1a6b3a', fontWeight: 500 }}>
                  🎉 Application submitted! We'll contact you within 24 hours.
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>Student First Name</label>
                  <input value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} placeholder="First name" style={inputStyle} onFocus={e => e.target.style.borderColor = '#E8720C'} onBlur={e => e.target.style.borderColor = 'rgba(232,114,12,0.2)'} />
                </div>
                <div>
                  <label style={labelStyle}>Student Last Name</label>
                  <input value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} placeholder="Last name" style={inputStyle} onFocus={e => e.target.style.borderColor = '#E8720C'} onBlur={e => e.target.style.borderColor = 'rgba(232,114,12,0.2)'} />
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Date of Birth</label>
                <input type="date" value={form.dob} onChange={e => setForm({ ...form, dob: e.target.value })} style={inputStyle} onFocus={e => e.target.style.borderColor = '#E8720C'} onBlur={e => e.target.style.borderColor = 'rgba(232,114,12,0.2)'} />
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Applying for Class</label>
                <select value={form.applyClass} onChange={e => setForm({ ...form, applyClass: e.target.value })} style={{ ...inputStyle, background: 'white' }} onFocus={e => e.target.style.borderColor = '#E8720C'} onBlur={e => e.target.style.borderColor = 'rgba(232,114,12,0.2)'}>
                  {CLASSES.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>Parent Name</label>
                  <input value={form.parentName} onChange={e => setForm({ ...form, parentName: e.target.value })} placeholder="Father/Mother name" style={inputStyle} onFocus={e => e.target.style.borderColor = '#E8720C'} onBlur={e => e.target.style.borderColor = 'rgba(232,114,12,0.2)'} />
                </div>
                <div>
                  <label style={labelStyle}>Mobile Number</label>
                  <input value={form.mobile} onChange={e => setForm({ ...form, mobile: e.target.value })} placeholder="10 digit number" style={inputStyle} onFocus={e => e.target.style.borderColor = '#E8720C'} onBlur={e => e.target.style.borderColor = 'rgba(232,114,12,0.2)'} />
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Email Address</label>
                <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" style={inputStyle} onFocus={e => e.target.style.borderColor = '#E8720C'} onBlur={e => e.target.style.borderColor = 'rgba(232,114,12,0.2)'} />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Current School (if any)</label>
                <input value={form.prevSchool} onChange={e => setForm({ ...form, prevSchool: e.target.value })} placeholder="Previous school name" style={inputStyle} onFocus={e => e.target.style.borderColor = '#E8720C'} onBlur={e => e.target.style.borderColor = 'rgba(232,114,12,0.2)'} />
              </div>

              <button
                onClick={handleSubmit}
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
                style={{
                  width: '100%', padding: 14,
                  background: btnHovered ? '#b85a08' : '#E8720C',
                  color: 'white', border: 'none', borderRadius: 10,
                  fontSize: 15, fontWeight: 700, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  transform: btnHovered ? 'translateY(-1px)' : 'translateY(0)',
                  boxShadow: btnHovered ? '0 6px 20px rgba(232,114,12,0.4)' : '0 4px 14px rgba(232,114,12,0.3)',
                  transition: 'all 0.2s',
                }}
              >
                Submit Application
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <p style={{ fontSize: 12, color: '#7a5c48', textAlign: 'center', marginTop: 14 }}>
                🔒 Your information is safe and will not be shared with anyone.
              </p>
            </div>

          </div>
        </div>

        <style>{`
          .adm-grid {
            display: grid;
            grid-template-columns: 1fr 1.2fr;
            gap: 40px;
            align-items: start;
          }
          @media (max-width: 900px) {
            .adm-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>

      <Footer />
    </>
  )
}