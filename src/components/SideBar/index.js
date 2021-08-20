import React from 'react'
import s from './style.module.scss'
import cn from 'classnames'

const dataSidebar = [
    {
        id: 1,
        linkUrl: 'https://link1',
        linkTitle: 'Binary Fortress',
        secondary: <div className={cn(s.menu__arrow, s.ico_arrow)}></div>,
        icon: s.ico_binary
    },
    {
        id: 2,
        linkUrl: '#',
        linkTitle: 'DisplayFusion',
        secondary: null,
        icon: s.ico_display
    },
    {
        id: 3,
        linkUrl: '#',
        linkTitle: 'CheckCentral',
        secondary: null,
        icon: s.ico_check
    },
    {
        id: 4,
        linkUrl: '#',
        linkTitle: 'ClipboardFusion',
        secondary: null,
        icon: s.ico_clip
    },
    {
        id: 5,
        linkUrl: '#',
        linkTitle: 'FileSeek',
        secondary: null,
        icon: s.ico_seek
    },
    {
        id: 6,
        linkUrl: '#',
        linkTitle: 'VoiceBot',
        secondary: null,
        icon: s.ico_bot
    },
    {
        id: 7,
        linkUrl: '#',
        linkTitle: 'WallpaperFusion',
        secondary: null,
        icon: s.ico_wall
    },

]

const Item = ({item}) => {
    return (
        <li className={s.menu__item}>
            <a href="{item.linkUrl}" className={s.menu__link}>
                <div className={cn(s.icon, item.icon)}></div>
                {item.linkTitle}</a>
            {item.secondary}
        </li>
    )
}

const SideBar = () => {
    
    return (
        <aside className={s.sidebar} id="sidebar">
            <nav className={cn(s.sidebar__container, s.container)}>
                <ul className={s.menu}>
                    {dataSidebar.map(item => <Item item={item} key={item.id}/>)}
                </ul>
            </nav>
        </aside>
    )
}

export default SideBar