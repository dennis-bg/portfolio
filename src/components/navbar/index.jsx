import React from "react";
import styles from './styles.module.css'
import { SmallLinkInSVG } from "../../svgs/linkedInSVG";
import { SmallGithubSVG } from "../../svgs/gitHubSVG";
import { Container } from "../common/container";
import { LinkButton } from "../common/linkButton";

export const Navbar = ({ links}) => {

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
                      link={links.linkedIn}
                      text={"Connect with me"}
                      svg={SmallLinkInSVG}
                    />
                    <LinkButton
                      link={links.gitHub}
                      text={"Visit my Github"}
                      svg={SmallGithubSVG}
                    />
                </div>
          </Container>

        
      
      </div>
    )
}