import React from "react";

import styles from './styles.module.css'
import { SmallLinkInSVG } from "../../svgs/linkedInSVG";
import { SmallGithubSVG } from "../../svgs/gitHubSVG";
import { Container } from "../common/container";
import { LinkButton } from "../common/container/linkButton";

export const Navbar = () => {

  const handleLiClick = (e) => {
    if(e.target.localName === 'a'){
      return;
    }
    e.target.children[0].click();
  }

  return (
        <div className={styles.navBar}>
              
          
          <Container>

            <div className={styles.links}>
            <h5>Dennis Galinsky</h5>

      <nav>
          <ul>
            <li onClick={e => handleLiClick(e)}>
              <a id="projects" href="#project-section" >Projects</a>
            </li>
            <li onClick={e => handleLiClick(e)}>
              <a id="skills" href="#skills-section" >Skills</a>
            </li>
            <li onClick={e => handleLiClick(e)}>
              <a id="experience" href="#experience-section" >Experience</a>
            </li>
            <li onClick={e => handleLiClick(e)}>
              <a id="contact" href="#contact-section" >Contact</a>
            </li>

              
          </ul>

          
      </nav>
            </div>
                    
              <div className={styles.links}>
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
          </Container>

        
      
      </div>
    )
}