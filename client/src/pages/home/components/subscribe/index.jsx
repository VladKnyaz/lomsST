import React, { useRef } from 'react';

import pers3Img from '../../../../assets/images/pers3.svg';

import './index.css';
import { toast } from 'react-toastify';
import { MailService } from '../../../../api/services/mailService';

function Subscribe() {
    const form = useRef(); 

    const subscribeHandler = (e) => {
        e.preventDefault();
        if (!form.current.user_name.value || !form.current.user_email.value) {
            toast.warn('Fields should not be empty');
            return;
        }

        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(form.current.user_email.value) ) {
            toast.warn('Email incorrect');
            return;
        } 

        MailService.subscribe(form.current.user_name.value, form.current.user_email.value);
    }    

    return (
        <section className="subscribe__section">
            <div className="container">
                <div className="row">
                    <div className="col subscribe__section__img">
                        <img src={pers3Img} alt="" />
                    </div>
                    <div className="col subscribe__img">
                        <h2 className="subscribe__section__title">Don't Lose Us</h2>
                        <div className="subscribe__section__text">
                            Subscribe to the newsletter and get one of the first about the release
                            of new games
                        </div>
                        <form className="subscribe__section__form" ref={form} onSubmit={subscribeHandler}>
                            <input
                                type="text"
                                className="subscribe__section__input"
                                placeholder="Your name"
                                name='user_name'
                            />
                            <input
                                type="email"
                                className="subscribe__section__input"
                                placeholder="Email"
                                name='user_email'
                            />
                            <button className="button subscribe__section__button" type='submit'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Subscribe;
