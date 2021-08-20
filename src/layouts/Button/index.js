import React from 'react';

import s from './style.module.scss';

const Button= ({classNames, children }) => {
    const classes = String(classNames)
        .split(' ')
        .map((classItem) => s[classItem])
        .join(' ');
    return (
        <button type={'button'} className={classes}>
            {children}
        </button>
    );
};

export default Button;