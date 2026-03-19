import { useEffect, useRef, useState } from 'react'

const ACTIVITIES = [
  {
    icon: '🎭',
    tag: 'Cultural',
    title: 'Annual Day Celebration',
    desc: 'A grand showcase of talent featuring dance, drama, music and art performed by students from all classes.',
    date: 'December Every Year',
    bg: 'linear-gradient(135deg,#fff4ec,#ffe0c8)',
  },
  {
    icon: '♟️',
    tag: 'Sports',
    title: 'Chess Championship',
    desc: 'Inter-school and intra-school chess tournaments developing strategic thinking and concentration in students.',
    date: 'Throughout Year',
    bg: 'linear-gradient(135deg,#ecf4ff,#c8dcff)',
  },
  {
    icon: '🔬',
    tag: 'Academic',
    title: 'Science Exhibition',
    desc: 'Students present innovative science projects and models, fostering a spirit of inquiry and experimentation.',
    date: 'November Every Year',
    bg: 'linear-gradient(135deg,#ecfff4,#c8ffe0)',
  },
  {
    icon: '🎨',
    tag: 'Creative',
    title: 'Art & Craft Workshop',
    desc: 'Regular workshops in painting, pottery and craft to encourage creative expression in every student.',
    date: 'Monthly',
    bg: 'linear-gradient(135deg,#f4ecff,#e0c8ff)',
  },
  {
    icon: '🏃',
    tag: 'Sports',
    title: 'Annual Sports Day',
    desc: 'A day of athletic events including track races, field events and team sports celebrating fitness and sportsmanship.',
    date: 'January Every Year',
    bg: 'linear-gradient(135deg,#fff4ec,#ffd8b0)',
  },
  {
    icon: '🎤',
    tag: 'Cultural',
    title: 'Debate & Quiz Club',
    desc: 'Weekly debate sessions and quiz competitions that sharpen communication skills and general knowledge.',
    date: 'Weekly',
    bg: 'linear-gradient(135deg,#ffecec,#ffc8c8)',
  },
]

function ActivityCard({ item, index, visible }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'white',
        borderRadius: 20,
        overflow: 'hidden',
        border: `1px solid ${hovered ? 'rgba(232,114,12,0.25)' : 'rgba(232,114,12,0.10)'}`,
        transform: hovered ? 'translateY(-6px)' : visible ? 'translateY(0)' : 'translateY(24px)',
        boxShadow: hovered ? '0 20px 48px rgba(232,114,12,0.12)' : 'none',
        opacity: visible ? 1 : 0,
        transition: `all 0.4s ease ${index * 0.08}s`,
      }}
    >
      {/* Top colored area */}
      <div style={{
        height: 160,
        background: item.bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 52,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          transform: hovered ? 'scale(1.15)' : 'scale(1)',
          transition: 'transform 0.4s ease',
        }}>
          {item.icon}
        </div>
        {/* Fade bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 40, background: 'linear-gradient(to top, white, transparent)' }} />
      </div>

      {/* Body */}
      <div style={{ padding: '22px 24px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          fontSize: 10, fontWeight: 700, color: '#E8720C',
          background: 'rgba(232,114,12,0.08)',
          padding: '3px 10px', borderRadius: 100,
          marginBottom: 10,
          textTransform: 'uppercase', letterSpacing: '0.06em',
        }}>
          {item.tag}
        </div>
        <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 18, fontWeight: 700, color: '#1a0f00', marginBottom: 8 }}>
          {item.title}
        </h3>
        <p style={{ fontSize: 13, color: '#7a5c48', lineHeight: 1.7 }}>
          {item.desc}
        </p>
      </div>

      {/* Footer */}
      <div style={{
        padding: '14px 24px',
        borderTop: '1px solid rgba(232,114,12,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{ fontSize: 11, color: '#7a5c48' }}>📅 {item.date}</span>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#E8720C', display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
          Know More →
        </span>
      </div>
    </div>
  )
}

export default function Activities() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="activities"
      ref={ref}
      style={{ background: '#fdf6ed', padding: '100px 0', fontFamily: "'Segoe UI', system-ui, sans-serif" }}
    >
      <div style={{ width: '90%', margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', marginBottom: 48,
          flexWrap: 'wrap', gap: 16,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ width: 24, height: 2, background: '#E8720C', display: 'inline-block' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#E8720C', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                Activities
              </span>
            </div>
            <h2 style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(30px, 3.5vw, 42px)',
              fontWeight: 900, color: '#1a0f00', lineHeight: 1.1,
            }}>
              Beyond the{' '}
              <span style={{ color: '#E8720C', fontStyle: 'italic' }}>Classroom</span>
            </h2>
          </div>
          <p style={{ fontSize: 14, color: '#7a5c48', maxWidth: 320, lineHeight: 1.7 }}>
            Nurturing talent, building character and creating memories through diverse co-curricular activities.
          </p>
        </div>

        {/* Grid */}
        <div className="act-grid">
          {ACTIVITIES.map((item, i) => (
            <ActivityCard key={item.title} item={item} index={i} visible={visible} />
          ))}
        </div>

      </div>

      <style>{`
        .act-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .act-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .act-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}