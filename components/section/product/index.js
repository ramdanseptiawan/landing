import Card from '../../card'
import JembatankuLogo from '../../../assets/Logo/jembatanku.svg';
import WIMLogo from '../../../assets/Logo/wim.svg';
import LandslideLogo from '../../../assets/Logo/landslide.svg';
import SmartFarmingLogo from '../../../assets/Logo/smartfarming.svg';
import { useState } from 'react';
// import JembatankuBG from '../../../pages/jembatanku/jembatanku_bg.jpeg'

const Product = () => {
    const [standby, setStandby] = useState(null)
    return <div
        className={'relative z-50 flex min-h-full min-w-full p-12'}
    >
        <div className={'flex-grow m-auto'}>
            <div
                onMouseLeave={() => setStandby(false)}
                className={'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 px-0 md:px-8'}
            >
                <div onMouseOver={() => setStandby(true)}>
                    <Card
                        standby={standby}
                        link={'jembatanku'}
                        svg={<JembatankuLogo className={'mx-auto w-32 h-32'} fill={'#253160'} />}
                        title={'Structural Monitoring'}
                        status={'Released'}
                        // background={JembatankuBG}
                    // superZoom={true}
                    // description={'JembatanKu is an integrated monitoring system that provides predictive maintenance, early alerting, and health monitoring for bridges in real time.'}
                    />
                </div>
                <div onMouseOver={() => setStandby(true)}>
                    <Card
                        standby={standby}
                        // link={'wim'}
                        svg={<WIMLogo className={'mx-auto w-32 h-32'} />}
                        title={'Weight in Motion'}
                        status={'On-Going'}
                    // superZoom={true}
                    // description={'Our WIM is an integrated Weight in Motion system that provides predictive maintenance and an accurate payment classification based on vehicle`s weight.'}
                    />
                </div>
                <div onMouseOver={() => setStandby(true)}>
                    <Card
                        standby={standby}
                        // link={'landslide'}
                        svg={<LandslideLogo className={'mx-auto w-32 h-32'} />}
                        title={'Landslide Monitoring'}
                        status={'On-Going'}
                    // superZoom={true}
                    // description={'Our Landslide Monitoring is an integrated monitoring system that provides predictive maintenance, early alerting, and land movement monitoring in real time.'}
                    />
                </div>
                <div onMouseOver={() => setStandby(true)}>
                    <Card
                        standby={standby}
                        // link={'smartfarming'}
                        svg={<SmartFarmingLogo className={'mx-auto w-32 h-32'} />}
                        title={'Smart Farming'}
                        status={'On-Going'}
                    // superZoom={true}
                    // description={'Our Smart Farming is an integrated monitoring system that provides predictive maintenance and the most optimal farming results.'}
                    />
                </div>
            </div>
        </div>
    </div>
}

export default Product