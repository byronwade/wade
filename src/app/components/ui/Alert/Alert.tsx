import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const alert = cva("rounded w-full p-4 text-sm font-medium", {
  variants: {
    color: {
    brand: [
      "bg-brand",
      "text-white"
    ],
    black: [
      "bg-black",
      "text-white"
    ],
    white: [
      "bg-white",
      "text-black"
    ],
	  green: [
        "bg-green",
        "text-white"
	  ],
	  yellow: [
        "bg-yellow",
        "text-gray-800"
	  ],
	  blue: [
        "bg-blue",
        "text-white"
	  ],
	  red: [
        "bg-red",
        "text-white"
	  ],
    },
  },
  compoundVariants: [{ color: "brand", className: "" }],
  defaultVariants: {
    color: "brand",
  },
});

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof alert> {}

export const Alert: React.FC<ButtonProps> = ({
  className,
  color,
  ...props
}) => <div className={twMerge(alert({ color, className }))} {...props}></div>;

