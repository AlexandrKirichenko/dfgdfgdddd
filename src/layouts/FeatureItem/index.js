import React from 'react'
import s from './style.module.scss'

const FeatureItem= ({classNames,headerText, children }) => {
    
    const classes = String(classNames)
        .split(' ')
        .map((classItem) => s[classItem])
        .join(' ');
    
        return (
            <div className={s.features__block}>
                <div className={s.block__content_wrap}>
                    <div className={s.features__header}>
                        <div className={classes}></div>
                        <h4 className={s.block__header}>{headerText}</h4>
                    </div>
                    <div className={s.feature__description}>
                        {children}
                    </div>
                </div>
            </div>
    
        )
};

export default FeatureItem;