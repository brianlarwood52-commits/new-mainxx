import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@/context/ThemeContext'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ServiceWorkerRegister from '@/components/ServiceWorkerRegister'
import ParallaxStars from '@/components/ParallaxStars'
import './globals.css'

export const metadata: Metadata = {
  title: 'Running to God | A Journey Across the Australian Outback',
  description: 'A documentary journey across the Australian outback. 6,859 kilometres of dust, stars, and finding the way back to what matters. From Swan View to Port Lincoln and back via Esperance.',
  keywords: ['Christian ministry', 'faith journey', 'Nullarbor', 'road trip', 'Australian outback', 'devotions', 'spiritual growth'],
  authors: [{ name: 'Running to God Ministry' }],
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Running to God',
  },
  openGraph: {
    title: 'Running to God | A Journey Across the Australian Outback',
    description: '6,859 kilometres of dust, stars, and finding the way back to what matters.',
    type: 'website',
    images: ['/images/running-to-god-logo-small.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0891b2',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="apple-touch-icon" href="/images/running-to-god-logo-small.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-stone-950 text-stone-200">
        <ThemeProvider>
          <ParallaxStars />
          <Navigation />
          <main className="flex-1 relative z-10 pt-16">
            {children}
          </main>
          <Footer />
          <ServiceWorkerRegister />
        </ThemeProvider>
      </body>
    </html>
  )
}
