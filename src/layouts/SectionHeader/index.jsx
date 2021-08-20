import React from 'react'
import s from './style.module.scss'

const SectionHeader= ({headerText,description}) => {
    
    return (
        <div className={s.section__header}>
            <h2>{headerText}</h2>
            <p className={s.section__description}>{description}</p>
        </div>
    )
};

export default SectionHeader;