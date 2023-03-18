import styles from '@/styles/Description.module.css'

interface Description {
    text: string
}

export function Description(props:Description){
    return <p className={styles.description}>{props.text}</p>
}
