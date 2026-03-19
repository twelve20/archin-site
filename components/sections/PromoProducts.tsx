import { Flame } from "lucide-react";
import { getPromoProducts } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";

export function PromoProducts() {
  const products = getPromoProducts();

  if (products.length === 0) return null;

  return (
    <section className="section-padding bg-red-50/50">
      <div className="container-custom">
        <div className="flex items-center gap-3 mb-2">
          <Flame className="w-7 h-7 text-red-500" />
          <span className="text-sm font-semibold uppercase tracking-wider text-red-500">
            Акция
          </span>
        </div>
        <SectionHeading
          title="Весенняя акция на серые гипсовые штукатурки"
          subtitle="Лучшие цены на гипсовые штукатурки Archin серого цвета. Количество ограничено!"
          align="left"
          className="mb-8 md:mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
