import React from "react";
import styles from './styles.module.css'

export const Experience = ({experience}) => (
    <div className={styles.experience}>
        <ul>
            {experience.map(e => <li>{e.company}</li>)}
        </ul>
    </div>
)