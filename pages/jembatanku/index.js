import { NextSeo } from 'next-seo';
import JembatankuBG from './jembatanku_bg.jpeg'
import Topology from './Topology.svg'
import Logo from '../../assets/Logo/jembatanku.svg'
import Footer from '../../components/section/footer';

const jembatanku = () => {
    return <>
        <NextSeo
            additionalMetaTags={[{
                name: 'keywords',
                content: 'jembatanku, lcs, lcs indonesia, lcsindonesia, it solution, solution lcsindo, lcs indo, langgeng cipta, solusi, langgeng, langgeng cipta solusi, cipta, empowering the future, empowering, the future, shms, structural health monitoring system, structural health monitoring, integrated, integrated system'
            }]}
            title='JembatanKu - Structural Health Monitoring System'
            description=' JembatanKu is an integrated monitoring system that provides predictive maintenance, early alerting, and health monitoring for bridges in real time.'
            canonical='https://lcsindonesia.com/jembatanku/'
            openGraph={{
                url: 'https://lcsindonesia.com/jembatanku/',
                title: 'JembatanKu - Structural Health Monitoring System',
                description: ' JembatanKu is an integrated monitoring system that provides predictive maintenance, early alerting, and health monitoring for bridges in real time.',
                images: [
                    { url: 'https://lcsindonesia.com/jembatankuLogo.png' },
                ]
            }}
            twitter={{
                cardType: 'summary'
            }}
        />
        <div className={'relative'}>
            <div className={'z-10 absolute h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed'} style={{ backgroundImage: 'url("' + JembatankuBG + '")' }} />
            <div className={'z-20 relative grid grid-rows-1 place-items-center min-h-screen w-full text-center text-gray-50'}>
                <div>
                    <h1 className={'text-7xl md:text-8xl text-center leading-none font-extrabold text-gray-50 tracking-tight mb-8'}>JembatanKu</h1>
                    <h1 className={'text-xl text-center leading-none font-bold text-gray-100 tracking-tight mb-8'}>Structural Health Monitoring System</h1>
                </div>
            </div>
            <div className={'z-20 relative grid grid-rows-1 place-items-center min-h-screen w-full bg-gray-100 text-center text-gray-50'}>
                <div className={'grid grid-cols-2 px-4 md:px-32 gap-10'}>
                    <div className={'col-span-2 md:col-span-1 m-auto'}>
                        <h1 className={'text-5xl text-center md:text-left leading-none font-extrabold text-gray-900 tracking-tight mb-8'}>What is JembatanKu?</h1>
                        <p className={'text-gray-800 text-lg text-justify font-medium sm:leading-10 mx-auto mb-6'}>
                            JembatanKu is an integrated monitoring system that provides predictive maintenance, early alerting, and health monitoring for bridges in real time.
                        </p>
                    </div>
                    <div className={'col-span-2 md:col-span-1 p-12'}>
                        <Logo />
                    </div>
                </div>
            </div>
            <div className={'z-20 relative grid grid-rows-1 place-items-center w-full min-h-screen bg-gray-800 text-center'}>
                <div className={'w-full px-4 md:px-64 '}>
                    <h2 className={'text-5xl text-center leading-none font-extrabold text-gray-100 tracking-tight mb-8'}>Topology</h2>
                    <Topology />
                </div>
            </div>
            <div className={'z-20 relative flex gap-5 justify-center w-full bg-gray-100 text-center text-gray-50 p-6'}>
                <div className={'w-64 bg-gray-300 h-64 rounded-md'} onClick={() => window.open('./booklet.pdf')}>
                    <div className={'grid p-12'}>
                        <svg className={'p-6 w-full'} fill={'rgb(31, 41, 55)'} viewBox="0 0 24 24"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"></path><path d="M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zM17.5 14.33c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"></path></svg>
                        <p>Booklet</p>
                    </div>
                </div>
                <div className={'w-64 bg-gray-300 h-64 rounded-md'} onClick={() => window.open('./eflyer.pdf')}>
                    <div className={'grid p-12'}>
                        <svg className={'p-6 w-full'} fill={'rgb(31, 41, 55)'} viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></svg>
                        <p>E-Flyer</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default jembatanku