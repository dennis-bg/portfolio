import React, { useState, useEffect } from "react";
import styles from './styles.module.css';

export const Body = ({view}) => {

    const [backGround, setBackground] = useState('');

    useEffect(() => {
        switch(view){
            case 'Experience':
                setBackground(styles.experience);
                break;
            case 'Skills':
                setBackground(styles.skills);
                break;
            case 'Projects':
                setBackground(styles.projects);
                break;
            case 'Contact':
                setBackground(styles.contact);
                break;
            default:
                break;
        }
    }, [view])

    return (
        <div className={backGround}>{view}</div>
    )
}