import { getImgUrl } from "../../utils"
import styles from "./About.module.css"

export default function About() {
    return (
        <section id="about" className={styles.container}>
            <h2 className={styles.title}>ABOUT</h2>
            <div className={styles.content}>
                <img className={styles.aboutImg} src="https://png.pngtree.com/png-vector/20230809/ourmid/pngtree-cartoon-character-young-man-with-glasses-using-laptop-cartoon-vector-illustration-png-image_6833863.png"alt="Me sitting with a laptop" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                     <img src={getImgUrl("about/cursorIcon.png")} alt="cursor"/>
                     <div className={styles.aboutItemText}>
                     <h3>Frontend Developer</h3>
                     <p>I am a frontend developer with an experience of building responsive and optimized sites</p>
                     </div>
                     
                    </li>
                    <li className={styles.aboutItem}>
                     <img src={getImgUrl("about/uiIcon.png")} alt="UI"/>
                     <div className={styles.aboutItemText}>
                     <h3>UI Designer</h3>
                     <p>I have designed many landing pages and have designed systems as well</p>
                     </div>
                      </li>
                </ul>
            </div>
        </section>
    )
}