import React from "react";

export default function Navbar() {
	return (
		<nav className='bg-white py-4 shadow-md'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
				{/* Logo */}
				<div className='flex items-center'>
					<a href='#'>
						<img
							className='h-10'
							src='/upsurge-logo.png'
							alt='Upsurge Labs Logo'
						/>
					</a>
				</div>

				{/* Centered Menu Links */}
				<div className='font-display font-bold uppercase flex-grow hidden md:flex justify-center space-x-8'>
					<a
						href='#'
						className='text-md text-gray-700 hover:text-black transition-all duration-200 transform hover:scale-95 cursor-pointer relative'>
						About Us
						<span className='absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-200 blur-sm rounded-lg'></span>
					</a>
					<a
						href='#'
						className='text-md text-gray-700 hover:text-black transition-all duration-200 transform hover:scale-95 cursor-pointer relative'>
						Portfolio
						<span className='absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-200 blur-sm rounded-lg'></span>
					</a>
					<a
						href='#'
						className='text-md text-gray-700 hover:text-black transition-all duration-200 transform hover:scale-95 cursor-pointer relative'>
						Contact
						<span className='absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-200 blur-sm rounded-lg'></span>
					</a>
				</div>

				{/* Join Us Today Button */}
				<div className='flex items-center'>
					<a
						href='#'
						className='bg-black text-white py-2 px-6 rounded-full text-md font-semibold transition-transform duration-200 transform hover:scale-95'>
						Join Us Today!
					</a>
				</div>
			</div>
		</nav>
	);
}
