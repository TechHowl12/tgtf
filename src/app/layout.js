import AOSProvider from "./components/AosProvider";
import FacebookPixel from "./components/FacebookPixel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsAppFloat from "./components/Whatsapp";
import "./globals.css";
import Script from "next/script";

const siteUrl = "https://gypsytravelfestival.com";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="g9uUeml4Don2wZ5FAgDLqWRk_JhXHJVMkYpTDZN0c_c" />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Syncopate:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* Google Analytics - Existing */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JJZKYYZ79T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JJZKYYZ79T');
          `}
        </Script>

        {/* Google Analytics - NEW (G-CZBVRTVJ1E) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CZBVRTVJ1E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-secondary" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CZBVRTVJ1E');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1198318818898976');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P7J3VCWZ');
          `}
        </Script>
      </head>

      <body>
        {/* Google Tag Manager (noscript) */}      
        <noscript> 
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P7J3VCWZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Meta Pixel noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1198318818898976&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <FacebookPixel />

        <AOSProvider>
          <Navbar />
          {children}
          <Footer />
        </AOSProvider>

        <WhatsAppFloat />
      </body>
    </html>
  );
}
