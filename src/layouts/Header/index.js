import cn from 'classnames'
import React, {useState} from 'react'
import Burger from '../Burger'
import s from './style.module.scss'

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
                    {/*<ul className={`${s.nav} ${itemActive ? s.active : ''}`}>*/}
                    <ul className={s.nav}>
                        <li className={s.nav__item}>
                            <a data-goto="#sysop" href="#" className={cn(s.nav__link, {[s.active] : itemActive})}>Features</a>
                        </li>
                        <li className={s.nav__item}>
                            <a data-goto="" href="#sysop" className={s.nav__link}>How it Works</a>
                        </li>
                        <li className={s.nav__item}>
                            <a data-goto="" href="#" className={s.nav__link}>Devices & Downloads</a>
                        </li>
                        <li className={s.nav__item}>
                            <a data-goto="" href="#" className={s.nav__link}>Apps & Content</a>
                        </li>
                        <li className={s.nav__item}>
                            <a data-goto="" href="#" className={s.nav__link}>Pricing</a>
                        </li>
                    </ul>
                </nav>
                <div className={s.header__buttons}>
                    <button className={cn(s.button, s.button_bordered)}>Login</button>
                    <button className={cn(s.button, s.button_colored)}>Free Trial</button>
                </div>
            </div>
        </header>
    )
    
}

export default Header