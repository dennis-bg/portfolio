import React from "react";
import styles from './styles.module.css';

export const ContactForm = () => (
    <form action="POST" data-netlify="true" className={styles.form}>
        <label htmlFor="name">Name</label><br/>
        <input type="text" id="name" name="name"/><br/>
        <label htmlFor="email">E-mail</label><br/>
        <input type="text" id="email" name="email" /><br/>
        <label htmlFor="message">Message</label><br/>
        <textarea name="message" id="message" cols="30" rows="10"></textarea><br/>
        <div data-netlify-recaptcha="true"></div>
        <input type="submit" value="Submit" className={styles.submit}/>
    </form> 
)