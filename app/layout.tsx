import type { Metadata } from "next"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.downhomedisposal.com"),
  title: {
    default: "Residential Trash Pickup Middle Tennessee | Down Home Disposal Franklin TN",
    template: "%s | Down Home Disposal",
  },
  description: "Affordable residential trash pickup service in Franklin, Thompson's Station, Spring Hill, Columbia, and Pulaski TN. Weekly curbside garbage collection $27/month with free 96-gallon cart. Serving rural Middle Tennessee.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.downhomedisposal.com",
    siteName: "Down Home Disposal",
    title: "Residential Trash Pickup Middle Tennessee | Down Home Disposal Franklin TN",
    description: "Affordable residential trash pickup service in Franklin, Thompson's Station, Spring Hill, Columbia, and Pulaski TN. Weekly curbside garbage collection $27/month with free 96-gallon cart.",
    images: [
      {
        url: "/truck.webp",
        width: 1200,
        height: 630,
        alt: "Down Home Disposal garbage truck serving Middle Tennessee",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    other: {
      "msvalidate.01": "2916FEACAE73631176515AA69591D7B4",
    },
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
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WXD599HF');`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-13N50DM7E2"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-13N50DM7E2');`}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WXD599HF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
