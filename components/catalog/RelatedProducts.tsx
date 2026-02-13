import { Product } from "@/types";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section>
      <SectionHeading title="Похожие товары" align="left" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product, index) => (
          <AnimateOnScroll key={product.id} delay={index * 0.08}>
            <ProductCard product={product} />
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
