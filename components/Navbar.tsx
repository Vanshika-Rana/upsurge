"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons for hamburger and close menu

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

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

				{/* Hamburger Icon for mobile */}
				<div className='md:hidden z-20'>
					<button
						onClick={toggleMenu}
						className='text-gray-700 hover:text-black focus:outline-none'>
						{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
					</button>
				</div>

				{/* Right-Aligned Menu Links */}
				<div
					className={`font-body font-normal text-md ${
						isOpen ? "flex" : "hidden"
					} md:flex justify-end space-x-8 absolute md:static top-[10vh] left-0 w-full md:w-auto bg-white md:bg-transparent py-4 md:py-0 md:flex-row flex-col md:items-center transition-transform duration-300 ease-in-out z-10`}>
					<a
						href='#'
						className='text-gray-700 hover:text-black transition-all duration-200 cursor-pointer px-4 py-2 md:py-0 text-center'>
						Who We Are
					</a>
					<a
						href='#'
						className='text-gray-700 hover:text-black transition-all duration-200 cursor-pointer px-4 py-2 md:py-0 text-center'>
						Cosmo AI
					</a>
					<a
						href='#'
						className='text-gray-700 hover:text-black transition-all duration-200 cursor-pointer px-4 py-2 md:py-0 text-center'>
						Helium
					</a>
					<a
						href='#'
						className='text-gray-700 hover:text-black transition-all duration-200 cursor-pointer px-4 py-2 md:py-0 text-center'>
						Biotech
					</a>
					<a
						href='#'
						className='text-gray-700 hover:text-black transition-all duration-200 cursor-pointer px-4 py-2 md:py-0 text-center'>
						Spacetech
					</a>
				</div>
			</div>
		</nav>
	);
}
