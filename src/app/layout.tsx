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
    default: "GIA - Soluciones en Energía Renovable",
    template: "%s | GIA Energía",
  },
  description: "Expertos en soluciones de energía solar y renovable. Transformamos el futuro energético con instalaciones sostenibles y eficientes para hogares y empresas.",
  openGraph: {
    title: "GIA - Soluciones en Energía Renovable",
    description: "Expertos en soluciones de energía solar y renovable. Transformamos el futuro energético con instalaciones sostenibles y eficientes para hogares y empresas.",
    url: "   ",
    siteName: "GIA Energía",
    images: [
      {
        url: "https://gia-energia.com/icon/fullIconBlack.png",
        width: 1200,
        height: 630,
        alt: "GIA Energía Renovable",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GIA - Soluciones en Energía Renovable",
    description: "Expertos en soluciones de energía solar y renovable. Diseñamos el futuro energético con tecnología sostenible.",
    images: ["  "],
  },
  keywords: [
    "energía renovable",
    "paneles solares",
    "energía solar",
    "sostenibilidad",
    "eficiencia energética",
    "instalación solar",
    "ahorro energético",
    "energía limpia"
  ],
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
              "@type": "EnergyProvider",
              name: "GIA Energía",
              description: "Empresa especializada en soluciones de energía renovable y sostenible",
              image: "https://gia-energia.com/assets/images/icon/fullIconBlack.png",
              url: "https://gia-energia.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "CO"
              },
              sameAs: [
                "https://www.linkedin.com/company/gia-energia",
                "https://www.instagram.com/gia.energia"
              ],
              areaServed: "Colombia",
              priceRange: "$$",
              additionalType: "SolarEnergyContractor",
              knowsAbout: [
                "Energía Solar",
                "Paneles Solares",
                "Energía Renovable",
                "Eficiencia Energética"
              ]
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
