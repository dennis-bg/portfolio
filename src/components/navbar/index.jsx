import React from "react";

import styles from './styles.module.css'
import { SmallLinkInSVG } from "../../svgs/linkedInSVG";
import { SmallGithubSVG } from "../../svgs/gitHubSVG";
import { Container } from "../common/container";
import { LinkButton } from "../common/container/linkButton";

export const Navbar = () => (
  <div className={styles.navBar}>
        
    
     <Container>
          <div className={styles.links}>
              <h5>Dennis Galinsky</h5>
              <LinkButton
                link={"https://www.linkedin.com/in/dennis-galinsky-a1b406150/"}
                text={"Connect with me"}
                svg={SmallLinkInSVG}
              />
              <LinkButton
                link={"https://github.com/dennis-bg"}
                text={"Visit my Github"}
                svg={SmallGithubSVG}
              />
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