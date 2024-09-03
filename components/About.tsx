import React from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb"; // You can use react-icons for the arrows

export default function About() {
	return (
		<div id="about" className='bg-[#1B274B] text-white py-16 px-6 md:px-12 lg:px-24 min-h-screen lg:h-screen tracking-wide'>
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
							Upsurge Labs is an innovation powerhouse, committed
							to advancing the frontiers of biotechnology,
							artificial intelligence, spacetech, and health tech.
						</h1>
						<p className='text-lg font-body lg:w-1/2 lg:pl-12'>
							We are not just an innovation lab; we are a
							collective of visionaries, engineers, and scientists
							who are dedicated to pushing the boundaries of
							what’s possible. At Upsurge Labs, we believe in the
							power of technology to shape a better future. Our
							mission is to harness this potential by nurturing
							breakthrough ideas and transforming them into
							real-world applications that can revolutionize
							industries and improve lives globally. Our lab is a
							hub of collaboration, where the brightest minds come
							together to experiment, innovate, and create
							solutions that are not just ahead of the curve—they
							set the curve.
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
								To lead global innovation by transforming
								possibilities into realities. We strive to set
								new standards in technology, creating solutions
								that redefine the future of healthcare, AI, and
								beyond, impacting lives on a global scale.
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
								To incubate and accelerate the next generation
								of pioneering technologies. We’re committed to
								developing impactful, scalable solutions in
								biotech, AI, spacetech, and health tech,
								addressing tomorrow’s challenges today.
							</p>
						</div>
					</div>
				</div>
				{/* Image Section */}
				<div className='mt-24 mb-2 lg:mb-72 flex justify-center items-center'>
					<img
						src='/about.png'
						alt='Building'
						className='w-auto h-auto'
					/>
				</div>
			</div>
		</div>
	);
}
