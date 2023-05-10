import React from "react";
import styles from './styles.module.css';
import { Container } from "../common/container";
import { ProjectItem } from "./projectItem";

export const Projects = ({projects}) => (
    <div className={styles.projects}>
        <Container>
            <div className={styles.titleContainer}>
                <h2>Projects</h2>
            </div>
            {projects.map(project => 
                <ProjectItem key={project.name} data={project}/>    
            )}
        </Container>
    </div>
)