import React from "react";
import { Container } from "../common/container";
import { MyTitle } from "../common/title";
import styles from './styles.module.css';
import { SkillsItem } from "./skillItem";

export const Skills = ({ skills }) => (
    <Container>
        <MyTitle title={"Skills"}/>
        <div className={styles.skillsContainer}>
            {skills.map(item => 
                <SkillsItem key={item.title} title={item.title} skillList={item.list}/>    
            )}
        </div>
    </Container>
)