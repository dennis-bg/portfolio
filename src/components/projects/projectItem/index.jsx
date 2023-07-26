import React from "react";
import styles from './styles.module.css';

export const ProjectItem = ({ data }) => (
    <div className={styles.item}>
        <div className={styles.left}>
            <h3>{data.name}</h3>
            {data.description.map(item => 
                <p key={item} className={styles.content}>{item}</p>    
            )}
            <p className={styles.sectionTitle}>Technologies : </p>
            <p className={styles.content}>{data.technologies.join(", ")}</p>
            <p className={styles.sectionTitle}>Next Steps : </p>
            {data.nextSteps.map(step => 
                <p key={step} className={styles.content}>{step}</p>    
            )}
            <a target="_blank" rel="noopener noreferrer" href={data.gitLink}>View Code</a>
        </div>
        <div className={styles.right}>
            <div className={styles.imgContainer}>
                {data.images.map(img => 
                    <img key={img.alt} src={require(`../../../images/${img.src}`)} alt={img.alt}/>
                )}
            </div>
        </div>
    </div>
)