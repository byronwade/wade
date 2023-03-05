import React from "react";
import Link from "next/link"
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";
import { Spinner } from "../Spinner/Spinner";

const button = cva("overflow-hidden justify-center duration-200 tracking-wide hover:scale-105 transition ease-in-out inline-flex items-center rounded drop-shadow-sm border border-transparent font-medium shadow-sm focus:outline-none", {
	variants: {
		color: {
			transparent: ["hover:scale-100 bg-transparent text-black border-transparent hover:bg-transparent shadow-transparent dark:text-white"],
			brand: ["bg-brand text-white border-brand-600 hover:bg-brand-300"],
			black: ["bg-black dark:bg-black-100 text-white dark:text-white-100 border-black-300 dark:border-black-300 hover:bg-black-300 dark:hover:bg-black-300"],
			white: ["bg-white text-black-800 border-gray-100 hover:bg-white-100"],
			green: ["bg-green text-white border-green-600 hover:bg-green-600"],
			yellow: ["bg-yellow text-black border-yellow-600 hover:bg-yellow-600"],
			blue: ["bg-blue text-black border-blue-700 hover:bg-blue-700"],
			red: ["bg-red text-white border-red-600 hover:bg-red-600"],
		},
		size: {
			xsmall: ["text-sm py-1 px-4"],
			small: ["text-sm py-1.5 px-6"],
			medium: ["text-base py-2 px-8"],
		},
		fullWidth: { true: ["w-full hover:scale-100 display-block"] },
		marketing: { true: ["px-12 py-3"] },
		status: {
			default: [""],
			error: ["!bg-red !text-white !border-red-600 !hover:bg-red-600"],
			success: ["!bg-green !text-white !border-green-600 !hover:bg-green-600"],
			warning: ["!bg-yellow !text-black !border-yellow-600 !hover:bg-yellow-600"],
			loading: ["hover:scale-100 cursor-progress"],
			disabled: ["hover:scale-100 opacity-50 disabled:pointer-events-none cursor-not-allowed"],
		},
	},
	compoundVariants: [
		{
			color: "brand",
			marketing: false,
			size: "medium",
			fullWidth: false,
			status: "default",
			className: "",
		},
	],
	defaultVariants: {
		color: "brand",
		size: "small",
		marketing: false,
		status: "default",
		fullWidth: false,
	},
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
	className?: string;
	color?: keyof typeof button.variants.color;
	marketing?: boolean;
	fullWidth?: boolean;
	href?: string;
	size?: keyof typeof button.variants.size;
	status?: "default" | "success" | "warning" | "error" | "loading" | "disabled";
}

export const Button: React.FC<ButtonProps> = ({ className = "", href = "/", color = "brand", marketing = false, fullWidth = false, size = "small", status = "default", ...props }) => (
	<Link href={href}>
	<button
		className={twMerge(
			button({
				color,
				marketing,
				size,
				fullWidth,
				status,
				className,
			})
		)}
		disabled={status === "disabled" || status === "loading"}
		{...props}
	>
		{(() => {
			switch (status) {
				case "error":
					return props.children;
				case "success":
					return props.children;
				case "warning":
					return props.children;
				case "loading":
					return (
						<>
							<Spinner />
							{props.children}
						</>
					);
				case "disabled":
					return props.children;
				default:
					return props.children;
			}
		})()}
	</button>
	</Link>
);