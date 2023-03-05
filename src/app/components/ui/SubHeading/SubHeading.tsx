import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const subheading = cva("mt-6 text-lg leading-8", {
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
          "text-white-800",
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
        small: ["text-sm"],
        medium: ["text-md"],
        large: ["text-lg"],
    }
  },
  compoundVariants: [{ color: "white", className: "" }],
  defaultVariants: {
    color: "white",
    size: "large"
  },
});

export interface SubheadingProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof subheading> {}

export const SubHeading: React.FC<SubheadingProps> = ({
  className,
  color,
  size,
  ...props
}) => <p className={twMerge(subheading({ color, size, className }))} {...props}>{props.children}</p>;

