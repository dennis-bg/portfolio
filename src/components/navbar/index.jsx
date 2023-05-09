import React from "react";

import styles from './styles.module.css'
import { SmallLinkInSVG } from "../../svgs/linkedInSVG";
import { SmallGithubSVG } from "../../svgs/gitHubSVG";
import { Container } from "../common/container";

export const Navbar = () => (
  <div className={styles.navBar}>
        
    
     <Container>
          <div className={styles.links}>
              <h5>Dennis Galinsky</h5>
              <a target="_blank" href="https://www.linkedin.com/in/dennis-galinsky-a1b406150/">
                <SmallLinkInSVG/>
              </a>
              <a target="_blank" href="https://github.com/dennis-bg">
                <SmallGithubSVG/>
              </a>
          </div>
        
        
        <nav>
            <ul>
              <li>
                <a id="projects" href="#project-section" >Projects</a>
              </li>
              <li>
                <a id="skills" href="#skills-section" >Skills</a>
              </li>
              <li>
                <a id="experience" href="#experience-section" >Experience</a>
              </li>
              <li>
                <a id="contact" href="#contact-section" >Contact</a>
              </li>

                
            </ul>

            
        </nav>
     </Container>

   
 
</div>
)