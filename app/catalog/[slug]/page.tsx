import { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductBySlug, getProductsByCategory } from "@/data/products";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProductDetail } from "@/components/catalog/ProductDetail";
import { RelatedProducts } from "@/components/catalog/RelatedProducts";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Товар не найден" };
  }

  const description = `${product.name} Archin — ${product.shortDescription} Цена: ${product.price.toLocaleString("ru-RU")} ₽. Купить в Москве и МО у официального дилера SLOI.`;

  return {
    title: `${product.name} — купить в Москве | Цена ${product.price.toLocaleString("ru-RU")} ₽`,
    description,
    alternates: {
      canonical: `https://sloyi.ru/catalog/${slug}`,
    },
    openGraph: {
      title: `${product.name} — ${product.price.toLocaleString("ru-RU")} ₽ | Дилер Archin`,
      description: product.shortDescription,
      type: "website",
      url: `https://sloyi.ru/catalog/${slug}`,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Каталог", href: "/catalog" },
    { label: product.categoryName, href: `/catalog?category=${product.category}` },
    { label: product.name },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://sloyi.ru${product.image}`,
    url: `https://sloyi.ru/catalog/${product.slug}`,
    brand: {
      "@type": "Brand",
      name: "Archin",
    },
    category: product.categoryName,
    sku: product.slug,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      url: `https://sloyi.ru/catalog/${product.slug}`,
      priceValidUntil: "2026-12-31",
      seller: {
        "@type": "Organization",
        name: "SLOI",
        legalName: "ООО «ОЛНАСТ ГРУПП»",
        url: "https://sloyi.ru",
      },
    },
  };

  return (
    <div className="pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-custom">
        <Breadcrumbs items={breadcrumbs} />
        <ProductDetail product={product} />
        {relatedProducts.length > 0 && (
          <RelatedProducts products={relatedProducts} />
        )}
      </div>
    </div>
  );
}
