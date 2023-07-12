import React from 'react';

import pers3Img from '../../../../assets/images/pers3.svg';

import './index.css';

function Subscribe() {
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
                        <form className="subscribe__section__form">
                            <input
                                type="text"
                                className="subscribe__section__input"
                                placeholder="Your name"
                            />
                            <input
                                type="email"
                                className="subscribe__section__input"
                                placeholder="Email"
                            />
                            <button className="button subscribe__section__button">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Subscribe;
