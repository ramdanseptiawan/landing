import React, { useRef } from 'react'
import { Canvas, useThree } from 'react-three-fiber'
import * as THREE from 'three';
import { OrbitControls, Html } from '@react-three/drei'
import { useEffect } from 'react';
import { useState } from 'react';

const group = {
    LCS: 'bg-gradient-to-br from-blue-400 via-purple-400 to-yellow-400',
    App: 'bg-gradient-to-tr from-blue-400 to-blue-700',
    IoT: 'bg-gradient-to-br from-purple-400 to-purple-700',
    Data: 'bg-gradient-to-tr from-yellow-400 to-yellow-700'
}

const Label = ({
    svg = <svg fill={'#fff'} viewBox="0 0 24 24"><path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"></path></svg>,
    colorGroup = group.LCS,
    position = new THREE.Vector3()
}) => {
    const [animationState, setAnimationSate] = useState(false)
    useEffect(() => {
        setInterval(() => {
            if (animationState) {
                setAnimationSate((state) => setAnimationSate(!state))
            } else {
                const rng = Math.random()
                if (rng > 0.5) {
                    setAnimationSate((state) => setAnimationSate(!state))
                }
            }
        }, 1000);
    }, [])
    return <Html
        ref={(instance) => {
            if (instance) {
                instance.style.top = -(instance.offsetHeight / 2) + 'px'
                instance.style.left = -(instance.offsetWidth / 2) + 'px'
            }
        }}
        position={position}
    >
        {/* <span className={'flex h-10 w-10 from-yellow-700'}>
            <span className={(animationState ? 'animate-ping' : '') + " absolute inline-flex h-full w-full rounded-full opacity-75 " + colorGroup}></span>
            <span className={'relative inline-flex shadow-lg rounded-full h-10 w-10 p-2 ' + colorGroup}>
                {svg}
            </span>
        </span> */}
        <div className={'absolute rounded-full z-20 w-10 h-10 p-2 shadow-lg ' + colorGroup}>
            {svg}
        </div>
        <div className={(animationState ? 'animate-ping' : '') + ' z-10 rounded-full w-10 h-10 p-2 ' + colorGroup} />
    </Html>
}

const Internet = () => {
    const points = []
    points.push(new THREE.Vector3(0, -1.3, 0)) // this
    points.push(new THREE.Vector3(1, -1.95, 0))
    points.push(new THREE.Vector3(0, -1.3, 0))
    points.push(new THREE.Vector3(-1, -1.95, 0))
    points.push(new THREE.Vector3(0, -1.3, 0))
    points.push(new THREE.Vector3(0, -2.6, 0))
    points.push(new THREE.Vector3(0, -1.3, 0))
    points.push(new THREE.Vector3(0, 0, 0)) // this

    points.push(new THREE.Vector3(1, 1, 0)) // this
    points.push(new THREE.Vector3(2, 1, 0)) // this
    points.push(new THREE.Vector3(1, 1, 0))
    points.push(new THREE.Vector3(2, 2, 0)) // this
    points.push(new THREE.Vector3(1, 1, 0))
    points.push(new THREE.Vector3(1, 2, 0)) // this
    points.push(new THREE.Vector3(1, 1, 0))
    points.push(new THREE.Vector3(0, 0, 0))

    points.push(new THREE.Vector3(-1, 1, 0)) // this
    points.push(new THREE.Vector3(-2, 1, 0)) // this
    points.push(new THREE.Vector3(-1, 1, 0))
    points.push(new THREE.Vector3(-2, 2, 0)) // this
    points.push(new THREE.Vector3(-1, 1, 0))
    points.push(new THREE.Vector3(-1, 2, 0)) // this
    points.push(new THREE.Vector3(-1, 1, 0))

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
    const { camera } = useThree()
    const lineMesh = useRef()
    useEffect(() => {
        camera.position.z = 5
    }, [])

    return <>
        <Label
            // big data
            colorGroup={group.Data}
            svg={<svg fill={'#fff'} viewBox="0 0 24 24"><path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"></path></svg>}
            position={new THREE.Vector3(1, -1.95, 0)}
        />
        <Label
            // predictive
            colorGroup={group.Data}
            svg={<svg fill={'#fff'} viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></svg>}
            position={new THREE.Vector3(-1, -1.95, 0)}
        />
        <Label
            // forcasting
            colorGroup={group.Data}
            svg={<svg fill={'#fff'} viewBox="0 0 24 24"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></svg>}
            position={new THREE.Vector3(0, -2.6, 0)}
        />
        <Label
            // dashboard
            colorGroup={group.App}
            svg={<svg fill={'#fff'} viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></svg>}
            position={new THREE.Vector3(-1, 2, 0)}
        />
        <Label
            // client
            colorGroup={group.App}
            svg={<svg fill={'#fff'} viewBox="0 0 24 24"><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path></svg>}
            position={new THREE.Vector3(-2, 2, 0)}
        />
        <Label
            // analytics
            colorGroup={group.App}
            svg={<svg fill={'#fff'} viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></svg>}
            position={new THREE.Vector3(-2, 1, 0)}
        />
        <Label
            // applications
            colorGroup={group.App}
            svg={<svg fill={'#fff'} viewBox="0 0 24 24"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></svg>}
            position={new THREE.Vector3(-1, 1, 0)}
        />
        <Label
            // automation
            colorGroup={group.IoT}
            svg={<svg fill={'#fff'} viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path></svg>}
            position={new THREE.Vector3(1, 2, 0)}
        />
        <Label
            // automation
            colorGroup={group.IoT}
            svg={<svg fill={'#fff'} viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></svg>}
            position={new THREE.Vector3(2, 2, 0)}
        />
        <Label
            // artificial intelligence
            colorGroup={group.IoT}
            svg={<svg fill={'#fff'} viewBox="0 0 24 24"><path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"></path></svg>}
            position={new THREE.Vector3(2, 1, 0)}
        />
        <Label
            // iot
            colorGroup={group.IoT}
            svg={<svg fill={'#fff'} viewBox="0 0 24 24"><path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z"></path></svg>}
            position={new THREE.Vector3(1, 1, 0)}
        />
        <Label
            // LCS
            colorGroup={group.LCS}
            svg={<svg fill={'#fff'} viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>}
            position={new THREE.Vector3(0, 0, 0)}
        />
        <Label
            // Data
            colorGroup={group.Data}
            svg={<svg fill={'#fff'} viewBox="0 0 24 24"><path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"></path></svg>}
            position={new THREE.Vector3(0, -1.3, 0)}
        />
        <mesh
            ref={lineMesh}
        >
            <line geometry={lineGeometry}>
                <lineBasicMaterial color={'rgba(243, 244, 246, 1)'} opacity={0.75} />
            </line>
        </mesh>
    </>
}

const Networking = () => {
    return <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Internet position={[0, 0, -1]} />
        <OrbitControls
            position={new THREE.Vector3(0, 0, 5)}
            enableZoom={false}
            enablePan={false}
        />
    </Canvas >
}

export default Networking