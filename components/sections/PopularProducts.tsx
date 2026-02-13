"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getPopularProducts } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";

export function PopularProducts() {
  const products = getPopularProducts();

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <SectionHeading
              title="Популярные товары"
              subtitle="Самые востребованные материалы Archin"
              align="left"
              className="mb-0"
            />
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
              aria-label="Предыдущий"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
              aria-label="Следующий"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile arrows */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-6">
          <button
            onClick={scrollPrev}
            className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
            aria-label="Предыдущий"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
            aria-label="Следующий"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
