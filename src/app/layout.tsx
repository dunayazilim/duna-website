import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dunayazilim.com.tr"),
  title: {
    default: "Duna Yazılım",
    template: "%s | Duna Yazılım",
  },
  description:
    "App studio in Budapest and Istanbul. We build and publish our own mobile apps, and mobile MVPs for early-stage B2B SaaS startups. React Native, Node.js, Next.js.",
  keywords: [
    "app studio",
    "mobile app studio",
    "uygulama stüdyosu",
    "mobil uygulama stüdyosu",
    "mobil uygulama geliştirme",
    "iOS app development",
    "ViewMET",
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
    title: "Duna Yazılım",
    description:
      "App studio in Budapest and Istanbul. We build and publish our own mobile apps, and mobile MVPs for early-stage B2B SaaS startups.",
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
    title: "Duna Yazılım",
    description:
      "App studio in Budapest and Istanbul. We build and publish our own mobile apps, and mobile MVPs for early-stage B2B SaaS startups.",
    images: ["/Logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Duna Yazılım Danışmanlık Limited Şirketi",
  alternateName: ["Duna Yazılım", "Duna Software", "Duna Yazılım Danışmanlık"],
  description:
    "App studio building and publishing its own mobile apps, and product engineering for early-stage B2B SaaS companies.",
  url: "https://dunayazilim.com.tr",
  logo: "https://dunayazilim.com.tr/Logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "emirsurmen@gmail.com",
    contactType: "customer service",
    availableLanguage: ["Turkish", "English"],
  },
  sameAs: ["https://apps.apple.com/us/developer/emir-surmen/id1640995227"],
};

/* Apps published under the Duna Yazılım name. Add an entry per release. */
const appsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Apps by Duna Yazılım",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "MobileApplication",
        name: "ViewMET: Metropolitan Museum",
        applicationCategory: "EducationApplication",
        operatingSystem: "iOS",
        url: "https://apps.apple.com/us/app/viewmet-metropolitan-museum/id6761077023",
        publisher: {
          "@type": "Organization",
          name: "Duna Yazılım Danışmanlık Limited Şirketi",
        },
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appsJsonLd) }}
        />
      </body>
    </html>
  );
}
