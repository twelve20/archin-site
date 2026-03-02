import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Страница не найдена",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-8xl md:text-9xl font-heading font-bold text-accent/20 mb-4">
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-text mb-4">
          Страница не найдена
        </h1>
        <p className="text-text-light mb-8 max-w-md mx-auto">
          Возможно, страница была удалена или вы ввели неверный адрес.
          Вернитесь на главную или перейдите в каталог.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="primary" size="lg">
              На главную
            </Button>
          </Link>
          <Link href="/catalog">
            <Button variant="secondary" size="lg">
              Каталог товаров
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
