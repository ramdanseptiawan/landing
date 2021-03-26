import Card from '../../card';
import { useState } from 'react';

const Documents = () => {
    const [standby, setStandby] = useState(null)
    return <div
        className={'relative z-50 flex min-h-full min-w-full p-12'}
    >
        <div className={'flex-grow m-auto'}>
            <div
                onMouseLeave={() => setStandby(false)}
                className={'grid grid-cols-1 md:grid-cols-2 md:flex justify-center place-items-center content-center gap-8 px-8 md:px-0'}
            >
                <div className={'w-64 h-full'} onMouseOver={() => setStandby(true)} >
                    <Card
                        standby={standby}
                        link={'booklet.pdf'}
                        svg={<svg className={'mx-auto w-28 h-28 p-4'} fill={'rgb(47, 130, 168)'} viewBox="0 0 24 24"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"></path><path d="M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zM17.5 14.33c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"></path></svg>}
                        title={'Booklet'}
                    />
                </div>
                <div className={'w-64 h-full'} onMouseOver={() => setStandby(true)}>
                    <Card
                        standby={standby}
                        link={'eflyer.pdf'}
                        svg={<svg className={'mx-auto w-28 h-28 p-4'} fill={'rgb(75, 168, 47)'} viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></svg>}
                        title={'E-flyer'}
                    />
                </div>
            </div>
        </div>
    </div>

    // <div
    //     className={'relative z-50 flex min-h-full min-w-full p-12'}
    // >
    //     <div className={'flex-grow m-auto'}>
    //         <div
    //             onMouseLeave={() => setStandby(false)}
    //             className={'z-20 relative md:flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center w-full text-center text-gray-50 p-6'}
    //         >
    // <div className={'w-60 h-60'} onMouseOver={() => setStandby(true)} >
    //     <Card
    //         standby={standby}
    //         link={'booklet.pdf'}
    //         svg={<svg className={'p-6 w-full'} fill={'rgb(31, 41, 55)'} viewBox="0 0 24 24"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"></path><path d="M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zM17.5 14.33c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"></path></svg>}
    //         title={'Booklet'}
    //     />
    // </div>
    // <div className={'w-60 h-60'} onMouseOver={() => setStandby(true)}>
    //     <Card
    //         standby={standby}
    //         link={'eflyer.pdf'}
    //         svg={<svg className={'p-6 w-full'} fill={'rgb(31, 41, 55)'} viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></svg>}
    //         title={'E-flyer'}
    //     />
    // </div>
    //         </div>
    //     </div>
    // </div>
}

export default Documents