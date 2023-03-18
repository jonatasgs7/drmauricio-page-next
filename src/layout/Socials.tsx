import styles from '@/styles/Socials.module.css'
import { Icon } from '@/components/Icon'
import { WhatsappLogo, InstagramLogo, FacebookLogo, CalendarBlank } from 'phosphor-react'

export function Socials(){
    return (
        <>
            <div className={styles.socials}>
                <Icon url={"https://wa.me/552199155-2177"} title={"Converse comigo no WhatsApp"} icon={<WhatsappLogo />} highlight={true} />   
                <Icon url={"https://calendly.com"} title={"Confira minha agenda"} icon={<CalendarBlank />} highlight={false} /> 
                <Icon url={"https://www.instagram.com/dr.mauriciotorres/"} title={"Acesse meu perfil no Instagram"} icon={<InstagramLogo/>} highlight={false} />   
                <Icon url={"https://www.facebook.com/mmtorres28"} title={"Acesse minha página no Facebook"} icon={<FacebookLogo/>} highlight={false} />   
            </div>
        </>
    )
}