import { NextPage } from "next";
import { useState } from "react";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs"
import styles from '../header/header.module.scss';


export const Header: NextPage = () => {

    const [showMenu, setShowMenu] = useState(false);

    const data = {
        github: 'https://github.com/augustomdn',
        linkedin: 'https://www.linkedin.com/in/augusto-meireles-nascimento/',
        whatsapp: 'https://wa.me/5581997469712'
    }

    return (
        <header className={styles.header} id="">
            <button className={styles.menuButton} onClick={() => setShowMenu(!showMenu)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={styles.svgMenu} viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
            <nav className={showMenu ? styles.navMenu : styles.hiddenMenu}>
                <div className={styles.listMenu}>
                    <ul className={styles.listItems}>
                        <li>
                            <a href="#main">Home</a>
                        </li>
                        <li>
                            <a href="#projects">Projetos</a>
                        </li>
                        <li>
                            <a href="#about">Sobre</a>
                        </li>
                        <li>
                            <a href="#contact">Contato</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.IconMenu}>
                    <span className={styles.iconSpan}><a href={data.github} target="_blank" className={styles.icons}><BsGithub/></a></span>
                    <span className={styles.iconSpan}><a href={data.linkedin} target="_blank" className={styles.icons}><BsLinkedin/></a></span>
                    <span className={styles.iconSpan}><a href={data.whatsapp} target="_blank" className={styles.icons}><BsWhatsapp/></a></span>
                </div>
            </nav>
        </header>
    )
}