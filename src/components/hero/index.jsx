import React from "react";
import { Container } from "../common/container";
import { FeelingProudSVG } from '../../svgs/FeelingProud';
import styles from './styles.module.css';
const resume = require('./Dennis Galinsky Resume.pdf');

export const Hero  = () => {



    return (
        <Container>
            <div className={styles.heroContainer}>
                <div className={styles.left}>
                  <div className={styles.hero}>
                  <div className={styles.h1Container}>
                    <h1>Dennis <span>Galinsky</span></h1>
                  </div>
                  <div className={styles.pContainer}>
                    <p>Software Engineer in the New York City area, Interested in exciting opportunities in Frontend development but open to any positions!</p>
                  </div>
                  <div className={styles.viewContainer}>
                    <a href="#project-section">View Portfolio <span>Below</span></a>
                  </div>
                  <div className={styles.downloadContainer}>
                    <a href={resume} download="Dennis Galinsky Resume">Download Resume</a>
                  </div>  
                </div>
                </div>
                <div className={styles.right}>
                  <FeelingProudSVG/>
                </div>
            </div>
        </Container>
    )
}