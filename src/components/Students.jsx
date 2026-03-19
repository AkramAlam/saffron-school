import { useEffect, useRef, useState } from 'react'

const TABS = [
  { id: 'tc',       icon: '📄', label: 'Transfer Certificate' },
  { id: 'circ',     icon: '📢', label: 'Circulars' },
  { id: 'curr',     icon: '📚', label: 'Curriculum' },
  { id: 'assign',   icon: '📝', label: 'Assignments' },
  { id: 'report',   icon: '📊', label: 'Annual Report' },
  { id: 'feedback', icon: '💬', label: 'Feedback' },
]

const CIRCULARS = [
  { title: 'Winter Break Holiday Notice 2025',      date: 'December 20, 2025' },
  { title: 'Annual Sports Day Schedule',            date: 'November 10, 2025' },
  { title: 'Parent Teacher Meeting — December',     date: 'November 28, 2025' },
  { title: 'Examination Time Table — Term 2',       date: 'October 15, 2025' },
]

const CURRICULUM = [
  { title: 'Class I – V Curriculum 2025-26',    sub: 'Primary Section' },
  { title: 'Class VI – VIII Curriculum 2025-26', sub: 'Middle Section' },
  { title: 'Class IX – X Curriculum 2025-26',   sub: 'Secondary Section' },
  { title: 'Class XI – XII Curriculum 2025-26', sub: 'Senior Secondary' },
]

const ASSIGNMENTS = [
  { title: 'Holiday Homework — Summer 2025',    sub: 'All Classes' },
  { title: 'Winter Assignment — Class IX & X',  sub: 'December 2025' },
  { title: 'Project Work — Science Class VIII', sub: 'November 2025' },
]

const REPORTS = [
  { title: 'Annual Report 2024-25', sub: 'Academic Year 2024-25' },
  { title: 'Annual Report 2023-24', sub: 'Academic Year 2023-24' },
  { title: 'Annual Report 2022-23', sub: 'Academic Year 2022-23' },
]

function DownloadRow({ icon, title, sub }) {
  const [hovered, setHovered] = useState(false)
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        background: 'white',
        border: `1px solid ${hovered ? 'rgba(232,114,12,0.3)' : 'rgba(232,114,12,0.12)'}`,
        borderRadius: 14, padding: '18px 22px',
        boxShadow: hovered ? '0 4px 16px rgba(232,114,12,0.08)' : 'none',
        transition: 'all 0.2s',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(232,114,12,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
          {icon}
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#1a0f00' }}>{title}</div>
          <div style={{ fontSize: 12, color: '#7a5c48', marginTop: 2 }}>{sub}</div>
        </div>
      </div>
      <button
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{
          padding: '8px 16px',
          border: '1.5px solid rgba(232,114,12,0.3)',
          borderRadius: 8, fontSize: 12, fontWeight: 600,
          color: btnHovered ? 'white' : '#E8720C',
          background: btnHovered ? '#E8720C' : 'transparent',
          cursor: 'pointer', transition: 'all 0.2s',
          flexShrink: 0,
        }}
      >
        Download
      </button>
    </div>
  )
}

export default function Students() {
  const [visible,   setVisible]   = useState(false)
  const [activeTab, setActiveTab] = useState('tc')
  const [animating, setAnimating] = useState(false)
  const [tcQuery,   setTcQuery]   = useState('')
  const [feedback,  setFeedback]  = useState({ name: '', role: 'Parent', message: '' })
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
    setTimeout(() => { setActiveTab(id); setAnimating(false) }, 180)
  }

  return (
    <section
      id="students"
      ref={ref}
      style={{ background: '#fdf6ed', padding: '100px 0', fontFamily: "'Segoe UI', system-ui, sans-serif" }}
    >
      <div style={{ width: '90%', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span style={{ width: 24, height: 2, background: '#E8720C', display: 'inline-block' }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#E8720C', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              Students & Parents
            </span>
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 42px)', fontWeight: 900, color: '#1a0f00', lineHeight: 1.1, marginBottom: 36 }}>
            Student{' '}
            <span style={{ color: '#E8720C', fontStyle: 'italic' }}>Corner</span>
          </h2>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: 'flex', gap: 6, flexWrap: 'wrap',
            borderBottom: '2px solid rgba(232,114,12,0.12)',
            marginBottom: 40,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'all 0.6s ease 0.1s',
          }}
        >
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '10px 18px', fontSize: 13, fontWeight: 600,
                borderRadius: '10px 10px 0 0',
                border: activeTab === tab.id ? '2px solid rgba(232,114,12,0.15)' : '2px solid transparent',
                borderBottom: activeTab === tab.id ? '2px solid #fdf6ed' : '2px solid transparent',
                background: activeTab === tab.id ? 'white' : 'transparent',
                color: activeTab === tab.id ? '#E8720C' : '#7a5c48',
                cursor: 'pointer', position: 'relative', bottom: -2,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { if (activeTab !== tab.id) { e.currentTarget.style.color = '#E8720C'; e.currentTarget.style.background = 'rgba(232,114,12,0.05)' } }}
              onMouseLeave={e => { if (activeTab !== tab.id) { e.currentTarget.style.color = '#7a5c48'; e.currentTarget.style.background = 'transparent' } }}
            >
              <span style={{ fontSize: 14 }}>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div style={{ opacity: animating ? 0 : 1, transform: animating ? 'translateY(8px)' : 'translateY(0)', transition: 'all 0.18s ease' }}>

          {/* Transfer Certificate */}
          {activeTab === 'tc' && (
            <div style={{ maxWidth: 560, margin: '0 auto' }}>
              <div style={{ background: 'white', borderRadius: 20, border: '1px solid rgba(232,114,12,0.12)', padding: 40, textAlign: 'center' }}>
                <div style={{ width: 72, height: 72, borderRadius: 20, background: 'rgba(232,114,12,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, margin: '0 auto 20px' }}>📄</div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 22, fontWeight: 700, color: '#1a0f00', marginBottom: 10 }}>Transfer Certificate</h3>
                <p style={{ fontSize: 14, color: '#7a5c48', lineHeight: 1.7, marginBottom: 28 }}>
                  Search and download your Transfer Certificate by entering your student name or admission number below.
                </p>
                <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
                  <input
                    value={tcQuery}
                    onChange={e => setTcQuery(e.target.value)}
                    placeholder="Enter Student Name or Admission No."
                    style={{ flex: 1, padding: '12px 16px', border: '1px solid rgba(232,114,12,0.2)', borderRadius: 10, fontSize: 14, outline: 'none', fontFamily: 'inherit' }}
                    onFocus={e => e.target.style.borderColor = '#E8720C'}
                    onBlur={e => e.target.style.borderColor = 'rgba(232,114,12,0.2)'}
                  />
                  <button style={{ padding: '12px 24px', background: '#E8720C', color: 'white', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>
                    Search
                  </button>
                </div>
                <p style={{ fontSize: 12, color: '#7a5c48' }}>Having trouble? Contact the school office at 0129-4128196</p>
              </div>
            </div>
          )}

          {/* Circulars */}
          {activeTab === 'circ' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {CIRCULARS.map(item => <DownloadRow key={item.title} icon="📢" title={item.title} sub={item.date} />)}
            </div>
          )}

          {/* Curriculum */}
          {activeTab === 'curr' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {CURRICULUM.map(item => <DownloadRow key={item.title} icon="📚" title={item.title} sub={item.sub} />)}
            </div>
          )}

          {/* Assignments */}
          {activeTab === 'assign' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {ASSIGNMENTS.map(item => <DownloadRow key={item.title} icon="📝" title={item.title} sub={item.sub} />)}
            </div>
          )}

          {/* Annual Report */}
          {activeTab === 'report' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {REPORTS.map(item => <DownloadRow key={item.title} icon="📊" title={item.title} sub={item.sub} />)}
            </div>
          )}

          {/* Feedback */}
          {activeTab === 'feedback' && (
            <div style={{ maxWidth: 560, margin: '0 auto' }}>
              <div style={{ background: 'white', borderRadius: 20, border: '1px solid rgba(232,114,12,0.12)', padding: 36 }}>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 20, fontWeight: 700, color: '#1a0f00', marginBottom: 24 }}>Share Your Feedback</h3>

                {[
                  { label: 'Your Name', type: 'input', key: 'name', placeholder: 'Enter your name' },
                ].map(field => (
                  <div key={field.key} style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#1a0f00', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{field.label}</label>
                    <input
                      value={feedback[field.key]}
                      onChange={e => setFeedback({ ...feedback, [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      style={{ width: '100%', padding: '11px 14px', border: '1px solid rgba(232,114,12,0.2)', borderRadius: 10, fontSize: 14, fontFamily: 'inherit', outline: 'none', color: '#1a0f00' }}
                      onFocus={e => e.target.style.borderColor = '#E8720C'}
                      onBlur={e => e.target.style.borderColor = 'rgba(232,114,12,0.2)'}
                    />
                  </div>
                ))}

                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#1a0f00', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Role</label>
                  <select
                    value={feedback.role}
                    onChange={e => setFeedback({ ...feedback, role: e.target.value })}
                    style={{ width: '100%', padding: '11px 14px', border: '1px solid rgba(232,114,12,0.2)', borderRadius: 10, fontSize: 14, fontFamily: 'inherit', outline: 'none', color: '#1a0f00', background: 'white' }}
                  >
                    <option>Parent</option>
                    <option>Student</option>
                    <option>Alumni</option>
                  </select>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#1a0f00', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Message</label>
                  <textarea
                    value={feedback.message}
                    onChange={e => setFeedback({ ...feedback, message: e.target.value })}
                    placeholder="Write your feedback here..."
                    style={{ width: '100%', height: 100, padding: '11px 14px', border: '1px solid rgba(232,114,12,0.2)', borderRadius: 10, fontSize: 14, fontFamily: 'inherit', outline: 'none', color: '#1a0f00', resize: 'vertical' }}
                    onFocus={e => e.target.style.borderColor = '#E8720C'}
                    onBlur={e => e.target.style.borderColor = 'rgba(232,114,12,0.2)'}
                  />
                </div>

                <button
                  style={{ width: '100%', padding: 13, background: '#E8720C', color: 'white', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#b85a08'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#E8720C'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  Submit Feedback
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}