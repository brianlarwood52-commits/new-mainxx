import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0ea5e9',
}

export const metadata: Metadata = {
  title: {
    default: 'Running to God - A Journey of Faith Through the Australian Outback',
    template: '%s | Running to God',
  },
  description: 'An Australian outback road trip from Perth to Port Lincoln, exploring faith, relationship with Jesus, and the spiritual journey of running to God.',
  keywords: ['Christian', 'faith', 'Jesus', 'Australian outback', 'road trip', 'Bible study', 'devotionals', 'Perth', 'Port Lincoln', 'Nullarbor'],
  authors: [{ name: 'Running to God Ministry' }],
  creator: 'Running to God Ministry',
  publisher: 'Running to God Ministry',
  applicationName: 'Running to God',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: 'Running to God',
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'Running to God',
    title: 'Running to God - A Journey of Faith',
    description: 'An Australian outback road trip exploring faith and relationship with Jesus.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Running to God - A Journey of Faith',
    description: 'An Australian outback road trip exploring faith and relationship with Jesus.',
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
    <html lang="en">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Running to God" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
