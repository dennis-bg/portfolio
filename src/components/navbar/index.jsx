import React from "react";
import { Link } from 'react-scroll';
import { SmallLinkInSVG } from "../../svgs/linkedInSVG";
import { SmallGithubSVG } from "../../svgs/gitHubSVG";
import { Container } from "../common/container";
import { LinkButton } from "../common/linkButton";
import { NavLinks } from "./navlinks";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { MobileMenu } from "./mobileMenu";
import styles from './styles.module.css'

export const Navbar = ({ links }) => {

  const screenWidth = useWindowWidth();

  return (
        <div className={styles.navBar}>
              
          
          <Container>

            <div className={styles.links}>
                <Link activeClass={styles.active} to="hero" smooth={true} offset={-65} duration={1000}>
                  <h5>Dennis Galinsky</h5>
                </Link>

                {screenWidth > 1200 && <NavLinks/>}

            </div>
                    
            {screenWidth > 1200 
              ? <div className={styles.links}>
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
              : <MobileMenu/>
            }
          </Container>

        
      
      </div>
    )
}