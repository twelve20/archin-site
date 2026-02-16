import type { Metadata } from "next";
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
    default: "SLOI — Официальный дилер Archin в Москве и МО",
    template: "%s | SLOI — дилер Archin",
  },
  description:
    "SLOI (ООО «ОЛНАСТ ГРУПП») — официальный дилер строительных материалов Archin в Москве и Московской области. Штукатурки, шпатлёвки, декоративные покрытия, краски, грунтовки, плиточные клеи, гидроизоляция. Дилерские цены.",
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
    "SLOI",
    "ОЛНАСТ ГРУПП",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "SLOI",
    title: "SLOI — Официальный дилер Archin в Москве и МО",
    description:
      "ООО «ОЛНАСТ ГРУПП» — официальный дилер ТМ Archin. Штукатурки, шпатлёвки, декоративные покрытия, краски, грунтовки, плиточные клеи, гидроизоляция. Дилерские цены.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased bg-warm text-text">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
