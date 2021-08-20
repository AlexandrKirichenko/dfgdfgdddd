import React from 'react'
import s from './style.module.scss'
import cn from 'classnames'
import Button from '../../layouts/Button'

const Promo = () => {
    return (
        <section className={s.promo} id="promo">
            <div className={cn(s.promo__container, s.container)}>
                <div className={s.promo__content}>
                    <h1 className={s.promo__content__header}>Digital Signage Made Easy</h1>
                    <p className={s.content__text}>Turn any screen into a digital sign in minutes with
                        CloudShow. Trusted by businesses worldwide, see how
                        CloudShow can help your business today.</p>
                    <div className={s.promo__buttons}>
                        <Button classNames={'button button_colored prom'} children={'Try it free'}/>
                        <div className={cn(s.icon, s.ico_checked)}></div>
                        <p>60-day Enterprise free trial</p>
                    </div>
                </div>
                <div className={s.promo__image}></div>
            </div>
        </section>
    )
}

export default Promo;