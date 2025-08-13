import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: {
    default: "Empresa Eléctrica Villavicencio",
    template: "%s | Eléctricos Meta",
  },
  description: "Instalaciones y mantenimiento eléctrico en Villavicencio, Meta. Atención 24/7.",
  openGraph: {
    title: "Empresa Eléctrica Villavicencio",
    description: "Instalaciones y mantenimiento eléctrico en Villavicencio, Meta. Atención 24/7.",
    url: "https://tu-dominio.com",
    siteName: "Eléctricos Meta",
    images: [
      {
        url: "https://tu-dominio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Logo Eléctricos Meta",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Empresa Eléctrica Villavicencio",
    description: "Instalaciones y mantenimiento eléctrico en Villavicencio, Meta. Atención 24/7.",
    images: ["https://tu-dominio.com/twitter-card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CO">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Electrician",
              name: "Eléctricos Meta",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle Falsa 123",
                addressLocality: "Villavicencio",
                addressRegion: "Meta",
                addressCountry: "CO",
              },
              telephone: "+57 123 4567890",
              areaServed: "Villavicencio",
              openingHours: "Mo,Tu,We,Th,Fr 08:00-18:00",
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
