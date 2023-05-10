import React from "react";
import styles from './styles.module.css'

export const ExperienceItem = ({data}) => (
    <div className={styles.item}>
        <div className={styles.left}>
            <h3>{data.company}</h3>
            <h4>{data.position}</h4>
        </div>
        <div className={styles.right}>
            <ul>
                {data.bullets.map(bullet => 
                    <li key={bullet}>{bullet}</li>    
                )}
            </ul>
        </div>
    </div>
)