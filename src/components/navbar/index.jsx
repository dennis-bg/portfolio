import React from "react";
import styles from './styles.module.css'

export const Navbar = () => (
  <div className={styles.navBar}>
        
  <h5>Dennis Galinsky</h5>
  <div className={styles.links}>
    <a href="https://www.linkedin.com/in/dennis-galinsky-a1b406150/">
      <svg id="linkedin-nav" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <path id="linkedin" d="M0,0V20H20V0ZM4.905,3.932a1.566,1.566,0,0,1,1.607,1.5,1.555,1.555,0,0,1-1.627,1.5H4.862a1.562,1.562,0,0,1-1.586-1.5,1.576,1.576,0,0,1,1.628-1.5Zm8.5,3.975a3.206,3.206,0,0,1,2.368.952,4.486,4.486,0,0,1,.952,2.959v4.99H13.848V12.157c-.007-.872-.305-1.931-1.459-1.967a1.641,1.641,0,0,0-1.479,1.057,1.885,1.885,0,0,0-.106.7v4.863H7.928c.011-2.431.026-4.862.021-7.294q0-1.036-.021-1.395H10.8V9.345a3.875,3.875,0,0,1,.878-.941,2.976,2.976,0,0,1,1.722-.5Zm-9.957.212H6.321v8.689H3.446V8.119Z"/>
      </svg>
    </a>
    <a href="https://github.com/dennis-bg">
      <svg id="git-nav" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <path id="squaregithub" d="M17.563,20H12.524a3.208,3.208,0,0,0,.039-.488,14.933,14.933,0,0,0-.381-3.33,5.979,5.979,0,0,0-1.065-2.49A6.146,6.146,0,0,0,14.985,12.2a4.391,4.391,0,0,0,1.328-3.311,3.239,3.239,0,0,0-1.25-2.734V4.375a.605.605,0,0,0-.215-.41.605.605,0,0,0-.41-.215,12.577,12.577,0,0,0-2.324,1.367A16.3,16.3,0,0,0,10.063,5a16.3,16.3,0,0,0-2.051.117A12.577,12.577,0,0,0,5.688,3.75a.605.605,0,0,0-.41.215.605.605,0,0,0-.215.41q0,.176-.039.859t-.059,1A3.264,3.264,0,0,0,3.813,8.887,4.392,4.392,0,0,0,5.141,12.2a6.146,6.146,0,0,0,3.867,1.494q-.1.137-.273.41a3.154,3.154,0,0,1-2.422.9.992.992,0,0,1-.625-.254,4.308,4.308,0,0,1-.615-.625q-.3-.371-.635-.742a2.854,2.854,0,0,0-.82-.625A2.25,2.25,0,0,0,2.563,12.5a.718.718,0,0,0,.2.4l.518.644a4.611,4.611,0,0,1,.537.83A4.38,4.38,0,0,0,4.867,15.81a2.238,2.238,0,0,0,1.445.439,5,5,0,0,0,1.7-.273,13.922,13.922,0,0,0-.449,3.535A3.21,3.21,0,0,0,7.6,20H2.563A2.409,2.409,0,0,1,.8,19.268,2.408,2.408,0,0,1,.063,17.5V2.5A2.409,2.409,0,0,1,.8.732,2.409,2.409,0,0,1,2.563,0h15a2.409,2.409,0,0,1,1.768.732A2.409,2.409,0,0,1,20.063,2.5v15a2.5,2.5,0,0,1-2.5,2.5Z" transform="translate(-0.063)"/>
      </svg>
    </a>
    
  </div>
  
  <nav>
    <svg id="close" xmlns="http://www.w3.org/2000/svg" width="23.359" height="23.282" viewBox="0 0 23.359 23.282">
      <path fill="white" id="close" d="M23.359,5.7,13.984,15l9.375,9.3-2.344,2.344-9.375-9.3-9.3,9.3L0,24.3,9.3,15,0,5.7,2.344,3.359l9.3,9.3,9.375-9.3Z" transform="translate(0 -3.359)"/>
    </svg>
      <ul>
        <div className={styles.liContainer}>
          <a id="projects" href="#project-section" ><li>Projects</li></a>
        </div>
        <div className={styles.liContainer}>
          <a id="skills" href="#skills-section" ><li>Skills</li></a>
        </div>
        <div className={styles.liContainer}>
          <a id="experience" href="#experience-section" ><li>Experience</li></a>
        </div>
        <div className={styles.liContainer}>
          <a id="contact" href="#contact-section" ><li>Contact</li></a>
        </div>

          
      </ul>
  </nav>
  <svg  id="hamburger" xmlns="http://www.w3.org/2000/svg" width="20.625" height="18" viewBox="0 0 20.625 18">
    <g id="hamburger-menu" transform="translate(-4.688 -5.625)">
      <path id="Path_14" data-name="Path 14" d="M4.688,5.625H25.313V7.5H4.688Z"/>
      <path id="Path_15" data-name="Path 15" d="M4.688,14.063H25.313v1.875H4.688Z" transform="translate(0 -0.375)"/>
      <path id="Path_16" data-name="Path 16" d="M4.688,22.5H25.313v1.875H4.688Z" transform="translate(0 -0.75)"/>
    </g>
  </svg>
 
</div>
)