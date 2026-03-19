import { useEffect, useRef, useState } from 'react'

const FACILITIES = [
  {
    icon: '📚',
    title: 'Library',
    desc: 'A well-stocked library with thousands of books, journals and digital resources to fuel a love for reading and learning.',
    tag: 'Knowledge Hub',
  },
  {
    icon: '💻',
    title: 'Computer Lab',
    desc: 'Modern computer labs with latest hardware and software, enabling students to develop digital literacy and future-ready skills.',
    tag: 'Tech Ready',
  },
  {
    icon: '🔬',
    title: 'Science Lab',
    desc: 'Fully equipped physics, chemistry and biology labs where students learn through hands-on experiments and discovery.',
    tag: 'Hands-on Learning',
  },
  {
    icon: '⚽',
    title: 'Sports Ground',
    desc: 'Spacious sports facilities for cricket, football, athletics and more to keep students physically fit and mentally strong.',
    tag: 'Stay Active',
  },
  {
    icon: '🎨',
    title: 'Art & Craft Room',
    desc: 'A dedicated creative space where students freely explore painting, sculpture and various art forms to express themselves.',
    tag: 'Creative Space',
  },
  {
    icon: '🎭',
    title: 'Activity Hall',
    desc: 'A multipurpose hall for cultural events, annual day celebrations, debates and school gatherings throughout the year.',
    tag: 'Cultural Hub',
  },
]

function FacilityCard({ item, index, visible }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'white',
        border: `1px solid ${hovered ? 'rgba(232,114,12,0.25)' : 'rgba(232,114,12,0.12)'}`,
        borderRadius: 20,
        padding: '32px 28px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transform: hovered ? 'translateY(-6px)' : visible ? 'translateY(0)' : 'translateY(24px)',
        boxShadow: hovered ? '0 20px 48px rgba(232,114,12,0.12)' : 'none',
        opacity: visible ? 1 : 0,
        transition: `all 0.4s ease ${index * 0.08}s`,
      }}
    >
      {/* Top accent bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: 'linear-gradient(90deg, #E8720C, #f59340)',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.3s ease',
      }} />

      {/* Icon */}
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: hovered ? 'rgba(232,114,12,0.15)' : 'rgba(232,114,12,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 24, marginBottom: 20,
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'all 0.3s ease',
      }}>
        {item.icon}
      </div>

      <h3 style={{
        fontFamily: 'Georgia, serif', fontSize: 18,
        fontWeight: 700, color: '#1a0f00', marginBottom: 10,
      }}>
        {item.title}
      </h3>

      <p style={{ fontSize: 13.5, color: '#7a5c48', lineHeight: 1.7 }}>
        {item.desc}
      </p>

      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 5,
        marginTop: 16, fontSize: 11, fontWeight: 600,
        color: '#E8720C', background: 'rgba(232,114,12,0.08)',
        padding: '4px 10px', borderRadius: 100,
      }}>
        ✦ {item.tag}
      </div>
    </div>
  )
}

export default function Facilities() {
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
      id="facilities"
      ref={ref}
      style={{ background: 'white', padding: '100px 0', fontFamily: "'Segoe UI', system-ui, sans-serif" }}
    >
      <div style={{ width: '90%', margin: '0 auto' }}>

        {/* Header Row */}
        <div
          style={{
            display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between', marginBottom: 48,
            flexWrap: 'wrap', gap: 20,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ width: 24, height: 2, background: '#E8720C', display: 'inline-block' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#E8720C', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                Facilities
              </span>
            </div>
            <h2 style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(30px, 3.5vw, 42px)',
              fontWeight: 900, color: '#1a0f00', lineHeight: 1.1,
            }}>
              World Class{' '}
              <span style={{ color: '#E8720C', fontStyle: 'italic' }}>Facilities</span>
            </h2>
          </div>

          <p style={{
            fontSize: 14, color: '#7a5c48',
            maxWidth: 340, lineHeight: 1.7, textAlign: 'right',
          }}>
            Every facility at Saffron is designed to nurture curiosity, creativity and confidence in every student.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="fac-grid">
          {FACILITIES.map((item, i) => (
            <FacilityCard
              key={item.title}
              item={item}
              index={i}
              visible={visible}
            />
          ))}
        </div>

      </div>

      <style>{`
        .fac-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .fac-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .fac-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}