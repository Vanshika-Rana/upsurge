export default function About() {
	return (
		<section className=''>
			<div className='gap-16 items-center py-16 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-24 lg:px-8'>
				<div className='text-black'>
					<h2 className='mb-6 text-4xl tracking-tight font-extrabold text-black'>
						About Us
					</h2>
					<p className='mb-6 text-lg font-light text-gray-700'>
						Upsurge Labs is an innovation lab dedicated to advancing
						technology in the realms of biotechnology, artificial
						intelligence, and consumer health tech. With the backing
						of Instadapp, we provide a collaborative environment
						where researchers, developers, and entrepreneurs can
						bring cutting-edge solutions to life.
					</p>
					<h3 className='mt-8 mb-4 text-2xl font-semibold text-black'>
						Our Vision
					</h3>
					<p className='mb-6 text-lg font-light text-gray-700'>
						To be a global leader in technological innovation,
						pushing the boundaries of what&apos;s possible to
						improve lives.
					</p>
					<h3 className='mt-8 mb-4 text-2xl font-semibold text-black'>
						Our Mission
					</h3>
					<p className='text-lg font-light text-gray-700'>
						To incubate and accelerate the development of pioneering
						technologies in biotech, AI, and consumer health,
						creating impactful solutions for a better future.
					</p>
				</div>
				<div className='grid grid-cols-2 gap-4 mt-8 lg:mt-0'>
					<img
						className='w-full rounded-lg shadow-xl'
						src='about2.png'
						alt='Office content 1'
					/>
					<img
						className='mt-4 w-full lg:mt-10 rounded-lg shadow-xl'
						src='about1.png'
						alt='Office content 2'
					/>
				</div>
			</div>
		</section>
	);
}
