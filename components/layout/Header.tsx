"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { mainNavItems } from "@/data/navigation";
import { companyInfo } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { OrderModal } from "@/components/ui/OrderModal";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex flex-col">
              <span className="font-heading font-bold text-xl tracking-widest text-text">
                SLOI
              </span>
              <span className="text-[10px] text-text-light tracking-wide uppercase">
                {companyInfo.subtitle}
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors",
                    pathname === item.href
                      ? "text-accent"
                      : "text-text hover:text-accent"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Button
                variant="primary"
                size="sm"
                className="hidden lg:flex"
                onClick={() => setOrderModalOpen(true)}
              >
                Оставить заявку
              </Button>
              <button
                className="lg:hidden p-2 rounded-button hover:bg-secondary transition-colors"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Открыть меню"
              >
                <Menu className="w-6 h-6 text-text" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOrderClick={() => setOrderModalOpen(true)}
      />

      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
      />
    </>
  );
}
