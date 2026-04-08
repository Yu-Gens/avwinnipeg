import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Commercial AV Installation Winnipeg',
  description:
    'Professional commercial AV solutions in Winnipeg — boardrooms, conference rooms, LED video walls, and full office AV systems. Koshuta AV serves businesses across Manitoba.',
}

const gallery = [
  { src: '/images/commercial/com-1.jpg', alt: 'Commercial AV installation - interactive displays in Winnipeg office' },
  { src: '/images/commercial/com-2.jpg', alt: 'LED video wall installation in Winnipeg conference room' },
  { src: '/images/commercial/com-3.jpg', alt: 'Commercial conference room with active LED video wall Winnipeg' },
  { src: '/images/commercial/com-4.jpg', alt: 'Boardroom AV setup with large display screen Winnipeg' },
]

const solutions = [
  {
    title: 'Boardroom & Meeting Rooms',
    desc: 'Full AV systems for corporate meeting rooms — displays, cameras, microphones, and unified control panels.',
    icon: '🏢',
  },
  {
    title: 'LED Video Walls',
    desc: 'Large-format LED displays for lobbies, conference rooms, and event spaces. Stunning visuals, zero bezels.',
    icon: '📺',
  },
  {
    title: 'Video Conferencing',
    desc: 'Microsoft Teams and Zoom certified systems. Crystal-clear video and audio for remote collaboration.',
    icon: '📡',
  },
  {
    title: 'Digital Signage',
    desc: 'Lobby displays, wayfinding screens, and menu boards — managed remotely from any device.',
    icon: '📋',
  },
  {
    title: 'Control & Automation',
    desc: 'One-touch room control: displays, cameras, blinds, and lighting — all from a single panel.',
    icon: '🎛️',
  },
  {
    title: 'Structured Cabling',
    desc: 'Clean, labelled cabling infrastructure built to commercial standards for long-term reliability.',
    icon: '🔌',
  },
]

export default function CommercialPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
        <Image
          src="/images/commercial/com-3.jpg"
          alt="Commercial AV installation - conference room with LED video wall, Winnipeg"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        {/* Main dark overlay */}
        <div className="absolute inset-0 bg-gray-900/65" />
        {/* Right-side gradient — hides Canada Life podium */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to left, rgba(17,24,39,0.98) 0%, rgba(17,24,39,0.9) 10%, rgba(17,24,39,0.5) 28%, transparent 45%)',
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">For Businesses</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial AV Solutions</h1>
          <p className="text-gray-200 text-lg max-w-xl mx-auto">
            Professional AV systems for Winnipeg offices, boardrooms, and commercial spaces of any size.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Commercial AV Solutions</h2>
            <p className="section-subtitle">
              We design and install AV systems that work reliably day after day — with minimal maintenance and clean, professional results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <div key={s.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Commercial Portfolio</h2>
            <p className="section-subtitle">Recent commercial AV installations completed in Winnipeg.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {gallery.map((img, i) => (
              <div key={img.src} className="relative aspect-video rounded-xl overflow-hidden shadow-lg group bg-gray-200">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  loading={i < 2 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Industries We Serve</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Corporate Offices', 'Financial Services', 'Healthcare',
              'Education', 'Hospitality', 'Retail',
              'Government', 'Non-Profit Organizations', 'Real Estate',
            ].map((industry) => (
              <span key={industry} className="px-5 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Let's Discuss Your Project</h2>
          <p className="text-gray-400 mb-8">
            Whether you're equipping one boardroom or a full office floor, we'll design the right AV solution for your budget and needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+12042293457" className="bg-blue-600 text-white font-bold px-5 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-colors">
              Call (204) 229-3457
            </a>
            <a href="mailto:koshutayurii@gmail.com" className="border-2 border-gray-600 text-white font-bold px-5 sm:px-8 py-3 sm:py-4 rounded-lg hover:border-blue-400 transition-colors">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
