import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { categories } from "@/data/products";
import { companyInfo } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-primary text-warm">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* О компании */}
          <div>
            <div className="font-heading font-bold text-xl mb-1">
              OLNAST
            </div>
            <div className="text-sm text-warm/60 mb-4">
              {companyInfo.subtitle}
            </div>
            <p className="text-sm text-warm/70 leading-relaxed">
              Полный ассортимент строительных материалов Archin для профессионалов и частных клиентов. Прямые поставки с завода.
            </p>
          </div>

          {/* Каталог */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">
              Каталог
            </h4>
            <nav className="space-y-2.5">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/catalog?category=${cat.slug}`}
                  className="block text-sm text-warm/70 hover:text-accent transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Информация */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">
              Информация
            </h4>
            <nav className="space-y-2.5">
              <Link
                href="/#about"
                className="block text-sm text-warm/70 hover:text-accent transition-colors"
              >
                О бренде
              </Link>
              <Link
                href="/catalog"
                className="block text-sm text-warm/70 hover:text-accent transition-colors"
              >
                Каталог продукции
              </Link>
              <Link
                href="/#contacts"
                className="block text-sm text-warm/70 hover:text-accent transition-colors"
              >
                Контакты
              </Link>
            </nav>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">
              Контакты
            </h4>
            <div className="space-y-3.5">
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                className="flex items-start gap-3 text-sm text-warm/70 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                {companyInfo.phone}
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-start gap-3 text-sm text-warm/70 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                {companyInfo.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-warm/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                {companyInfo.address}
              </div>
              <div className="flex items-start gap-3 text-sm text-warm/70">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                {companyInfo.workingHours}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-warm/50">
            © {new Date().getFullYear()} {companyInfo.legalName}. Все права защищены.
          </p>
          <p className="text-sm text-warm/50">
            Официальный дилер Archin
          </p>
        </div>
      </div>
    </footer>
  );
}
