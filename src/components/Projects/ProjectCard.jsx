import { getImgUrl } from "../../utils";
import styles from "./ProjectCard.module.css"

export default function ProjectCard({project: {imageSrc, title, description, skills, demo, source }}) {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={getImgUrl(imageSrc)} alt={title} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id)=> 
                    <li key={id} className={styles.skill}>{skill}</li>
                    )}
            </ul>
            <div className={styles.links}>
                <a href={demo} className={styles.link}>Demo</a>
                <a href={source} className={styles.link}>Source</a>
        </div>
    </div>
    )
}
        
     
    
