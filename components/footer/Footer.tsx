import styles from '../footer/footer.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.divFooter}>
                <a href="">
                    <i className={styles.footerText}>Criado por Augusto Meireles</i>
                </a>
            </div>
        </footer>
    )
}