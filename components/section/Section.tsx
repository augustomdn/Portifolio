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
                            src={'/umvc.png'} />
                    </span>
                    <div className={styles.figureDiv}>
                        <h1 className={styles.figureTitle}>CHARACTER SELECT</h1>
                        <i className={styles.figureText}>Tela de seleção de personagens criada a minha maneira de um dos meus jogos preferidos.</i>
                        <div className={styles.figureButtonDiv}>
                            <button className={styles.figureButton}>Code</button>
                            <button className={styles.figureButton}>Website</button>
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
                            src={'/todolist.png'} />
                    </span>
                    <div className={styles.figureDiv}>
                        <h1 className={styles.figureTitle}>LISTA DE TAREFAS</h1>
                        <i className={styles.figureText}>
                            To do List criada com o intuito de estudar mais sobre React JS e Typescript.
                        </i>

                        <div className={styles.figureButtonDiv}>
                            <button className={styles.figureButton}>Code</button>
                            <button className={styles.figureButton}>Website</button>
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
                            src={'/building.jpg'} />
                    </span>
                    <div className={styles.figureDiv}>
                        <h1 className={styles.figureTitle}>POKEDEX API</h1>
                        <i className={styles.figureText}>
                        Página em Construção<br/><br/><br/>
                        </i>

                        <div className={styles.figureButtonDiv}>
                            <button className={styles.figureButton}>Code</button>
                            <button className={styles.figureButton}>Website</button>
                        </div>
                    </div>
                </figure>
            </div>
        </section >
    )
}