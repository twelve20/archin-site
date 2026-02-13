import type { Metadata } from "next";
import { Suspense } from "react";
import { CatalogContent } from "@/components/catalog/CatalogContent";

export const metadata: Metadata = {
  title: "Каталог строительных материалов Archin",
  description:
    "Каталог продукции Archin: штукатурки, шпатлёвки, декоративные покрытия, краски, грунтовки, плиточные клеи, гидроизоляция. 31 продукт, дилерские цены в Москве и МО.",
};

export default function CatalogPage() {
  return (
    <div className="section-padding pt-28">
      <div className="container-custom">
        <Suspense fallback={<div className="min-h-[50vh]" />}>
          <CatalogContent />
        </Suspense>
      </div>
    </div>
  );
}
