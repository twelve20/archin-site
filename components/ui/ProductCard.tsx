import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full group">
      <Link href={`/catalog/${product.slug}`}>
        <div
          className="relative h-64 w-full overflow-hidden rounded-t-card"
          style={{
            background: `linear-gradient(145deg, ${product.gradientFrom}40 0%, ${product.gradientTo}25 100%)`,
          }}
        >
          {/* Decorative circle */}
          <div
            className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20"
            style={{ background: product.gradientTo }}
          />
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain p-6 drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>
      <div className="flex flex-col flex-1 p-5">
        <Badge className="self-start mb-3">{product.categoryName}</Badge>
        <Link href={`/catalog/${product.slug}`}>
          <h3 className="font-heading font-semibold text-text text-base leading-snug mb-2 group-hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-text-light mb-4 flex-1 line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-heading font-bold text-text">
            {product.price.toLocaleString("ru-RU")} ₽
          </span>
          <Link
            href={`/catalog/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            Подробнее
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
