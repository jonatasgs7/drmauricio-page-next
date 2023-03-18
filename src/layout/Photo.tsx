import { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from '@/styles/Photo.module.css'
import { Socials } from '@/layout/Socials'
import { gsap } from 'gsap'

export function Photo(){

    const photoRef = useRef(null)

    useEffect(() => {
        gsap.from(photoRef.current, {
            duration: 0.75,
            opacity: 0,
            x: -50,
            delay: 0.25
        })
    },[])

    return (
        <>
            <div className={styles.photo}>
                <Image 
                    src="/img/foto_dr_mauricio.png"
                    alt="Foto do Dr. Maurício"
                    width={639.7}
                    height={848}
                    loading="lazy"
                    ref={photoRef}
                />
                <Socials />
            </div>
        </>
    ) 
}