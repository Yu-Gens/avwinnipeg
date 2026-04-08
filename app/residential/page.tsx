import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Residential AV Installation Winnipeg',
  description:
    'TV mounting, home theater, and audio system installation for Winnipeg homeowners. Clean, professional work with cable concealment. Call Koshuta AV for a free quote.',
}

const gallery = [
  { src: '/images/residential/res-1.jpg', alt: 'TV mounted above fireplace with soundbar installation Winnipeg' },
  { src: '/images/residential/res-2.jpg', alt: 'TV installed in custom built-in entertainment unit Winnipeg' },
  { src: '/images/residential/res-3.jpg', alt: 'TV mounted in modern entertainment wall unit Winnipeg' },
  { src: '/images/residential/res-4.jpg', alt: 'TV installation on stone fireplace wall Winnipeg' },
  { src: '/images/residential/res-5.jpg', alt: 'Large TV mounted above stone fireplace Winnipeg home' },
  { src: '/images/residential/res-6.jpg', alt: 'TV mounted on dark tile accent wall Winnipeg' },
]

const features = [
  {
    title: 'TV Mounting',
    desc: 'Any size, any wall. We mount your TV perfectly level at the right height, with all cables hidden.',
  },
  {
    title: 'Cable Concealment',
    desc: 'No visible wires. We run cables inside the wall or in a clean conduit for a finished look.',
  },
  {
    title: 'Soundbar Setup',
    desc: 'Soundbar mounting and integration with your TV — no loose cables, no clutter.',
  },
  {
    title: 'Home Theater',
    desc: 'Full home theater design: projector, screen, surround sound, and smart control.',
  },
  {
    title: 'Whole-Home Audio',
    desc: 'In-ceiling speakers and multi-zone audio so you have music wherever you want it.',
  },
  {
    title: 'Smart Home AV',
    desc: 'Control everything from one app or remote — lights, audio, TV, and more.',
  },
]

export default function ResidentialPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
        <Image
          src="/images/residential/res-5.jpg"
          alt="Residential TV installation in Winnipeg home"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gray-900/60" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">For Homeowners</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Residential AV Installation</h1>
          <p className="text-gray-200 text-lg max-w-xl mx-auto">
            Beautiful, clean AV installs for Winnipeg homes — from a single TV to a full home theater.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">What We Offer for Your Home</h2>
            <p className="section-subtitle">
              Every residential installation is treated with the same care — your walls, floors, and furniture are protected throughout.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="w-2 h-8 bg-blue-600 rounded-full mb-4" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Residential Portfolio</h2>
            <p className="section-subtitle">Real projects completed in Winnipeg homes.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gallery.map((img, i) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group bg-gray-200">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={i < 4 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">How It Works</h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '01', title: 'Contact Us', desc: 'Call or email to describe your project. We\'ll ask a few quick questions.' },
              { step: '02', title: 'Free Quote', desc: 'We provide a clear, itemized quote with no hidden fees.' },
              { step: '03', title: 'Installation Day', desc: 'We arrive on time, complete the job cleanly, and walk you through everything.' },
              { step: '04', title: 'Enjoy', desc: 'Your AV system is ready. We don\'t leave until you\'re 100% happy.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <span className="text-5xl font-bold text-blue-100 flex-shrink-0 w-16 text-center">{item.step}</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-xl mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8">Call us or send an email — we'll give you a free quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+12042293457" className="bg-white text-blue-700 font-bold px-5 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-50 transition-colors">
              Call (204) 229-3457
            </a>
            <a href="mailto:koshutayurii@gmail.com" className="border-2 border-white text-white font-bold px-5 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-blue-700 transition-colors">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
