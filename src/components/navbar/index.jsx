import React from "react";
import { Link } from 'react-scroll';
import { SmallLinkInSVG } from "../../svgs/linkedInSVG";
import { SmallGithubSVG } from "../../svgs/gitHubSVG";
import { Container } from "../common/container";
import { LinkButton } from "../common/linkButton";
import styles from './styles.module.css'

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
              <Link activeClass={styles.active} to="experience" smooth={true} offset={-65} duration={500} spy={true}>Experience</Link>
            </li>
            <li onClick={e => handleLiClick(e)}>
              <Link activeClass={styles.active} to="skills" smooth={true} offset={-65} duration={500} spy={true}>Skills</Link>
            </li>
            <li onClick={e => handleLiClick(e)}>
              <Link activeClass={styles.active} to="projects" smooth={true} offset={-65} duration={500} spy={true}>Projects</Link>
            </li>
            <li onClick={e => handleLiClick(e)}>
              <Link activeClass={styles.active} to="contact" smooth={true} offset={-65} duration={500} spy={true}>Contact</Link>
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