import React from 'react'
import s from './style.module.scss'
import cn from 'classnames'
import sysop from '../../assets/img/sysops.png'

const Sysop= () => {
    return (
        <section className={s.sysop}>
            <div className={cn(s.sysop__container, s.container)}>
                <div className={s.sysop__logo}>
                    <img src={sysop} alt="sysop.logo"/>
                </div>
                <div className={s.sysop__description}>
                    <p>I use CloudShow on a TV in my ice cream shop to show what flavors we’re currently
                        scooping through a Google spreadsheet. </p>
                    <p>I’ve worked up a system to turn each flavor on and off using an Android phone by
                        scanning an NFC tag on the back of each specific flavor title card that sits in the
                        ice cream display that then triggers the Tasker app to update the background color
                        of the cell associated with that flavor using Google Sheets APIs and on/off state
                        tracking and some limited error handling through Tasker itself. </p>
                    <p>I also run a Google Slideshow overlaid on the spreadsheet using the
                        picture-in-picture function to cycle in-store ads.</p>
                </div>
                <div className={s.sysop__rate}>
                    <span className={s.sysop__review}>Brandon H</span>
                    <div className={s.ico__star}></div>
                    <div className={s.ico__star}></div>
                    <div className={s.ico__star}></div>
                    <div className={s.ico__star}></div>
                    <div className={s.ico__star}></div>
                </div>
                <div className={s.bg_image}></div>
            </div>
        </section>
    )
}

export default Sysop;

{/*    <section className={sysop}>*/}
{/*        <div className={sysop__container container}>*/}
{/*            <div className={sysop__logo}>*/}
{/*                <img src="/img/sysops.png" alt="sysop.logo"/>*/}
{/*            </div>*/}
{/*            <div className={sysop__description}>*/}
{/*                <p>I use CloudShow on a TV in my ice cream shop to show what flavors we’re currently*/}
{/*                    scooping through a Google spreadsheet. </p>*/}
{/*                <p>I’ve worked up a system to turn each flavor on and off using an Android phone by*/}
{/*                    scanning an NFC tag on the back of each specific flavor title card that sits in the*/}
{/*                    ice cream display that then triggers the Tasker app to update the background color*/}
{/*                    of the cell associated with that flavor using Google Sheets APIs and on/off state*/}
{/*                    tracking and some limited error handling through Tasker itself. </p>*/}
{/*                <p>I also run a Google Slideshow overlaid on the spreadsheet using the*/}
{/*                    picture-in-picture function to cycle in-store ads.</p>*/}
{/*            </div>*/}
{/*            <div className={sysop__rate}>*/}
{/*                <span className="{sysop__review">Brandon H</span>*/}
{/*                <div className={ico__star}></div>*/}
{/*                <div className={ico__star}></div>*/}
{/*                <div className={ico__star}></div>*/}
{/*                <div className={ico__star}></div>*/}
{/*                <div className={ico__star}></div>*/}
{/*            </div>*/}
{/*            <div className={bg_image}></div>*/}
{/*        </div>*/}
{/*    </section>*/}