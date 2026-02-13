"use client";

import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label className="block text-sm font-medium text-text">
            {label}
            {props.required && <span className="text-accent ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full px-4 py-3 rounded-button border bg-warm text-text placeholder:text-text-muted",
            "transition-colors duration-200",
            "focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent",
            error ? "border-red-400" : "border-border",
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label className="block text-sm font-medium text-text">
            {label}
            {props.required && <span className="text-accent ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            "w-full px-4 py-3 rounded-button border bg-warm text-text placeholder:text-text-muted resize-y min-h-[100px]",
            "transition-colors duration-200",
            "focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent",
            error ? "border-red-400" : "border-border",
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
