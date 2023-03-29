import styles from '@/styles/Content.module.css'
import { Title } from '@/components/Title'
import { Description } from '@/components/Description'
import { Logos } from '@/layout/Logos'
import { Tags } from '@/layout/Tags'

export function Content() {
    return (
        <>
            <div className={styles.content}>

                <Description>
                    <div className={styles.content_description}>
                        
                        <p>Sou médico especializado em ginecologia e obstetrícia, com mais de 20 anos de experiência em atendimento a mulheres em diferentes fases da vida. Desde o início da minha carreira, sempre me dediquei a ajudar minhas pacientes a alcançarem uma saúde plena e uma qualidade de vida elevada.</p><br />
                        <p>Com o passar dos anos, percebi que muitas mulheres enfrentam dificuldades relacionadas a alterações hormonais, que podiam afetar tanto a saúde física quanto a emocional. Com isso em mente, decidi aprimorar meus conhecimentos em terapia hormonal feminina, realizando cursos com Dr. Elsimar Coutinho e com Dr. Ítalo Rachid, mestres especializados na área, além de cursos voltados para emagrecimento, hipertrofia e terapias injetáveis.</p><br />
                        <p>Atualmente, sou um profissional capacitado para ajudar mulheres a lidarem com questões relacionadas ao emagrecimento,  menopausa, TPM, endometriose, SOP, entre outras condições que possam ser tratadas com terapia hormonal. Utilizo técnicas modernas e seguras, sempre visando a individualidade e o bem-estar de cada paciente.</p><br />
                        <p>Capitão de Corveta, médico, da Marinha do Brasil, com formação clínica e cirúrgica nesta instituição, com experiência também, nas áreas de gestão e qualidade.</p><br />
                        <p>Atualmente é assistente da Clínica de Ginecologia do Hospital Naval Marcílio Dias.</p><br />

                        <h3>FORMAÇÃO ACADÊMICA</h3><br />

                        <p>Residência Médica em Ginecologia e Obstetrícia Iniciada em Fev/2002 e concluída em Dez/2004<br />
                            Instituição: Hospital Naval Marcílio Dias</p><br />
                            
                        <p>Graduação em Medicina - Dez/2001<br />
                        Instituição: Universidade Gama Filho</p><br />

                        <h3>FORMAÇÃO COMPLEMENTAR</h3><br />

                        <ul>
                            <li>Curso de Ultrassonografia UNISSOM e Caliper</li>
                            <li>Curso de cirurgia minimamente invasiva Londrina/PR</li>
                            <li>Curso de Implantes Hormonais da Elmeco, com o Professor Elsimar Coutinho</li>
                            <li>Curso de Implantes hormonais da SottoPelle Brasil</li>
                            <li>Realização do Curso de Terapia hormonal do Professor Ítalo Rachid</li>
                        </ul>

                    </div>
                </Description>

                <Logos />

                <Tags />

            </div>
        </>
    )
}