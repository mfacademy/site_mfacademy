import React from 'react'
import style from '../styles/home.module.css'

import Menu from '../components/Menu'


const Home = () => {
    return (
        <>
        <div>
            <Menu />
            <section className={style.apresentacao}>
                <div className={style.apresentacaoText}>
                    <h1>Formação Ministerial - Online</h1>
                    <p>Você vai estudar, praticar, discutir e se aprofundar no evangelho do Senhor em uma
plataforma de alta tecnologia.</p>
                    {/* <button>Saiba mais</button> */}
                </div>
            </section>
            <section className={style.cursos}>
                <div className={style.titulo}>
                    <h1>Cursos</h1>
                </div>
                    <div className={style.especifico}>
                        <div className={style.imgCurso}></div>
                        <div className={style.conteudoCurso}>
                            <p className={style.subTitle}>Online</p>
                            <h1>Treinamento de voluntários e consolidados! </h1>
                            <p className={style.body}>Venha conhecer mais sobre a visão
                                do Ministério da Fé, além de
                                princípios de autoridade espiritual,
                                disciplina e vocação que irão ajudar
                                você a servir com excelência e
                                leveza na casa do Senhor!
                            </p>
                                <a href="https://api.whatsapp.com/send?phone=+55(61)981357453" target="_blanck" className={style.btnMatric}>Matricule-se</a>
                        </div>
                    </div>
            </section>
            <footer className={`${style.web}  ${style.rodape}`}>
                <div className={style.social}>
                    <div>
                        <img src='images/logo.png' alt=""/>
                        <p className={style.textBody}>Você vai estudar, praticar, discutir e se aprofundar no evangelho do Senhor em uma plataforma de alta tecnologia.</p>
                    </div>
                    <div className={style.groupText}>
                        <p className={style.tituloFooter}>Contato</p>
                        <a href="https://api.whatsapp.com/send?phone=+55(61)981357453" target="_blanck" className={style.subTituloFooter}><strong>Tel:</strong> (61) 9 8135-7453</a>
                        <a href="mailto: atendimento@mfacademy.com.br" target="_blanck" className={style.subTituloFooter}><strong>Email:</strong>   atendimento@mfacademy.com.br</a>
                    </div>
                </div>
            </footer>
            <footer className={`${style.mobile}  ${style.rodape}`}>
                    <div className={style.mobileimg}>
                        <img src='images/logo.png' alt=""/>    
                    </div>
                    <p>Você vai estudar, praticar, discutir e se aprofundar no evangelho do Senhor em uma plataforma de alta tecnologia.</p>
                    <div className={style.footerGroup}>
                        <p>Contato</p>
                        <a href="https://api.whatsapp.com/send?phone=+55(61)981357453" target="_blanck" className={style.subTituloFooter}><strong>Tel:</strong> (61) 9 8135-7453</a>
                        <a href="mailto: atendimento@mfacademy.com.br" target="_blanck" className={style.subTituloFooter}><strong>Email:</strong>   atendimento@mfacademy.com.br</a>
                    </div>
            </footer>
        </div>
        </>
    )
}

export default Home
