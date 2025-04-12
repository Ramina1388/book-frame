import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Book Recommendations',
  description: 'Get personalized book suggestions for any topic.',
  openGraph: {
    title: 'Book Recommendations',
    description: 'Find your next favorite book based on what you need now.',
    images: ['https://book-frame.vercel.app/api/og'],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': 'https://book-frame.vercel.app/api/og',
    'fc:frame:post_url': 'https://book-frame.vercel.app/api/frame',
    'fc:frame:button:1': 'Get Recommendations',
    'fc:frame:button:2': 'Surprise Me',
    'fc:frame:button:3': 'Book of the Day',
    'fc:frame:button:4': 'New Topic',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
        <meta property="og:image" content="https://book-frame.vercel.app/api/og" />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content="https://book-frame.vercel.app/api/og" />
        <meta name="fc:frame:post_url" content="https://book-frame.vercel.app/api/frame" />
        <meta name="fc:frame:button:1" content="Get Recommendations" />
        <meta name="fc:frame:button:2" content="Surprise Me" />
        <meta name="fc:frame:button:3" content="Book of the Day" />
        <meta name="fc:frame:button:4" content="New Topic" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
