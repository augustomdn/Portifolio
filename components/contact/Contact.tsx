import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { IoMail } from 'react-icons/io5'
import styles from '../contact/contact.module.scss'

export const Contact = () => {

    const data = {
        github: 'https://github.com/augustomdn',
        linkedin: 'https://www.linkedin.com/in/augusto-meireles-nascimento/',
        whatsapp: 'https://wa.me/5581997469712',
        email: 'mailto:augustomeirelesn@hotmail.com'
    }

    return (
        <div className={styles.divContact} id="contact">
            <div className={styles.divTitle}>
                <h1 className={styles.ContactTitle}>Contatos</h1>
            </div>
            <div className={styles.divList}>
                <span className={styles.listIcons}><a href={data.github} className={styles.icons} rel="noreferrer" target="_blank"><BsGithub className={styles.github}/></a></span>
                <span className={styles.listIcons}><a href={data.linkedin} className={styles.icons} rel="noreferrer" target="_blank"><BsLinkedin className={styles.linkedin}/></a></span>
                <span className={styles.listIcons}><a href={data.whatsapp} className={styles.icons} rel="noreferrer" target="_blank"><BsWhatsapp className={styles.whatsapp}/></a></span>
                <span className={styles.listIcons}><a href={data.email} className={styles.icons} rel="noreferrer" target="_blank"><IoMail className={styles.mail}/></a></span>
            </div>
        </div>
    )
}