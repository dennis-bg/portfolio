import React from "react";
import styles from './styles.module.css';

export const SkillsItem = ({ title, skillList, svg }) => (
    <div className={styles.skillItem}>
        {svg()}
        <h3>{title}</h3>
        <ul>
            {skillList.map(item => 
                <li key={item}>{item}</li>    
            )}
        </ul>
    </div>
)