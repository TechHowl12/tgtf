import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'TGTF | The Gypsy Travel Festival',
  description: 'The Gypsy Travel Festival',
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
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
