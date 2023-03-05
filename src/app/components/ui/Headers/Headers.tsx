import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const header = cva("font-bold font-base tracking-tight text-white", {
  variants: {
    color: {
      brand: [
        "text-brand dark:text-white-100",
      ],
      secondary: [
        "text-white",
      ],
      black: [
          "text-black dark:text-white-100",
      ],
      white: [
          "text-white",
      ],
	  green: [
        "text-green",
	  ],
	  yellow: [
        "text-yellow",
	  ],
	  blue: [
        "text-blue",
	  ],
	  red: [
        "text-red",
	  ],
    },
    size: {
        small: ["text-2xl"],
        medium: ["text-4xl"],
        large: ["text-6xl"],
    }
  },
  compoundVariants: [{ color: "brand", className: "" }],
  defaultVariants: {
    color: "brand",
    size: "small"
  },
});

export interface HeaderProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof header> {}

export const Header: React.FC<HeaderProps> = ({
  className,
  color,
  size,
  ...props
}) => <h1 className={twMerge(header({ color, size, className }))} {...props}>{props.children}</h1>;

