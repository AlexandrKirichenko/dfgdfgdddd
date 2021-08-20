import React from 'react'
import s from './style.module.scss'
import cn from 'classnames'

const Customers = () => {
    return (
        <section className={s.customers} id="customers">
            <div className={cn(s.customers__container, s.container)}>
                <div className={cn(s.customers__logo, s.insta)}></div>
                <div className={cn(s.customers__logo, s.twitter)}></div>
                <div className={cn(s.customers__logo, s.cnn)}></div>
                <div className={cn(s.customers__logo, s.facebook)}></div>
            </div>
        </section>
    )
}

export default Customers;


