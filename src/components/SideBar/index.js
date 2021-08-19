import React from 'react'
import s from './style.module.scss'
import cn from 'classnames'


const SideBar = () => {
 
    return (
        <aside className={s.sidebar} id="sidebar">
            <nav className={cn(s.sidebar__container, s.container)}>
                <ul className={s.menu}>
                    <li className={s.menu__item}>
                        <a href="#" className={s.menu__link}>
                        <div className={cn(s.icon, s.ico_binary)}></div>
                        Binary Fortress</a>
                        <div className={cn(s.menu__arrow, s.ico_arrow)}></div>
                    </li>
                    <li className={s.menu__item}><a href="#" className={s.menu__link}>
                        <div className={cn(s.icon, s.ico_display)}></div>
                        DisplayFusion</a></li>
                    <li className={s.menu__item}><a href="#" className={s.menu__link}>
                        <div className={cn(s.icon, s.ico_check)}></div>
                        CheckCentral</a></li>
                    <li className={s.menu__item}><a href="#" className={s.menu__link}>
                        <div className={cn(s.icon, s.ico_clip)}></div>
                        ClipboardFusion</a></li>
                    <li className={s.menu__item}><a href="#" className={s.menu__link}>
                        <div className={cn(s.icon, s.ico_seek)}></div>
                        FileSeek</a></li>
                    <li className={s.menu__item}><a href="#" className={s.menu__link}>
                        <div className={cn(s.icon, s.ico_bot)}></div>
                        VoiceBot</a></li>
                    <li className={s.menu__item}><a href="#" className={s.menu__link}>
                        <div className={cn(s.icon, s.ico_wall)}></div>
                        WallpaperFusion</a></li>
                </ul>
            </nav>
        </aside>
    )
}

export default SideBar