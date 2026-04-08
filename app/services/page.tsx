import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'AV Installation Services Winnipeg',
  description:
    'Professional TV mounting, home theater setup, audio system installation, and video conferencing systems in Winnipeg, MB. Residential & commercial. Call Koshuta AV.',
}

const services = [
  {
    id: 'tv',
    title: 'TV Mounting & Installation',
    description:
      'We mount TVs on any surface — drywall, brick, stone, concrete, or tile. All cables are concealed inside the wall or in a clean conduit for a polished, professional look. We bring all the tools and hardware needed.',
    features: [
      'All wall types: drywall, brick, stone, tile',
      'Full cable concealment (in-wall or conduit)',
      'Gallery walls and multi-screen setups',
      'Tilt, swivel, and full-motion mounts',
      'Soundbar mounting and integration',
    ],
    image: '/images/residential/res-5.jpg',
    imageAlt: 'TV mounted above fireplace in Winnipeg home with soundbar',
  },
  {
    id: 'theater',
    title: 'Home Theater',
    description:
      'Transform any room into a cinema-quality entertainment space. We design, supply, and install complete home theater systems — from projectors and screens to acoustic panels and seating layouts.',
    features: [
      '4K projectors and large-format screens',
      'Dolby Atmos and DTS:X surround sound',
      'Acoustic treatment and room optimization',
      'Smart control (one-touch automation)',
      'Dedicated media rooms or living room setups',
    ],
    image: '/images/residential/res-2.jpg',
    imageAlt: 'Home theater TV installation in built-in entertainment wall unit, Winnipeg',
  },
  {
    id: 'audio',
    title: 'Audio Systems',
    description:
      'Perfect sound for every room. Whether you want music throughout your home, a powerful soundbar, or a distributed multi-zone audio system, we design and install it to your exact needs.',
    features: [
      'In-ceiling and in-wall speakers',
      'Whole-home multi-zone audio',
      'Soundbar and subwoofer installation',
      'Outdoor speaker systems',
      'Wireless and smart audio (Sonos, etc.)',
    ],
    image: '/images/residential/res-1.jpg',
    imageAlt: 'Soundbar and TV mounted on wall in Winnipeg home',
  },
  {
    id: 'conferencing',
    title: 'Video Conferencing',
    description:
      'Modern workplaces need professional video conferencing systems. We install boardroom AV, meeting room displays, cameras, microphones, and control systems that just work — every time.',
    features: [
      'PTZ cameras and conference microphones',
      'Large-format displays and LED video walls',
      'Room scheduling and booking panels',
      'Microsoft Teams & Zoom certified hardware',
      'Unified control panels and touch interfaces',
    ],
    image: '/images/commercial/com-4.jpg',
    imageAlt: 'Video conferencing setup in Winnipeg boardroom with large display screen',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AV Installation Services</h1>
          <p className="text-gray-300 text-lg">
            From a single TV mount to a full commercial AV deployment — we install it right the first time.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center scroll-mt-20`}
            >
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div className="relative aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Get a Free Quote</h2>
          <p className="text-blue-100 mb-8">
            Tell us about your project and we'll get back to you with a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+12042293457" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors">
              Call (204) 229-3457
            </a>
            <a href="mailto:koshutayurii@gmail.com" className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-700 transition-colors">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
