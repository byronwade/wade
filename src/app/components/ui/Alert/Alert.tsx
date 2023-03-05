import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";
import { XMarkIcon } from "@heroicons/react/20/solid";

const alert = cva("rounded flex items-center gap-x-6 py-2.5 px-6 sm:px-3.5 sm:before:flex-1 drop-shadow-sm border border-transparent", {
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
	},
	compoundVariants: [{ color: "brand", className: "" }],
	defaultVariants: {
		color: "brand",
	},
});

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alert> {}

export const Alert: React.FC<AlertProps> = ({ className, color, children, ...props }) => (
	<div className={twMerge(alert({ color, className }))} {...props}>
		{children}
		<div className="flex flex-1 justify-end">
			<button type="button" className="-m-3 p-3 focus:outline-none focus-visible:outline-offset-[-4px]">
				<span className="sr-only">Dismiss</span>
				<XMarkIcon className="h-5 w-5" aria-hidden="true" />
			</button>
		</div>
	</div>
);