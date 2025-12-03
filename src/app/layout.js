import AOSProvider from './components/AosProvider'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import WhatsAppFloat from './components/Whatsapp'
import './globals.css'

const siteUrl = "https://gypsytravelfestival.com"

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "TGTF | The Gypsy Travel Festival",
    template: "%s | TGTF",
  },

  description:
    "The Gypsy Travel Festival brings you global experiences, cuisines, and cultures.",

  keywords: [
    "Gypsy Travel Festival",
    "travel festival",
    "culture festival",
    "food festival",
    "music festival",
    "TGTF 2026",
  ],

  icons: {
    icon: "/favicon.ico",     
    shortcut: "/favicon.ico",
  },

  openGraph: {
    title: "TGTF | The Gypsy Travel Festival",
    description:
      "The Gypsy Travel Festival brings you global experiences, cuisines, and cultures.",
    url: siteUrl,
    siteName: "The Gypsy Travel Festival",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "The Gypsy Travel Festival",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Syncopate:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AOSProvider>
          <Navbar />
          {children}
          <Footer />
        </AOSProvider>

        <WhatsAppFloat />
      </body>
    </html>
  )
}
