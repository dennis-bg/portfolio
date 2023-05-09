import React from "react";
import styles from './styles.module.css';
import { Container } from "../common/container";

export const Hero  = () => {

    return (
        <Container>
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
              <a href="Dennis Galinsky Resume.pdf" download="Dennis Galinsky Resume">Download Resume</a>
            </div>
            {/* <div className={styles.watermark2}>&ltDBG/&gt</div>
            <div className={styles.watermark}>&ltDBG/&gt</div> */}
  
          </div>
        </Container>
    )
}