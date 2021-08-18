import React from 'react'
import s from './style.module.scss'
import cn from 'classnames'
import dashboard from '../../assets/img/images/dashboard.png';
import calendars from '../../assets/img/images/calendar.png';
import weather from '../../assets/img/images/weather.png';
import promotional from '../../assets/img/images/promotional.png';

const Signage = () => {
    return (
        <section className={s.signage}>
            <div className={cn(s.signage__container, s.container)}>
                <div className={s.section__header}>
                    <h2>Digital Signage that grow your business</h2>
                    <p className={s.section__description}>Discover our unique features and learn more about
                        them.</p>
                </div>
                <div className={s.layout__2_column}>
                    <div className={s.signage__block}>
                        <div className={s.block_wrap}>
                            <img className={s.signage__item} src={dashboard}
                                 alt="dashboards"/>
                            <p className={s.signage__text}>Dashboards</p>
                        </div>
                    </div>
                    <div className={s.signage__block}>
                        <div className={s.block_wrap}>
                            <img className={s.signage__item} src={calendars} alt="calendars"/>
                            <p className={s.signage__text}>Calendars</p>
                        </div>
                    </div>
                    <div className={s.signage__block}>
                        <div className={s.block_wrap}>
                            <img className={s.signage__item} src={weather} alt="weather"/>
                            <p className={s.signage__text}>Weather</p>
                        </div>
                    </div>
                    <div className={s.signage__block}>
                        <div className={s.block_wrap}>
                            <img className={s.signage__item} src={promotional} alt="weather"/>
                            <p className={s.signage__text}>Promotional</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signage;