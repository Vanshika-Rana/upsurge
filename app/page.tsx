import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
export default function Home() {
	return (
		<>
			<Navbar />

			<Hero />
			<About />

			<Portfolio />
			<Services />

			<Footer />
		</>
	);
}
