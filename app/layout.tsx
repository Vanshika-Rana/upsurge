import type { Metadata } from "next";
import { IBM_Plex_Sans, Tinos } from "next/font/google";

const ibm = IBM_Plex_Sans({
  variable: "--body-font",
  subsets: ["cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});


const tinos = Tinos({
	variable: "--display-font",
	subsets: ["latin"],
  weight: [ "400",  "700"],
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
			<body className={`${ibm.variable} ${tinos.variable}`}>
				{children}
			</body>
		</html>
	);
}
