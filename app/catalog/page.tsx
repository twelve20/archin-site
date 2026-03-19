import type { Metadata } from "next";
import { Suspense } from "react";
import { CatalogContent } from "@/components/catalog/CatalogContent";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Каталог строительных материалов Archin — купить в Москве",
  description:
    "Каталог продукции Archin: штукатурки, шпатлёвки, декоративные покрытия, краски, грунтовки, плиточные клеи, гидроизоляция. 31 продукт по дилерским ценам в Москве и МО. Доставка.",
  alternates: {
    canonical: "https://sloyi.ru/catalog",
  },
  openGraph: {
    title: "Каталог строительных материалов Archin",
    description:
      "31 продукт Archin по дилерским ценам. Штукатурки, шпатлёвки, краски, грунтовки, клеи, гидроизоляция.",
    url: "https://sloyi.ru/catalog",
    images: [
      {
        url: "https://sloyi.ru/og-image.png",
        width: 1200,
        height: 630,
        alt: "Каталог строительных материалов Archin — SLOI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Каталог строительных материалов Archin",
    description:
      "31 продукт Archin по дилерским ценам. Штукатурки, шпатлёвки, краски, грунтовки, клеи, гидроизоляция.",
    images: ["https://sloyi.ru/og-image.png"],
  },
};

const catalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Каталог строительных материалов Archin",
  description:
    "Полный каталог продукции Archin: штукатурки, шпатлёвки, декоративные покрытия, краски, грунтовки, плиточные клеи, гидроизоляция.",
  url: "https://sloyi.ru/catalog",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://sloyi.ru/catalog/${product.slug}`,
      name: product.name,
    })),
  },
};

export default function CatalogPage() {
  return (
    <div className="section-padding pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogJsonLd) }}
      />
      <div className="container-custom">
        <Suspense fallback={<div className="min-h-[50vh]" />}>
          <CatalogContent />
        </Suspense>
      </div>
    </div>
  );
}
