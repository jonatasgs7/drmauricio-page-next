import { useEffect, useRef } from 'react'
import styles from '@/styles/Title.module.css'
import { gsap } from 'gsap'

interface Title {
    text: string
}

export function Title(props:Title){

    const titleRef = useRef(null)

    useEffect(() => {
        gsap.from(titleRef.current, {
            x: -50,
            opacity: 0,
            delay: 0.75,
        })
    }, [])

    return <h2 className={styles.title} ref={titleRef}>{props.text}</h2>
}