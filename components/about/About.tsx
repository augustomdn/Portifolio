import { NextPage } from "next";
import Image from "next/image";
import styles from '../about/about.module.scss'
import { GrReactjs } from 'react-icons/gr'
import { SiNextdotjs, SiSass, SiBootstrap, SiGithub, SiJest, SiTypescript, SiStyledcomponents, SiVite } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'
import { CgFigma } from 'react-icons/cg'

export const About = () => {
    return (
        <section className={styles.sectionTwo} id="about">
            <h1 className={styles.sectionTitle}>Sobre Mim</h1>


            <div className={styles.sectionAbout}>
                <div className={styles.aboutText}>
                    <i className={styles.aboutItalic}>Atualmente sou um estudante, entusiasta e bastante focado no progresso e na minha carreira, especificamente como desenvolvedor web. No momento estou pondo em prática tudo que venho aprendendo através de estudos e pequenos projetos criados por mim e por outros amigos que também estão nessa jornada. Estar sempre ciente e apto a mudanças são pontos importantes para o sucesso em qualquer área! Então sigo sempre me reinventando e me apaixonando cada vez mais pelo que faço.</i>
                </div>
            </div>

            <div className={styles.divSkills}>
                <h2 className={styles.skillsTitle}>Habilidades</h2>
                <ul className={styles.skillsList}>
                    <li className={styles.skills}>
                        <span className={styles.iconSkill}>
                            <GrReactjs />
                        </span>
                    </li>
                    <li className={styles.skills}>
                        <span className={styles.iconSkill}>
                            <SiTypescript />
                        </span>
                    </li>
                    <li className={styles.skills}>
                        <span className={styles.iconSkill}>
                            <SiNextdotjs />
                        </span>
                    </li>
                    <li className={styles.skills}>
                        <span className={styles.iconSkill}>
                            <SiSass />
                        </span>
                    </li>
                    <li className={styles.skills}>
                        <span className={styles.iconSkill}>
                            <SiStyledcomponents />
                        </span>
                    </li>
                    <li className={styles.skills}>
                        <span className={styles.iconSkill}>
                            <SiBootstrap />
                        </span>
                    </li>
                    <li className={styles.skills}>
                        <span className={styles.iconSkill}>
                            <SiGithub />
                        </span>
                    </li>
                    <li className={styles.skills}>
                        <span className={styles.iconSkill}>
                            <FaGitAlt />
                        </span>
                    </li>
                    <li className={styles.skills}>
                        <span className={styles.iconSkill}>
                            <SiJest />
                        </span>
                    </li>
                    <li className={styles.skills}>
                        <span className={styles.iconSkill}>
                            <CgFigma />
                        </span>
                    </li>
                    <li className={styles.skills}>
                        <span className={styles.iconSkill}>
                            <SiVite />
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    )
}