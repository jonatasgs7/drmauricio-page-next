import { useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from '@/styles/Tags.module.css'
import gsap from 'gsap'

export function Tags(){

    const [textRef, tag1Ref, tag2Ref, tag3Ref] = [useRef(null), useRef(null), useRef(null), useRef(null)]

    useEffect(() => {
        gsap.from(textRef.current, {x: -50, opacity: 0, delay: 1.75})
        gsap.from(tag1Ref.current, {x: -50, opacity: 0, delay: 2})
        gsap.from(tag2Ref.current, {x: -50, opacity: 0, delay: 2.25})
        gsap.from(tag3Ref.current, {x: -50, opacity: 0, delay: 2.50})
    }, [])

    return (
        <>
            <div className={styles.tags}>
                <p  ref={textRef}>Confira artigos meus sobre:</p>
                <ul>
                    <li ref={tag1Ref}><Link href="https://clinicaserpas.com.br/tag/diu" target="_blank">DIU</Link></li>
                    <li ref={tag2Ref}><Link href="https://clinicaserpas.com.br/tag/menopausa" target="_blank">Menopausa</Link></li>
                    <li ref={tag3Ref}><Link href="https://clinicaserpas.com.br/tag/contracepcao" target="_blank">Contracepção</Link></li>
                </ul>
            </div>
        </>
    )
}