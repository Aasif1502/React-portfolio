import { getImgUrl } from "../../utils"
import styles from "./Hero.module.css"

export const Hero = ()=> {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hii, I'm Aasif  </h1>
                <p className={styles.desc}>I'm a frontend developer with an experience in React.js. Reach out if you want to learn more.</p>
                <a className={styles.contact} href="mailto:asifali251315@gmail.com">Contact Me</a>
            </div>
            <img className={styles.heroImg} src={getImgUrl("hero/heroImage.jpg")} alt="hero-img" />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur} />
        </section>
    )
}