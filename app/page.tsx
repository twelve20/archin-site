import {
  Hero,
  Categories,
  Benefits,
  PopularProducts,
  AboutBrand,
  CTASection,
} from "@/components/sections";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OLNAST",
  legalName: "ООО «ОЛНАСТ ГРУПП»",
  description:
    "Официальный дилер строительных материалов Archin в Москве и Московской области. Штукатурки, шпатлёвки, декоративные покрытия, краски, грунтовки, плиточные клеи, гидроизоляция.",
  url: "https://olnast.ru",
  telephone: "+7 (963) 927-31-24",
  email: "olnast.ru@yandex.ru",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Москва и Московская область",
    addressCountry: "RU",
  },
  openingHours: "Mo-Su 08:00-20:00",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Categories />
      <Benefits />
      <PopularProducts />
      <AboutBrand />
      <CTASection />
    </>
  );
}
