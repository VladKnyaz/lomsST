import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logoico from '../../assets/icons/logo.svg';
import langico from '../../assets/icons/lang.svg';
import arrowico from '../../assets/icons/arrow.svg';

import './index.css';
import SvgSelector from '../svgSelector';

function Header({ isActiveBurger, setIsActiveBurger }) {
    function switchBurgerMenu() {
        const body = document.querySelector('body');

        setIsActiveBurger((prev) => !prev);
    }

    return (
        <header className="header">
            <div className="container header__container">
                <Link to="/">
                    <img src={logoico} alt="logo" />
                </Link>
                <nav className="header__nav">
                    <ul className="header__menu">
                        <li className="menu__item">
                            <Link to="/" className="menu__link">
                                News
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/" className="menu__link">
                                Games
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/" className="menu__link">
                                Partner
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/" className="menu__link">
                                Gallery
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/" className="menu__link">
                                Contacts
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/privacy-policy" className="menu__link">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                    <button
                        onClick={switchBurgerMenu}
                        className={`header__button--mobile ${isActiveBurger ? 'active' : ''}`}
                    >
                        <span></span>
                    </button>
                    <ul className={`header__menu--mobile ${isActiveBurger ? 'active' : ''}`}>
                        <Link to="/" className="menu__link--mobile menu__item--mobile">
                            News
                        </Link>
                        <Link to="/" className="menu__link--mobile menu__item--mobile">
                            Games
                        </Link>
                        <Link to="/" className="menu__link--mobile menu__item--mobile">
                            Partner
                        </Link>
                        <Link to="/" className="menu__link--mobile menu__item--mobile">
                            Gallery
                        </Link>
                        <Link to="/" className="menu__link--mobile menu__item--mobile">
                            Contacts
                        </Link>
                        <Link
                            to="/privacy-policy"
                            className="menu__link--mobile menu__item--mobile"
                        >
                            Privacy Policy
                        </Link>
                    </ul>
                </nav>
                <div className="header__buttons">
                    {/* <button className="search__button header__button">
                        <SvgSelector name="search" />
                    </button>
                    <button className="lang__button header__button">
                        <img src={langico} alt="" />
                        <span>En</span>
                    </button> */}
                    <a href="/" className="start__button button--primary button">
                        Start with us <img src={arrowico} alt="" />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
