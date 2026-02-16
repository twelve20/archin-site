"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "lucide-react";
import { Button } from "./Button";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    const res = await fetch("/api/send-telegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, formType: "contact" }),
    });
    if (!res.ok) throw new Error("Ошибка отправки");
    setSubmitted(true);
    setTimeout(() => {
      reset();
      setSubmitted(false);
    }, 4000);
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-3 bg-white/10 rounded-card p-6">
        <CheckCircle className="w-8 h-8 text-emerald-400 shrink-0" />
        <div>
          <p className="font-semibold text-white">Заявка отправлена!</p>
          <p className="text-sm text-warm/70">
            Мы свяжемся с вами в ближайшее время
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <input
            placeholder="Ваше имя *"
            className="w-full px-4 py-3 rounded-button bg-white/10 border border-white/20 text-white placeholder:text-warm/50 focus:outline-none focus:border-accent transition-colors"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <input
            type="tel"
            placeholder="Телефон *"
            className="w-full px-4 py-3 rounded-button bg-white/10 border border-white/20 text-white placeholder:text-warm/50 focus:outline-none focus:border-accent transition-colors"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-sm text-red-400">{errors.phone.message}</p>
          )}
        </div>
      </div>
      <Button
        type="submit"
        variant="primary"
        className="w-full sm:w-auto"
        loading={isSubmitting}
      >
        Отправить заявку
      </Button>
    </form>
  );
}
