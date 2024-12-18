import {getImgUrl} from "../../utils.js";
import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <footer id="contact"
         className={styles.container}>
            <div className={styles.text}>
               <h2>Contact</h2>
               <p>feel free to reach out</p>
            </div> 
            <ul className={styles.links}>
                <li className={styles.link}>
                   <img src={getImgUrl("contact/emailIcon.png")}  alt="Email-Icon" />
                   <a href="mailto:asifali251315@gmail.com">asifali251315@gmail.com</a>
                </li>  
                <li className={styles.link}>
                   <img src={getImgUrl("contact/githubIcon.png")}  alt="Github-Icon" />
                   <a href="https://github.com/Aasif1502">github.com/Aasif1502</a>
                </li> 
                <li className={styles.link}>
                   <img src={getImgUrl("contact/linkedinIcon.png")}  alt="Linkedin-Icon" />
                   <a href="https://www.linkedin.com/in/aasif-raza-1854b91a6/">linkedin.com/in/aasif-raza</a>
                </li> 
            </ul> 
        </footer>
    )
}