import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Search from '../../components/search';
import GameService from '../../api/services/gameService';

import './index.css';

import valandImg from './img/valand.jpg';
import appstoreImg from './img/appStore.png';
import steamImg from './img/steam.png';
import googlePlayImg from './img/googlePlay.png';


function GameValand() {
   
    const GAME_NAME ="LOMS Studio - Valand"
    document.title = GAME_NAME
    return (
        <div className="gamePage">
            <div className="container gamePage__container">
            <section class="hero">
                <div class="hero-wrapper">
                    <div class="hero__image">
                        <img src={valandImg} alt="Valand"/>
                    </div>
                    <div class="hero__info">
                        <h3 class="hero__info-title">Valand</h3>
                        <p class="hero__info-description">
                            Valand is a Viking Age city builder. With your own strength you have to rebuild the whole
                            settlement and bring it to prosperity.
                        </p>

                        <div class="hero__download">
                            <ul class="hero__download-list">
                                <li class="hero__download-list-item">
                                    <a href="#">
                                        <img src={appstoreImg} alt="AppStore"/>
                                    </a>
                                </li>
                                <li class="hero__download-list-item">
                                    <a href="#">
                                        <img src={steamImg} alt="Steam"/>
                                    </a>
                                </li>
                                <li class="hero__download-list-item">
                                    <a href="#"
                                    ><img src={googlePlayImg} alt="GooglePlay"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="hero__buttons">
                            <a href="#" class="hero__buttons-buy primary-button">Buy</a>
                            <a href="#" class="hero__buttons-share secondary-button">Share a link</a>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
    );
}

export default GameValand;
