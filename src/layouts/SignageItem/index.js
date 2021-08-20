import React from 'react'
import dashboard from '../../assets/img/images/dashboard.png'
import s from './style.module.scss'

const SignageItem= ({description,src}) => {
    
    return (
        <div className={s.signage__block}>
            <div className={s.block_wrap}>
                <img className={s.signage__item} src={src}
                     alt={description}/>
                <p className={s.signage__text}>{description}</p>
            </div>
        </div>
    )
};

export default SignageItem;