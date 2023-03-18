import Image from 'next/image'
import styles from '@/styles/Logos.module.css'

export function Logos(){
    return (
        <>
            <div className={styles.logos}>
                <Image 
                    src="/img/logo_marinha.png"
                    alt="Logotipo da Marinha"
                    width={188.6}
                    height={65}
                />

                <Image 
                    src="/img/logo_clinica_serpas.png"
                    alt="Logotipo da Clínica Serpas"
                    width={267}
                    height={50}
                />
            </div>
        </>
    )
}