import { Phone, Clock } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ContactForm } from "@/components/ui/ContactForm";
import { companyInfo } from "@/data/navigation";

export function CTASection() {
  return (
    <section id="contacts" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-primary">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 50%, rgba(196, 90, 60, 0.25) 0%, transparent 50%),
              radial-gradient(circle at 90% 30%, rgba(196, 90, 60, 0.15) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <AnimateOnScroll>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-heading font-bold text-white leading-tight mb-4">
                Нужна консультация по выбору материалов?
              </h2>
              <p className="text-warm/70 text-lg mb-8 leading-relaxed">
                Оставьте заявку, и наш специалист поможет подобрать оптимальное
                решение для вашего проекта
              </p>
              <div className="space-y-3">
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-warm/80 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">{companyInfo.phone}</span>
                </a>
                <div className="flex items-center gap-3 text-warm/60">
                  <Clock className="w-5 h-5" />
                  <span>{companyInfo.workingHours}</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Form */}
          <AnimateOnScroll delay={0.2} direction="right">
            <ContactForm />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
