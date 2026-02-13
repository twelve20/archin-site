import { Factory, Truck, ShieldCheck, BadgePercent } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const benefits = [
  {
    icon: Factory,
    title: "Завод-производитель",
    description: "Прямые поставки с завода без посредников",
  },
  {
    icon: ShieldCheck,
    title: "Проверенное качество",
    description: "Сертифицированная продукция, соответствующая ГОСТ",
  },
  {
    icon: Truck,
    title: "Для профессионалов",
    description: "Материалы, которым доверяют строители и дизайнеры",
  },
  {
    icon: BadgePercent,
    title: "Выгодные цены",
    description: "Дилерские цены без наценок посредников",
  },
];

export function Benefits() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <SectionHeading
          title="Почему мы"
          subtitle="Преимущества работы с официальным дилером Archin"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <AnimateOnScroll key={benefit.title} delay={index * 0.1}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-text text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-text-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
