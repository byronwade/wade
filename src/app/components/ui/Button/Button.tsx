import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("transition ease-in-out inline-flex items-center rounded border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2", {
  variants: {
    intent: {
      brand: [
        "bg-brand-500",
        "text-white",
        "border-transparent",
        "hover:bg-brand-300",
        "focus:ring-brand-300",
		"hover:scale-105",
		"duration-200"
      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-300",
        "hover:bg-gray-100",
        "focus:ring-gray-300",
		"hover:scale-105",
		"duration-200"
      ],
	  success: [
        "bg-green-700",
        "text-white",
        "border-grey-800",
        "hover:bg-green-600",
        "focus:ring-green-600",
		"hover:scale-105",
		"duration-200"
	  ],
	  danger: [
        "bg-red-600",
        "text-white",
        "border-grey-800",
        "hover:bg-red-500",
        "focus:ring-red-600",
		"hover:scale-105",
		"duration-200"
	  ],
    },
    size: {
	  xsmall: ["text-sm", "py-1", "px-4"],
      small: ["text-sm", "py-1.5", "px-6"],
      medium: ["text-base", "py-2", "px-8"],
    },
    fullWidth: {true: ["w-full", "hover:scale-100", "text-center", "justify-center"]}
  },
  compoundVariants: [{ intent: "brand", size: "medium", className: "" }],
  defaultVariants: {
    intent: "brand",
    size: "xsmall",
    fullWidth: false,
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  fullWidth,
  size,
  ...props
}) => <button className={twMerge(button({ intent, size, fullWidth, className }))} {...props} />;

