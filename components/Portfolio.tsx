import React from "react";
import { FaDna, FaRobot, FaHeartbeat } from "react-icons/fa";

export default function Portfolio() {
	return (
		<section className='py-16'>
			<div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center mb-12'>
					<h2 className='text-4xl font-extrabold text-gray-900'>
						Our Portfolio
					</h2>
					<p className='mt-4 text-lg text-gray-500 max-w-2xl mx-auto'>
						Upsurge Labs is proud to showcase a diverse range of
						innovative projects and startups that we have nurtured
						and supported. Our portfolio spans biotechnology,
						artificial intelligence, and consumer health tech,
						highlighting our commitment to fostering groundbreaking
						innovations.
					</p>
				</div>

				{/* Timeline Container */}
				<div className='relative'>
					{/* Vertical Line */}
					<div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-900'></div>

					{/* Timeline Item 1 */}
					<div className='mb-12 flex flex-col md:flex-row items-center w-full'>
						<div className='md:w-1/2 flex justify-end md:pr-8 mb-4 md:mb-0'>
							<div className='bg-gray-100 border-black border-2 bg-opacity-90 backdrop-blur-lg p-8 rounded-lg shadow-xl w-full'>
								<h3 className='text-xl font-semibold text-black mb-4'>
									Biotechnology
								</h3>
								<p className='text-gray-700'>
									Leveraging AI-Driven Processes to
									Revolutionize Biotech Research, Reducing
									Timelines from Years to Months.
								</p>
							</div>
						</div>
						<div className='relative z-10 mb-4 md:mb-0 hidden md:block'>
							<FaDna className='text-white bg-gray-800 p-2 rounded-full shadow-md border-2 border-white h-12 w-12' />
						</div>
						<div className='md:w-1/2'></div>
					</div>

					{/* Timeline Item 2 */}
					<div className='mb-12 flex flex-col md:flex-row-reverse items-center w-full'>
						<div className='md:w-1/2 flex justify-start md:pl-8 mb-4 md:mb-0'>
							<div className='bg-gray-100 border-black border-2 bg-opacity-90 backdrop-blur-lg p-8 rounded-lg shadow-xl w-full'>
								<h3 className='text-xl font-semibold text-black mb-4'>
									Artificial Intelligence
								</h3>
								<p className='text-gray-700'>
									Building an ever-evolving automation
									platform powered by AI to execute daily
									tasks.
								</p>
							</div>
						</div>
						<div className='relative z-10 mb-4 md:mb-0 hidden md:block'>
							<FaRobot className='text-white bg-gray-800 p-2 rounded-full shadow-md border-2 border-white h-12 w-12' />
						</div>
						<div className='md:w-1/2'></div>
					</div>

					{/* Timeline Item 3 */}
					<div className='mb-12 flex flex-col md:flex-row items-center w-full'>
						<div className='md:w-1/2 flex justify-end md:pr-8 mb-4 md:mb-0'>
							<div className='bg-gray-100 border-black border-2 bg-opacity-90 backdrop-blur-lg p-8 rounded-lg shadow-xl w-full'>
								<h3 className='text-xl font-semibold text-black mb-4'>
									HealthTech Solutions
								</h3>
								<p className='text-gray-700'>
									Developing wearable devices that monitor and
									improve health outcomes.
								</p>
							</div>
						</div>
						<div className='relative z-10 mb-4 md:mb-0 hidden md:block'>
							<FaHeartbeat className='text-white bg-gray-800 p-2 rounded-full shadow-md border-2 border-white h-12 w-12' />
						</div>
						<div className='md:w-1/2'></div>
					</div>
				</div>
			</div>
		</section>
	);
}
