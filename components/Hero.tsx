import React from "react";

export default function HeroSection() {
	return (
		<div className="bg-[url('/herobg.png')] bg-cover bg-center h-[90vh] flex items-center justify-center ">
			<div className='text-center px-6 md:px-12 lg:px-24'>
				<div className='text-md font-bold text-blue-600 uppercase mb-4  font-body'>
					Welcome to Upsurge Labs
				</div>
				<h1 className='text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight mb-6 font-display'>
					Biotechnology, artificial intelligence,
					<br />
					and consumer health tech
				</h1>
				<p className='text-md md:text-lg lg:text-lg text-gray-700 max-w-6xl mx-auto mb-8 font-body'>
					At Upsurge Labs, we drive innovation in biotech, AI, and
					consumer health tech. With the backing of Instadapp, our
					mission is to transform ground-breaking ideas into tangible
					solutions. Join us to revolutionize the way we live and
					interact with technology.
				</p>
				<button className='bg-blue-600 text-white py-3 px-8 rounded-lg text-md md:text-lg font-semibold transition duration-200 ease-in-out hover:scale-95 font-body'>
					Contact Us
				</button>
			</div>
		</div>
	);
}
