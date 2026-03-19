import { useEffect, useRef, useState } from 'react'

const ITEMS = [
  { id: 1,  icon: '🎭', label: 'Annual Day 2024',    cat: 'events',   color: 'linear-gradient(135deg,#ff9a3c,#c85a00)' },
  { id: 2,  icon: '🏆', label: 'Sports Day',          cat: 'sports',   color: 'linear-gradient(135deg,#4a90e2,#1a4a8a)' },
  { id: 3,  icon: '🔬', label: 'Science Fair',        cat: 'academic', color: 'linear-gradient(135deg,#50c878,#1a6b3a)' },
  { id: 4,  icon: '🎨', label: 'Art Exhibition',      cat: 'cultural', color: 'linear-gradient(135deg,#9b59b6,#4a1a6b)' },
  { id: 5,  icon: '⚽', label: 'Football Match',      cat: 'sports',   color: 'linear-gradient(135deg,#e74c3c,#8b0000)' },
  { id: 6,  icon: '🎓', label: 'Graduation Day',      cat: 'events',   color: 'linear-gradient(135deg,#f39c12,#7d5a00)' },
  { id: 7,  icon: '🌿', label: 'Nature Walk',         cat: 'academic', color: 'linear-gradient(135deg,#1abc9c,#0a5c4a)' },
  { id: 8,  icon: '🎪', label: "Founder's Carnival",  cat: 'cultural', color: 'linear-gradient(135deg,#e8720c,#6b2d00)' },
  { id: 9,  icon: '♟️', label: 'Chess Championship', cat: 'sports',   color: 'linear-gradient(135deg,#8e44ad,#3b1a5a)' },
  { id: 10, icon: '🎤', label: 'Cultural Fest',       cat: 'cultural', color: 'linear-gradient(135deg,#e67e22,#7d3a00)' },
  { id: 11, icon: '🏅', label: 'Award Ceremony',      cat: 'events',   color: 'linear-gradient(135deg,#d4ac0d,#7d6300)' },
  { id: 12, icon: '📚', label: 'Book Fair',           cat: 'academic', color: 'linear-gradient(135deg,#2980b9,#0a3d6b)' },
]

const FILTERS = [
  { id: 'all',      label: 'All' },
  { id: 'events',   label: 'Events' },
  { id: 'sports',   label: 'Sports' },
  { id: 'academic', label: 'Academic' },
  { id: 'cultural', label: 'Cultural' },
]

function GalleryItem({ item, visible, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 16,
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        height: 140,
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0.95)',
        transition: `all 0.5s ease ${index * 0.06}s`,
      }}
    >
      {/* Background */}
      <div style={{
        width: '100%', height: '100%',
        background: item.color,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 32,
        transform: hovered ? 'scale(1.08)' : 'scale(1)',
        transition: 'transform 0.4s ease',
      }}>
        {item.icon}
      </div>

      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(26,15,0,0.85), transparent 60%)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
        display: 'flex', alignItems: 'flex-end',
        padding: 16,
      }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'white' }}>{item.label}</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginTop: 2, textTransform: 'capitalize' }}>{item.cat}</div>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [visible,   setVisible]   = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
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

  const filtered = activeFilter === 'all'
    ? ITEMS
    : ITEMS.filter(item => item.cat === activeFilter)

  return (
    <section
      id="gallery"
      ref={ref}
      style={{ background: 'white', padding: '100px 0', fontFamily: "'Segoe UI', system-ui, sans-serif" }}
    >
      <div style={{ width: '90%', margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', marginBottom: 36,
          flexWrap: 'wrap', gap: 16,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ width: 24, height: 2, background: '#E8720C', display: 'inline-block' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#E8720C', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                Gallery
              </span>
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 42px)', fontWeight: 900, color: '#1a0f00', lineHeight: 1.1 }}>
              Our School{' '}
              <span style={{ color: '#E8720C', fontStyle: 'italic' }}>Memories</span>
            </h2>
          </div>
          <p style={{ fontSize: 14, color: '#7a5c48', maxWidth: 300, lineHeight: 1.7 }}>
            A glimpse into the vibrant life at Saffron Public School.
          </p>
        </div>

        {/* Filters */}
        <div style={{
          display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.6s ease 0.1s',
        }}>
          {FILTERS.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              style={{
                padding: '8px 18px', borderRadius: 100,
                fontSize: 13, fontWeight: 600,
                border: '1.5px solid',
                borderColor: activeFilter === f.id ? '#E8720C' : 'rgba(232,114,12,0.2)',
                background: activeFilter === f.id ? '#E8720C' : 'transparent',
                color: activeFilter === f.id ? 'white' : '#7a5c48',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { if (activeFilter !== f.id) { e.currentTarget.style.borderColor = '#E8720C'; e.currentTarget.style.color = '#E8720C' } }}
              onMouseLeave={e => { if (activeFilter !== f.id) { e.currentTarget.style.borderColor = 'rgba(232,114,12,0.2)'; e.currentTarget.style.color = '#7a5c48' } }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 12,
        }}
          className="gallery-grid"
        >
          {filtered.map((item, i) => (
            <GalleryItem key={item.id} item={item} visible={visible} index={i} />
          ))}
        </div>

        {/* View More */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 36 }}>
          <button
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 28px',
              border: '1.5px solid rgba(232,114,12,0.3)',
              borderRadius: 10, fontSize: 14, fontWeight: 600,
              color: btnHovered ? 'white' : '#E8720C',
              background: btnHovered ? '#E8720C' : 'transparent',
              borderColor: btnHovered ? '#E8720C' : 'rgba(232,114,12,0.3)',
              cursor: 'pointer', transition: 'all 0.2s',
            }}
          >
            View Full Gallery
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

      </div>

      <style>{`
        .gallery-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}