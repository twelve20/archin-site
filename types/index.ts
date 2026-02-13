export type CategorySlug =
  | "shtukaturka"
  | "shpatlevka"
  | "dekorativnaya-shpatlevka"
  | "kraski"
  | "gruntovki"
  | "plitochnyj-klej"
  | "gidroizolyaciya";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  icon: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: CategorySlug;
  categoryName: string;
  shortDescription: string;
  description: string;
  specs: ProductSpec[];
  image: string;
  price: number;
  popular: boolean;
  gradientFrom: string;
  gradientTo: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface OrderFormData {
  name: string;
  phone: string;
  email?: string;
  product?: string;
  message?: string;
}
