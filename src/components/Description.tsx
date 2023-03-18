import { useEffect, useRef } from 'react'
import styles from '@/styles/Description.module.css'
import { gsap } from 'gsap'

interface Description {
    text: string
}

export function Description(props:Description){

    const descRef = useRef(null)

    useEffect(() => {
        gsap.from(descRef.current, {
            x: -50,
            opacity: 0,
            delay: 1,
        })
    }, [])

    return <p className={styles.description} ref={descRef}>{props.text}</p>
}
