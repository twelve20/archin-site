"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "lucide-react";
import { Modal } from "./Modal";
import { Input, Textarea } from "./Input";
import { Button } from "./Button";
import { orderFormSchema, type OrderFormValues } from "@/lib/validation";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export function OrderModal({ isOpen, onClose, productName }: OrderModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      product: productName || "",
    },
  });

  const onSubmit = async (data: OrderFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Order form submitted:", data);
    setSubmitted(true);
    setTimeout(() => {
      reset();
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  const handleClose = () => {
    reset();
    setSubmitted(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Оставить заявку">
      {submitted ? (
        <div className="text-center py-8">
          <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
          <h4 className="text-xl font-heading font-semibold text-text mb-2">
            Заявка отправлена!
          </h4>
          <p className="text-text-light">
            Мы свяжемся с вами в ближайшее время
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {productName && (
            <Input
              label="Товар"
              value={productName}
              readOnly
              className="bg-secondary cursor-not-allowed"
            />
          )}
          <Input
            label="Ваше имя"
            placeholder="Иван Иванов"
            required
            error={errors.name?.message}
            {...register("name")}
          />
          <Input
            label="Телефон"
            type="tel"
            placeholder="+7 (999) 123-45-67"
            required
            error={errors.phone?.message}
            {...register("phone")}
          />
          <Input
            label="Email"
            type="email"
            placeholder="example@mail.ru"
            error={errors.email?.message}
            {...register("email")}
          />
          <Textarea
            label="Сообщение"
            placeholder="Опишите ваш вопрос или запрос..."
            error={errors.message?.message}
            {...register("message")}
          />
          <Button
            type="submit"
            variant="primary"
            className="w-full"
            loading={isSubmitting}
          >
            Отправить заявку
          </Button>
        </form>
      )}
    </Modal>
  );
}
