import React from "react";
import styles from './styles.module.css';
import { Container } from "../common/container";
import { ProjectItem } from "./projectItem";
import { MyTitle } from "../common/title";

export const Projects = ({projects}) => (
    <div className={styles.projects}>
        <Container>
            <MyTitle title={"Projects"}/>
            {projects.map(project => 
                <ProjectItem key={project.name} data={project}/>    
            )}
        </Container>
    </div>
)