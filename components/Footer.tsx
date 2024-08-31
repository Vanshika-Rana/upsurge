export default function Footer() {
	return (
		<footer className='bg-white py-8'>
			<div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between items-center'>
				{/* Logo */}
				<div className='flex items-center'>
					<img
						className='h-8 mr-3'
						src='/upsurge-logo.png'
						alt='Upsurge Labs Logo'
					/>
					<span className='text-gray-800 text-sm'>
						© Upsurge Labs 2024, All rights reserved
					</span>
				</div>
			</div>
		</footer>
	);
}
