import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const alert = cva("rounded w-full p-4 text-sm font-medium", {
  variants: {
    intent: {
      brand: [
        "bg-brand-500",
        "text-white"
      ],
      secondary: [
        "bg-white",
        "text-gray-800"
      ],
	  success: [
        "bg-green-600",
        "text-white"
	  ],
	  warning: [
        "bg-yellow-400",
        "text-gray-800"
	  ],
	  info: [
        "bg-blue-600",
        "text-white"
	  ],
	  danger: [
        "bg-red-600",
        "text-white"
	  ],
    },
  },
  compoundVariants: [{ intent: "brand", className: "" }],
  defaultVariants: {
    intent: "brand",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof alert> {}

export const Alert: React.FC<ButtonProps> = ({
  className,
  intent,
  ...props
}) => <button className={twMerge(alert({ intent, className }))} {...props} />;

