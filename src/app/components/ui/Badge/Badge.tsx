import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const badge = cva("inline-block whitespace-nowrap rounded text-center align-baseline font-bold leading-none", {
  variants: {
    color: {
      brand: [
        "bg-brand",
        "text-white"
      ],
      secondary: [
        "bg-white",
        "text-gray-800"
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
    size: {
        small: ["px-[0.45em]", "py-[0.15em]", "text-[0.70em]"],
        medium: ["px-[0.85em]", "py-[0.35em]", "text-[0.75em]"],
        large: ["px-[0.85em]", "py-[0.45em]", "text-[0.95em]"],
    }
  },
  compoundVariants: [{ color: "brand", className: "" }],
  defaultVariants: {
    color: "brand",
    size: "small"
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof badge> {}

export const Badge: React.FC<ButtonProps> = ({
  className,
  color,
  size,
  ...props
}) => <button className={twMerge(badge({ color, size, className }))} {...props} />;

