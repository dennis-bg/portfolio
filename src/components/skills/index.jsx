import React from "react";
import { Container } from "../common/container";
import { MyTitle } from "../common/title";
import { SkillsItem } from "./skillItem";
import { DevActivitySVG } from '../../svgs/DevActivity';
import { PairProgrammingSVG } from "../../svgs/PairProgramming";
import { ProgrammingSVG } from "../../svgs/Programming";
import styles from './styles.module.css';

export const Skills = ({ skills }) => (
    <div id="skills">
        <Container>
            <MyTitle title={"Skills"}/>
            <div className={styles.skillsContainer}>
                {skills.map(item => {
                    let svg = '';
                    switch(item.title){
                        case 'Languages':
                            svg = ProgrammingSVG;
                            break;
                        case 'Tools':
                            svg = DevActivitySVG;
                            break;
                        case 'Coursework':
                            svg = PairProgrammingSVG;
                            break;
                        default: break;
                    }
                    return <SkillsItem key={item.title} title={item.title} skillList={item.list} svg={svg}/>
                }    
                )}
            </div>
        </Container>
    </div>
)