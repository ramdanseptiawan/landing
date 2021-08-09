import Card from "../../card";
import AndroidStudioLogo from "../../../assets/Logo/androidStudio.svg";
import CPPLogo from "../../../assets/Logo/cpp.svg";
import MongoLogo from "../../../assets/Logo/mongo.svg";
import ExpressLogo from "../../../assets/Logo/expressjs.svg";
import ReactLogo from "../../../assets/Logo/react.svg";
import NodeLogo from "../../../assets/Logo/nodejs.svg";
import KotlinLogo from "../../../assets/Logo/kotlin.svg";
import HexaltsLogo from "../../../assets/Logo/hexalts.svg";
import { useState } from "react";

const Technology = () => {
  return (
    <div className={"relative z-50 flex min-h-full min-w-full p-12"}>
      <div className={"flex-grow m-auto"}>
        <div
          className={
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-0 md:px-8"
          }
        >
          <Card
            animate={false}
            svg={<MongoLogo className={"mx-auto w-36 h-24"} />}
            // title={'MongoDB'}
          />
          <Card
            animate={false}
            svg={<ExpressLogo className={"mx-auto w-28 h-24"} />}
            // title={'Express.js'}
          />
          <Card
            animate={false}
            svg={<ReactLogo className={"mx-auto w-32 h-24"} />}
            // title={'React Framework'}
          />
          <Card
            animate={false}
            svg={<NodeLogo className={"mx-auto w-32 h-24"} />}
            // title={'Node.js'}
          />
          <Card
            animate={false}
            svg={<HexaltsLogo className={"mx-auto w-44 h-24"} />}
            // title={'Python'}
          />
          <Card
            animate={false}
            svg={<KotlinLogo className={"mx-auto w-32 h-24"} />}
            // title={'Kotlin'}
          />
          <Card
            animate={false}
            svg={<AndroidStudioLogo className={"mx-auto w-24 h-24 p-2"} />}
            // title={'Android Studio'}
          />
          <Card
            animate={false}
            svg={<CPPLogo className={"mx-auto w-24 h-24 p-2"} />}
            // title={'C/C++'}
          />
        </div>
      </div>
    </div>
  );

  // <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 md:px-0'}>
  //     <Card
  //         animate={false}
  //         svg={<MongoLogo className={'mx-auto w-24 h-24'} />}
  //         // title={'MongoDB'}
  //     />
  //     <Card
  //         animate={false}
  //         svg={<ExpressLogo className={'mx-auto w-24 h-24'} />}
  //         // title={'Express.js'}
  //     />
  //     <Card
  //         animate={false}
  //         svg={<ReactLogo className={'mx-auto w-24 h-24'} />}
  //         // title={'React Framework'}
  //     />
  // <Card
  //     animate={false}
  //     svg={<NodeLogo className={'mx-auto w-24 h-24'} />}
  //     // title={'Node.js'}
  // />
  //     <Card
  //         animate={false}
  //         svg={<KotlinLogo className={'mx-auto w-24 h-24'} />}
  //         // title={'Kotlin'}
  //     />
  //     <Card
  //         animate={false}
  //         svg={<AndroidStudioLogo className={'mx-auto w-24 h-24 p-6'} />}
  //         // title={'Android Studio'}
  //     />
  //     <Card
  //         animate={false}
  //         svg={<CPPLogo className={'mx-auto w-24 h-24 p-7'} />}
  //         // title={'C/C++'}
  //     />
  //     <Card
  //         animate={false}
  //         svg={<PythonLogo className={'mx-auto w-24 h-24'} />}
  //         // title={'Python'}
  //     />
  // </div>
};

export default Technology;
