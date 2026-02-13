import { z } from "zod/v4";

export const orderFormSchema = z.object({
  name: z
    .string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(50, "Имя не должно превышать 50 символов"),
  phone: z
    .string()
    .min(10, "Введите корректный номер телефона")
    .regex(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/,
      "Некорректный формат телефона"
    ),
  email: z.union([z.string().email("Введите корректный email"), z.literal("")]).optional(),
  product: z.string().optional(),
  message: z
    .string()
    .max(500, "Сообщение не должно превышать 500 символов")
    .optional(),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  phone: z
    .string()
    .min(10, "Введите корректный номер телефона")
    .regex(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/,
      "Некорректный формат телефона"
    ),
});

export type OrderFormValues = z.infer<typeof orderFormSchema>;
export type ContactFormValues = z.infer<typeof contactFormSchema>;
