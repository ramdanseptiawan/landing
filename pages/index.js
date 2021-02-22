import React from 'react'
import { NextSeo } from 'next-seo';
import JembatankuLogo from '../assets/Logo/jembatanku.svg';
import LCSLogo from '../assets/Logo/lcs.svg';
import AndroidStudioLogo from '../assets/Logo/androidStudio.svg';
import CPPLogo from '../assets/Logo/cpp.svg';
import MongoLogo from '../assets/Logo/mongo.svg';
import ExpressLogo from '../assets/Logo/expressjs.svg';
import ReactLogo from '../assets/Logo/react.svg';
import NodeLogo from '../assets/Logo/nodejs.svg';
import KotlinLogo from '../assets/Logo/kotlin.svg';
import PythonLogo from '../assets/Logo/python.svg';

import WIMLogo from '../assets/Logo/wim.svg';
import LandslideLogo from '../assets/Logo/landslide.svg';
import SmartFarmingLogo from '../assets/Logo/smartfarming.svg';

import Head from 'next/head';
import Globe from '../components/globe'
import Networking from '../components/networking'
import { useSpring, animated } from 'react-spring'
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Card = ({ svg, title, description, status }) => {
	const [flipped, setFlipped] = React.useState(false)
	const { transform, opacity } = useSpring({
		opacity: flipped ? 1 : 0,
		transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
		config: { mass: 5, tension: 500, friction: 80 }
	})
	const [actualHeight, setActualHeight] = React.useState(0)
	const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
	return (
		<animated.figure
			onMouseOver={() => set({ xys: [0, 0, 1.15] })}
			onMouseLeave={() => set({ xys: [0, 0, 1] })}
			onTouchStart={(e) => {
				e.preventDefault()
				set({ xys: [0, 0, 1.15] })
			}}
			onTouchEnd={(e) => {
				e.preventDefault()
				set({ xys: [0, 0, 1] })
				if (description) {
					setFlipped(state => !state)
				}
			}}
			style={{ transform: props.xys.interpolate(trans), WebkitTransform: props.xys.interpolate(trans) }}
			onClick={() => {
				if (description) {
					setFlipped(state => !state)
				}
			}}
			className={'relative'}
		>
			<animated.div ref={(instance) => {
				if (instance) {
					setActualHeight(instance.offsetHeight)
				}
			}} className={'bg-gradient-to-br from-gray-100 to-gray-300 w-full rounded-xl p-8 grid grid-cols-1 shadow-2xl ' + (description ? 'absolute' : '')}
				style={{ opacity: opacity.interpolate(o => 1 - o), WebkitTransform: transform, transform }} >
				{svg}
				<p className={'text-lg font-semibold text-center'}>
					{title}
				</p>
				<p className={'text-lg font-medium text-center ' + (status === 'Released' ? 'text-green-700' : 'text-purple-500')}>
					{status}
				</p>
			</animated.div>

			{description ?
				<animated.div className={'bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl p-4 flex h-full shadow-2xl w-full relative'}
					style={{
						height: actualHeight, opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`),
						WebkitTransform: transform.interpolate(t => `${t} rotateX(180deg)`)
					}} >
					<div className={'flex-grow m-auto overflow-y-auto max-h-full'}>
						<div className={'grid grid-cols-1'}>
							<p className={'text-center font-medium'}>{description}</p>
						</div>
					</div>
				</animated.div> : null}
		</animated.figure>
	)
}

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
			<section className={'min-h-screen relative gap-6 flex flex-col content-center items-center bg-black'}>
				<div className={'fixed z-10 flex h-full w-full'}>
					<Globe />
				</div>
				<div className={'absolute z-20 w-full h-screen m-auto'}
				// style={{ WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)' }}
				/>
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
			<div className={'space-y-32 z-30 relative bg-white'}>
				<section className={'min-h-screen z-30 relative gap-12 flex flex-col content-center items-center bg-gradient-to-br from-gray-800 to-gray-600 py-0 px-0 md:py-4 md:px-12'}>
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
				<section className={'min-h-screen z-30 relative flex flex-col content-center items-center py-0 px-0 md:py-4 md:px-24'}>
					<div className={'w-full p-6'}>
						<h3 className="text-5xl leading-none text-center md:text-left font-extrabold text-gray-900 tracking-tight mb-8">
							Our Solution.
						</h3>
						<p className={'text-lg sm:text-2xl text-center md:text-justify font-medium sm:leading-10 space-y-6 mb-6 text-gray-500'}>
							We’re leading designer and manufacturer of data logger and data acquisition system, specialize on predictive maintenance, monitoring and early warning system. Driven by a customer oriented approach with focus on innovative technology solutions, we want to empower our customers to achieve their goals perfectly.
					</p>
					</div>
					<div className="relative flex-1 min-w-full min-h-full">
						<div className={'absolute z-30 flex min-h-full min-w-full'}>
							<div className={'flex-grow md:rounded-3xl transform shadow-lg bg-gray-200'} />
						</div>
						<div className={'absolute z-40 flex min-h-full min-w-full'}>
							<div className={'flex-grow md:rounded-3xl transform shadow-lg bg-gradient-to-tr from-blue-400 to-blue-700 md:-rotate-2'} />
						</div>
						<div className={'relative z-50 lg:absolute flex min-h-full min-w-full p-12'}>
							<div className={'flex-grow m-auto'}>
								<div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-0'}>
									<Card
										svg={<svg fill={'rgb(17, 24, 39)'} className={'mx-auto w-28 h-28 p-4'} focusable="false" viewBox="0 0 24 24" aria-hidden="true" tabIndex="-1" title="Devices" data-ga-event-category="material-icons" data-ga-event-action="click" data-ga-event-label="Devices"><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path></svg>}
										title={'Responsive'}
										description={'Every software we made designed for multiple devices, in fact, we focus on cross-platform development.'}
									/>
									<Card
										svg={<svg fill={'rgb(17, 24, 39)'} className={'mx-auto w-28 h-28 p-4'} focusable="false" viewBox="0 0 24 24" aria-hidden="true" tabIndex="-1" title="Sync" data-ga-event-category="material-icons" data-ga-event-action="click" data-ga-event-label="Sync"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"></path></svg>}
										title={'Real-time'}
										description={'We developed an online monitoring and alerting system. Every sensors do the calculations continuously for every seconds for 24/7.'}
									/>
									<Card
										svg={<svg fill={'rgb(17, 24, 39)'} className={'mx-auto w-28 h-28 p-4'} focusable="false" viewBox="0 0 24 24" aria-hidden="true" tabIndex="-1" title="VerifiedUser" data-ga-event-category="material-icons" data-ga-event-action="click" data-ga-event-label="VerifiedUser"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></svg>}
										title={'Reliable'}
										description={'Every products we made follows the industrial standards with the helps of our professionals on their field.'}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className={'min-h-screen z-30 relative flex flex-col content-center items-center py-0 px-0 md:py-4 md:px-24'}>
					<div className={'w-full p-6'}>
						<h3 className="text-5xl text-center md:text-right leading-none font-extrabold text-gray-900 tracking-tight mb-8">
							Products.
						</h3>
						<p className={'text-center md:text-right text-lg sm:text-2xl font-medium sm:leading-10 mb-6 text-gray-500'}>
							Intensive testing had conducted on our product series to offer reliability, precision and higher customers satisfaction level.
						</p>
					</div>
					<div className="relative flex-1 min-w-full min-h-full">
						<div className={'absolute z-30 flex min-h-full min-w-full'}>
							<div className={'flex-grow md:rounded-3xl transform shadow-lg bg-gray-200'}></div>
						</div>
						<div className={'absolute z-40 flex min-h-full min-w-full'}>
							<div className={'flex-grow md:rounded-3xl transform shadow-lg bg-gradient-to-br from-purple-400 to-purple-700 md:rotate-2'}></div>
						</div>
						<div className={'relative z-50 lg:absolute flex min-h-full min-w-full p-12'}>
							<div className={'flex-grow m-auto'}>
								<div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 md:px-0'}>
									<Card
										svg={<JembatankuLogo className={'mx-auto w-32 h-32'} fill={'#253160'} />}
										title={'JembatanKu'}
										status={'Released'}
										description={'JembatanKu is an integrated monitoring system that provides predictive maintenance, early alerting, and health monitoring for bridges in real time.'}
									/>
									<Card
										svg={<WIMLogo className={'mx-auto w-32 h-32'} />}
										title={'Weight in Motion'}
										status={'On-Going'}
										description={'Our WIM is an integrated Weight in Motion system that provides predictive maintenance and an accurate payment classification based on vehicle`s weight.'}
									/>
									<Card
										svg={<LandslideLogo className={'mx-auto w-32 h-32'} />}
										title={'Landslide Monitoring'}
										status={'On-Going'}
										description={'Our Landslide Monitoring is an integrated monitoring system that provides predictive maintenance, early alerting, and land movement monitoring in real time.'}
									/>
									<Card
										svg={<SmartFarmingLogo className={'mx-auto w-32 h-32'} />}
										title={'Smart Farming'}
										status={'On-Going'}
										description={'Our Smart Farming is an integrated monitoring system that provides predictive maintenance and the most optimal farming results.'}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className={'min-h-screen z-30 relative flex flex-col content-center items-center py-0 px-0 md:py-4 md:px-24'}>
					<div className={'w-full p-6'}>
						<h3 className="text-5xl text-center md:text-left leading-none font-extrabold text-gray-900 tracking-tight mb-8">
							Technology.
						</h3>
						<p className={'text-lg text-center md:text-left sm:text-2xl font-medium sm:leading-10 mb-6 text-gray-500'}>
							In order to implement a robust production plans and easier maintenance process, we use the full-stack MERN Solution and other reliable programming language.
						</p>
					</div>
					<div className="relative flex-1 min-w-full min-h-full">
						<div className={'absolute z-30 flex min-h-full min-w-full'}>
							<div className={'flex-grow md:rounded-3xl transform shadow-lg bg-gray-200'}></div>
						</div>
						<div className={'absolute z-40 flex min-h-full min-w-full'}>
							<div className={'flex-grow md:rounded-3xl transform shadow-lg bg-gradient-to-tr from-yellow-400 to-yellow-700 md:-rotate-2'}></div>
						</div>
						<div className={'relative z-50 flex min-h-full min-w-full p-12'}>
							<div className={'flex-grow m-auto'}>
								<div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 md:px-0'}>
									<Card
										svg={<MongoLogo className={'mx-auto w-32 h-32'} />}
										title={'MongoDB'}
									/>
									<Card
										svg={<ExpressLogo className={'mx-auto w-32 h-32'} />}
										title={'Express.js'}
									/>
									<Card
										svg={<ReactLogo className={'mx-auto w-32 h-32'} />}
										title={'React Framework'}
									/>
									<Card
										svg={<NodeLogo className={'mx-auto w-32 h-32'} />}
										title={'Node.js'}
									/>
									<Card
										svg={<KotlinLogo className={'mx-auto w-32 h-32'} />}
										title={'Kotlin'}
									/>
									<Card
										svg={<AndroidStudioLogo className={'mx-auto w-32 h-32 p-6'} />}
										title={'Android Studio'}
									/>
									<Card
										svg={<CPPLogo className={'mx-auto w-32 h-32 p-7'} />}
										title={'C/C++'}
									/>
									<Card
										svg={<PythonLogo className={'mx-auto w-32 h-32'} />}
										title={'Python'}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<footer className={'min-h-screen z-20 relative gap-6 flex flex-col content-center items-center py-8 px-0 md:px-24 bg-gradient-to-br from-gray-100 to-gray-300'}>
				<div className={'flex'}>
					<h3 className="text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">
						Get in touch.
					</h3>
				</div>
				<div className="relative flex-1 min-w-full min-h-full">
					<div className={'relative md:absolute flex min-h-full min-w-full'}>
						<div className={'flex-grow m-auto p-6'}>
							<div className={'grid grid-cols-1 md:grid-cols-3 gap-10'}>
								<figure>
									<svg fill={'rgb(17, 24, 39)'} className={'mx-auto w-24 h-24'} focusable="false" viewBox="0 0 24 24" aria-hidden="true" tabIndex="-1" title="PhoneIphone" data-ga-event-category="material-icons" data-ga-event-action="click" data-ga-event-label="PhoneIphone"><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"></path></svg>
									<div className={'mx-auto text-lg font-semibold text-center'}>
										<a href={'tel:+62-22-4268728'}>
											Phone: +62-22-4268728
										</a>
									</div>
								</figure>
								<figure>
									<svg fill={'rgb(17, 24, 39)'} className={'mx-auto w-24 h-24'} focusable="false" viewBox="0 0 24 24" aria-hidden="true" tabIndex="-1" title="LocationOn" data-ga-event-category="material-icons" data-ga-event-action="click" data-ga-event-label="LocationOn"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
									<div className={'mx-auto text-lg font-semibold text-center'}>
										<a href={'https://g.page/langgeng-cipta-solusi?gm'}>
											Jl. Cihampelas No. 2 Bandung, 40116, Jawa Barat, Indonesia
										</a>
									</div>
								</figure>
								<figure>
									<svg fill={'rgb(17, 24, 39)'} className={'mx-auto w-24 h-24'} focusable="false" viewBox="0 0 24 24" aria-hidden="true" tabIndex="-1" title="Email" data-ga-event-category="material-icons" data-ga-event-action="click" data-ga-event-label="Email"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
									<div className={'mx-auto text-lg font-semibold text-center'}>
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
					<p className="text-center text-gray-800">
						PT. Langgeng Cipta Solusi &copy; {new Date().getFullYear()}
					</p>
				</div>
			</footer>
		</div>
	</>
}
