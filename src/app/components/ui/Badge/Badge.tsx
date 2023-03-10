import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const badge = cva("inline-block whitespace-nowrap rounded text-center align-baseline font-bold !leading-none  drop-shadow-sm border border-transparent", {
  variants: {
    color: {
			brand: ["bg-brand text-white dark:bg-brand-200 border-brand-300"],
			black: ["bg-black text-white dark:bg-black-400 border-black-300"],
			white: ["bg-white text-black dark:bg-white border-gray-100"],
			green: ["bg-green text-white border-green-600"],
			yellow: ["bg-yellow text-gray-800 border-yellow-600"],
			blue: ["bg-blue text-white border-blue-700"],
			red: ["bg-red text-white border-red-700"],
    },
    size: {
        small: ["px-2", "py-1", "text-[0.70em]"],
        medium: ["px-3", "py-2", "text-[0.75em]"],
        large: ["px-3", "py-2", "text-[0.95em]"],
    }
  },
  compoundVariants: [{ color: "brand", className: "" }],
  defaultVariants: {
    color: "brand",
    size: "small"
  },
});

export interface BadgeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof badge> {}

export const Badge: React.FC<BadgeProps> = ({
  className,
  color,
  size,
  ...props
}) => <span className={twMerge(badge({ color, size, className }))} {...props} />;

