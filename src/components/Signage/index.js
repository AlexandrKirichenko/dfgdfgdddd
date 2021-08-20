import cn from 'classnames'
import React from 'react'
import calendars from '../../assets/img/images/calendar.png'
import dashboard from '../../assets/img/images/dashboard.png'
import promotional from '../../assets/img/images/promotional.png'
import weather from '../../assets/img/images/weather.png'
import s from './style.module.scss'
import SignageItem from '../../layouts/SignageItem'
import SectionHeader from '../../layouts/SectionHeader'

const Signage = () => {
    return (
        <section className={s.signage} id="signage">
            <div className={cn(s.signage__container, s.container)}>
                <SectionHeader headerText={'Digital Signage that grow your business'} description={'Discover our unique features and learn more about them.'} />
                <div className={s.layout__2_column}>
                    <SignageItem description={'Dashboards'} src={dashboard}/>
                    <SignageItem description={'Calendars'} src={calendars}/>
                    <SignageItem description={'Promotional'} src={promotional}/>
                    <SignageItem description={'Weather'} src={weather}/>
                </div>
            </div>
        </section>
    )
}

export default Signage;