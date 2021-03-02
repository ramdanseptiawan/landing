const Footer = () => {
    return <footer
        id={'contact'}
        style={{ background: '#222725' }}
        className={'min-h-screen z-20 relative gap-6 flex flex-col content-center items-center py-32 px-0 md:px-24'}
    >
        <div className={'flex'}>
            <h3 className="text-5xl leading-none font-extrabold text-gray-100 tracking-tight mb-8">
                Get in touch.
        </h3>
        </div>
        <div className="relative flex-1 min-w-full min-h-full">
            <div className={'relative flex min-h-full min-w-full'}>
                <div className={'flex-grow m-auto p-6'}>
                    <div className={'grid grid-cols-1 lg:grid-cols-3 gap-10'}>
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
}

export default Footer