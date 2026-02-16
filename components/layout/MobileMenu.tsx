"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone } from "lucide-react";
import Link from "next/link";
import { mainNavItems } from "@/data/navigation";
import { companyInfo } from "@/data/navigation";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderClick: () => void;
}

export function MobileMenu({ isOpen, onClose, onOrderClick }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white z-50 flex flex-col lg:hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <div className="font-heading font-bold text-lg tracking-widest text-text">
                  SLOI
                </div>
                <div className="text-xs text-text-light">{companyInfo.subtitle}</div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Закрыть меню"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 py-6">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block px-6 py-4 text-lg font-medium text-text hover:text-accent hover:bg-secondary/50 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="p-6 border-t border-border space-y-4">
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-text hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">{companyInfo.phone}</span>
              </a>
              <Button
                variant="primary"
                className="w-full"
                onClick={() => {
                  onClose();
                  onOrderClick();
                }}
              >
                Оставить заявку
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
