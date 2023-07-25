import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';


import Search from '../../components/search';
import GameService from '../../api/services/gameService';

import './index.css';


import { LinkService } from '../../services/link.service';
import { toast } from 'react-toastify';
import contactRobot from './img/contact-us-image.png'

const accordionHeader = (name) => {
    return (
        <div className="accordion__section-title">{name}
            <svg className="accordion__section-arrow" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6665 6.66667L20.9031 15.6237C21.1308 15.8229 21.1308 16.1771 20.9031 16.3763L10.6665 25.3333" stroke="#DE4C5E" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </div>
    )
}

function  Contacts() {
   
    
    const GAME_NAME ="LOMS Studio - Roman Conquest: Rise to Power"
    document.title = GAME_NAME
    return (
        <div className="contactsPage">
            <div className="container contactsPage__container">
            <section className="contact-us">
        <div className="container">
            <div className="contact-us__row">
                <div className="contact-us__info">
                    <h2 className="contact-us__title">Contact us</h2>
                    <p className="contact-us__text">Do you have any questions for us, that's great, we'll answer them
                    </p>
                    <div className="contact-us__buttons">
                        <a className="button primary-button" href="#">General questions</a>
                        <a className="button secondary-button" href="#">Partnership Questions</a>
                    </div>
                </div>

                <div className="contact-us__image">
                    <img src={contactRobot} alt="Robot"/>
                </div>
            </div>
        </div>
    </section>

    <section className="main">
        <div className="container">
            <div className="main__row">
                <div className="form main__form">
                    <h3 className="title form__form-title">Ask a Question</h3>
                    <form className="form__body" action="">
                        <input className="form__input" type="text" name="" id="" placeholder="Your name"/>
                        <input className="form__input" type="text" name="" id="" placeholder="Email"/>
                        <textarea className="form__input-text-area" name="" id="" cols="30" rows="10" placeholder="Text"></textarea>

                        <div className="form__radio-inputs">
                            <div className="form__radio-item">
                                <input className="form__radio-input" id="catrgory1" checked type="radio" name="catrgory"
                                value="General questions"/>
                                <label className="form__label" htmlFor="catrgory1">General questions</label>
                            </div>
                            
                            <div className="form__radio-item">
                                <input className="form__radio-input" id="catrgory2" type="radio" name="catrgory"
                                value="Partnership Questions"/>
                                <label className="form__label" htmlFor="catrgory2">Partnership Questions</label>
                            </div>
                        </div>

                        <button className="button submit-button main__form-submit-button" type="submit">Send</button>
                    </form>
                    <p className="form__agree">You consent to the processing of your data when submitting a request.</p>
                </div>

                <div className="main-info">
                    <div className="main-info__contacts">
                        <h3 className="title main-info__contacts-title">Contacts</h3>

                        <div className="main-info__email">
                            <div className="main-info__email-title">Email</div>
                            <div className="main-info__email-text">support@loms-studio.com</div>
                        </div>

                        <div className="main-info__faq">
                            <h3 className="title main-info__faq-title">FAQ</h3>
                            <p className="main-info__faq-text">
                                If the answer to the question is not found, write to us 
                                <span className="accent-text"> support@loms-studio.com</span>
                            </p>
                            
                        </div>
                    </div>
                    <Accordion className="accordion" id="my-accordion">
                        <AccordionItem  header={accordionHeader("What to do if the game crashes?")} className="accordion__section">
                            <div className="accordion__section-text">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, commodi, voluptas tempore ab tempora quis eos quidem impedit illo aspernatur itaque quas nam id facere quae! Praesentium mollitia possimus at.
                                </div>
                        </AccordionItem>

                        <AccordionItem  header={accordionHeader("What to do if the game crashes?")} className="accordion__section">
                        <div className="accordion__section-text">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, commodi, voluptas tempore ab tempora quis eos quidem impedit illo aspernatur itaque quas nam id facere quae! Praesentium mollitia possimus at.
                                </div>
                        </AccordionItem>

                        <AccordionItem header={accordionHeader("What to do if the game crashes?")} className="accordion__section" > 
                                <div className="accordion__section-text">
                                If windows 10 does not launch games, then the necessary software may not be installed for them. <br />  DirectX - already installed in the system, updated via Windows Update; .NET Framework - already installed, but not always updated correctly; Visual C++ - download required.
                                </div>
                        </AccordionItem>

                        <AccordionItem header={accordionHeader("What to do if the game crashes?")} className="accordion__section" > 
                                <div className="accordion__section-text">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, commodi, voluptas tempore ab tempora quis eos quidem impedit illo aspernatur itaque quas nam id facere quae! Praesentium mollitia possimus at.
                                </div>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>

    </section>
            </div>
        </div>
    );
}

export default Contacts;
