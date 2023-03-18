import React, { ReactNode } from 'react';
import styles from '@/styles/Container.module.css'

interface PropsContainer {
    children: ReactNode
}

export function Container(props:PropsContainer){
    return <div className={styles.container}>{props.children}</div>
}