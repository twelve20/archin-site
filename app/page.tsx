import {
  Hero,
  Categories,
  Benefits,
  PopularProducts,
  AboutBrand,
  CTASection,
} from "@/components/sections";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sloyi.ru/#organization",
  name: "SLOI",
  legalName: "ООО «ОЛНАСТ ГРУПП»",
  description:
    "Официальный дилер строительных материалов Archin в Москве и Московской области. Штукатурки, шпатлёвки, декоративные покрытия, краски, грунтовки, плиточные клеи, гидроизоляция.",
  url: "https://sloyi.ru",
  logo: "https://sloyi.ru/icon.ico",
  telephone: "+7 (963) 927-31-24",
  email: "olnast.ru@yandex.ru",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Москва",
    addressRegion: "Московская область",
    addressCountry: "RU",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+7-963-927-31-24",
    contactType: "sales",
    areaServed: "RU",
    availableLanguage: "Russian",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "20:00",
  },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://sloyi.ru/#website",
  name: "SLOI — Официальный дилер Archin",
  url: "https://sloyi.ru",
  publisher: {
    "@id": "https://sloyi.ru/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://sloyi.ru/catalog?category={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://sloyi.ru/#localbusiness",
  name: "SLOI — дилер строительных материалов Archin",
  description:
    "Официальный дилер строительных материалов Archin в Москве и МО. Штукатурки, шпатлёвки, краски, грунтовки, плиточные клеи, гидроизоляция по дилерским ценам.",
  url: "https://sloyi.ru",
  telephone: "+7 (963) 927-31-24",
  email: "olnast.ru@yandex.ru",
  priceRange: "₽₽",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Москва",
    addressRegion: "Московская область",
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "55.7558",
    longitude: "37.6173",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "20:00",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "55.7558",
      longitude: "37.6173",
    },
    geoRadius: "100000",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
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
