import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Koshuta AV | Winnipeg AV Installer',
  description:
    'Learn about Koshuta AV — a professional AV installation company based in Winnipeg, Manitoba. Serving residential and commercial clients across the city.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Built on Quality & Precision</h1>
          <p className="text-gray-300 text-lg">
            Koshuta AV is a locally owned AV installation company serving homeowners and businesses throughout Winnipeg, Manitoba.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Winnipeg's Trusted AV Installer</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Koshuta AV was founded with a simple mission: deliver professional-grade AV installations that look great, work reliably, and are built to last. Based in Winnipeg, we serve clients across the city and surrounding areas — from downtown condos to suburban homes and corporate offices.
                </p>
                <p>
                  Every project, large or small, receives the same level of care and attention to detail. We take pride in clean work — cables are hidden, mounts are perfectly level, and we leave no mess behind. We don't consider the job done until you're completely satisfied.
                </p>
                <p>
                  Whether you need a single TV mounted in your living room or a full commercial AV system for your office, Koshuta AV has the expertise and tools to get it done right.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/commercial/com-4.jpg"
                alt="Professional AV installation by Koshuta AV in Winnipeg boardroom"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Why Clients Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Precision',
                desc: 'Perfectly level mounts, clean lines, and zero visible wires. Every time.',
              },
              {
                icon: '🛡️',
                title: 'Reliability',
                desc: 'We show up on time, do what we said we\'d do, and stand behind our work.',
              },
              {
                icon: '🧹',
                title: 'Clean Work',
                desc: 'We protect your space and leave it cleaner than we found it.',
              },
              {
                icon: '📍',
                title: 'Local',
                desc: 'Winnipeg-based and proud. We\'re your neighbours — and we treat you like it.',
              },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                <span className="text-4xl mb-4 block">{v.icon}</span>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="section-title">Service Area</h2>
          <p className="section-subtitle mb-8">
            We serve Winnipeg and surrounding communities in Manitoba.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Downtown Winnipeg', 'River Heights', 'St. Vital', 'St. Boniface',
              'Transcona', 'Charleswood', 'Tuxedo', 'Fort Garry',
              'Steinbach', 'Selkirk', 'Portage la Prairie', 'Surrounding areas',
            ].map((area) => (
              <span key={area} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-blue-100 mb-8">Call or email to get your free project quote.</p>
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
