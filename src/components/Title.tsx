import styles from '@/styles/Title.module.css'

interface Title {
    text: string
}

export function Title(props:Title){
    return <h2 className={styles.title}>{props.text}</h2>
}