import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";

const p = cva("mt-6 text-lg leading-8", {
  variants: {
    color: {
      brand: [
        "text-brand dark:text-brand-100",
      ],
      black: [
          "text-black dark:text-white-100",
      ],
      white: [
          "text-white",
      ],
      gray: [
          "text-black-200 dark:text-white-800",
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
        base: ["text-base"],
        small: ["text-sm"],
        medium: ["text-md"],
        large: ["text-lg"],
    }
  },
  compoundVariants: [{ color: "white", className: "" }],
  defaultVariants: {
    color: "white",
    size: "base"
  },
});

export interface PProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof P> {}

export const P: React.FC<PProps> = ({
  className,
  color,
  size,
  ...props
}) => <p className={twMerge(p({ color, size, className }))} {...props}>{props.children}</p>;

