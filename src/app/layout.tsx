import './globals.css'

export const metadata = {
	title: "Wade's Design System",
	description: "Wade's Design System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className="font-base text-base" lang="en">
			<body className="bg-brandCream dark:bg-black-600">{children}</body>
		</html>
	);
}
