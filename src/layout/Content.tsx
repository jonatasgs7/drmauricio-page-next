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
                        
                        <p>Carreira desenvolvida na área de Medicina, com experiência na identificação de doenças e sintomas, orientação sobre o tratamento mais apropriado, realização e solicitação de exames complementares e tratamento cirúrgico de patologias ginecológicas e obstétricas.</p><br />
                        <p>Vivência na prescrição de tratamentos clínico, ambulatorial e hospitalar, avaliando e acompanhando o desenvolvimento do quadro clínico de cada paciente.</p><br />
                        <p>Participação ativa na avaliação da qualidade da assistência prestada aos pacientes pelas instituições, propondo quando necessário, melhorias do programa de assistência global.</p><br />
                        <p>Experiência na área de regulação e auditoria das contas médicas dos Hospitais credenciados à Marinha do Brasil (FUSMA)
                            Capitão-de Corveta, médico, da Marinha do Brasil, com formação clínica e cirúrgica nesta instituição, com experiência também, nas áreas de gestão e qualidade.</p><br />
                        <p>Assistente da Clínica de Ginecologia do Hospital Naval Marcíio Dias</p><br />
                        <p>Atendimento ginecológico em consultório particular na cidade de Teresópolis/RJ (Clínica Serpas), voltado para avaliação e melhora de vida das pacientes na Menopausa e das pacientes com doenças estrógeno dependentes com Endometriose, adenomiose e miomatose uterina</p><br />

                        <h3>FORMAÇÃO ACADÊMICA</h3><br />

                        <p>Residência Médica em Ginecologia e Obstetrícia Iniciada em Fev/2002 e concluída em Dez/2004<br />
                            Instituição: Hospital Naval Marcílio Dias<br />
                            Graduação em Medicina - Dez/2001 Instituição: Universidade Gama Filho</p><br />

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