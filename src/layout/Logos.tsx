import { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from '@/styles/Logos.module.css'
import { gsap } from 'gsap'

export function Logos(){

    const [logo1Ref, logo2Ref] = [useRef(null), useRef(null)]

    useEffect(() => {
        gsap.from(logo1Ref.current, {x: -50, opacity: 0, delay: 1.25,})
        gsap.from(logo2Ref.current, {x: -50, opacity: 0, delay: 1.50,})
    }, [])

    return (
        <>
            <div className={styles.logos}>
                <Image 
                    src="/img/logo_marinha.png"
                    alt="Logotipo da Marinha"
                    width={188.6}
                    height={65}
                    ref={logo1Ref}
                />

                <Image 
                    src="/img/logo_clinica_serpas.png"
                    alt="Logotipo da Clínica Serpas"
                    width={267}
                    height={50}
                    ref={logo2Ref}
                />
            </div>
        </>
    )
}