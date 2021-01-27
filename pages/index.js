import { Divider, Grid, Link, Paper, Typography } from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Section from '../components/Section'
import TabList from '../components/TabList'
import { Email, LocationOn, PhoneIphone } from '@material-ui/icons'
import { ReactComponent as JembatankuDisplay } from '../assets/Logo/jembatanku.svg'
import { ReactComponent as LCSDisplay } from '../assets/Logo/lcs.svg'

import { ReactComponent as AndroidStudioDisplay } from '../assets/Logo/androidStudio.svg'
import { ReactComponent as CPPDisplay } from '../assets/Logo/cpp.svg'
import { ReactComponent as MongoDisplay } from '../assets/Logo/mongo.svg'
import { ReactComponent as ExpressDisplay } from '../assets/Logo/expressjs.svg'
import { ReactComponent as ReactDisplay } from '../assets/Logo/react.svg'
import { ReactComponent as NodeDisplay } from '../assets/Logo/nodejs.svg'
import { ReactComponent as KotlinDisplay } from '../assets/Logo/kotlin.svg'
import { ReactComponent as PythonDisplay } from '../assets/Logo/python.svg'

export default function Home() {
	const isLarge = true
	const sections = [
		{ label: 'Welcome', hash: 'welcome' },
		{ label: 'About', hash: 'about' },
		{ label: 'Product', hash: 'product' },
		{ label: 'Technology', hash: 'technology' },
		{ label: 'Contact Us', hash: 'contact' },
	];

	const contents = [
		{
			hash: 'about', background: null, value: <Grid item xs={12} md={12}>
				<Grid
					container
					justify={'center'}
					alignContent={'center'}
					alignItems={'center'}
					style={{ minHeight: isLarge ? '100vh' : '100%' }}
				>
					<Grid item xs={12} md={6} style={{ padding: '5%' }}>
						<Image
							layout={'responsive'}
							width={'100%'}
							height={'100%'}
							objectFit={'contain'}
							src={'/meeting.jpg'}
							alt={'Kantor PT. Langgeng Cipta Solusi'}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<Grid container>
							<Grid item xs={12} md={12} style={{ padding: 10 }}>
								<Typography variant={'h2'} align={'center'} style={{ fontSize: '3rem' }}>
									Langgeng Cipta Solusi
								</Typography>
							</Grid>
							<Grid item xs={12} md={12} style={{ padding: 10 }}>
								<Typography align={'justify'}>
									PT Langgeng Cipta Solusi (LCS) is an Indonesian IT solution based company, established in 2020, located in Bandung, West Java, Indonesia. We develop an end to end integrated real time on-line solutions focusing in monitoring and creating an early warning system. Supported by competent and dedicated multidiscipline R&D team, enable us to continuously improving our products to the latest trends and innovations. Our objectives and motivations are always to create products that empower our customers to reach their goals as well as giving benefit to all stake holders.
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		},
		{
			hash: 'product', background: 'linear-gradient(to bottom right, black, black, gray)', value: <Grid item xs={12} md={12}>
				<Grid
					container
					justify={'center'}
					alignContent={'center'}
					alignItems={'center'}
					spacing={2}
					style={{ minHeight: isLarge ? '100vh' : '100%' }}
				>
					<Grid item xs={12} md={12}>
						<Typography align={'center'} variant={'h5'} component={'h3'} style={{ color: 'white' }}>
							Real time, Responsive, and Reliable.
						</Typography>
					</Grid>
					<Grid item xs={12} md={12}>
						<Typography align={'center'} style={{ color: 'white' }}>
							Every product we made designed for multiple devices to be accessed wherever and whenever with real time updates.
						</Typography>
					</Grid>
					<Grid item xs={12} md={8}>
						<Paper style={{ padding: '2.5%' }}>
							<Grid container>
								<Grid item xs={12} md={12}>
									<Grid
										container
										spacing={5}
										justify={'center'}
										alignContent={'center'}
										alignItems={'center'}
									>
										<Grid item item xs={12} md={6} style={{ height: '100%', padding: '5%' }}>
											<Link href={'https://www.mongodb.com/'} target={'_blank'} rel={'noopener'}>
												<JembatankuDisplay width={'100%'} height={'100%'} fill={'#223159'} />
											</Link>
										</Grid>
										<Grid item xs={12} md={6} style={{ height: '100%' }}>
											<Grid container>
												<Grid item xs={12} md={12} style={{ maxHeight: '40vh', overflow: 'auto' }}>
													<Typography align={'justify'}>
														JembatanKu is an Indonesia domestic product in the form of an integrated system which is built and developed to provide an early alerting and health monitoring system for bridges in real time.
													</Typography>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
				</Grid>
			</Grid>
		},
		{
			hash: 'technology', background: null, value: <Grid item xs={12} md={12}>
				<Grid
					container
					justify={'center'}
					alignContent={'center'}
					alignItems={'center'}
					spacing={2}
					style={{ minHeight: isLarge ? '100vh' : '100%' }}
				>
					<Grid item xs={12} md={12}>
						<Typography align={'center'} variant={'h5'} component={'h3'}>Modern company requires modern solution.</Typography>
					</Grid>
					<Grid item xs={12} md={12}>
						<Typography align={'center'}>
							In order to implement a robust production plans and easier maintenance process, we use the full-stack <Link color={'textPrimary'} href={'https://www.mongodb.com/mern-stack'} target={'_blank'} rel={'noopener'}>MERN Solution</Link> and other reliable programming language.
						</Typography>
					</Grid>
					<Grid item xs={12} md={12}>
						<Grid
							container
							justify={'center'}
							alignContent={'center'}
							alignItems={'center'}
							spacing={5}
						>
							<Grid item xs={12} md={3}>
								<Paper>
									<Grid
										container
										justify={'center'}
										alignContent={'center'}
										alignItems={'center'}
										style={{ minHeight: 250, padding: '5%' }}
									>
										<Grid item>
											<Link href={'https://www.mongodb.com/'} target={'_blank'} rel={'noopener'}>
												<MongoDisplay height={'100%'} width={'100%'} />
											</Link>
										</Grid>
									</Grid>
								</Paper>
							</Grid>
							<Grid item xs={12} md={3}>
								<Paper>
									<Grid
										container
										justify={'center'}
										alignContent={'center'}
										alignItems={'center'}
										style={{ minHeight: 250, padding: '5%' }}
									>
										<Grid item>
											<Link href={'https://expressjs.com/'} target={'_blank'} rel={'noopener'}>
												<ExpressDisplay height={'100%'} width={'100%'} />
											</Link>
										</Grid>
									</Grid>
								</Paper>
							</Grid>
							<Grid item xs={12} md={3}>
								<Paper>
									<Grid
										container
										justify={'center'}
										alignContent={'center'}
										alignItems={'center'}
										style={{ minHeight: 250, padding: '5%' }}
									>
										<Grid item>
											<Link href={'https://reactjs.org/'} target={'_blank'} rel={'noopener'}>
												<ReactDisplay height={'100%'} width={'100%'} />
											</Link>
										</Grid>
									</Grid>
								</Paper>
							</Grid>
							<Grid item xs={12} md={3}>
								<Paper>
									<Grid
										container
										justify={'center'}
										alignContent={'center'}
										alignItems={'center'}
										style={{ minHeight: 250, padding: '5%' }}
									>
										<Grid item>
											<Link href={'https://nodejs.org/en/about/'} target={'_blank'} rel={'noopener'}>
												<NodeDisplay height={'100%'} width={'100%'} />
											</Link>
										</Grid>
									</Grid>
								</Paper>
							</Grid>

							<Grid item xs={12} md={3}>
								<Paper>
									<Grid
										container
										justify={'center'}
										alignContent={'center'}
										alignItems={'center'}
										style={{ minHeight: 250, padding: '5%' }}
									>
										<Grid item>
											<Link href={'https://www.python.org/about/'} target={'_blank'} rel={'noopener'}>
												<PythonDisplay height={'100%'} width={'100%'} />
											</Link>
										</Grid>
									</Grid>
								</Paper>
							</Grid>
							<Grid item xs={12} md={3}>
								<Paper>
									<Grid
										container
										justify={'center'}
										alignContent={'center'}
										alignItems={'center'}
										style={{ minHeight: 250, padding: '5%' }}
									>
										<Grid item>
											<Link href={'https://kotlinlang.org/'} target={'_blank'} rel={'noopener'}>
												<KotlinDisplay height={'100%'} width={'100%'} />
											</Link>
										</Grid>
									</Grid>
								</Paper>
							</Grid>
							<Grid item xs={12} md={3}>
								<Paper>
									<Grid
										container
										justify={'center'}
										alignContent={'center'}
										alignItems={'center'}
										style={{ minHeight: 250, padding: '5%' }}
									>
										<Grid item>
											<Link href={'https://developer.android.com/studio'} target={'_blank'} rel={'noopener'}>
												<AndroidStudioDisplay height={'100%'} width={'170px'} />
											</Link>
										</Grid>
									</Grid>
								</Paper>
							</Grid>
							<Grid item xs={12} md={3}>
								<Paper>
									<Grid
										container
										justify={'center'}
										alignContent={'center'}
										alignItems={'center'}
										style={{ minHeight: 250, padding: '5%' }}
									>
										<Grid item>
											<Link href={'https://www.cplusplus.com/info/description/'} target={'_blank'} rel={'noopener'}>
												<CPPDisplay height={'100%'} width={'165px'} />
											</Link>
										</Grid>
									</Grid>
								</Paper>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		},
		{
			hash: 'contact', background: 'linear-gradient(to bottom right, black, black, gray)', value: <Grid item xs={12} md={12}>
				<Grid
					container
					justify={'center'}
					alignContent={'center'}
					alignItems={'center'}
					style={{ minHeight: isLarge ? '100vh' : '100%' }}
				>
					<Grid item xs={12} md={12}>
						<Typography align={'center'} style={{ color: 'white' }} variant={'h5'} component={'h3'}>Ready to make your robust production system? Get in touch with us!</Typography>
					</Grid>
					<Grid item xs={12} md={12} style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
						<Grid
							container
							style={{ minHeight: '100%' }}
							justify={'center'}
							alignContent={'center'}
							alignItems={'center'}
						>
							<Grid item xs={12} md={4} style={{ padding: 25 }}>
								<Grid container>
									<Grid item xs={4} md={12}>
										<PhoneIphone style={{ width: '100%', color: 'white', fontSize: '7rem' }} />
									</Grid>
									<Grid item xs={8} md={12}>
										<Grid
											container
											style={{ minHeight: '100%' }}
											justify={'center'}
											alignContent={'center'}
											alignItems={'center'}
										>
											<Grid item>
												<Typography align={'center'} style={{ color: 'white' }}>Phone: +62 22 4268728</Typography>
												<Typography align={'center'} style={{ color: 'white' }}>Fax: +62 22 4268730</Typography>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} md={4} style={{ padding: 25 }}>
								<Grid container>
									<Grid item xs={4} md={12}>
										<Email style={{ width: '100%', color: 'white', fontSize: '7rem' }} />
									</Grid>
									<Grid item xs={8} md={12}>
										<Grid
											container
											style={{ minHeight: '100%' }}
											justify={'center'}
											alignContent={'center'}
											alignItems={'center'}
										>
											<Grid item>
												<Typography align={'center'}>
													<Link href={'mailto:cs@langgengciptasolusi.com'} target={'_blank'} rel={'noopener'} style={{ color: 'white' }}>Customer Service</Link>
												</Typography>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} md={4} style={{ padding: 25 }}>
								<Grid container>
									<Grid item xs={4} md={12}>
										<LocationOn style={{ width: '100%', color: 'white', fontSize: '7rem' }} />
									</Grid>
									<Grid item xs={8} md={12}>
										<Grid
											container
											style={{ minHeight: '100%' }}
											justify={'center'}
											alignContent={'center'}
											alignItems={'center'}
										>
											<Grid item>
												<Typography align={'center'}>
													<Link href={'https://goo.gl/maps/tFQEnrTzepZJBEP36'} target={'_blank'} rel={'noopener'} style={{ color: 'white' }}>Jl. Cihampelas No. 2 Bandung, 40116, Jawa Barat, Indonesia</Link>
												</Typography>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} md={12}>
						<Typography align={'center'} variant={'subtitle2'} component={'div'} style={{ color: 'white' }}>PT. Langgeng Cipta Solusi &copy; {new Date().getFullYear()}</Typography>
					</Grid>
				</Grid>
			</Grid>
		},
	];

	return <>
		<Head>
			<title>PT. Langgeng Cipta Solusi - Empowering the Future</title>
		</Head>
		<Section
			paddingTop={0}
			paddingBottom={0}
			background={'linear-gradient(to bottom right, black, black, gray)'}
			hash={'welcome'}
			content={<Grid item xs={12} md={12}>
				<Grid
					container
					justify={'center'}
					alignContent={'center'}
					alignItems={'center'}
					style={{ minHeight: 'calc(100vh - 48px)' }}
				>
					<Grid item xs={12} md={12}>
						<LCSDisplay width={'100%'} height={150} fill={'#697bb8'} />
					</Grid>
					<Grid item style={{ maxWidth: 300, width: '100%', padding: 15 }}>
						<Divider style={{ backgroundColor: 'white' }} />
					</Grid>
					<Grid item xs={12} md={12} >
						<Typography variant={'h4'} component={'h1'} align={'center'} style={{ color: 'white' }}>Empowering the Future</Typography>
					</Grid>
				</Grid>
			</Grid>}
		/>
		<TabList sections={sections} />
		{contents.map((content, index) => <Section
			key={index}
			background={content.background}
			hash={content.hash}
			content={content.value}
		/>)}
	</>
}
