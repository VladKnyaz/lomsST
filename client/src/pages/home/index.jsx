import React from 'react';
import Axios from 'axios';

import './index.css';

import persImg from '../../assets/images/pers.svg';
import helppersImg from '../../assets/images/helppers.svg';
import googlePlayImg from '../../assets/images/googleplay.svg';
import steamImg from '../../assets/images/steam.svg';
import appleImg from '../../assets/images/apple.svg';

import tiktokIco from '../../assets/icons/tiktok.svg';
import instIco from '../../assets/icons/instagram.svg';
import youtubeIco from '../../assets/icons/youtube.svg';

// import Gallery from './components/gallery/index';
// import News from './components/newsCarousel/index';
import Subscribe from './components/subscribe/index';
// lang set
import words from './../../services/langService';
import { Link } from 'react-router-dom';

function Home({ isActiveBurger }) {
    document.title = 'LOMS Studio - Game Developer';
    return (
        <main className='main'>
            <section className='start__section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <h2 className='start__section__title'>{words().mainTitle}</h2>
                            <p className='start__section__text'>{words().mainText}</p>
                            <div className='start__section__buttons'>
                                <a
                                    href='/contacts#contacts_main'
                                    className='start__section__button button--primary button'
                                >
                                    Start with us
                                </a>
                                <Link
                                    to='/contacts#contacts_main'
                                    className='start__section__button button--secondory button'
                                >
                                    Become a partner
                                </Link>
                            </div>
                        </div>
                        <div className='col-5 start__img'>
                            <img src={persImg} alt='' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='advantages__section'>
                <div className='container'>
                    <div className='row advantages__section-row'>
                        <div className='col'>
                            <p className='advantages__section__text'>
                                LOMS Studio is an independent video game developer, publisher, and
                                technology provider based in Ukraine. LOMS Studio pushes the
                                boundaries of the possible to make the impossible a reality.
                            </p>
                        </div>
                        <div className='col d-flex align-items-center'>
                            <h2 className='advantages__section__title'>
                                Our advantages in development
                            </h2>
                            <span className='decor__line'></span>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Gallery /> */}
            <section className='ushelp__section'>
                <div className='container'>
                    <div className='row helpus__row flex-row-reverse'>
                        <div className='col d-md-flex justify-content-center '>
                            <div className='helpus__img'>
                                <img src={helppersImg} alt='helppers' className='' />
                            </div>
                        </div>
                        <div className='col ushelp__col'>
                            <h2 className='ushelp__section__title'>We need your support</h2>
                            <p className='ushelp__section__text'>
                                Help the project in development for this, make a donation or become
                                a partner
                            </p>
                            <div className='ushelp__section__buttons'>
                                <a
                                    href='/'
                                    className='ushelp__section__button button--primary button'
                                >
                                    Send
                                </a>
                                <Link
                                    to='/contacts'
                                    className='ushelp__section__button button--secondory button'
                                >
                                    Become a partner
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='findus__section'>
                <div className='container findus__container'>
                    <span className='findus__decor'></span>
                    <div className='row'>
                        <div className='col'>
                            <h2 className='findus__section__title'>Where can you find us</h2>
                            <p className='findus__section__text'>
                                Our social networks are actively supported and you can ask your
                                question in them
                            </p>
                            <div className='findus__section__social'>
                                <a
                                    href='https://www.tiktok.com/@loms_studio'
                                    target='_blank'
                                    className='button--link findus__section__link findus__section__link--tiktok'
                                >
                                    <img src={tiktokIco} alt='' />
                                    Tik Tok
                                </a>
                                <a
                                    href='https://www.instagram.com/loms_studio/'
                                    target='_blank'
                                    className='button--link findus__section__link findus__section__link--inst'
                                >
                                    <img src={instIco} alt='' />
                                    Instagram
                                </a>
                                <a
                                    href='https://www.youtube.com/@loms_studio'
                                    target='_blank'
                                    className='button--link findus__section__link findus__section__link--youtube'
                                >
                                    <img src={youtubeIco} alt='yt' />
                                    YouTube
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <News /> */}
            <Subscribe />
            <section className='partners__section'>
                <div className='container'>
                    <div className='row d-flex justify-content-center'>
                        <h2 className='partner__section__title'>Our partners</h2>
                        <div className='patners__section__images d-flex justify-content-center'>
                            <img src={appleImg} alt='' />

                            <img src={steamImg} alt='' />

                            <img src={googlePlayImg} alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
