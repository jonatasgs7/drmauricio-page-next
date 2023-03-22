import { useEffect, useRef } from 'react'
import styles from '@/styles/Socials.module.css'
import { Icon } from '@/components/Icon'
import { WhatsappLogo, InstagramLogo, FacebookLogo, CalendarBlank } from 'phosphor-react'
import gsap from 'gsap'

export function Socials(){

    const iconRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(iconRef.current != null){
            gsap.from(iconRef.current, {x: -50, opacity: 0, delay: .5, stagger: .25})
        }
    }, [])

    return (
        <>
            <div className={styles.socials} ref={iconRef}>
                <Icon url={"https://wa.me/552199155-2177"} title={"Converse comigo no WhatsApp"} icon={<WhatsappLogo />} highlight={true} />   
                <Icon url={"https://calendly.com/clinicaserpas"} title={"Confira minha agenda"} icon={<CalendarBlank />} highlight={false} /> 
                <Icon url={"https://www.instagram.com/dr.mauriciotorres/"} title={"Acesse meu perfil no Instagram"} icon={<InstagramLogo/>} highlight={false} />   
                <Icon url={"https://www.facebook.com/mmtorres28"} title={"Acesse minha página no Facebook"} icon={<FacebookLogo/>} highlight={false} />   
            </div>
        </>
    )
}