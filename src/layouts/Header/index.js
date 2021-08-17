import React from "react";
import s from './style.module.scss';
import cn from 'classnames';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={cn(s.header__container, s.container)}>
                <div className={s.header__logoline}>
            <span className={s.hamburger}>
                <span className={s.hamburger__line}></span>
            </span>
                </div>
                <a href="#" className={s.logo}>
                    <div className={s.logo__icon}></div>
                </a>
                <nav className={s.header__nav}>
                    <ul className={s.nav}>
                        <li className={s.nav__item}>
                            <a href="#" className={s.nav__link}>Features</a>
                        </li>
                        <li className={s.nav__item}>
                            <a href="#" className={s.nav__link}>How it Works</a>
                        </li>
                        <li className={s.nav__item}>
                            <a href="#" className={s.nav__link}>Devices & Downloads</a>
                        </li>
                        <li className={s.nav__item}>
                            <a href="#" className={s.nav__link}>Apps & Content</a>
                        </li>
                        <li className={s.nav__item}>
                            <a href="#" className={s.nav__link}>Pricing</a>
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