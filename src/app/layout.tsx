import './globals.css'

export const metadata = {
	title: "Wade's Design System",
	description: "Wade's Design System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className="font-base" lang="en">
			<body>{children}</body>
		</html>
	);
}
