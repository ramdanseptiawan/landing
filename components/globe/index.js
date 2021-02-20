import React, { useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'

const Box = (props) => {
    const mesh = useRef()
    useFrame(() => {
        mesh.current.rotation.y += 0.001
    })

    return (
        <mesh
            {...props}
            ref={mesh}
        >
            <sphereBufferGeometry args={[2, 10, 10,]} />
            <meshStandardMaterial wireframe color={'rgba(243, 244, 246, 1)'} />
        </mesh>
    )
}

const Globe = () => {
    return <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} />
    </Canvas >
}

export default Globe