import { FaBuilding, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
	return (
		<section className='bg-gray-900 py-16'>
			<div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Heading */}
				<div className='text-center mb-12'>
					<h3 className='text-4xl font-extrabold text-white mb-4'>
						Get in Touch
					</h3>
					<p className='text-md text-gray-400 max-w-2xl mx-auto'>
						We&apos;d love to hear from you! Whether you&apos;re an
						entrepreneur with a groundbreaking idea, an investor
						looking for the next big thing, or simply interested in
						learning more about what we do, please get in touch.
					</p>
				</div>

				{/* Contact Information */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white'>
					{/* Company Information */}
					<div>
						<div className='flex justify-center mb-4'>
							<FaBuilding className='h-12 w-12 text-gray-500' />
						</div>
						<h3 className='text-lg font-semibold mb-2'>
							Company Information:
						</h3>
						<p className='text-sm text-gray-400'>
							Upsurge Labs Pte. Ltd
						</p>
						<p className='text-sm text-gray-400'>
							Tax ID: SGXXXXXXX
						</p>
					</div>

					{/* Address */}
					<div>
						<div className='flex justify-center mb-4'>
							<FaMapMarkerAlt className='h-12 w-12 text-gray-500' />
						</div>
						<h3 className='text-lg font-semibold mb-2'>Address:</h3>
						<p className='text-sm text-gray-400'>
							SILVER LAKE, Singapore
						</p>
						<p className='text-sm text-gray-400'>
							3 Fraser Street, #04-23A, Duo Tower
						</p>
						<p className='text-sm text-gray-400'>
							Zip Code: 189352
						</p>
					</div>

					{/* Contact Us */}
					<div>
						<div className='flex justify-center mb-4'>
							<FaPhoneAlt className='h-12 w-12 text-gray-500' />
						</div>
						<h3 className='text-lg font-semibold mb-2'>
							Contact Us:
						</h3>
						<p className='text-sm text-gray-400'>
							Email us for general queries, including marketing
							and partnership opportunities.
						</p>
						<p className='text-sm text-gray-400'>
							<a
								href='mailto:hello@upsurge.io'
								className='text-gray-300 hover:text-white'>
								hello@upsurge.io
							</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
