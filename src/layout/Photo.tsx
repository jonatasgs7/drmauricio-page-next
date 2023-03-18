import Image from 'next/image'
import styles from '@/styles/Photo.module.css'
import { Socials } from '@/layout/Socials'

export function Photo(){
    return (
        <>
            <div className={styles.photo}>
                <Image 
                    src="/img/foto_dr_mauricio.png"
                    alt="Foto do Dr. Maurício"
                    width={639.7}
                    height={848}
                    loading="lazy"
                />
                <Socials />
            </div>
        </>
    ) 
}