import React from 'react'
import Button from '../../layouts/Button'
import Customers from '../Customers'
import s from './style.module.scss'
import cn from 'classnames'
import FeatureItem from '../../layouts/FeatureItem'
import SectionHeader from '../../layouts/SectionHeader'

const Features = () => {
    return (
        <section className={s.features} id="features">
            <div className={cn(s.features_container, s.container)}>
                <SectionHeader headerText={'CloudShow Features'} description={'Discover our unique features and learn more about them.'}/>
                <div className={s.layout__3_column}>
                    <FeatureItem classNames={'ico_flex'} headerText={'Flexible & Easy to Setup'}>Use CloudShow to power a menu board at your restaurant,
                        a promo screen in reception, analytics dashboard for production, or anything else you can think of.</FeatureItem>
                    <FeatureItem classNames={'ico_apps'} headerText={'60+ Apps and Counting'}>Choose from over 60 apps to get started in no time. Pick from image slideshows, video
                        streaming, social apps, and much more!</FeatureItem>
                    <FeatureItem classNames={'ico_schedul'} headerText={'Scheduling'}>Use detailed schedules to show different content at different times of the day, or
                        different days of the week.</FeatureItem>
                    <FeatureItem classNames={'ico_templates'} headerText={'Templates'}>Use templates to simplify your device management. Create a template and use it on
                        multiple devices with one-click.</FeatureItem>
                    <FeatureItem classNames={'ico_ico_widgets'} headerText={'Widgets'}>Extend your sign's layout with widgets. Widgets can overlay extra information on your
                        sign, like the time, date, weather, and more!</FeatureItem>
                    <FeatureItem classNames={'ico_realtime'} headerText={'Realtime Sign Updates'}>Use CloudShow to power a menu board at your restaurant,
                        a promo screen in reception, analytics dashboard for production, or anything else you can think of.</FeatureItem>
                </div>
                <div className={s.features__link}><a href="#">View all features</a></div>
            </div>
        </section>
    )
}

export default Features;

