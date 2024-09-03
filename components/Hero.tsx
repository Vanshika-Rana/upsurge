import React from "react";

export default function HeroSection() {
	return (
		<div className="bg-[url('/herobg.png')] bg-cover bg-center h-[95vh] flex items-center justify-center">
			<div className='text-center px-4 sm:px-6 md:px-12 lg:px-24'>
				<div className='text-md sm:text-lg font-bold text-blue-600 uppercase mb-4 font-body'>
					Welcome to Upsurge Labs
				</div>
				<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-800 leading-tight mb-6 font-display'>
					Innovating the Future:
					<br />
					Leading the Next Wave of Technology
				</h1>
				<p className='text-sm sm:text-md md:text-lg lg:text-lg text-gray-700 max-w-6xl mx-auto mb-8 font-body'>
					At Upsurge Labs, we relentlessly push the boundaries of
					what’s possible, transforming the future of biotechnology,
					AI, spacetech, and health tech. Our innovations are not just
					advancements—they are the catalysts that will redefine how
					we live, work, and explore tomorrow&apos;s possibilities.
				</p>
				<a
					href='#portfolio'
					className='cursor-pointer bg-blue-600 text-white py-3 px-6 sm:px-8 rounded-lg text-sm sm:text-md md:text-lg font-semibold transition duration-200 ease-in-out hover:scale-95 font-body'>
					Our Portfolio
				</a>
			</div>
		</div>
	);
}
