import React from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

export default function Services() {
	return (
		<div className='bg-white text-[#1B274B] py-16 md:py-24 px-6 md:px-12 lg:px-24 tracking-wide font-body'>
			{/* Header Section */}
			<div className='text-left mb-12'>
				<p className='text-md tracking-wide font-body text-blue-500 font-semibold mb-4 flex items-center'>
					<span className='inline-block transform text-blue-500 mr-2'>
						<TbArrowBadgeRightFilled />
					</span>
					SERVICES
				</p>
				<h2 className='font-display text-3xl md:text-4xl lg:text-5xl font-normal leading-tight'>
					Diverse Range Of Innovative Projects
				</h2>
			</div>

			{/* Services Grid */}
			<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
				{/* Service 1: Cosmo AI */}
				<div className='flex flex-col'>
					<img
						src='/images/ai.png'
						alt='Cosmo AI'
						className='w-full h-auto mb-6'
					/>
					<h3 className='font-display text-2xl font-normal mb-4'>
						Cosmo AI
					</h3>
					<p className='text-gray-600 mb-4'>
						Cosmo is an intelligent super-app that understands and
						executes your commands in natural language. It’s
						designed to automate repetitive actions across various
						web applications, allowing users to save time and
						effort.
					</p>
					<a href='#' className='text-blue-500 font-semibold'>
						Learn More{" "}
						<span className='inline-block transform ml-2'>→</span>
					</a>
				</div>

				{/* Service 2: Helium App */}
				<div className='flex flex-col'>
					<img
						src='/images/helium.png'
						alt='Helium App'
						className='w-full h-auto mb-6'
					/>
					<h3 className='font-display text-2xl font-normal mb-4'>
						Helium App
					</h3>
					<p className='text-gray-600 mb-4'>
						Helium is your daily companion for unlocking peak
						performance with the Helium Fitness Tracking Band. Gain
						personalized insights tailored for athletes,
						professionals, and health enthusiasts to excel
						effortlessly.
					</p>
					<a href='#' className='text-blue-500 font-semibold'>
						Learn More{" "}
						<span className='inline-block transform ml-2'>→</span>
					</a>
				</div>

				{/* Service 3: Biotech Research */}
				<div className='flex flex-col'>
					<img
						src='/images/biotech.png'
						alt='Biotech Research'
						className='w-full h-auto mb-6'
					/>
					<h3 className='font-display text-2xl font-normal mb-4'>
						Biotech Research
					</h3>
					<p className='text-gray-600 mb-4'>
						Biotechnologists identify practical uses of biological
						material – including the physical, chemical, and genetic
						properties of cells – to improve agricultural,
						environmental, or pharmaceutical products, although
						biotechnologists also work in related capacities, as in
						marine biotechnology.
					</p>
					<a href='#' className='text-blue-500 font-semibold'>
						Learn More{" "}
						<span className='inline-block transform ml-2'>→</span>
					</a>
				</div>

				{/* Service 4: Spacetech Research */}
				<div className='flex flex-col'>
					<img
						src='/images/spacetech.png'
						alt='Spacetech Research'
						className='w-full h-auto mb-6'
					/>
					<h3 className='font-display text-2xl font-normal mb-4'>
						Spacetech Research
					</h3>
					<p className='text-gray-600 mb-4'>
						The range of activities includes research and analysis
						on major areas of high potential in the SpaceTech
						industry, maintaining profiling of companies and
						governmental agencies based on their innovation
						potential and business activity, and providing
						consulting and analytical services.
					</p>
					<a href='#' className='text-blue-500 font-semibold'>
						Learn More{" "}
						<span className='inline-block transform ml-2'>→</span>
					</a>
				</div>
			</div>
		</div>
	);
}
