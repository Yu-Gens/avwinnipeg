import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Koshuta AV | Winnipeg AV Installation',
  description:
    'Contact Koshuta AV for professional AV installation in Winnipeg, MB. Call (204) 229-3457 or email koshutayurii@gmail.com for a free quote.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-gray-300 text-lg">
            Have a project in mind? Call or email us — we respond quickly and provide free quotes.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Phone */}
            <a
              href="tel:+12042293457"
              className="group bg-white border-2 border-gray-100 rounded-2xl p-8 text-center hover:border-blue-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-600 transition-colors">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h2 className="font-bold text-gray-900 text-lg mb-1">Call Us</h2>
              <p className="text-blue-600 font-semibold text-xl">+1 (204) 229-3457</p>
              <p className="text-gray-500 text-sm mt-2">Mon–Fri 8am–6pm, Sat 9am–4pm</p>
            </a>

            {/* Email */}
            <a
              href="mailto:koshutayurii@gmail.com"
              className="group bg-white border-2 border-gray-100 rounded-2xl p-8 text-center hover:border-blue-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-600 transition-colors">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="font-bold text-gray-900 text-lg mb-1">Email Us</h2>
              <p className="text-blue-600 font-semibold break-all">koshutayurii@gmail.com</p>
              <p className="text-gray-500 text-sm mt-2">We respond within 24 hours</p>
            </a>

            {/* Location */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="font-bold text-gray-900 text-lg mb-1">Location</h2>
              <p className="text-gray-700 font-semibold">Winnipeg, Manitoba</p>
              <p className="text-gray-500 text-sm mt-2">Serving all of Winnipeg & area</p>
            </div>
          </div>

          {/* What to Include */}
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">When You Contact Us, Please Include:</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
              {[
                'Type of project (TV mounting, home theater, commercial, etc.)',
                'Approximate TV or screen size (if applicable)',
                'Wall type (drywall, brick, stone, tile)',
                'Your location in Winnipeg',
                'Preferred date or timeframe',
                'Any specific requirements or questions',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Business Hours</h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            {[
              { day: 'Monday – Friday', hours: '8:00 AM – 6:00 PM' },
              { day: 'Saturday', hours: '9:00 AM – 4:00 PM' },
              { day: 'Sunday', hours: 'By appointment' },
            ].map((row, i) => (
              <div
                key={row.day}
                className={`flex justify-between items-center px-6 py-4 text-sm ${
                  i < 2 ? 'border-b border-gray-100' : ''
                }`}
              >
                <span className="font-medium text-gray-700">{row.day}</span>
                <span className="text-blue-600 font-semibold">{row.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
