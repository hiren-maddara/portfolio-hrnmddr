import {JetBrains_Mono} from "next/font/google"
import "./globals.css";
import Header from "@/components/Header";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"], 
  weight: ["100", '200', '300','400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono'
})

export const metadata = {
  title: "Hiren Maddara Portfolio",
  description: "Hiren Maddara Portfolio",
};

export default function RootLayout({ children }) {
  return (
		<html lang="en" className={`${jetBrainsMono.variable} antialiased`}>
			<body className="">{children}</body>
		</html>
	);
}
