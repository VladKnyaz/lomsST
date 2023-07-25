import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Search from '../../components/search';
import GameService from '../../api/services/gameService';

import './index.css';

import romanImg from './img/roman.svg';
import steamImg from './img/steam.png';
import { LinkService } from '../../services/link.service';
import { toast } from 'react-toastify';


function GameRomanConquest() {
   
    const GAME_NAME ="LOMS Studio - Roman Conquest: Rise to Power"
    document.title = GAME_NAME
    return (
        <div className="gamePage">
            <div className="container gamePage__container">
            <section className="hero">
                <div className="hero-wrapper">
                    <div className="hero__image">
                        <img src={romanImg} alt="Roman Conquest"/>
                    </div>
                    <div className="hero__info">
                        <h3 className="hero__info-title">Roman Conquest: <br /> Rise to Power</h3>
                        <p className="hero__info-description">
                            Roman Conquest: Rise to Power is a turn-based strategy game in which the player can feel like a great commander of the Roman Empire, join and lead a legion, and with his army to reclaim the occupied lands.
                        </p>

                        <div className="hero__download">
                            <ul className="hero__download-list">
                               
                                <li className="hero__download-list-item">
                                    <a href="#">
                                        <img src={steamImg} alt="Steam"/>
                                    </a>
                                </li>
                               
                            </ul>
                        </div>
                        <div className="hero__buttons">
                            <a href="#" className="hero__buttons-buy primary-button">Buy</a>
                            <button className="hero__buttons-share secondary-button" onClick={()=>{
                                LinkService.copyLink();
                                toast.success("Copied")
                            }}>Share a link</button> 
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
    );
}

export default GameRomanConquest;
