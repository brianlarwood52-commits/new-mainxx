import type { Metadata } from 'next'
import { ThemeProvider } from '@/context/ThemeContext'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Stars from '@/components/Stars'
import './globals.css'

export const metadata: Metadata = {
  title: 'Running to God | A Journey of Faith',
  description: 'A Christian ministry born from a road trip across the Nullarbor. Finding God on dusty roads, under starlit skies, and around the campfire. From Perth to Port Lincoln, discover faith through the journey.',
  keywords: ['Christian ministry', 'faith journey', 'Nullarbor', 'road trip', 'devotions', 'spiritual growth', 'Australia'],
  authors: [{ name: 'Running to God Ministry' }],
  openGraph: {
    title: 'Running to God | A Journey of Faith',
    description: 'A Christian ministry born from a road trip across the Nullarbor. Finding God on the open road.',
    type: 'website',
  },
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
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <Stars />
          <Navigation />
          <main className="flex-1 relative z-10 pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
