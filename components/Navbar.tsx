import React from "react";

export default function Navbar() {
	return (
		<nav className='bg-white py-4 h-[10vh] tracking-wide'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
				{/* Logo */}
				<div className='flex items-center'>
					<a href='#'>
						<img
							className='h-8'
							src='/upsurge-logo.png'
							alt='Upsurge Labs Logo'
						/>
					</a>
				</div>

				{/* Right-Aligned Menu Links */}
				<div className='font-body font-normal text-md hidden md:flex justify-end space-x-8'>
					<a
						href='#'
						className='text-gray-700 hover:text-black transition-all duration-200 cursor-pointer'>
						Who We Are
					</a>
					<a
						href='#'
						className='text-gray-700 hover:text-black transition-all duration-200 cursor-pointer'>
						Cosmo AI
					</a>
					<a
						href='#'
						className='text-gray-700 hover:text-black transition-all duration-200 cursor-pointer'>
						Helium
					</a>
					<a
						href='#'
						className='text-gray-700 hover:text-black transition-all duration-200 cursor-pointer'>
						Biotech
					</a>
					<a
						href='#'
						className='text-gray-700 hover:text-black transition-all duration-200 cursor-pointer'>
						Spacetech
					</a>
				</div>
			</div>
		</nav>
	);
}
