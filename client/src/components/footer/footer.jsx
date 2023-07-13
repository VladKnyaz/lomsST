import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import persfooterImg from '../../assets/images/persfooter.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col d-flex flex-column justify-content-end">
                        <h2 className="footer__title">We build universes</h2>
                        <div className="footer__text">
                            LOMS Studio is an independent video game developer, publisher, and
                            technology provider based in Ukraine. LOMS Studio pushes the boundaries
                            of the possible to make the impossible a reality.
                        </div>
                        <nav className="footer__nav">
                            <ul className="footer__menu">
                                <li className="footer__menu__item">
                                    <Link to="/" className="menu__link">
                                        News
                                    </Link>
                                </li>
                                <li className="footer__menu__item">
                                    <Link to="/" className="menu__link">
                                        Games
                                    </Link>
                                </li>
                                <li className="footer__menu__item">
                                    <Link to="/" className="menu__link">
                                        Partners
                                    </Link>
                                </li>
                                <li className="footer__menu__item">
                                    <Link to="/" className="menu__link">
                                        Gallery
                                    </Link>
                                </li>
                                <li className="footer__menu__item">
                                    <Link to="/" className="menu__link">
                                        Contacts
                                    </Link>
                                </li>
                                <li className="footer__menu__item">
                                    <Link to="/privacy-policy" className="menu__link">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="footer__rightsReserved">
                            {`© 2022 - ${new Date().getFullYear()} All rights reserved by LOMS STUDIO.`}
                        </div>
                    </div>
                    <div className="col footer__img">
                        <img src={persfooterImg} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
