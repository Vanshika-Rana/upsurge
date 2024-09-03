import React from "react";

export default function Footer() {
	return (
		<footer className='bg-[#F5FAFF] text-[#1B274B] py-12 px-6 md:px-12 lg:px-24 border-t-2 tracking-wide'>
			<div className='max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 lg:gap-80'>
				{/* Left Section */}
				<div className='mb-12 md:mb-0'>
					<img
						src='/upsurge-logo.png'
						alt='Upsurge Labs Logo'
						className='h-8 md:h-10 mb-6'
					/>
					<p className='text-sm md:text-md mb-6 font-body'>
						Upsurge Labs is an innovation powerhouse, committed to
						advancing the frontiers of biotechnology, artificial
						intelligence, spacetech, and health tech.
					</p>
					<div className='flex flex-col lg:flex-row lg:flex-wrap lg:space-x-6 space-y-2 lg:space-y-0 text-sm font-body font-semibold mb-6'>
						<a href='#about' className='hover:text-blue-500'>
							Who We Are
						</a>
						<a href='#' className='hover:text-blue-500'>
							Cosmo AI
						</a>
						<a href='#' className='hover:text-blue-500'>
							Helium
						</a>
						<a href='#' className='hover:text-blue-500'>
							Biotech
						</a>
						<a href='#' className='hover:text-blue-500'>
							Spacetech
						</a>
					</div>
					<p className='text-xs md:text-sm text-gray-500 font-body'>
						2024 © Upsurge Labs. All rights reserved.
					</p>
				</div>

				{/* Right Section */}
				<div>
					<h3 className='font-semibold text-md md:text-lg mb-4 md:mb-6 font-body'>
						Contact Information
					</h3>
					<p className='text-sm md:text-md mb-6 font-body'>
						We&apos;d love to hear from you! Whether you’re an
						entrepreneur with a ground-breaking idea, an investor
						looking for the next big thing, or simply interested in
						learning more about what we do.
					</p>
					<div className='text-sm font-body mb-6'>
						<p className='font-semibold text-blue-500 mb-2'>
							ADDRESS
						</p>
						<p>Upsurge Labs Pte. Ltd</p>
						<p>3 Fraser Street, #04-23A, Duo Tower</p>
						<p>Singapore 189352</p>
					</div>
					<div className='text-sm font-body'>
						<p className='font-semibold text-blue-500 mb-2'>
							EMAIL
						</p>
						<p>hello@upsurge.io</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
