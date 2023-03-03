import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const badge = cva("inline-block whitespace-nowrap rounded text-center align-baseline font-bold leading-none", {
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
    size: {
        small: ["px-[0.45em]", "py-[0.15em]", "text-[0.70em]"],
        medium: ["px-[0.85em]", "py-[0.35em]", "text-[0.75em]"],
        large: ["px-[0.85em]", "py-[0.45em]", "text-[0.95em]"],
    }
  },
  compoundVariants: [{ intent: "brand", className: "" }],
  defaultVariants: {
    intent: "brand",
    size: "small"
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof badge> {}

export const Badge: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={twMerge(badge({ intent, size, className }))} {...props} />;

