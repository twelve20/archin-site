import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";

const facts = [
  "Собственный завод в Раменском районе Московской области",
  "R&D центр в Москве, резидент Фонда Сколково",
  "Вся продукция сертифицирована: декларации соответствия, СГР, экспертные заключения",
  "Дилерская сеть — 20+ партнёров в Москве и регионах",
];

const stats = [
  { value: "31", label: "продукт" },
  { value: "7", label: "категорий" },
  { value: "20+", label: "дилеров" },
];

export function AboutBrand() {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <SectionHeading
              title="О бренде Archin"
              align="left"
              className="mb-8"
            />

            <AnimateOnScroll>
              <p className="text-text-light leading-relaxed mb-6">
                Archin (ООО «СДС») — российский производитель строительных
                материалов. Производство расположено в Раменском районе
                Московской области, R&D центр — в Москве. Компания является
                резидентом Фонда Сколково.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <p className="text-text-light leading-relaxed mb-8">
                Archin выпускает штукатурки, шпатлёвки, декоративные покрытия,
                краски, грунтовки, плиточные клеи и гидроизоляцию. ООО «ОЛНАСТ
                ГРУПП» — официальный дилер ТМ «Archin» на территории Москвы
                и Московской области.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <ul className="space-y-3 mb-8">
                {facts.map((fact) => (
                  <li key={fact} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-text text-sm">{fact}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.3}>
              <Link href="/catalog">
                <Button variant="primary">Перейти в каталог</Button>
              </Link>
            </AnimateOnScroll>
          </div>

          {/* Certificate */}
          <AnimateOnScroll direction="right" delay={0.2}>
            <div className="relative">
              <div className="rounded-card overflow-hidden bg-white shadow-card">
                <div className="relative w-full" style={{ aspectRatio: "959/1280" }}>
                  <Image
                    src="/images/dealer-certificate.webp"
                    alt="Сертификат официального дилера Archin — ООО «ОЛНАСТ ГРУПП», 2026"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Stats overlay */}
              <div className="absolute -bottom-8 left-4 right-4 md:left-8 md:right-8">
                <div className="bg-white rounded-card shadow-card-hover p-6 grid grid-cols-3 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl md:text-3xl font-heading font-bold text-accent">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-text-light mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
