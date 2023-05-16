import React from "react";
import { Container } from "../common/container";
import { FeelingProudSVG } from '../../svgs/FeelingProud';
import { Link } from "react-scroll";
import styles from './styles.module.css';
const resume = require('./Dennis Galinsky Resume.pdf');

export const Hero  = () => {



    return (
        <Container>
            <div className={styles.heroContainer} id="hero">
                <div className={styles.left}>
                  <div className={styles.hero}>
                  <div className={styles.h1Container}>
                      <h1>Dennis <span>Galinsky</span></h1>
                  </div>
                  <div className={styles.pContainer}>
                    <p>Software Engineer in the New York City area, Interested in exciting opportunities in Frontend development but open to any positions!</p>
                  </div>
                  <div className={styles.viewContainer}>
                    <Link to="experience" smooth={true} offset={-65} duration={1000}>View Portfolio <span>Below</span></Link>
                  </div>
                  <div className={styles.downloadContainer}>
                    <a href={resume} download="Dennis Galinsky Resume">Download Resume</a>
                  </div>  
                </div>
                </div>
                <div className={styles.right}>
                  <div className={styles.svgContainer}>

                  <FeelingProudSVG/>
                  </div>
                </div>
            </div>
        </Container>
    )
}