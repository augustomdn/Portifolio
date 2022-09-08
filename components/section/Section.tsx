import styles from '../section/section.module.scss'
import Image from "next/image";


export const Section = () => {
    return (
        <section className={styles.sectionOne} id="projects">
            <h1 className={styles.sectionTitle}>Projetos</h1>

            <div className={styles.sectionProjects}>
                <figure className={styles.figureCard}>
                    <span className={styles.figureImage}>
                        <Image
                            className={styles.figureImageRound}
                            width={200}
                            height={124}
                            layout={'responsive'}
                            src={'/umvc.png'}
                            alt="umv-image" />
                    </span>
                    <div className={styles.figureDiv}>
                        <h1 className={styles.figureTitle}>CHARACTER SELECT</h1>
                        <i className={styles.figureText}>Tela de seleção de personagens criada a minha maneira de um dos meus jogos preferidos.</i>
                        <div className={styles.figureButtonDiv}>
                            <a href="https://github.com/augustomdn/MarvelvsCapcomJS">
                                <button className={styles.figureButton}>Code</button>
                            </a>
                            <a href="#">
                                <button className={styles.figureButton}>Website</button>
                            </a>
                        </div>
                    </div>
                </figure>
                <figure className={styles.figureCard}>
                    <span className={styles.figureImage}>
                        <Image
                            className={styles.figureImageRound}
                            width={200}
                            height={124}
                            layout={'responsive'}
                            src={'/todolist.png'}
                            alt="to-do-list-image" />
                    </span>
                    <div className={styles.figureDiv}>
                        <h1 className={styles.figureTitle}>LOADING</h1>
                        <i className={styles.figureText}>
                            Página em Construção<br /><br /><br />
                        </i>

                        <div className={styles.figureButtonDiv}>
                            <a href="#">
                                <button className={styles.figureButton}>Code</button>
                            </a>
                            <a href="#">
                                <button className={styles.figureButton}>Website</button>
                            </a>
                        </div>
                    </div>
                </figure>
                <figure className={styles.figureCard}>
                    <span className={styles.figureImage}>
                        <Image
                            className={styles.figureImageRound}
                            width={200}
                            height={124}
                            layout={'responsive'}
                            src={'/building.jpg'}
                            alt="progress-image" />
                    </span>
                    <div className={styles.figureDiv}>
                        <h1 className={styles.figureTitle}>LOADING</h1>
                        <i className={styles.figureText}>
                            Página em Construção<br /><br /><br />
                        </i>

                        <div className={styles.figureButtonDiv}>
                            <a href="#">
                                <button className={styles.figureButton}>Code</button>
                            </a>
                            <a href="#">
                                <button className={styles.figureButton}>Website</button>
                            </a>
                        </div>
                    </div>
                </figure>
            </div>
        </section >
    )
}