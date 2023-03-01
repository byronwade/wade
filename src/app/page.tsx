import { Inter } from "next/font/google";
import Button from "./components/Button/Button";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main>
			<h1 className="font-serif">byron wade</h1>
			<Button>Button</Button>
		</main>
	);
}
