import React from "react";
import styles from './styles.module.css'

export const MyTitle = ({ title }) => (
    <div className={styles.titleContainer}>
        <h2>{title}</h2>
    </div>
)