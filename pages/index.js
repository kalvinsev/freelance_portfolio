import React from "react";

export default function Home() {
	return (
		<main
			className='min-h-screen bg-black text-white px-4 sm:px-6 py-12 max-w-6xl mx-auto font-sans scroll-smooth'
			id='top'
		>
			{/* Header */}
			<header className='mb-20 animate-fade-in'>
				<h1 className='text-3xl sm:text-5xl font-bold mb-4 tracking-tight animate-slide-in-up'>
					Software / Web Developer
				</h1>
				<p className='text-lg sm:text-xl mb-6 max-w-xl leading-relaxed animate-slide-in-up delay-100'>
					I build clean, custom software that
					helps startups and small businesses grow
					faster and work smarter.
				</p>
				<div className='flex flex-col sm:flex-row gap-4 animate-fade-in delay-200'>
					<a
						href='https://calendly.com/kalvinsev/30min'
							className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm shadow-md hover:scale-105 transition-transform text-center'
					>
						Book a Free Call
					</a>
					<a
						href='#contact'
						className='border border-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-black transition-colors text-center'
					>
						Contact Me
					</a>
				</div>
			</header>

			{/* Work Section */}
			<section
				id='work'
				className='mb-20 animate-slide-in-up'
			>
				<h2 className='text-2xl sm:text-3xl font-semibold mb-6 tracking-tight animate-fade-in'>
					Selected Work
				</h2>
				<div className='space-y-8'>
					<div className='bg-gray-700/30 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-md transition hover:shadow-lg animate-pop-in'>
						<h3 className='text-lg sm:text-xl font-semibold'>
							Startup Admin Dashboard
						</h3>
						<p className='text-gray-300 text-sm sm:text-base'>
							Built a custom analytics
							dashboard using React,
							Node.js, Tailwind, and
							Supabase to automate
							reporting and save 20+
							hours/month.
						</p>
					</div>
					<div className='bg-gray-700/30 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-md transition hover:shadow-lg animate-pop-in delay-100'>
						<h3 className='text-lg sm:text-xl font-semibold'>
							E-commerce Landing Page
						</h3>
						<p className='text-gray-300 text-sm sm:text-base'>
							Designed and developed a
							high-converting landing
							page with Next.js,
							Stripe, and Framer
							Motion.
						</p>
					</div>
					<div className='bg-gray-700/30 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-md transition hover:shadow-lg animate-pop-in delay-200'>
						<h3 className='text-lg sm:text-xl font-semibold'>
							Creator Client Portal
						</h3>
						<p className='text-gray-300 text-sm sm:text-base'>
							Built a client portal
							for a coaching business
							using Firebase and
							React, handling
							scheduling, payments,
							and resources.
						</p>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section
				id='services'
				className='mb-20 animate-slide-in-left'
			>
				<h2 className='text-2xl sm:text-3xl font-semibold mb-6 tracking-tight animate-fade-in'>
					What I Can Do for You
				</h2>
				<ul className='list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base animate-fade-in delay-100'>
					<li>
						Custom websites that look clean
						and convert well
					</li>
					<li>
						Dashboards, internal tools, and
						automation systems
					</li>
					<li>
						Stripe, Notion, API, and
						third-party integrations
					</li>
					<li>
						Ongoing dev support & small
						project packages
					</li>
				</ul>
				<div className='mt-6 animate-fade-in delay-200'>
					<p className='font-medium'>
						🚀 Popular Service: Launch-Ready
						Website in 5 Days – $1,500
					</p>
					<p className='text-gray-300 text-sm sm:text-base'>
						Perfect for solo founders,
						coaches, and creators
					</p>
				</div>
			</section>

			{/* About Section */}
			<section
				id='about'
				className='mb-20 animate-slide-in-right'
			>
				<h2 className='text-2xl sm:text-3xl font-semibold mb-6 tracking-tight animate-fade-in'>
					About Me
				</h2>
				<p className='text-gray-300 max-w-2xl leading-relaxed text-sm sm:text-base animate-fade-in delay-100'>
					I’m Kalvin—a freelance developer with a
					focus on clean, efficient code and
					solving real problems for clients. I’ve
					helped founders, small teams, and
					creators bring their ideas to
					life—whether that’s a polished site, a
					powerful backend, or tools that make
					their work easier.
				</p>
			</section>

			{/* Contact Section */}
			<section id='contact' className='animate-fade-in'>
				<h2 className='text-2xl sm:text-3xl font-semibold mb-6 tracking-tight animate-fade-in'>
					Let’s Work Together
				</h2>
				<p className='text-gray-300 mb-4 text-sm sm:text-base animate-fade-in delay-100'>
					Got an idea? Need a dev? I’d love to
					hear about your project.
				</p>
				<a
					href='mailto:hello@kalvin.dev'
					className='underline text-blue-400 hover:text-blue-300 transition-colors break-words animate-fade-in delay-200'
				>
					hello@kalvin.dev
				</a>
			</section>
		</main>
	);
}
