import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";

const box = cva("rounded flex items-center gap-x-6 drop-shadow-sm border border-transparent", {
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
			none: ["py-0 px-0"],
			xsmall: ["py-2 px-2"],
			small: ["py-4 px-4"],
			medium: ["py-6 px-6"],
			large: ["py-8 px-8"],
			xlarge: ["py-10 px-10"],
		},
	},
	compoundVariants: [{ color: "brand", size: "medium", className: "" }],
	defaultVariants: {
		color: "brand",
		size: "medium",
	},
});

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof Box> {}

export const Box: React.FC<BoxProps> = ({ className, color, size, ...props }) => (
	<div className={twMerge(box({ color, size, className }))} {...props}>
		{props.children}
	</div>
);
