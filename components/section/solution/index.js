import { useState } from 'react'
import Card from '../../card'
import Responsive from '../../../assets/Icons/responsive.svg'
import Reliable from '../../../assets/Icons/reliable.svg'
import Realtime from '../../../assets/Icons/realtime.svg'

const Solution = () => {
    const [standby, setStandby] = useState(null)
    return <div
        className={'relative z-50 flex min-h-full min-w-full p-12'}
    >
        <div className={'flex-grow m-auto'}>
            <div
                onMouseLeave={() => setStandby(false)}
                className={'grid grid-cols-1 md:grid-cols-3 gap-8 px-0 md:px-8'}
            >
                <div
                    onMouseOver={() => setStandby(true)}
                >
                    <Card
                        standby={standby}
                        svg={<Responsive className={'mx-auto w-28 h-28 p-4'} />}
                        title={'Responsive'}
                        description={'Every software we made designed for multiple devices, in fact, we focus on cross-platform development.'}
                    />
                </div>
                <div
                    onMouseOver={() => setStandby(true)}
                >
                    <Card
                        standby={standby}
                        svg={<Reliable className={'mx-auto w-28 h-28 p-4'} />}
                        title={'Reliable'}
                        description={'We developed an online monitoring and alerting system. Every sensors do the calculations continuously for every seconds for 24/7.'}
                    />
                </div>
                <div
                    onMouseOver={() => setStandby(true)}
                >
                    <Card
                        standby={standby}
                        svg={<Realtime className={'mx-auto w-28 h-28 p-4'} />}
                        title={'Real-time'}
                        description={'Every products we made follows the industrial standards with the helps of our professionals on their field.'}
                    />
                </div>
            </div>
        </div>
    </div>
}

export default Solution