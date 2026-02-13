import Link from "next/link";
import {
  Layers,
  PaintBucket,
  Palette,
  Paintbrush,
  Droplets,
  Grid3X3,
  ShieldCheck,
} from "lucide-react";
import { categories } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  PaintBucket,
  Palette,
  Paintbrush,
  Droplets,
  Grid3X3,
  ShieldCheck,
};

export function Categories() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Наша продукция"
          subtitle="Полный спектр строительных материалов для внутренней и наружной отделки"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {categories.map((category, index) => {
            const Icon = iconComponents[category.icon] || Layers;

            return (
              <AnimateOnScroll key={category.slug} delay={index * 0.08} className="h-full">
                <Link href={`/catalog?category=${category.slug}`} className="block h-full">
                  <div className="group relative bg-white rounded-card border border-border p-6 h-full transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-accent/30">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-heading font-semibold text-text text-lg mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-text-light leading-relaxed">
                      {category.description}
                    </p>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-card" />
                  </div>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
