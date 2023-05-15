import React from "react";
import styles from './styles.module.css'
import { Container } from "../common/container";
import { ExperienceItem } from "./experienceItem";
import { MyTitle } from "../common/title";

export const Experience = ({experience}) => (
    <div className={styles.experience} id="experience">
        <Container>
            <MyTitle title={"Experience"}/>
            {experience.map(data => 
                <ExperienceItem key={data.company} data={data}/>
            )}
        </Container>
    </div>
)