import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("justify-center duration-200 tracking-wide hover:scale-105 transition ease-in-out inline-flex items-center rounded border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2", {
  variants: {
    color: {
      brand: [
        "bg-brand",
        "text-white",
        "border-transparent",
        "hover:bg-brand-300",
        "focus:ring-brand-300",
      ],
      black: [
        "bg-black",
        "text-white",
        "border-black-300",
        "hover:bg-black-300",
        "focus:ring-black-300",
      ],
      white: [
        "bg-white",
        "text-black-800",
        "border-gray-300",
        "hover:bg-white-300",
        "focus:ring-gray-300",
      ],
	  green: [
        "bg-green",
        "text-white",
        "border-green-600",
        "hover:bg-green-600",
        "focus:ring-green-600",
	  ],
	  yellow: [
        "bg-yellow",
        "text-black",
        "border-yellow-600",
        "hover:bg-yellow-600",
        "focus:ring-yellow-600",
	  ],
	  blue: [
        "bg-blue",
        "text-white",
        "border-blue-600",
        "hover:bg-blue-600",
        "focus:ring-blue-600",
	  ],
	  red: [
        "bg-red",
        "text-white",
        "border-red-600",
        "hover:bg-red-600",
        "focus:ring-red-600",
	  ],
    },
    size: {
	  xsmall: ["text-sm", "py-1", "px-4"],
      small: ["text-sm", "py-1.5", "px-6"],
      medium: ["text-base", "py-2", "px-8"],
    },
    fullWidth: {true: ["w-full", "hover:scale-100"]},
    marketing: {true: ["px-12", "py-3"]}
  },
  compoundVariants: [{ color: "brand", marketing: false, size: "medium", className: "" }],
  defaultVariants: {
    color: "brand",
    size: "small",
    marketing: false,
    fullWidth: false,
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  color,
  marketing,
  fullWidth,
  size,
  ...props
}) => <button className={twMerge(button({ color, marketing, size, fullWidth, className }))} {...props} />;

