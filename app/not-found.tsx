import Link from "next/link";
import { Button } from "@/components/ui/Button";

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
          Вернитесь на главную страницу.
        </p>
        <Link href="/">
          <Button variant="primary" size="lg">
            Вернуться на главную
          </Button>
        </Link>
      </div>
    </div>
  );
}
