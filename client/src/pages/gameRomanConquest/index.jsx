import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Search from '../../components/search';
import GameService from '../../api/services/gameService';

import './index.css';

import romanImg from './img/roman.svg';
import steamImg from './img/steam.png';


function GameRomanConquest() {
   
    const GAME_NAME ="LOMS Studio - Roman Conquest: Rise to Power"
    document.title = GAME_NAME
    return (
        <div className="gamePage">
            <div className="container gamePage__container">
            <section class="hero">
                <div class="hero-wrapper">
                    <div class="hero__image">
                        <img src={romanImg} alt="Roman Conquest"/>
                    </div>
                    <div class="hero__info">
                        <h3 class="hero__info-title">Roman Conquest: <br /> Rise to Power</h3>
                        <p class="hero__info-description">
                            Roman Conquest: Rise to Power is a turn-based strategy game in which the player can feel like a great commander of the Roman Empire, join and lead a legion, and with his army to reclaim the occupied lands.
                        </p>

                        <div class="hero__download">
                            <ul class="hero__download-list">
                               
                                <li class="hero__download-list-item">
                                    <a href="#">
                                        <img src={steamImg} alt="Steam"/>
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

export default GameRomanConquest;
