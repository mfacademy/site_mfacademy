import React from 'react'
import styles from '../../styles/menu.module.css'

const Menu = () => {
    const menuMob = React.useRef(null);
    function handleMenu() {
        menuMob.current.className = 'menuMobActive';
    }

    function handleCloseMenu() {
        menuMob.current.className = 'menuMob';
    }
    return (
        <>
        <div ref={menuMob} className={styles.menuMob}>
            <button onClick={handleCloseMenu}>
                <img src="/images/close.svg" alt=""/>
            </button>
            <div className={styles.groupBtnMob}>
                <a href="https://cursos.mfacademy.com.br/login" className={styles.btnEntrarMob} >
                    Entrar
                </a>
                <a href="https://api.whatsapp.com/send?phone=+55(61)981357453)" target="_blanck" className={styles.btnMatricMob}>
                    Matricule-se
                </a>
            </div>
        </div>
        <nav id={styles.menu}>
            <div className={styles.menuGroup}>
                <img src="/images/logo.png" alt="Logo"/>
                <div className={styles.button}>
                    <a href="https://cursos.mfacademy.com.br/login" >
                        Entrar
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+55(61)981357453)" target="_blanck" className={styles.btnMatric}>Matricule-se</a>
                </div>
            </div>

            <div className={styles.menuGroupMob}>
                <img src="/images/logo.png" className={styles.imgLogomob} alt="Logo"/>
                <button onClick={handleMenu}>
                    <img src="/images/menu.svg" className={styles.imgMenuMob} alt="menu"/>
                </button>
            </div>
        </nav>
        </>
    )
}

export default Menu
