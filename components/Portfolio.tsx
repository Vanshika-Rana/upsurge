import React from "react";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { FaDna, FaBrain, FaHeartbeat } from "react-icons/fa"; // Icons for each category
import { GiDna2 } from "react-icons/gi";
import { LuBrainCircuit } from "react-icons/lu";
import { RiHeartPulseFill, RiSpaceShipFill } from "react-icons/ri";

export default function Portfolio() {
	return (
		<section className='bg-[#F5FAFF] py-80 h-screen tracking-wide'>
			<div className=' py-16 px-6 md:px-12 lg:px-24'>
				{/* Header Section */}
				<div className='mb-12'>
					<p className='text-md tracking-wide font-body text-blue-500 font-semibold mb-4 flex '>
						<span className='inline-block transform text-blue-500 mr-2'>
							<TbArrowBadgeRightFilled />
						</span>
						PORTFOLIO
					</p>
					<h2 className='font-display text-4xl md:text-5xl font-normal leading-tight'>
						Directions We Are Working On
					</h2>
					<p className='text-lg font-body text-gray-700 mt-4 max-w-8xl'>
						Upsurge Labs is proud to showcase a diverse range of
						innovative projects and startups that we have nurtured,
						our portfolio spans biotechnology, artificial
						intelligence, and consumer health tech, highlighting our
						commitment to fostering ground-breaking innovations.
					</p>
				</div>

				{/* Portfolio Categories */}
				<div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
					{/* Biotechnology */}
					<div className='text-left'>
						<GiDna2 className='text-blue-500 text-5xl mb-4 ' />
						<h3 className='font-body text-2xl font-semibold text-[#1B274B] mb-2'>
							Biotechnology
						</h3>
						<div className='border-b-2 border-blue-500  mx-auto mb-4'></div>
						<p className='text-gray-600'>
							Leveraging AI Processes to Revolutionize Biotech
							Research, Reducing Timelines.
						</p>
					</div>

					{/* Artificial Intelligence */}
					<div className='text-left'>
						<LuBrainCircuit className='text-blue-500 text-5xl mb-4 ' />
						<h3 className='font-display text-2xl font-semibold text-[#1B274B] mb-2'>
							Artificial Intelligence
						</h3>
						<div className='border-b-2 border-blue-500  mx-auto mb-4'></div>
						<p className='text-gray-600'>
							Building an ever-evolving automation platform
							powered by AI to execute daily tasks.
						</p>
					</div>

					{/* HealthTech Solutions */}
					<div className='text-left'>
						<RiHeartPulseFill className='text-blue-500 text-5xl mb-4' />
						<h3 className='font-display text-2xl font-semibold text-[#1B274B] mb-2'>
							HealthTech Solutions
						</h3>
						<div className='border-b-2 border-blue-500  mx-auto mb-4'></div>
						<p className='text-gray-600'>
							Developing wearable devices that monitor and improve
							health outcomes.
						</p>
					</div>
					{/* Space Solutions */}
					<div className='text-left'>
						<RiSpaceShipFill className='text-blue-500 text-5xl mb-4' />
						<h3 className='font-display text-2xl font-semibold text-[#1B274B] mb-2'>
							Spacetech Solutions
						</h3>
						<div className='border-b-2 border-blue-500  mx-auto mb-4'></div>
						<p className='text-gray-600'>
							Developing wearable devices that monitor and improve
							health outcomes.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
