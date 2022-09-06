import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { IoMail } from 'react-icons/io5'
import styles from '../contact/contact.module.scss'

export const Contact = () => {
    return (
        <div className={styles.divContact} id="contact">
            <div className={styles.divTitle}>
                <h1 className={styles.ContactTitle}>Contatos</h1>
            </div>
            <div className={styles.divList}>
                <span className={styles.listIcons}><a href="#" className={styles.icons}><BsGithub className={styles.github}/></a></span>
                <span className={styles.listIcons}><a href="#" className={styles.icons}><BsLinkedin className={styles.linkedin}/></a></span>
                <span className={styles.listIcons}><a href="#" className={styles.icons}><BsWhatsapp className={styles.whatsapp}/></a></span>
                <span className={styles.listIcons}><a href="#" className={styles.icons}><IoMail className={styles.mail}/></a></span>
            </div>
        </div>
    )
}