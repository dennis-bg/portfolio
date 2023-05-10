import React from "react";
import styles from './styles.module.css'
import { Container } from "../common/container";
import { ExperienceItem } from "./experienceItem";

export const Experience = ({experience}) => (
    <div className={styles.experience}>
        <Container>
            <div className={styles.titleContainer}>
                <h2>Experience</h2>
            </div>
            {experience.map(data => 
                <ExperienceItem key={data.company} data={data}/>
            )}
        </Container>
    </div>
)