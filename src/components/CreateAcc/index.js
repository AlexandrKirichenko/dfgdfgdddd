import React from 'react'
import s from './style.module.scss'
import cn from 'classnames'

const CreateAcc = () => {
    return (
        <section className={s.create__account} id="create__account">
            <div className={s.container}>
                <div className={s.create__account_block}>
                    <div className={cn(s.icon, s.ico_logo)}></div>
                    <h2 className={s.create__account_header}>Try CloudShow today!</h2>
                    <p className={s.create__account_description}>Try CloudShow today, it's completely free for
                        one device! <br/>
                        Need more devices?</p>
                    <div className={s.create__account_buttons}>
                        <button className={cn(s.button, s.button_long_colored)}>View Demo</button>
                        <button className={cn(s.button, s.button_long_light)}>Create Free Account</button>
                        <div className={s.trial__container}>
                            <div className={cn(s.icon, s.ico_checked)}></div>
                            <p>60-day Enterprise free trial</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreateAcc;