import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Koshuta AV | Professional AV Installation Winnipeg',
  description:
    'Koshuta AV provides expert TV mounting, home theater, audio systems, and video conferencing installation in Winnipeg, MB. Get a free quote today.',
}

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'TV Mounting & Installation',
    description: 'Professional TV mounting on any wall surface — drywall, brick, stone, or concrete. We hide all cables for a clean, finished look.',
    href: '/services#tv',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Home Theater',
    description: 'Custom home theater design and installation — projectors, screens, surround sound, acoustic treatment, and full automation.',
    href: '/services#theater',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    title: 'Audio Systems',
    description: 'Whole-home or room audio solutions — multi-zone speakers, soundbars, amplifiers, and wireless systems for perfect sound everywhere.',
    href: '/services#audio',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.81v6.38a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Video Conferencing',
    description: 'Professional boardroom and meeting room AV systems — cameras, microphones, displays, and control panels for seamless remote collaboration.',
    href: '/services#conferencing',
  },
]

const stats = [
  { value: '200+', label: 'Projects Completed' },
  { value: '5★', label: 'Average Rating' },
  { value: '5+', label: 'Years in Winnipeg' },
  { value: '2', label: 'Segments Served' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Background image — kept dim so overlays control final look */}
        <Image
          src="/images/commercial/com-3.jpg"
          alt="Large LED video wall installation in Winnipeg conference room by Koshuta AV"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        {/* Main dark overlay — makes all text readable */}
        <div className="absolute inset-0 bg-gray-900/65" />
        {/* Right-side gradient — hides Canada Life podium on the right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to left, rgba(17,24,39,0.98) 0%, rgba(17,24,39,0.9) 10%, rgba(17,24,39,0.5) 28%, transparent 45%)',
          }}
        />
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-gray-900/30" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-4">
            Winnipeg, Manitoba
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Professional AV Installation
            <span className="block text-blue-400 mt-2">You Can Trust</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Expert TV mounting, home theaters, audio systems, and video conferencing
            for homes and businesses across Winnipeg.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:koshutayurii@gmail.com" className="btn-primary text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-4">
              koshutayurii@gmail.com
            </a>
            <Link href="/services" className="btn-outline text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-4">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-700 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold">{stat.value}</p>
                <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">What We Install</h2>
            <p className="section-subtitle">
              From a single TV to a full commercial AV system — we handle everything
              with clean workmanship and zero mess left behind.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                  {service.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-primary">
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Who We Serve</h2>
            <p className="section-subtitle">
              We bring the same attention to detail to every project, whether it's a cozy living room or a large corporate boardroom.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Residential */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group aspect-[4/3] sm:h-80 sm:aspect-auto">
              <Image
                src="/images/residential/res-5.jpg"
                alt="Residential TV installation Winnipeg - large TV above fireplace"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-blue-300 text-xs font-semibold uppercase tracking-widest mb-1">For Homeowners</p>
                <h3 className="text-2xl font-bold mb-2">Residential</h3>
                <p className="text-gray-300 text-sm mb-4">TV mounting, home theaters, and audio for your home.</p>
                <Link href="/residential" className="text-blue-300 font-semibold text-sm hover:text-white transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Commercial */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group aspect-[4/3] sm:h-80 sm:aspect-auto">
              <Image
                src="/images/commercial/com-3.jpg"
                alt="Commercial AV installation Winnipeg - LED video wall in conference room"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-blue-300 text-xs font-semibold uppercase tracking-widest mb-1">For Businesses</p>
                <h3 className="text-2xl font-bold mb-2">Commercial</h3>
                <p className="text-gray-300 text-sm mb-4">Boardrooms, conference rooms, and large-scale AV systems.</p>
                <Link href="/commercial" className="text-blue-300 font-semibold text-sm hover:text-white transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Recent Projects</h2>
            <p className="section-subtitle">A look at some of our completed installations across Winnipeg.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/images/residential/res-1.jpg', alt: 'TV mounting above fireplace with soundbar, Winnipeg' },
              { src: '/images/commercial/com-2.jpg', alt: 'Commercial AV installation, Winnipeg conference room' },
              { src: '/images/residential/res-6.jpg', alt: 'TV installation on dark wall, Winnipeg' },
              { src: '/images/commercial/com-1.jpg', alt: 'Commercial AV displays in office, Winnipeg' },
              { src: '/images/residential/res-2.jpg', alt: 'TV in built-in entertainment unit, Winnipeg' },
              { src: '/images/commercial/com-4.jpg', alt: 'Boardroom AV installation, Winnipeg' },
            ].map((img, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden group bg-gray-200">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  loading={i < 3 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Upgrade Your Space?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Call us or send an email — we'll discuss your project and provide a free, no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12042293457"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (204) 229-3457
            </a>
            <a
              href="mailto:koshutayurii@gmail.com"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-700 transition-colors text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
