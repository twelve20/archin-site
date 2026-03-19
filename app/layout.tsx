import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sloyi.ru"),
  title: {
    default: "SLOI — Официальный дилер Archin в Москве и МО | Строительные материалы",
    template: "%s | SLOI — дилер Archin",
  },
  description:
    "SLOI (ООО «ОЛНАСТ ГРУПП») — официальный дилер строительных материалов Archin в Москве и Московской области. Штукатурки, шпатлёвки, декоративные покрытия, краски, грунтовки, плиточные клеи, гидроизоляция. Дилерские цены, доставка.",
  keywords: [
    "Archin",
    "Архин",
    "официальный дилер Archin",
    "строительные материалы Москва",
    "штукатурка Archin",
    "шпатлёвка Archin",
    "декоративная штукатурка",
    "краска Archin",
    "грунтовка Archin",
    "плиточный клей",
    "гидроизоляция",
    "купить Архин Москва",
    "строительные смеси купить",
    "штукатурка купить Москва",
    "шпатлёвка купить Москва",
    "SLOI",
    "ОЛНАСТ ГРУПП",
  ],
  alternates: {
    canonical: "https://sloyi.ru",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://sloyi.ru",
    siteName: "SLOI",
    title: "SLOI — Официальный дилер Archin в Москве и МО",
    description:
      "ООО «ОЛНАСТ ГРУПП» — официальный дилер ТМ Archin. Штукатурки, шпатлёвки, декоративные покрытия, краски, грунтовки, плиточные клеи, гидроизоляция. Дилерские цены, доставка.",
    images: [
      {
        url: "https://sloyi.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "SLOI — Официальный дилер строительных материалов Archin в Москве",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SLOI — Официальный дилер Archin в Москве и МО",
    description:
      "Строительные материалы Archin: штукатурки, шпатлёвки, краски, грунтовки. Дилерские цены.",
    images: ["https://sloyi.ru/og-image.png"],
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
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-120x120.png", type: "image/png", sizes: "120x120" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    yandex: "afb9227792562e64",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon-120x120.png" type="image/png" sizes="120x120" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=107070425', 'ym');
            ym(107070425, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/107070425" style={{position: "absolute", left: "-9999px"}} alt="" />
          </div>
        </noscript>
      </head>
      <body className="font-sans antialiased bg-warm text-text">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
