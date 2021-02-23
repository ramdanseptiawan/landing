import React from 'react'
import { NextSeo } from 'next-seo';
import LCSLogo from '../assets/Logo/lcs.svg';

import Head from 'next/head';
import Globe from '../components/globe';
import Networking from '../components/networking'
import Solution from '../components/section/solution';
import Product from '../components/section/product';
import Technology from '../components/section/technology';

export default function Home() {
	return <>
		<Head>
			<title>Langgeng Cipta Solusi - Empowering the Future</title>
		</Head>
		<NextSeo
			additionalMetaTags={[{
				name: 'keywords',
				content: 'lcs, lcs indonesia, lcsindonesia, it solution, solution lcsindo, lcs indo, langgeng cipta, solusi, langgeng, langgeng cipta solusi, cipta, empowering the future, empowering, the future, jembatanku, shms, structural health monitoring system, structural health monitoring, integrated, integrated system'
			}]}
			title='Langgeng Cipta Solusi - Empowering the Future'
			description='PT Langgeng Cipta Solusi (LCS) is an Indonesian IT solution based company, established in 2020, located in Bandung, West Java, Indonesia. We develop an end to end integrated real time on-line solutions focusing in monitoring and creating an early warning system. Supported by competent and dedicated multidiscipline R&D team, enable us to continuously improving our products to the latest trends and innovations.'
			canonical='https://lcsindonesia.com/'
			openGraph={{
				url: 'https://lcsindonesia.com/',
				title: 'Langgeng Cipta Solusi - Empowering the Future',
				description: 'PT Langgeng Cipta Solusi (LCS) is an Indonesian IT solution based company, established in 2020, located in Bandung, West Java, Indonesia. We develop an end to end integrated real time on-line solutions focusing in monitoring and creating an early warning system. Supported by competent and dedicated multidiscipline R&D team, enable us to continuously improving our products to the latest trends and innovations.',
				images: [
					{ url: 'https://lcsindonesia.com/logo512.png' },
				]
			}}
			twitter={{
				cardType: 'summary'
			}}
		/>
		<div className={'relative select-none'}>
			{/* <nav style={{ zIndex: 166782760 }} className={'fixed w-full gap-12 overflow-x-auto flex flex-row bg-gray-100 shadow align-middle py-4 px-12'}>
			<div className={'flex-grow'}>
				<LCSLogo fill={'#697bb8'} className={'h-6'} />
			</div>
			<p className={'m-auto'}>
				About
				</p>
			<p className={'m-auto'}>
				Why Us
			</p>
			<p className={'m-auto'}>
				Product
			</p>
			<p className={'m-auto'}>
				Technology
			</p>
			<p className={'m-auto'}>
				Contact
			</p>
		</nav> */}
			<section className={'min-h-screen relative gap-6 flex flex-col content-center items-center'}>
				<div className={'fixed z-10 flex h-full w-full'}>
					<Globe />
				</div>
				<div className={'absolute z-20 w-full h-screen m-auto'} />
				<div className="relative z-30 flex-1 min-w-full min-h-full">
					<div className={'absolute flex min-h-full min-w-full'}>
						<div className={'flex-grow m-auto px-14 py-12 md:py-0 sm:px-12'}>
							<div className={'grid grid-cols-1 place-items-center'}>
								<LCSLogo className={'w-80'} fill={'rgb(243, 244, 246)'} />
								<div className={'pt-2 pb-1'}>
									<div className={'h-1 w-80 bg-gray-100 rounded-full'} />
								</div>
								<h1 className="text-3xl text-center leading-none font-extrabold text-gray-100 tracking-tight mb-8">Empowering The Future</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className={'z-30 relative'} style={{ background: '#F7F7F2' }}>
				<section
					style={{ minHeight: 'calc(100vh + 2rem)', background: '#222725' }}
					className={'z-30 relative flex flex-col content-center items-center px-0 py-16 md:px-12 gap-12'}
				>
					<div className={'relative grid grid-cols-2'}>
						<div className={'col-span-3 h-screen z-50 md:col-span-1 flex flex-wrap content-center items-center gap-4 p-6'}>
							<div className={'mx-auto space-y-6'}>
								<h2 className="text-5xl text-center md:text-left leading-none font-extrabold text-gray-100 tracking-tight mb-8">
									Langgeng Cipta Solusi
								</h2>
								<p className={'text-gray-200 text-lg text-justify font-medium sm:leading-10 mx-auto mb-6'}>
									PT Langgeng Cipta Solusi (LCS) is an Indonesian IT solution based company, established in 2020, located in Bandung, West Java, Indonesia. We develop an end to end integrated real time on-line solutions focusing in monitoring and creating an early warning system. Supported by competent and dedicated multidiscipline R&D team, enable us to continuously improving our products to the latest trends and innovations.
								</p>
							</div>
						</div>
						<div className={'z-40 w-full col-span-2 md:col-span-1 h-screen p-0.5'}>
							<Networking className={'bg-gray-300'} />
						</div>
					</div>
				</section>
				<section style={{ minHeight: 'calc(100vh + 2rem)' }} className={'z-30 relative flex flex-col content-center items-center px-0 py-16 md:px-24'}>
					<div className={'w-full p-6'}>
						<h3 className="text-5xl leading-none text-center md:text-left font-extrabold text-gray-900 tracking-tight mb-8">
							Our Solution.
						</h3>
						<p className={'text-lg sm:text-2xl text-justify font-medium sm:leading-10 space-y-6 mb-6 text-gray-500'}>
							We’re leading designer and manufacturer of data logger and data acquisition system, specialize on predictive maintenance, monitoring and early warning system. Driven by a customer oriented approach with focus on innovative technology solutions, we want to empower our customers to achieve their goals perfectly.
					</p>
					</div>
					<div className="relative flex-1 min-w-full min-h-full">
						{/* <div className={'absolute z-30 flex min-h-full min-w-full'}>
							<div className={'flex-grow md:rounded-3xl transform shadow-lg bg-gray-200'}></div>
						</div> */}
						<div className={'absolute z-40 flex min-h-full min-w-full'}>
							<div className={'flex-grow md:rounded-3xl transform shadow-lg bg-gradient-to-tr from-purple-400 to-purple-700 md:-rotate-2'}></div>
						</div>
						<Solution />
					</div>
				</section>
				<section
					style={{ minHeight: 'calc(100vh + 2rem)', background: '#222725' }}
					className={'z-30 relative flex flex-col content-center items-center px-0 py-16 md:px-24 bg-gradient-to-br from-gray-800 to-gray-600'}
				>
					<div className={'w-full p-6'}>
						<h3 className="text-5xl text-center md:text-right leading-none font-extrabold text-gray-100 tracking-tight mb-8">
							Products.
						</h3>
						<p className={'text-justify md:text-right text-lg sm:text-2xl font-medium sm:leading-10 mb-6 text-gray-200'}>
							Intensive testing had conducted on our product series to offer reliability, precision and higher customers satisfaction level.
						</p>
					</div>
					<div className="relative flex-1 min-w-full min-h-full">
						{/* <div className={'absolute z-30 flex min-h-full min-w-full'}>
							<div className={'flex-grow md:rounded-3xl transform shadow-lg bg-gray-200'}></div>
						</div> */}
						<div className={'absolute z-40 flex min-h-full min-w-full'}>
							<div className={'flex-grow md:rounded-3xl transform shadow-lg bg-gradient-to-tr from-blue-400 to-blue-700 md:rotate-2'}></div>
						</div>
						<Product />
					</div>
				</section>
				<section style={{ minHeight: 'calc(100vh + 2rem)' }} className={'z-30 relative flex flex-col content-center items-center px-0 py-16 md:px-24'}>
					<div className={'w-full p-6'}>
						<h3 className="text-5xl text-center md:text-left leading-none font-extrabold text-gray-900 tracking-tight mb-8">
							Technology.
						</h3>
						<p className={'text-lg text-justify md:text-left sm:text-2xl font-medium sm:leading-10 mb-6 text-gray-500'}>
							In order to implement a robust production plans and easier maintenance process, we use the full-stack MERN Solution and other reliable programming language.
						</p>
					</div>
					<div className="relative flex-1 min-w-full min-h-full">
						{/* <div className={'absolute z-30 flex min-h-full min-w-full'}>
							<div className={'flex-grow md:rounded-3xl transform shadow-lg bg-gray-200'}></div>
						</div> */}
						<div className={'absolute z-40 flex min-h-full min-w-full'}>
							<div className={'flex-grow md:rounded-3xl transform shadow-lg bg-gradient-to-tr from-yellow-400 to-yellow-700 md:-rotate-2'}></div>
						</div>
						<div className={'relative z-50 flex min-h-full min-w-full p-12'}>
							<div className={'flex-grow m-auto'}>
								<Technology />
							</div>
						</div>
					</div>
				</section>
			</div>
			<footer
				style={{ background: '#222725' }}
				className={'min-h-screen z-20 relative gap-6 flex flex-col content-center items-center py-8 px-0 md:px-24'}
			>
				<div className={'flex'}>
					<h3 className="text-5xl leading-none font-extrabold text-gray-100 tracking-tight mb-8">
						Get in touch.
					</h3>
				</div>
				<div className="relative flex-1 min-w-full min-h-full">
					<div className={'relative md:absolute flex min-h-full min-w-full'}>
						<div className={'flex-grow m-auto p-6'}>
							<div className={'grid grid-cols-1 md:grid-cols-3 gap-10'}>
								<figure>
									<svg fill={'#F7F7F2'} className={'mx-auto w-24 h-24'} focusable="false" viewBox="0 0 24 24" aria-hidden="true" tabIndex="-1" title="PhoneIphone" data-ga-event-category="material-icons" data-ga-event-action="click" data-ga-event-label="PhoneIphone"><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"></path></svg>
									<div className={'mx-auto text-lg font-semibold text-center text-gray-200'}>
										<a href={'tel:+62-22-4268728'}>
											Phone: +62-22-4268728
										</a>
									</div>
								</figure>
								<figure>
									<svg fill={'#F7F7F2'} className={'mx-auto w-24 h-24'} focusable="false" viewBox="0 0 24 24" aria-hidden="true" tabIndex="-1" title="LocationOn" data-ga-event-category="material-icons" data-ga-event-action="click" data-ga-event-label="LocationOn"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
									<div className={'mx-auto text-lg font-semibold text-center text-gray-200'}>
										<a href={'https://g.page/langgeng-cipta-solusi?gm'}>
											Jl. Cihampelas No. 2 Bandung, 40116, Jawa Barat, Indonesia
										</a>
									</div>
								</figure>
								<figure>
									<svg fill={'#F7F7F2'} className={'mx-auto w-24 h-24'} focusable="false" viewBox="0 0 24 24" aria-hidden="true" tabIndex="-1" title="Email" data-ga-event-category="material-icons" data-ga-event-action="click" data-ga-event-label="Email"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
									<div className={'mx-auto text-lg font-semibold text-center text-gray-200'}>
										<a href={'mailto:cs@langgengciptasolusi.com'}>
											cs@langgengciptasolusi.com
										</a>
									</div>
								</figure>
							</div>
						</div>
					</div>
				</div>
				<div className={'flex'}>
					<p className="text-center text-gray-400">
						PT. Langgeng Cipta Solusi &copy; 2020 - {new Date().getFullYear()}
					</p>
				</div>
			</footer>
		</div>
	</>
}
