import cn from 'classnames'
import React, {useState} from 'react'
import Burger from '../Burger'
import s from './style.module.scss'
import Button from '../Button'



const Header = () => {
    const [itemActive,setitemActive] =useState(false);
    
    const handleClick = () => {
        setitemActive(!itemActive)
    }
    return (
        <header className={s.header}>
            <div className={cn(s.header__container, s.container)}>
                <div className={s.header__logoline}>
                     <span className={cn(s.hamburger, {[s.active] : itemActive})} onClick={handleClick}>
                        <span className={s.hamburger__line}></span>
                    </span>
                    {/*<Burger/>*/}
                </div>
                <a href="#" className={s.logo}>
                    <div className={s.logo__icon}></div>
                </a>
          
                <nav className={cn(s.header__nav, {[s.active] : itemActive})}>
                    <ul className={s.nav}>
                        <li className={s.nav__item}>
                            <a href="#promo" className={cn(s.nav__link)} onClick={handleClick}>Features</a>
                        </li>
                        <li className={s.nav__item}>
                            <a href="#sysop" className={s.nav__link} onClick={handleClick}>How it Works</a>
                        </li>
                        <li className={s.nav__item}>
                            <a href="#signage" className={s.nav__link} onClick={handleClick}>Devices & Downloads</a>
                        </li>
                        <li className={s.nav__item}>
                            <a href="#features" className={s.nav__link} onClick={handleClick}>Apps & Content</a>
                        </li>
                        <li className={s.nav__item}>
                            <a href="#create__account" className={s.nav__link} onClick={handleClick}>Pricing</a>
                        </li>
                    </ul>
                </nav>
                <div className={s.header__buttons}>
                    <Button classNames={'button button_bordered'} children={'Login'}/>
                    <Button classNames={'button button_colored'} children={'Free Trial'}/>
                </div>
            </div>
        </header>
    )
    
}

export default Header