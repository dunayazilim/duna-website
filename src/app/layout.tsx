import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dunayazilim.com.tr"),
  title: {
    default: "Duna Yazılım — Mobile MVPs for B2B SaaS Startups",
    template: "%s | Duna Yazılım",
  },
  description:
    "Mobile MVPs for early-stage B2B SaaS startups. React Native + Node.js, Flutter, 8-12 week delivery. Solo full-stack, EU timezone.",
  keywords: [
    "mobile MVP",
    "B2B SaaS",
    "React Native",
    "Node.js",
    "full-stack developer",
    "mobile app development",
    "Next.js",
    "TypeScript",
    "duna yazılım",
    "duna yazılım danışmanlık",
    "duna yazılım danışmanlığı",
    "duna yazılım danışmanlık limited şirketi",
    "duna software",
    "yazılım danışmanlığı",
    "yazılım",
    "duna",
    "yazılım şirketi",
    "özel yazılım geliştirme",
    "software consultancy",
    "software development Turkey",
    "Duna Yazilim",
    "duna yazilim danismanlik",
  ],
  authors: [{ name: "Duna Yazılım Danışmanlık" }],
  creator: "Duna Yazılım Danışmanlık",
  publisher: "Duna Yazılım Danışmanlık",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://dunayazilim.com.tr",
    languages: {
      "tr-TR": "https://dunayazilim.com.tr",
      "en-US": "https://dunayazilim.com.tr",
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: "en_US",
    url: "https://dunayazilim.com.tr",
    siteName: "Duna Yazılım",
    title: "Duna Yazılım — Mobile MVPs for B2B SaaS Startups",
    description:
      "Mobile MVPs for early-stage B2B SaaS startups. React Native + Node.js, Flutter, 8-12 week delivery. Solo full-stack, EU timezone.",
    images: [
      {
        url: "/Logo.png",
        width: 480,
        alt: "Duna Yazılım Danışmanlık Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Duna Yazılım — Mobile MVPs for B2B SaaS Startups",
    description:
      "Mobile MVPs for early-stage B2B SaaS startups. React Native + Node.js, 8-12 week delivery. Solo full-stack, EU timezone.",
    images: ["/Logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Duna Yazılım Danışmanlık Limited Şirketi",
  alternateName: ["Duna Yazılım", "Duna Software", "Duna Yazılım Danışmanlık"],
  url: "https://dunayazilim.com.tr",
  logo: "https://dunayazilim.com.tr/Logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "emirsurmen@gmail.com",
    contactType: "customer service",
    availableLanguage: ["Turkish", "English"],
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
