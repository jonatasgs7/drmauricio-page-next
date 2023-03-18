import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from '@/styles/Header.module.css'

export function Header(){

    const logoRef = useRef(null)

    useEffect(() => {
        gsap.from(logoRef.current, {
            duration: 0.75,
            opacity: 0,
            y: 50,
            stagger: .2
        })
    }, [])

    return <header className={styles.header}><div ref={logoRef} className={styles.logo}></div></header>
}