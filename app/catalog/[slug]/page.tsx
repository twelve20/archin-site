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

  return {
    title: `${product.name} — купить в Москве`,
    description: `${product.shortDescription} ${product.description.slice(0, 120)}...`,
    openGraph: {
      title: `${product.name} | Официальный дилер Archin`,
      description: product.shortDescription,
      type: "website",
      images: [{ url: product.image }],
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
    brand: {
      "@type": "Brand",
      name: "Archin",
    },
    category: product.categoryName,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "SLOI",
        legalName: "ООО «ОЛНАСТ ГРУПП»",
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
