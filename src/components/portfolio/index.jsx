import React, {useState} from "react";
import { Body } from "./body";
import { Menu } from "./menu";
import styles from './styles.module.css'

const views = ['Experience', 'Skills', 'Projects', 'Contact'];

export const Portfolio = () => {

    const [view, setView] = useState(views[0])

    const menuClickHandler = (newView) => {
        setView(newView);
    }

    return (
        <div className={styles.portfolio}>
            <Menu views={views} currentView={view} handleClick={menuClickHandler}/>
            <Body view={view}/>
        </div>
    )
}