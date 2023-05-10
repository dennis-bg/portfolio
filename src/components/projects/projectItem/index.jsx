import React from "react";
import styles from './styles.module.css';

export const ProjectItem = ({ data }) => (
    <div className={styles.item}>
        <div className={styles.left}>
            <h3>{data.name}</h3>
            {data.description.map(item => 
                <p>{item}</p>    
            )}
            <p>Technologies : </p>
            <p>{data.technologies.join(", ")}</p>
            <p>Next Steps : </p>
            {data.nextSteps.map(step => 
                <p>{step}</p>    
            )}
        </div>
        <div className={styles.right}>

        </div>
    </div>
)