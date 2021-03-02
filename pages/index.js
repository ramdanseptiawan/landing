import React from 'react';
import { NextSeo } from 'next-seo';
import LCSLogo from '../assets/Logo/lcs.svg';
import { InView } from 'react-intersection-observer';

import dynamic from 'next/dynamic';
const Globe = dynamic(() => import('../components/globe'));
const Networking = dynamic(() => import('../components/networking'));
const Solution = dynamic(() => import('../components/section/solution'));
const Product = dynamic(() => import('../components/section/product'));
const Technology = dynamic(() => import('../components/section/technology'));
const Footer = dynamic(() => import('../components/section/footer'));

const Navbar = ({ section = 'landing' }) => {
	return <nav
		style={{ zIndex: 166782760, background: '#121113' }}
		className={'fixed w-full gap-12 hidden md:flex overflow-x-auto  flex-row align-middle transform py-4 px-12 ' + (section !== 'landing' ? 'shadow-xl' : '')}
	>
		<a href={'#landing'} className={'flex-grow'}>
			<LCSLogo fill={'rgb(243, 244, 246)'} className={'h-6'} />
		</a>
		<a href={'#about'} className={'m-auto text-gray-100 font-semibold ' + (section === 'about' ? 'font-extrabold' : '')}>
			About
			<div className={'pt-2 pb-1'}>
				<div className={'opacity-95 bg-gray-100 rounded-full ' + (section === 'about' ? 'h-1 w-full' : '')} />
			</div>
		</a>
		<a href={'#solution'} className={'m-auto text-gray-100 font-semibold ' + (section === 'solution' ? 'font-extrabold' : '')}>
			Our Solution
			<div className={'pt-2 pb-1'}>
				<div className={'opacity-95 bg-gray-100 rounded-full ' + (section === 'solution' ? 'h-1 w-full' : '')} />
			</div>
		</a>
		<a href={'#products'} className={'m-auto text-gray-100 font-semibold ' + (section === 'products' ? 'font-extrabold' : '')}>
			Product
			<div className={'pt-2 pb-1'}>
				<div className={'opacity-95 bg-gray-100 rounded-full ' + (section === 'products' ? 'h-1 w-full' : '')} />
			</div>
		</a>
		<a href={'#technology'} className={'m-auto text-gray-100 font-semibold ' + (section === 'technology' ? 'font-extrabold' : '')}>
			Technology
			<div className={'pt-2 pb-1'}>
				<div className={'opacity-95 bg-gray-100 rounded-full ' + (section === 'technology' ? 'h-1 w-full' : '')} />
			</div>
		</a>
		<a href={'#contact'} className={'m-auto text-gray-100 font-semibold ' + (section === 'contact' ? 'font-extrabold' : '')}>
			Contact
			<div className={'pt-2 pb-1'}>
				<div className={'opacity-95 bg-gray-100 rounded-full ' + (section === 'contact' ? 'h-1 w-full' : '')} />
			</div>
		</a>
	</nav>
}

export default function Home() {
	const [section, setSection] = React.useState('landing')
	const [Layout, setLayout] = React.useState()
	React.useEffect(() => {
		setLayout(<div className={'relative select-none'}>
			<InView
				threshold={0.5}
				onChange={(inView) => {
					if (inView) {
						setSection('landing')
					}
				}}
			>
				<section id={'landing'} className={'min-h-screen pt-8 relative gap-6 flex flex-col content-center items-center'} style={{ background: '#121113' }}>
					<div className={'fixed z-10 flex h-full w-full'}>
						<Globe />
					</div>
					<div className={'absolute z-20 w-full h-screen m-auto'} />
					<div className="relative z-30 flex-1 min-w-full min-h-full">
						<div className={'absolute flex min-h-full min-w-full'}>
							<div className={'flex-grow m-auto px-14 py-12 md:py-0 sm:px-12'}>
								<div className={'grid grid-cols-1 place-items-center'}>
									<LCSLogo className={'w-80'} fill={'rgba(243, 244, 246, 0.95)'} />
									<div className={'pt-2 pb-1'}>
										<div className={'h-1 w-80 opacity-95 bg-gray-100 rounded-full'} />
									</div>
									<h1 className="text-3xl text-center opacity-95 leading-none font-extrabold text-gray-100 tracking-tight mb-8">Empowering The Future</h1>
								</div>
							</div>
						</div>
					</div>
				</section>
			</InView>
			<div className={'z-30 relative'} style={{ background: '#F7F7F2' }}>
				<InView
					threshold={0.5}
					onChange={(inView) => {
						if (inView) {
							setSection('about')
						}
					}}
				>
					<section
						id={'about'}
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
				</InView>
				<InView
					threshold={0.5}
					onChange={(inView) => {
						if (inView) {
							setSection('solution')
						}
					}}
				>
					<section id={'solution'} style={{ minHeight: 'calc(100vh + 2rem)' }} className={'z-30 relative flex flex-col content-center items-center px-0 py-16 md:px-24'}>
						<div className={'w-full p-6'}>
							<h3 className="text-5xl leading-none text-center md:text-left font-extrabold text-gray-900 tracking-tight mb-8">
								Our Solution.
							</h3>
							<p className={'text-lg sm:text-2xl text-justify font-medium sm:leading-10 space-y-6 mb-6 text-gray-600'}>
								We’re leading designer and manufacturer of data logger and data acquisition system, specialize on predictive maintenance, monitoring and early warning system. Driven by a customer oriented approach with focus on innovative technology solutions, we want to empower our customers to achieve their goals perfectly.
							</p>
						</div>
						<div className="relative flex-1 min-w-full min-h-full">
							<div className={'absolute z-40 flex min-h-full min-w-full'}>
								<div className={'flex-grow md:rounded-3xl transform shadow-lg bg-gradient-to-tr from-purple-400 to-purple-700 md:-rotate-2'}></div>
							</div>
							<Solution />
						</div>
					</section>
				</InView>
				<InView
					threshold={0.5}
					onChange={(inView) => {
						if (inView) {
							setSection('products')
						}
					}}
				>
					<section
						id={'products'}
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
							<div className={'absolute z-40 flex min-h-full min-w-full'}>
								<div className={'flex-grow md:rounded-3xl transform shadow-lg bg-gradient-to-tr from-blue-400 to-blue-700 md:rotate-2'}></div>
							</div>
							<Product />
						</div>
					</section>
				</InView>
				<InView
					threshold={0.5}
					onChange={(inView) => {
						if (inView) {
							setSection('technology')
						}
					}}
				>
					<section id={'technology'} style={{ minHeight: 'calc(100vh + 2rem)' }} className={'z-30 relative flex flex-col content-center items-center px-0 py-16 md:px-24'}>
						<div className={'w-full p-6'}>
							<h3 className="text-5xl text-center md:text-left leading-none font-extrabold text-gray-900 tracking-tight mb-8">
								Technology.
							</h3>
							<p className={'text-lg text-justify md:text-left sm:text-2xl font-medium sm:leading-10 mb-6 text-gray-600'}>
								In order to implement a robust production plans and easier maintenance process, we use the full-stack MERN Solution and other reliable programming language.
							</p>
						</div>
						<div className="relative flex-1 min-w-full min-h-full">
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
				</InView>
			</div>
			<InView
				threshold={0.5}
				onChange={(inView) => {
					if (inView) {
						setSection('contact')
					}
				}}
			>
				<Footer />
			</InView>
		</div>)
	}, [])
	return <>
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
		<Navbar section={section} />
		{Layout}
	</>
}
