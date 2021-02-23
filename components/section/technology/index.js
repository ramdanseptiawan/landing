import Card from '../../card'
import AndroidStudioLogo from '../../../assets/Logo/androidStudio.svg';
import CPPLogo from '../../../assets/Logo/cpp.svg';
import MongoLogo from '../../../assets/Logo/mongo.svg';
import ExpressLogo from '../../../assets/Logo/expressjs.svg';
import ReactLogo from '../../../assets/Logo/react.svg';
import NodeLogo from '../../../assets/Logo/nodejs.svg';
import KotlinLogo from '../../../assets/Logo/kotlin.svg';
import PythonLogo from '../../../assets/Logo/python.svg';
import { useState } from 'react';

const Technology = () => {
    const [standby, setStandby] = useState(null)
    return <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 md:px-0'}>
        {/* <Card
            animate={false}
            svg={<MongoLogo className={'mx-auto w-32 h-32'} />}
            title={'MongoDB'}
        /> */}
        {/* <Card
            animate={false}
            svg={<ExpressLogo className={'mx-auto w-32 h-32'} />}
            title={'Express.js'}
        /> */}
        {/* <Card
            animate={false}
            svg={<ReactLogo className={'mx-auto w-32 h-32'} />}
            title={'React Framework'}
        /> */}
        <Card
            standby={standby}
            animate={false}
            svg={<NodeLogo className={'mx-auto w-32 h-32'} />}
            title={'Node.js'}
        />
        <Card
            standby={standby}
            animate={false}
            svg={<KotlinLogo className={'mx-auto w-32 h-32'} />}
            title={'Kotlin'}
        />
        {/* <Card
            animate={false}
            svg={<AndroidStudioLogo className={'mx-auto w-32 h-32 p-6'} />}
            title={'Android Studio'}
        /> */}
        <Card
            standby={standby}
            animate={false}
            svg={<CPPLogo className={'mx-auto w-32 h-32 p-7'} />}
            title={'C/C++'}
        />
        <Card
            standby={standby}
            animate={false}
            svg={<PythonLogo className={'mx-auto w-32 h-32'} />}
            title={'Python'}
        />
    </div>
}

export default Technology