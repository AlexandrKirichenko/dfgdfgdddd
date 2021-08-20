import './App.scss';
import cn from 'classnames'
import SideBar from "./components/SideBar";
import Header from "./layouts/Header";
import Promo from "./components/Promo";
import Customers from "./components/Customers";
import Features from "./components/Features";
import Sysop from "./components/Sysop";
import Signage from "./components/Signage";
import CreateAcc from "./components/CreateAcc";
import Footer from './layouts/Footer'
import React from "react";
import s from './layouts/Header/style.module.scss'

function App() {
  return (
            <>
                <SideBar/>
                <Header/>
                <Promo/>
                <Customers/>
                <Features />
                <Sysop />
                <Signage />
                <CreateAcc/>
                <Footer/>
                
                {/*Все, что нужно перенести в блоки перенести(при клики на элементы меню, закрывать меню и хэшить на якоря)*/}
            {/*    onClick={*/}
            {/*    closeMenu()*/}
            {/*    history.push(path)*/}
            {/*}*/}
                {/*<section className={features}>*/}
                {/*        <div className={features_container container}>*/}
                {/*            <div className={section__header}>*/}
                {/*                <h2>CloudShow Features</h2>*/}
                {/*                <div className={section__description">Discover our unique features and learn more about*/}
                {/*                    them.*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className={layout-3-column}>*/}
                {/*                <div className={features__block}>*/}
                {/*                    <div className={block__content-wrap}>*/}
                {/*                        <div className={features__header}>*/}
                {/*                            <div className={icon ico_flex}></div>*/}
                {/*                            <h4>Flexible & Easy to Setup</h4>*/}
                {/*                        </div>*/}
                {/*                        <div className={feature__description}>*/}
                {/*                            Use CloudShow to power a menu board at your restaurant, a promo screen in*/}
                {/*                            reception, an analytics*/}
                {/*                            dashboard for production, or anything else you can think of.*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div className={features__block}>*/}
                {/*                    <div className={block__content-wrap}>*/}
                {/*                        <div className={features__header}>*/}
                {/*                            <div className={icon ico_apps}></div>*/}
                {/*                            <h4>60+ Apps and Counting</h4>*/}
                {/*                        </div>*/}
                {/*                        <div className={feature__description}>*/}
                {/*                            Choose from over 60 apps to get started in no time. Pick from image*/}
                {/*                            slideshows, video streaming, social apps, and much more!*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div className={features__block}>*/}
                {/*                    <div className={block__content-wrap}>*/}
                {/*                        <div className={features__header}>*/}
                {/*                            <div className={icon ico_schedul}></div>*/}
                {/*                            <h4>Scheduling</h4>*/}
                {/*                        </div>*/}
                {/*                        <div className={feature__description}>*/}
                {/*                            Use detailed schedules to show different content at different times of the*/}
                {/*                            day, or different days of the week.*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div className={features__block}>*/}
                {/*                    <div className={block__content-wrap}>*/}
                {/*                        <div className={features__header}>*/}
                {/*                            <div className={icon ico_templates}></div>*/}
                {/*                            <h4>Templates</h4>*/}
                {/*                        </div>*/}
                {/*                        <div className={feature__description}>*/}
                {/*                            Use templates to simplify your device management. Create a template and use*/}
                {/*                            it on multiple devices with one-click.*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div className={features__block}>*/}
                {/*                    <div className={block__content-wrap}>*/}
                {/*                        <div className={features__header}>*/}
                {/*                            <div className={icon ico_widgets}></div>*/}
                {/*                            <h4>Widgets</h4>*/}
                {/*                        </div>*/}
                {/*                        <div className={feature__description}>*/}
                {/*                            Extend your sign's layout with widgets. Widgets can overlay extra*/}
                {/*                            information on your sign, like the time, date, weather, and more!*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div className={features__block}>*/}
                {/*                    <div className={block__content-wrap}>*/}
                {/*                        <div className={features__header}>*/}
                {/*                            <div className={icon ico_realtime}></div>*/}
                {/*                            <h4>Realtime Sign Updates</h4>*/}
                {/*                        </div>*/}
                {/*                        <div className={feature__description}>*/}
                {/*                            Update your device's configuration and your digital sign is updated*/}
                {/*                            automatically. There's nothing to update or install each time, it works like*/}
                {/*                            magic!*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className={features__link}><a href="#">View all features</a></div>*/}
                {/*        </div>*/}
                {/*    </section>*/}
                
                
                
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
                
                
                
                {/*    <section className={signage}>*/}
                {/*        <div className={signage__container container}>*/}
                {/*            <div className={section__header}>*/}
                {/*                <h2>Digital Signage that grow your business</h2>*/}
                {/*                <p className={section__description}>Discover our unique features and learn more about*/}
                {/*                    them.</p>*/}
                {/*            </div>*/}
                {/*            <div className={layout-2-column}>*/}
                {/*                <div className={signage__block}>*/}
                {/*                    <div className={block-wrap}>*/}
                {/*                        <img className={signage__item} src="/img/images/dashboard.png"*/}
                {/*                             alt="dashboards"/>*/}
                {/*                        <p className={signage__text}>Dashboards</p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div className={signage__block}>*/}
                {/*                    <div className={block-wrap}>*/}
                {/*                        <img className={signage__item} src="/img/images/calendar.png" alt="calendars"/>*/}
                {/*                        <p className={signage__text}>Calendars</p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div className={signage__block}>*/}
                {/*                    <div className={block-wrap}>*/}
                {/*                        <img className={signage__item} src="/img/images/weather.png" alt="weather"/>*/}
                {/*                        <p className={signage__text}>Weather</p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div className={signage__block}>*/}
                {/*                    <div className={block-wrap}>*/}
                {/*                        <img className={signage__item} src="/img/images/promotional.png" alt="weather"/>*/}
                {/*                        <p className={signage__text}>Promotional</p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </section>*/}
                
                
                    {/*<section className={create-account}>*/}
                    {/*    <div className={container}>*/}
                    {/*        <div className={create-account__block}>*/}
                    {/*            <div className={icon ico logo}></div>*/}
                    {/*            <h2 className={create-account__header}>Try CloudShow today!</h2>*/}
                    {/*            <p className={create-account__description}>Try CloudShow today, it's completely free for*/}
                    {/*                one device! <br/>*/}
                    {/*                Need more devices?</p>*/}
                    {/*            <div className={create-account__buttons}>*/}
                    {/*                <button className={button button_long_colored}>View Demo</button>*/}
                    {/*                <button className={button button_long_light}>Create Free Account</button>*/}
                    {/*                <div className={trial__container}>*/}
                    {/*                    <div className={icon ico_checked}></div>*/}
                    {/*                    <p className={trial__description}>60-day Enterprise free trial</p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</section>*/}
                
                
                {/*<footer className={footer}>}<div className={footer__container container}>*/}
                {/*        <div className={footer-navigation layout-4-column}>*/}
                {/*            <a href="#" className="logo">*/}
                {/*                <img src="img/logo-footer.svg" alt="Logo"/>*/}
                {/*            </a>*/}
                {/*            <div className={footer-navigation__column one}>*/}
                {/*                <ul className={footer-navigation__links}>*/}
                {/*                    <li><a href="" className="nav-link nav-link_title">Product</a></li>*/}
                {/*                    <li><a href="" className="nav-link">Features</a></li>*/}
                {/*                    <li><a href="" className="nav-link">How it Works</a></li>*/}
                {/*                    <li><a href="" className="nav-link">Devices & Downloads</a></li>*/}
                {/*                    <li><a href="" className="nav-link">Apps & Content</a></li>*/}
                {/*                    <li><a href="" className="nav-link">Pricing</a></li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*            <div className={footer-navigation__column two}>*/}
                {/*                <ul className="footer-navigation__links">*/}
                {/*                    <li><a href="" className={nav-link nav-link_title}>Others</a></li>*/}
                {/*                    <li><a href="" className={nav-link}>Support</a></li>*/}
                {/*                    <li><a href="" className={nav-link}>FAQ</a></li>*/}
                {/*                    <li><a href="" className={nav-link}>Status</a></li>*/}
                {/*                    <li><a href="" className={nav-link}>Privacy</a></li>*/}
                {/*                    <li><a href="" className={nav-link}>Terms of Service</a></li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*            <div className={footer-navigation__column three}>*/}
                {/*                <ul className={footer-navigation__links}>*/}
                {/*                    <li className={nav-list}><a href="" className={nav-link nav-link_title}>Social*/}
                {/*                        Media</a></li>*/}
                {/*                    <li className={nav-list}><a href="" className={nav-link social}>*/}
                {/*                        <div className="icon ico_fb"></div>*/}
                {/*                        Facebook</a></li>*/}
                {/*                    <li className={nav-list}><a href="" className={nav-link social}>*/}
                {/*                        <div className="icon ico_linkedin"></div>*/}
                {/*                        Linkedin</a></li>*/}
                {/*                    <li className={nav-list}><a href="" className={nav-link social}>*/}
                {/*                        <div className="icon ico_insta"></div>*/}
                {/*                        Instagram</a></li>*/}
                {/*                    <li className={nav-list}><a href="" className={nav-link social}>*/}
                {/*                        <div className={icon ico_twitter}></div>*/}
                {/*                        Twitter</a></li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className={footer header__buttons}>*/}
                {/*            <button className={button button_bordered}>Login</button>*/}
                {/*            <button className={button button_colored}>Free Trial</button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className={container copyrighting}>Copyright © 2007-2020 Binary Fortress Software</div>*/}
                {/*</footer>*/}

            </>
  );
}

export default App;
