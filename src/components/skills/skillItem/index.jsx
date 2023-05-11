import React from "react";
import styles from './styles.module.css';

export const SkillsItem = ({ title, skillList }) => (
    <div className={styles.skillItem}>
        <h3>{title}</h3>
        <ul>
            {skillList.map(item => 
                <li>{item}</li>    
            )}
        </ul>
    </div>
)