import { ReactNode, useRef } from 'react'
import styles from '@/styles/Depoimentos.module.css'
import { Container } from '@/layout/Container'
import { CaretDown } from 'phosphor-react'

interface propsDepoBox {
    children : ReactNode
}

export function Depoimentos(props:propsDepoBox){

    const refScroll = useRef<HTMLDivElement>(null);
    const handleClick = () => {
        refScroll.current?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <>
            <section className={styles.depoimentos}>
                <Container>

                    <div className={styles.depoimentosButton} onClick={handleClick}>
                        <p>Depoimentos <CaretDown weight="fill" /></p>
                    </div>

                    <div className={styles.depoboxContainer} ref={refScroll}> 
                        {props.children}
                    </div>
                </Container>
            </section>
        </>
    )
}