import React from "react";
import { Container } from "../common/container";
import { MyTitle } from "../common/title";
import { LinkButton } from "../common/linkButton";
import { ContactForm } from "./contactForm";
import { SmallGithubSVG } from "../../svgs/gitHubSVG";
import { SmallLinkInSVG } from "../../svgs/linkedInSVG";
import { PhoneSVG } from "../../svgs/PhonseSVG";
import { MailSVG } from '../../svgs/MailSVG';
import styles from './styles.module.css';

export const Contact = ({ contactInfo }) => (
    <div id="contact">
        <Container>
            <MyTitle title={"Contact"}/>
            <div className={styles.contact}>
                <div className={styles.left}>
                    <ContactForm/>
                </div>
                <div className={styles.right}>
                        <div className={styles.links}>
                            <div>
                                <LinkButton
                                    link={contactInfo.phone}
                                    text={"Call me"}
                                    svg={PhoneSVG}
                                />
                            </div>
                            <div>
                                <LinkButton
                                    link={contactInfo.email}
                                    text={"Email me"}
                                    svg={MailSVG}
                                />
                            </div>
                            <div>
                                <LinkButton
                                    link={contactInfo.linkedIn}
                                    text={"Connect with me"}
                                    svg={SmallLinkInSVG}
                                />
                            </div>
                            <div>
                                <LinkButton
                                    link={contactInfo.gitHub}
                                    text={"Visit my Github"}
                                    svg={SmallGithubSVG}
                                />
                            </div>
                        </div>
                </div>
            </div>
        </Container>
    </div>
)