import styles from '@/styles/Icon.module.css'
import Link from 'next/link'

interface Icons{
    url: string
    title: string
    icon: any
    highlight: boolean
}

export function Icon(props:Icons){

    const isHighlight = props.highlight === true ? styles.icon_highlight : ''

    return (
        <div className={`${styles.icon} ${isHighlight}`}>
            <div className="icon">
                <Link href={props.url} title={props.title} target="_blank">{props.icon}</Link>
            </div>
        </div>
    )
}