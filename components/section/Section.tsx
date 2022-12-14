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
                            src={'/jordanshoes.png'}
                            alt="" />
                    </span>
                    <div className={styles.figureDiv}>
                        <h1 className={styles.figureTitle}>Jordan Shoes</h1>
                        <i className={styles.figureText}>Usando como base a interface web da Tesla criei a minha versão voltada para um modelo de tênis do Jordan</i>

                        <div className={styles.figureButtonDiv}>
                            <a href="https://github.com/augustomdn/Jordan-Shoes">
                                <button className={styles.figureButton}>Code</button>
                            </a>
                            <a href="https://jordan-shoes-reactjs-ts.vercel.app/">
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
                            src={'/storybook.png'}
                            alt="progress-image" />
                    </span>
                    <div className={styles.figureDiv}>
                        <h1 className={styles.figureTitle}>Components</h1>
                        <i className={styles.figureText}>Criação de componentes utilizando o Storybook para documentá-los e utilizá-los de maneira isolada</i>

                        <div className={styles.figureButtonDiv}>
                            <a href="https://github.com/augustomdn/Components">
                                <button className={styles.figureButton}>Code</button>
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
                            src={'/umvc.png'}
                            alt="umv-image" />
                    </span>
                    <div className={styles.figureDiv}>
                        <h1 className={styles.figureTitle}>Character Select</h1>
                        <i className={styles.figureText}>Tela de seleção de personagens criada a minha maneira de um dos meus jogos preferidos.</i>
                        <div className={styles.figureButtonDiv}>
                            <a href="https://github.com/augustomdn/MarvelvsCapcomJS">
                                <button className={styles.figureButton}>Code</button>
                            </a>
                            <a href="https://marvel-vs-capcom-js.vercel.app/">
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
                            src={'/pokemons.png'}
                            alt="umv-image" />
                    </span>
                    <div className={styles.figureDiv}>
                        <h1 className={styles.figureTitle}>Pokedex API</h1>
                        <i className={styles.figureText}>Pokedex criada utilizando uma interface API RESTful para a obtenção de dados</i>
                        <div className={styles.figureButtonDiv}>
                            <a href="https://github.com/augustomdn/pokedex-javascript">
                                <button className={styles.figureButton}>Code</button>
                            </a>
                            <a href="https://pokedex-javascript-api.vercel.app/">
                                <button className={styles.figureButton}>Website</button>
                            </a>
                        </div>
                    </div>
                </figure>   
            </div>
        </section >
    )
}