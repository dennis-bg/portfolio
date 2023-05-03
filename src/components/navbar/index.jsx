import React from "react";

import styles from './styles.module.css'
import { SmallLinkInSVG } from "../../svgs/linkedInSVG";
import { SmallGithubSVG } from "../../svgs/gitHubSVG";

export const Navbar = () => (
  <div className={styles.navBar}>
        
    <div className={styles.container}>
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
    {/* <svg id="close" xmlns="http://www.w3.org/2000/svg" width="23.359" height="23.282" viewBox="0 0 23.359 23.282">
      <path fill="white" id="close" d="M23.359,5.7,13.984,15l9.375,9.3-2.344,2.344-9.375-9.3-9.3,9.3L0,24.3,9.3,15,0,5.7,2.344,3.359l9.3,9.3,9.375-9.3Z" transform="translate(0 -3.359)"/>
    </svg> */}
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


  {/* <svg  id="hamburger" xmlns="http://www.w3.org/2000/svg" width="20.625" height="18" viewBox="0 0 20.625 18">
    <g id="hamburger-menu" transform="translate(-4.688 -5.625)">
      <path id="Path_14" data-name="Path 14" d="M4.688,5.625H25.313V7.5H4.688Z"/>
      <path id="Path_15" data-name="Path 15" d="M4.688,14.063H25.313v1.875H4.688Z" transform="translate(0 -0.375)"/>
      <path id="Path_16" data-name="Path 16" d="M4.688,22.5H25.313v1.875H4.688Z" transform="translate(0 -0.75)"/>
    </g>
  </svg> */}
    </div>
 
</div>
)