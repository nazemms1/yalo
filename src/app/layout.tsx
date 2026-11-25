import type { Metadata, Viewport } from "next";
import { Anton, Cairo } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { COPY } from "@/lib/copy";
import { BRAND } from "@/lib/brand";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: COPY.ar.seoTitle,
    template: "%s | YALO",
  },
  description: COPY.ar.seoDescription,
  applicationName: BRAND.name,
  keywords: ["YALO", "يالو", "streetwear Syria", "sportswear Damascus", "ستريت وير", "ملابس رياضية سوريا"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: COPY.ar.seoTitle,
    description: COPY.ar.seoDescription,
    siteName: BRAND.name,
    locale: "ar_SY",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: COPY.ar.seoTitle,
    description: COPY.ar.seoDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0c0c0c",
  width: "device-width",
  initialScale: 1,
};

/** Schema.org data built only from facts on the public account. */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND.name,
  description: BRAND.slogan,
  url: BRAND.url,
  sameAs: [BRAND.url],
  areaServed: "SY",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${anton.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
        />
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
