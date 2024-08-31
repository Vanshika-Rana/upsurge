import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
export default function Home() {
	return (
		<>
			<Navbar />
			<section className="bg-[url('/herobg.png')] bg-cover">
				<Hero />
				<About />
			</section>
			<Portfolio />
			<Contact />
			<Footer />
		</>
	);
}
