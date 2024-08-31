import React from "react";
import Navbar from "./Navbar";

export default function HeroSection() {
	return (
		<section className='h-[60vh] flex flex-col items-center justify-center bg-cover bg-center text-black text-center px-4 sm:px-6 lg:px-8'>
			<div className='max-w-3xl mx-auto'>
				<p className='font-body text-sm sm:text-md font-bold mb-4 text-black border border-black bg-black rounded-full px-6 py-2 inline-flex items-center bg-opacity-10'>
					Welcome to Upsurge Labs!
				</p>
				<h1 className='font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-black'>
					Innovating Tomorrow!
				</h1>
				<p className='font-body text-sm sm:text-md lg:text-md font-normal mb-8 leading-relaxed text-gray-700'>
					At Upsurge Labs, we drive innovation in biotech, AI, and
					consumer health tech. With the backing of Instadapp, our
					mission is to transform groundbreaking ideas into tangible
					solutions. Join us to revolutionize the way we live and
					interact with technology.
				</p>
				<button className='bg-gradient-to-r from-gray-500 to-gray-900 py-3 px-8 rounded-full text-lg font-semibold text-white shadow-lg hover:scale-95 transition-transform duration-300 ease-in-out'>
					Join Us Today!
				</button>
			</div>
		</section>
	);
}
