import { NextPage } from "next"
import Image from "next/image";
import styles from '../main/main.module.scss'

export const Main = () => {
    return (
        <main className={styles.mainSection} id="main">
            <div className={styles.mainDiv}>
                <h1 className={styles.titleName}>Augusto Meireles</h1>
                <i className={styles.titleItalic}>Desenvolvedor Front-End</i>
                <div className={styles.divButton}>
                    <a href="#">
                        <button className={styles.mainButton}>Currículo</button>
                    </a>
                </div>
            </div>
        </main>
    )
};