import React from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb"; // You can use react-icons for the arrows

export default function About() {
	return (
		<div className='bg-[#1B274B] text-white py-16 px-6 md:px-12 lg:px-24 min-h-screen lg:h-[80vh] tracking-wide'>
			<div>
                <div>
				{/* Header Section */}
				<p className='text-md tracking-wide font-body text-blue-500 font-semibold mb-4 flex items-center'>
					<span className='inline-block transform text-blue-500 mr-2'>
						<TbArrowBadgeRightFilled />
					</span>
					WHO WE ARE
				</p>
				<div className='lg:flex justify-between mb-12 items-center'>
					<h1 className='font-display text-4xl md:text-5xl font-normal leading-tight lg:w-1/2'>
						Upsurge Labs is an innovation lab dedicated to advancing
						technology in the realms of biotechnology
					</h1>
					<p className='text-lg font-body lg:w-1/2 lg:pl-12'>
						With the backing of Instadapp, we provide a
						collaborative environment where researchers, developers,
						and entrepreneurs can bring cutting-edge solutions to
						life.
					</p>
				</div>

				{/* Vision and Mission Section */}
				<div className='lg:flex justify-between'>
					<div className='lg:w-1/2'>
						<p className='text-md tracking-wide font-body text-blue-500 font-semibold mb-2 flex items-center'>
							<span className='inline-block transform  text-blue-500 mr-2'>
								<TbArrowBadgeRightFilled />
							</span>
							OUR VISION
						</p>
						<div className='border-b border-blue-500 mb-4'></div>
						<p className='text-lg font-body'>
							To be a global leader in technological innovation,
							pushing the boundaries of what&apos;s possible to
							improve lives, entrepreneurs can bring cutting-edge
							solutions to life.
						</p>
					</div>
					<div className='lg:w-1/2 lg:pl-12 mt-8 lg:mt-0'>
						<p className='text-md tracking-wide font-body text-blue-500 font-semibold mb-2 flex items-center'>
							<span className='inline-block transform  text-blue-500 mr-2'>
								<TbArrowBadgeRightFilled />
							</span>
							OUR MISSION
						</p>
						<div className='border-b border-blue-500 mb-4'></div>
						<p className='text-lg font-body'>
							To incubate and accelerate the development of
							pioneering technologies in biotech, AI, and consumer
							health, creating impactful solutions for a better
							future.
						</p>
					</div>
				</div>
                </div>
				{/* Image Section */}
				<div className='mt-24 mb-2 lg:mb-80 flex justify-center items-center'>
					<img
						src='/about.png'
						alt='Building'
						className='w-full h-[300]'
					/>
				</div>
			</div>
		</div>
	);
}
