import React from 'react'
import Customers from '../Customers'
import s from './style.module.scss'
import cn from 'classnames'

const Features = () => {
    return (
        <section className={s.features}>
            <div className={cn(s.features_container, s.container)}>
                <div className={s.section__header}>
                    <h2>CloudShow Features</h2>
                    <div className={s.section__description}>Discover our unique features and learn more about them.</div>
                </div>
                <div className={s.layout__3_column}>
                    <div className={s.features__block}>
                        <div className={s.block__content_wrap}>
                            <div className={s.features__header}>
                                <div className={cn(s.icon, s.ico_flex)}></div>
                                <h4 className={s.block__header}>Flexible & Easy to Setup</h4>
                            </div>
                            <div className={s.feature__description}>
                                Use CloudShow to power a menu board at your restaurant, a promo screen in reception, an
                                analytics
                                dashboard for production, or anything else you can think of.
                            </div>
                        </div>
                    </div>
                    <div className={s.features__block}>
                        <div className={s.block__content_wrap}>
                            <div className={s.features__header}>
                                <div className={cn(s.icon, s.ico_apps)}></div>
                                <h4 className={s.block__header}>60+ Apps and Counting</h4>
                            </div>
                            <div className={s.feature__description}>
                                Choose from over 60 apps to get started in no time. Pick from image slideshows, video
                                streaming, social apps, and much more!
                            </div>
                        </div>
                    </div>
                    <div className={s.features__block}>
                        <div className={s.block__content_wrap}>
                            <div className={s.features__header}>
                                <div className={cn(s.icon, s.ico_schedul)}></div>
                                <h4 className={s.block__header}>Scheduling</h4>
                            </div>
                            <div className={s.feature__description}>
                                Use detailed schedules to show different content at different times of the day, or
                                different days of the week.
                            </div>
                        </div>
                    </div>
                    <div className={s.features__block}>
                        <div className={s.block__content_wrap}>
                            <div className={s.features__header}>
                                <div className={cn(s.icon, s.ico_templates)}></div>
                                <h4 className={s.block__header}>Templates</h4>
                            </div>
                            <div className={s.feature__description}>
                                Use templates to simplify your device management. Create a template and use it on
                                multiple devices with one-click.
                            </div>
                        </div>
                    </div>
                    <div className={s.features__block}>
                        <div className={s.block__content_wrap}>
                            <div className={s.features__header}>
                                <div className={cn(s.icon, s.ico_widgets)}></div>
                                <h4 className={s.block__header}>Widgets</h4>
                            </div>
                            <div className={s.feature__description}>
                                Extend your sign's layout with widgets. Widgets can overlay extra information on your
                                sign, like the time, date, weather, and more!
                            </div>
                        </div>
                    </div>
                    <div className={s.features__block}>
                        <div className={s.block__content_wrap}>
                            <div className={s.features__header}>
                                <div className={cn(s.icon, s.ico_realtime)}></div>
                                <h4 className={s.block__header}>Realtime Sign Updates</h4>
                            </div>
                            <div className={s.feature__description}>
                                Update your device's configuration and your digital sign is updated automatically.
                                There's nothing to update or install each time, it works like magic!
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.features__link}><a href="#">View all features</a></div>
            </div>
        </section>
    )
}

export default Features;

