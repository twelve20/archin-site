"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(196, 90, 60, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(196, 90, 60, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 70%)
            `,
          }}
        />
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-[10%] w-64 h-64 md:w-96 md:h-96 rounded-full border border-white/5" />
        <div className="absolute bottom-1/4 left-[5%] w-40 h-40 md:w-64 md:h-64 rounded-full border border-white/5" />
        <div className="absolute top-[15%] left-[15%] w-2 h-2 bg-accent/40 rounded-full" />
        <div className="absolute bottom-[35%] right-[20%] w-3 h-3 bg-accent/30 rounded-full" />
      </div>

      <div className="container-custom relative z-10 py-32 md:py-0">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-warm/80 text-sm font-medium tracking-wide border border-white/10">
              Официальный дилер Archin
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.05] mb-6"
          >
            Строительные
            <br />
            материалы{" "}
            <span className="text-accent">Archin</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg md:text-xl text-warm/70 mb-10 max-w-xl leading-relaxed"
          >
            Штукатурки, шпатлёвки, декоративные покрытия, краски, грунтовки,
            плиточные клеи и гидроизоляция. Дилерские цены.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/catalog">
              <Button variant="primary" size="lg">
                Смотреть каталог
              </Button>
            </Link>
            <Link href="#contacts">
              <Button
                variant="secondary"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-text"
              >
                Получить консультацию
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-warm/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
