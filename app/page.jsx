import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"
import Socials from "@/components/Socials";
import Link from "next/link";

export default function Home() {
  return (
		<main className="h-screen text-center flex flex-col items-center justify-center">
			<img
				src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
				alt="Logo"
				className="mb-8 h-40"
			/>
			<h1 className="text-xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4">
				Site is under maintenance
			</h1>
			<p className="text-center text-gray-500 dark:text-gray-300 text-lg mb-8">
				Working to stay upto date with designs and all. See you when I'm back!
			</p>
		</main>
	);
}
