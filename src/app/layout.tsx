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
  metadataBase: new URL("https://www.giaenergy.com"),
  title: {
    default: "GIA Energy — Energía Solar para Colombia",
    template: "%s | GIA Energy"
  },
  description: "Soluciones solares para hogares y empresas. Diseñamos e instalamos sistemas solares eficientes y sostenibles en Colombia.",
  
  openGraph: {
    title: "GIA Energy — Energía Solar para Colombia",
    description: "Instalamos sistemas solares para hogares y empresas en Colombia, ayudándote a reducir tu factura de energía y lograr independencia eléctrica. Proyectos certificados, monitoreo 24/7 y soluciones sostenibles adaptadas a tus necesidades.",
    url: "https://www.giaenergy.com",
    siteName: "GIA Energy",
    images: [
      {
        url: "https://gia-website-content.s3.us-east-1.amazonaws.com/fullIconBlack.png",
        width: 1200,
        height: 630,
        alt: "GIA Energy"
      },
      {
        url: "https://gia-website-content.s3.us-east-1.amazonaws.com/fullIconWhite.png",
        width: 1200,
        height: 630,
        alt: "GIA Energy"
      }
    ],
    type: "website",
    locale: "es_CO",
  },

  twitter: {
    card: "summary_large_image",
    title: "GIA Energy — Energía Solar",
    description: "Energía solar sostenible para hogares y empresas.",
    images: [
      "https://gia-website-content.s3.us-east-1.amazonaws.com/fullIconBlack.png",
      "https://gia-website-content.s3.us-east-1.amazonaws.com/fullIconWhite.png"
    ],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CO">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "SolarEnergyContractor"],
              "name": "GIA Energy",
              "url": "https://www.giaenergy.com",
              "logo": "https://gia-website-content.s3.us-east-1.amazonaws.com/giaIconBlack.png",
              "image": "https://gia-website-content.s3.us-east-1.amazonaws.com/fullIconBlack.png",
              "description": "Instalamos sistemas solares para hogares y empresas en Colombia, ayudándote a reducir tu factura de energía y lograr independencia eléctrica. Proyectos certificados, monitoreo 24/7 y soluciones sostenibles adaptadas a tus necesidades.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CO"
              },
              "areaServed": "Colombia",
              "sameAs": [
                "https://www.linkedin.com/company/gia-energia",
                "https://www.instagram.com/gia.energia"
              ],
              "knowsAbout": [
                "Energía solar",
                "Paneles solares",
                "Sistemas solares",
                "Sistemas fotovoltaicos",
                "Instalación de paneles solares",
                "Eficiencia energética",
                "Almacenamiento de energía",
                "Baterías solares",
                "Sistemas On-Grid",
                "Sistemas Off-Grid",
                "Sistemas híbridos solares",
                "Autonomía energética",
                "Inversores solares",
                "Monitoreo solar 24/7",
                "Ahorro energético",
                "Energía renovable",
                "Energía limpia",
                "Proyectos solares en Colombia",
                "Energía solar para hogares",
                "Energía solar para empresas",
                "Celdas solares",
                "Microinversores solares",
                "Paneles solares en Villavicencio",
                "Instalación solar en Colombia"
              ]
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
