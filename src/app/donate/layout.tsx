import React from 'react'

export const metadata = {
  title: 'Donate — MuLearn',
  description: 'Support MuLearn — help us sustain our mission to foster innovation, introduce new technologies, and develop skilled entrepreneurs.',
  openGraph: {
    title: 'Donate — MuLearn',
    description: 'Support MuLearn — help us sustain our mission to foster innovation and entrepreneurship.',
    url: 'https://mulearn.org/donate',
    siteName: 'MuLearn',
    images: [
      {
        url: 'https://mulearn.org/assets/donate/heroImg.webp',
        width: 1200,
        height: 630,
        alt: 'Donate to MuLearn'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Donate — MuLearn',
    description: 'Support MuLearn — help us sustain our mission to foster innovation and entrepreneurship.'
  }
}

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="donate-layout">
      {children}
    </section>
  )
}
