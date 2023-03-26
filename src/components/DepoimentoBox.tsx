import styles from '@/styles/DepoimentoBox.module.css'
import { HeartStraight } from 'phosphor-react'

interface propsDepoimentos {
    depoimento: string
    autor: string
}

export function DepoimentoBox(props: propsDepoimentos) {
    return (
        <>
            <div className={styles.depobox}>

                <div className={styles.depoboxStars}>
                    <HeartStraight weight="fill" />
                    <HeartStraight weight="fill" />
                    <HeartStraight weight="fill" />
                    <HeartStraight weight="fill" />
                    <HeartStraight weight="fill" />
                </div>

                <div className={styles.DepoBoxAutor}>
                    <h4>{props.autor}</h4>
                </div>
                <div className={styles.DepoBoxContent}>
                    <p>{props.depoimento}</p>
                </div>

            </div>
        </>
    )
}