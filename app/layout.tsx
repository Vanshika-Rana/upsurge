import type { Metadata } from "next";
import { Raleway, Merriweather_Sans } from "next/font/google";

const raleway = Raleway({
	variable: "--display-font",
	subsets: ["latin"],
});

const merriweather = Merriweather_Sans({
	variable: "--body-font",
	subsets: ["latin"],
});
import "./globals.css";

export const metadata: Metadata = {
	title: "Upsurge Labs",
	description:
		"Pioneering in AI, Biotech, Healthtech & advancing science through cutting-edge computation.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${raleway.variable} ${merriweather.variable}`}>
				{children}
			</body>
		</html>
	);
}
