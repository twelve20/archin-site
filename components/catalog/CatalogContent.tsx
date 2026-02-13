"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import type { CategorySlug } from "@/types";

export function CatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialCategory = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    if (slug === "all") {
      router.replace("/catalog", { scroll: false });
    } else {
      router.replace(`/catalog?category=${slug}`, { scroll: false });
    }
  };

  return (
    <>
      <SectionHeading
        title="Каталог продукции"
        subtitle={`${filteredProducts.length} ${getProductWord(filteredProducts.length)} в каталоге`}
      />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar / filter pills */}
        <aside className="lg:w-64 shrink-0">
          {/* Mobile: horizontal scroll pills */}
          <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <FilterButton
              active={selectedCategory === "all"}
              onClick={() => handleCategoryChange("all")}
            >
              Все
            </FilterButton>
            {categories.map((cat) => (
              <FilterButton
                key={cat.slug}
                active={selectedCategory === cat.slug}
                onClick={() => handleCategoryChange(cat.slug)}
              >
                {cat.name}
              </FilterButton>
            ))}
          </div>

          {/* Desktop: vertical sidebar */}
          <div className="hidden lg:block sticky top-28 space-y-1.5">
            <h3 className="font-heading font-semibold text-sm text-text-light uppercase tracking-wider mb-4">
              Категории
            </h3>
            <SidebarButton
              active={selectedCategory === "all"}
              onClick={() => handleCategoryChange("all")}
              count={products.length}
            >
              Все товары
            </SidebarButton>
            {categories.map((cat) => {
              const count = products.filter((p) => p.category === cat.slug).length;
              return (
                <SidebarButton
                  key={cat.slug}
                  active={selectedCategory === cat.slug}
                  onClick={() => handleCategoryChange(cat.slug)}
                  count={count}
                >
                  {cat.name}
                </SidebarButton>
              );
            })}
          </div>
        </aside>

        {/* Products grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filteredProducts.map((product, index) => (
              <AnimateOnScroll key={product.id} delay={Math.min(index * 0.05, 0.3)}>
                <ProductCard product={product} />
              </AnimateOnScroll>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-light text-lg">
                Товары в данной категории не найдены
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function FilterButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
        active
          ? "bg-accent text-white"
          : "bg-secondary text-text hover:bg-border"
      )}
    >
      {children}
    </button>
  );
}

function SidebarButton({
  children,
  active,
  onClick,
  count,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  count: number;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center justify-between px-4 py-2.5 rounded-button text-sm font-medium transition-colors text-left",
        active
          ? "bg-accent text-white"
          : "text-text hover:bg-secondary"
      )}
    >
      <span>{children}</span>
      <span
        className={cn(
          "text-xs rounded-full px-2 py-0.5",
          active ? "bg-white/20" : "bg-secondary text-text-light"
        )}
      >
        {count}
      </span>
    </button>
  );
}

function getProductWord(count: number): string {
  const lastTwo = count % 100;
  const lastOne = count % 10;
  if (lastTwo >= 11 && lastTwo <= 19) return "товаров";
  if (lastOne === 1) return "товар";
  if (lastOne >= 2 && lastOne <= 4) return "товара";
  return "товаров";
}
