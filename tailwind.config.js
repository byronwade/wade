/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		borderRadius: {
			none: "0px",
			sm: "0.125rem",
			DEFAULT: "0.20rem",
			md: "0.375rem",
			lg: "0.5rem",
			xl: "0.75rem",
			"2xl": "1rem",
			"3xl": "1.5rem",
			full: "9999px",
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			brand: {
				DEFAULT: "#223843",
				800: "#0E161B",
				700: "#152229",
				600: "#1B2D36",
				500: "#223843",
				400: "#294451",
				300: "#304F5F",
				200: "#375B6D",
				100: "#3E667A",
			},
			"brand-cream": {
				DEFAULT: "#f4ece8",
				800: "#d8c8c3",
				700: "#e1d1cd",
				600: "#e9dad6",
				500: "#f4ece8",
				400: "#f7f1ef",
				300: "#faf5f2",
				200: "#fdf8f6",
				100: "#fefbfa",
			},
			black: {
				DEFAULT: "#1B1B1B",
				800: "#000000",
				700: "#0C0C0C",
				600: "#151515",
				500: "#1B1B1B",
				400: "#222222",
				300: "#292929",
				200: "#303030",
				100: "#373737",
			},
			white: {
				DEFAULT: "#F7F7F7",
				800: "#FFFFFF",
				700: "#FDFDFD",
				600: "#FAFAFA",
				500: "#F7F7F7",
				400: "#F4F4F4",
				300: "#F1F1F1",
				200: "#EEE",
				100: "#EBEBEB",
			},
			gray: {
				DEFAULT: "#808080",
				800: "#4C4C4C",
				700: "#5E5E5E",
				600: "#6F6F6F",
				500: "#808080",
				400: "#939393",
				300: "#A6A6A6",
				200: "#B9B9B9",
				100: "#CCCCCC",
			},
			red: {
				DEFAULT: "#C53D3A",
				800: "#7C1512",
				700: "#911A16",
				600: "#A41F1A",
				500: "#C53D3A",
				400: "#D96E6C",
				300: "#E89B9C",
				200: "#F4C9CA",
				100: "#FCE4E4",
			},
			orange: {
				DEFAULT: "#E18B41",
				800: "#9C4E1F",
				700: "#AF5A24",
				600: "#C2662A",
				500: "#E18B41",
				400: "#EBAA73",
				300: "#F2C5A1",
				200: "#F7DECA",
				100: "#FBEAE4",
			},
			yellow: {
				DEFAULT: "#F4E04D",
				800: "#9C8C25",
				700: "#AF9F2A",
				600: "#C2B32F",
				500: "#F4E04D",
				400: "#F7E777",
				300: "#F9EB9F",
				200: "#FCEECA",
				100: "#FEF0E4",
			},
			green: {
				DEFAULT: "#548B54",
				800: "#2C4F2C",
				700: "#355E35",
				600: "#406E40",
				500: "#548B54",
				400: "#76A476",
				300: "#9CC99C",
				200: "#C2E2C2",
				100: "#E8F1E8",
			},
			blue: {
				DEFAULT: "#26a8c5",
				800: "#1c8ca9",
				700: "#1e94b3",
				600: "#219ebc",
				500: "#26a8c5",
				400: "#49b7cd",
				300: "#6dc6d6",
				200: "#90d5de",
				100: "#b3e4e7",
			},
			purple: {
				DEFAULT: "#9B4E91",
				800: "#5E2B57",
				700: "#6D3367",
				600: "#7C3A76",
				500: "#9B4E91",
				400: "#B274A9",
				300: "#C9A1C1",
				200: "#DEC8D3",
				100: "#F2E5ED",
			},
			cream: {
				DEFAULT: "#E8DDB5",
				800: "#BDAF83",
				700: "#CABE95",
				600: "#D7CCAA",
				500: "#E8DDB5",
				400: "#F0E4C9",
				300: "#F6ECD8",
				200: "#FBF3E7",
				100: "#FDF9F2",
			},
		},
		dropShadow: {
			sm: "0 1px 1px rgb(0 0 0 / 0.05)",
			DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
			md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
			lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
			xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
			"2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
			none: "0 0 #0000",
		},
		fontFamily: {
			base: ["Segoe UI", "Noto Sans", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji"],
			times: ["Times New Roman", "serif"],
			mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"],
		},
		fontSize: {
			xs: ["0.75rem", { lineHeight: "1rem" }],
			sm: ["0.875rem", { lineHeight: "1.25rem" }],
			base: ["1rem", { lineHeight: "1.5rem" }],
			lg: ["1.125rem", { lineHeight: "1.75rem" }],
			xl: ["1.25rem", { lineHeight: "1.75rem" }],
			"2xl": ["1.5rem", { lineHeight: "2rem" }],
			"3xl": ["1.875rem", { lineHeight: "2.25rem" }],
			"4xl": ["2.25rem", { lineHeight: "2.5rem" }],
			"5xl": ["3rem", { lineHeight: "1" }],
			"6xl": ["3.75rem", { lineHeight: "1" }],
			"7xl": ["4.5rem", { lineHeight: "1" }],
			"8xl": ["6rem", { lineHeight: "1" }],
			"9xl": ["8rem", { lineHeight: "1" }],
		},
		fontWeight: {
			thin: "100",
			extralight: "200",
			light: "300",
			normal: "400",
			medium: "500",
			semibold: "600",
			bold: "700",
			extrabold: "800",
			black: "900",
		},
		letterSpacing: {
			tighter: "-0.05em",
			tight: "-0.025em",
			normal: "0em",
			wide: "0.025em",
			wider: "0.05em",
			widest: "0.1em",
		},
		lineHeight: {
			none: "1",
			tight: "1.25",
			snug: "1.375",
			normal: "1.5",
			relaxed: "1.625",
			loose: "2",
			3: ".75rem",
			4: "1rem",
			5: "1.25rem",
			6: "1.5rem",
			7: "1.75rem",
			8: "2rem",
			9: "2.25rem",
			10: "2.5rem",
		},
	},
	plugins: [],
};
