import { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from '@/styles/Logos.module.css'
import { gsap } from 'gsap'

export function Logos(){

    const logoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (logoRef.current != null) {
            gsap.from(logoRef.current.children, {x: -50, opacity: 0, delay: 1.25, stagger: .25})
        }
    }, [])
    

    return (
        <>
            <div className={styles.logos} ref={logoRef}>
                <Image 
                    src="/img/logo_clinica_serpas.png"
                    alt="Logotipo da Clínica Serpas"
                    width={267}
                    height={50}
                />

                <Image 
                    src="/img/logo_elmeco.png"
                    alt="Logotipo da Marinha"
                    width={156}
                    height={50}
                />

                <Image 
                    src="/img/logo_sottopelle.png"
                    alt="Logotipo da Marinha"
                    width={185.52}
                    height={50}
                />
            </div>
        </>
    )
}