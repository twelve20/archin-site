"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { Product } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { OrderModal } from "@/components/ui/OrderModal";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
        {/* Image */}
        <AnimateOnScroll>
          <div
            className="rounded-card overflow-hidden relative"
            style={{
              background: `linear-gradient(145deg, ${product.gradientFrom}50 0%, ${product.gradientTo}30 100%)`,
            }}
          >
            {/* Decorative elements */}
            <div
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-15"
              style={{ background: product.gradientTo }}
            />
            <div
              className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-10"
              style={{ background: product.gradientFrom }}
            />
            <div className="relative h-80 md:h-[400px] lg:h-[480px] w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-8 drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </AnimateOnScroll>

        {/* Info */}
        <AnimateOnScroll delay={0.15}>
          <div>
            <Badge className="mb-4">{product.categoryName}</Badge>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-text leading-tight mb-4">
              {product.name}
            </h1>
            <p className="text-text-light text-lg leading-relaxed mb-6">
              {product.shortDescription}
            </p>
            <p className="text-text leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="mb-6">
              <span className="text-3xl md:text-4xl font-heading font-bold text-accent">
                {product.price.toLocaleString("ru-RU")} ₽
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setOrderModalOpen(true)}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Заказать
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setOrderModalOpen(true)}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Консультация
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Specifications */}
      {product.specs.length > 0 && (
        <AnimateOnScroll>
          <div className="mb-16">
            <h2 className="text-xl md:text-2xl font-heading font-semibold text-text mb-6">
              Технические характеристики
            </h2>
            <div className="bg-white rounded-card shadow-card overflow-hidden">
              <table className="w-full">
                <tbody>
                  {product.specs.map((spec, index) => (
                    <tr
                      key={spec.label}
                      className={index % 2 === 0 ? "bg-white" : "bg-secondary/50"}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-text-light w-1/3 md:w-2/5">
                        {spec.label}
                      </td>
                      <td className="px-6 py-4 text-sm text-text">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimateOnScroll>
      )}

      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        productName={product.name}
      />
    </>
  );
}
