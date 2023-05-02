import React from "react";
import styles from './styles.module.css'

export const Menu = ({views, currentView, handleClick}) => {

    return (
        <ul className={styles.menu}>
            {views.map(view => 
                <li key={view} onClick={() => handleClick(view)}>
                    <span className={currentView === view ? styles.selected : styles.notSelected}>
                        {view}
                    </span>
                </li>  
            )}
        </ul>
    )
}