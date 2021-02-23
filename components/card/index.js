import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useEffect } from 'react/cjs/react.development';
import { InView } from 'react-intersection-observer';

const Card = ({
    svg = '',
    title = '',
    description = '',
    status = '',
    animate = true,
    standby = false
}) => {
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    const [flipped, setFlipped] = useState(false)
    const [selected, setSelected] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 350, friction: 40 }
    })
    const { filter, WebkitFilter } = useSpring({
        filter: !standby || (standby && selected) ? 'blur(0px)' : 'blur(4px)',
        WebkitFilter: !standby || (standby && selected) ? 'blur(0px)' : 'blur(4px)',
        config: { duration: 150 }
    })
    const [actualHeight, setActualHeight] = useState(0)
    const [props, set] = useSpring(() => ({ xys: [0, 0, 0], config: { mass: 5, tension: 200, friction: 40 } }))
    useEffect(() => {
        if (standby !== null && standby) {
            set({ xys: [0, 0, 0.8] })
        } else if (standby !== null && !standby) {
            set({ xys: [0, 0, 1] })
        }
    }, [standby])
    return <InView threshold={0.5} onChange={(inView) => {
        if (inView) {
            set({ xys: [0, 0, 1] })
        } else {
            set({ xys: [0, 0, 0] })
        }
    }}>
        <animated.figure
            onMouseOver={() => {
                if (animate) {
                    set({ xys: [0, 0, 1.1] })
                    setSelected(true)
                }
            }}
            onMouseLeave={() => {
                if (animate) {
                    set({ xys: [0, 0, 0.9] })
                    setSelected(false)
                }
            }}
            onTouchStart={(e) => {
                e.preventDefault()
                if (animate) {
                    set({ xys: [0, 0, 1.15] })
                    setSelected(true)
                }
            }}
            onTouchEnd={(e) => {
                e.preventDefault()
                if (animate) {
                    set({ xys: [0, 0, 0.9] })
                    setSelected(false)
                }
                if (description) {
                    setFlipped(state => !state)
                }
            }}
            style={{
                transform: props.xys.interpolate(trans),
                WebkitTransform: props.xys.interpolate(trans),
                filter: filter,
                WebkitFilter: WebkitFilter
            }}
            onClick={() => {
                if (description) {
                    setFlipped(state => !state)
                }
            }}
            className={'relative'}
        >
            <animated.div ref={(instance) => {
                if (instance) {
                    setActualHeight(instance.offsetHeight)
                }
            }} className={'bg-gradient-to-br from-gray-100 to-gray-300 w-full rounded-xl p-8 grid grid-cols-1 ' + (description ? 'absolute' : '')}
                style={{
                    opacity: opacity.interpolate(o => 1 - o),
                    WebkitTransform: transform,
                    transform
                }} >
                {svg}
                <p className={'text-lg font-semibold text-center'}>
                    {title}
                </p>
                <p className={'text-lg font-medium text-center ' + (status === 'Released' ? 'text-green-700' : 'text-purple-500')}>
                    {status}
                </p>
            </animated.div>
            {description !== '' ?
                <animated.div className={'bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl p-4 flex h-full shadow-2xl w-full relative'}
                    style={{
                        height: actualHeight, opacity,
                        transform: transform.interpolate(t => `${t} rotateX(180deg)`),
                        WebkitTransform: transform.interpolate(t => `${t} rotateX(180deg)`),
                    }}>
                    <div className={'flex-grow m-auto overflow-y-auto max-h-full'}>
                        <div className={'grid grid-cols-1'}>
                            <p className={'text-center font-medium'}>{description}</p>
                        </div>
                    </div>
                </animated.div> : null}
        </animated.figure>
    </InView>
}

export default Card