import Link from 'next/link'
import styles from '@/styles/Tags.module.css'

export function Tags(){
    return (
        <>
            <div className={styles.tags}>
                <p>Confira artigos meus sobre:</p>
                <ul>
                    <li><Link href="https://clinicaserpas.com.br/tag/diu" target="_blank">DIU</Link></li>
                    <li><Link href="https://clinicaserpas.com.br/tag/menopausa" target="_blank">Menopausa</Link></li>
                    <li><Link href="https://clinicaserpas.com.br/tag/contracepcao" target="_blank">Contracepção</Link></li>
                </ul>
            </div>
        </>
    )
}