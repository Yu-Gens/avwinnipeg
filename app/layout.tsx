import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  metadataBase: new URL('https://avwinnipeg.com'),
  title: {
    default: 'Koshuta AV | Professional AV Installation in Winnipeg',
    template: '%s | Koshuta AV Winnipeg',
  },
  description:
    'Expert TV mounting, home theater, audio systems, and video conferencing installation in Winnipeg, Manitoba. Residential & commercial AV services by Koshuta AV.',
  keywords: [
    'AV installation Winnipeg',
    'TV mounting Winnipeg',
    'home theater Winnipeg',
    'audio system installation Winnipeg',
    'video conferencing Winnipeg',
    'commercial AV Winnipeg',
    'residential AV Winnipeg',
    'Koshuta AV',
  ],
  authors: [{ name: 'Koshuta AV' }],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://avwinnipeg.com',
    siteName: 'Koshuta AV',
    title: 'Koshuta AV | Professional AV Installation in Winnipeg',
    description:
      'Expert TV mounting, home theater, audio systems, and video conferencing installation in Winnipeg, Manitoba.',
    images: [
      {
        url: '/images/commercial/com-4.jpg',
        width: 1200,
        height: 630,
        alt: 'Koshuta AV - Professional AV Installation Winnipeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koshuta AV | Professional AV Installation in Winnipeg',
    description: 'Expert TV mounting, home theater, audio systems, and video conferencing in Winnipeg, MB.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Koshuta AV',
              description:
                'Professional AV installation services in Winnipeg, Manitoba. TV mounting, home theater, audio systems, and video conferencing.',
              url: 'https://avwinnipeg.com',
              telephone: '+12042293457',
              email: 'koshutayurii@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Winnipeg',
                addressRegion: 'MB',
                addressCountry: 'CA',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 49.8951,
                longitude: -97.1384,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '16:00',
                },
              ],
              priceRange: '$$',
              areaServed: {
                '@type': 'City',
                name: 'Winnipeg',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'AV Installation Services',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'TV Mounting & Installation' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Theater Setup' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Audio System Installation' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Video Conferencing Systems' } },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
