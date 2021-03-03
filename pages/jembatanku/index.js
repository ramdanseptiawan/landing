import React from 'react';
import { NextSeo } from 'next-seo';
import LCSLogo from '../../assets/Logo/lcs.svg';
import JembatankuLogo from '../../assets/Logo/jembatanku.svg';
import { InView } from 'react-intersection-observer';
import JembatankuBG from './jembatanku_bg.jpeg';

import dynamic from 'next/dynamic';
import Router from 'next/router';
const Topology = dynamic(() => import('./Topology.svg'));
const Documents = dynamic(() => import('../../components/section/documents'));
const Footer = dynamic(() => import('../../components/section/footer'));

const Navbar = ({ section = 'landing' }) => {
    return <nav
        style={{ zIndex: 166782760, background: '#121113', height: 72 }}
        className={'fixed w-full gap-12 hidden md:flex overflow-x-auto flex-row align-middle transform py-4 px-12 ' + (section !== 'landing' ? 'shadow-xl' : 'opacity-90')}
    >
        <div onClick={() => Router.replace('/')} className={'flex-grow m-auto'}>
            <LCSLogo fill={'rgb(243, 244, 246)'} className={'h-6'} />
        </div>
        <a href={'#about'} className={'m-auto text-gray-100 font-semibold ' + (section === 'about' ? 'font-extrabold' : '')}>
            About
			<div className={'pt-2 pb-1'}>
                <div className={'opacity-95 bg-gray-100 rounded-full ' + (section === 'about' ? 'h-1 w-full' : '')} />
            </div>
        </a>
        <a href={'#topology'} className={'m-auto text-gray-100 font-semibold ' + (section === 'topology' ? 'font-extrabold' : '')}>
            Topology
			<div className={'pt-2 pb-1'}>
                <div className={'opacity-95 bg-gray-100 rounded-full ' + (section === 'topology' ? 'h-1 w-full' : '')} />
            </div>
        </a>
        <a href={'#documents'} className={'m-auto text-gray-100 font-semibold ' + (section === 'documents' ? 'font-extrabold' : '')}>
            Documents
			<div className={'pt-2 pb-1'}>
                <div className={'opacity-95 bg-gray-100 rounded-full ' + (section === 'documents' ? 'h-1 w-full' : '')} />
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
                <section
                    id={'landing'}
                    className={'min-h-screen overflow-hidden relative gap-6 flex flex-col content-center items-center'} style={{ background: '#121113' }}
                >
                    <video playsInline className={'z-10 absolute max-w-none min-w-full min-h-full bg-cover bg-center bg-no-repeat bg-fixed'} autoPlay loop muted id="myVideo" style={{ backgroundImage: 'url("' + JembatankuBG + '")', opacity: 0.6 }}>
                        <source src={'/bridge.mp4'} type="video/mp4" />
                    </video>
                    <div className="relative z-30 flex-1 min-w-full min-h-full">
                        <div className={'absolute flex min-h-full min-w-full'}>
                            <div className={'flex-grow m-auto px-14 py-12 md:py-0 sm:px-12'}>
                                <div className={'grid grid-cols-1 place-items-center'}>
                                    <JembatankuLogo className={'w-80 h-auto'} fill={'rgba(243, 244, 246, 0.95)'} />
                                    <div className={'pt-2 pb-1'}>
                                        <div className={'h-1 w-80 opacity-95 bg-gray-100 rounded-full'} />
                                    </div>
                                    <h1 className="text-3xl text-center opacity-95 leading-none font-extrabold text-gray-100 tracking-tight mb-8">Structural Monitoring</h1>
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
                    <section id={'about'}>
                        <div className={'container m-auto py-12 min-h-screen h-full relative grid grid-cols-2 gap-6 content-center'}>
                            <div className={'z-40 p-6 w-full col-span-2 md:col-span-1 flex flex-wrap content-center items-center m-auto'}>
                                <iframe style={{ height: '50vh' }} aria-errormessage={(error) => console.log(error)} height={'100%'} frameBorder={0} className={'flex-grow rounded'} src={"https://www.youtube.com/embed/4wOe2lbk4XU?enablejsapi=1&version=3&controls=0&rel=0"} allow="autoplay; encrypted-media;" allowFullScreen></iframe>
                            </div>
                            <div className={'col-span-2 h-full z-50 p-6 md:col-span-1 flex flex-wrap content-center items-center'}>
                                <div className={'mx-auto space-y-6'}>
                                    <h2 className="text-5xl text-center md:text-left leading-none font-extrabold text-gray-900 tracking-tight mb-8">
                                        JembatanKu
									</h2>
                                    <p className={'text-gray-800 text-lg text-justify font-medium sm:leading-10 mx-auto mb-6'}>
                                        Is a native product to Indonesia in the form of an integrated system built and developed to provide early warning and monitor the health of bridges in real-time online. This system is expected to assist the manager in monitoring the dynamic condition of the bridges behavior, making plans and setting priorities for their maintenance and repair.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </InView>
                <InView
                    threshold={0.5}
                    onChange={(inView) => {
                        if (inView) {
                            setSection('topology')
                        }
                    }}
                >
                    <section
                        id={'topology'}
                        style={{ background: '#222725' }}
                    >
                        <div className={'container m-auto py-12 min-h-screen h-full relative grid grid-cols-2 gap-6 content-center'}>
                            <div className={'col-span-2 h-full z-50 p-6 md:col-span-1 flex flex-wrap content-center items-center'}>
                                <div className={'mx-auto space-y-6'}>
                                    <h2 className="text-5xl text-center md:text-left leading-none font-extrabold text-gray-100 tracking-tight mb-8">
                                        Talking about topology.
									</h2>
                                    <p className={'text-gray-200 text-lg text-justify font-medium sm:leading-10 mx-auto mb-6'}>
                                        We designed the "client first" topology, in terms to deliver the most up-to-date data synchronization. Using this topology, we eliminate so much delay between every updates.
                                    </p>
                                </div>
                            </div>
                            <div className={'z-40 p-6 w-full col-span-2 md:col-span-1 flex flex-wrap content-center items-center m-auto'}>
                                <Topology className={'m-auto flex-grow'} />
                            </div>
                        </div>
                    </section>
                </InView>
                <InView
                    threshold={0.5}
                    onChange={(inView) => {
                        if (inView) {
                            setSection('documents')
                        }
                    }}
                >
                    <section
                        id={'documents'}
                    >
                        <div className={'container m-auto py-12 min-h-screen h-full relative grid grid-cols-3 gap-6 content-center'}>
                            <div className={'col-span-3 md:col-span-1 h-full z-50 p-6 flex flex-wrap content-center items-center'}>
                                <div className={'mx-auto space-y-6'}>
                                    <h2 className="text-5xl text-center md:text-left leading-none font-extrabold text-gray-900 tracking-tight mb-8">
                                        Documents.
									</h2>
                                    <p className={'text-gray-800 text-lg text-justify font-medium sm:leading-10 mx-auto mb-6'}>
                                        To know our product better, we provides a booklet and an e-flyer to share around the world.
                                    </p>
                                </div>
                            </div>
                            <div className={'col-span-3 md:col-span-2 z-40 p-6 w-full h-full flex flex-wrap content-center items-center m-auto'}>
                                <div className="relative flex min-w-full min-h-full">
                                    <div className={'absolute z-30 flex min-h-full min-w-full'}>
                                        <div className={'flex-grow md:rounded-3xl transform shadow-lg bg-gradient-to-tr from-yellow-400 to-yellow-700  md:-rotate-2'}></div>
                                    </div>
                                    <Documents />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <section
                        id={'documents'}
                        style={{ minHeight: 'calc(100vh + 2rem)' }}
                        className={'z-30 relative flex flex-col content-center items-center px-0 py-16 md:px-24'}
                    >
                        <div className={'w-full p-6'}>
                            <h3 className="text-5xl text-center md:text-right leading-none font-extrabold text-gray-900 tracking-tight mb-8">
                                Documents.
							</h3>
                            <p className={'text-justify md:text-right text-lg sm:text-2xl font-medium sm:leading-10 mb-6 text-gray-800'}>
                                To know our product better, we provides a booklet and an e-flyer to share around the world.
							</p>
                        </div>
                        <div className="relative flex-1 min-w-full min-h-full">
                            <div className={'absolute z-40 flex min-h-full min-w-full'}>
                                <div className={'flex-grow md:rounded-3xl transform shadow-lg bg-gradient-to-tr from-blue-400 to-blue-700 md:rotate-2'}></div>
                            </div>
                            <Documents />
                        </div>
                    </section> */}
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
                content: 'jembatanku, lcs, lcs indonesia, lcsindonesia, it solution, solution lcsindo, lcs indo, langgeng cipta, solusi, langgeng, langgeng cipta solusi, cipta, empowering the future, empowering, the future, shms, structural health monitoring system, structural health monitoring, integrated, integrated system'
            }]}
            title='JembatanKu - Structural Health Monitoring System'
            description='JembatanKu (My Bridge) is a native product to Indonesia in the form of an integrated system built and developed to provide early warning and monitor the health of bridges in real-time online. This system is expected to assist the manager in monitoring the dynamic condition of the bridges behavior, making plans and setting priorities for their maintenance and repair.'
            canonical='https://lcsindonesia.com/jembatanku/'
            openGraph={{
                url: 'https://lcsindonesia.com/jembatanku/',
                title: 'JembatanKu - Structural Health Monitoring System',
                description: 'JembatanKu (My Bridge) is a native product to Indonesia in the form of an integrated system built and developed to provide early warning and monitor the health of bridges in real-time online. This system is expected to assist the manager in monitoring the dynamic condition of the bridges behavior, making plans and setting priorities for their maintenance and repair.',
                images: [
                    { url: 'https://lcsindonesia.com/jembatankuLogo.png' },
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
