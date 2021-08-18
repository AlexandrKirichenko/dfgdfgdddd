import cn from 'classnames'
import React, {useState} from 'react'
import s from './style.module.scss'
import logo from '../../assets/img/logo-footer.svg'

const Footer = () => {
    return (
        <footer className={s.footer}>}<div className={cn(s.footer__container, s.container)}>
            <div className={cn(s.footer__navigation, s.layout_4_column)}>
                <a href="#" className={s.logo}>
                    <img src={logo} alt="Logo"/>
                </a>
                <div className={cn(s.footer__navigation, s.column_one)}>
                    <ul className={s.footer__navigation_links}>
                        <li><a href="" className={cn(s.nav__link, s.nav__link_title)}>Product</a></li>
                        <li><a href="" className={s.nav__link}>Features</a></li>
                        <li><a href="" className={s.nav__link}>How it Works</a></li>
                        <li><a href="" className={s.nav__link}>Devices & Downloads</a></li>
                        <li><a href="" className={s.nav__link}>Apps & Content</a></li>
                        <li><a href="" className={s.nav__link}>Pricing</a></li>
                    </ul>
                </div>
                <div className={cn(s.footer__navigation, s.column_two)}>
                    <ul className={s.footer__navigation_links}>
                        <li><a href="" className={cn(s.nav__link, s.nav__link_title)}>Others</a></li>
                        <li><a href="" className={s.nav__link}>Support</a></li>
                        <li><a href="" className={s.nav__link}>FAQ</a></li>
                        <li><a href="" className={s.nav__link}>Status</a></li>
                        <li><a href="" className={s.nav__link}>Privacy</a></li>
                        <li><a href="" className={s.nav__link}>Terms of Service</a></li>
                    </ul>
                </div>
                <div className={cn(s.footer__navigation, s.column_three)}>
                    <ul className={s.footer__navigation_links}>
                        <li className={s.nav__list}><a href="" className={cn(s.nav__link, s.nav__link_title)}>Social
                            Media</a></li>
                        <li className={s.nav__list}><a href="" className={s.nav__link}>
                            <div className={cn(s.icon, s.ico_fb)}></div>
                            Facebook</a></li>
                        <li className={s.nav__list}><a href="" className={s.nav__link}>
                            <div className={cn(s.icon, s.ico_linkedin)}></div>
                            Linkedin</a></li>
                        <li className={s.nav__list}><a href="" className={s.nav__link}>
                            <div className={cn(s.icon, s.ico_insta)}></div>
                            Instagram</a></li>
                        <li className={s.nav__list}><a href="" className={s.nav__link}>
                            <div className={cn(s.icon, s.ico_twitter)}></div>
                            Twitter</a></li>
                    </ul>
                </div>
            </div>
            <div className={cn(s.footer, s.header__buttons)}>
                <button className={cn(s.button, s.button_bordered)}>Login</button>
                <button className={cn(s.button, s.button_colored)}>Free Trial</button>
            </div>
        </div>
            <div className={cn(s.container, s.copyrighting)}>Copyright © 2007-2020 Binary Fortress Software</div>
        </footer>
    )
    
}

export default Footer;







