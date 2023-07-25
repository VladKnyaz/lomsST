import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Search from '../../components/search';
import GameService from '../../api/services/gameService';

import './index.css';

import valandImg from './img/valand.jpg';
import appstoreImg from './img/appStore.png';
import steamImg from './img/steam.png';
import googlePlayImg from './img/googlePlay.png';
import { LinkService } from '../../services/link.service';
import { toast } from 'react-toastify';


function GameValand() {
   
    const GAME_NAME ="LOMS Studio - Valand"
    document.title = GAME_NAME
    return (
        <div className="gamePage">
            <div className="container gamePage__container">
            <section className="hero">
                <div className="hero-wrapper">
                    <div className="hero__image">
                        <img src={valandImg} alt="Valand"/>
                    </div>
                    <div className="hero__info">
                        <h3 className="hero__info-title">Valand</h3>
                        <p className="hero__info-description">
                            Valand is a Viking Age city builder. With your own strength you have to rebuild the whole
                            settlement and bring it to prosperity.
                        </p>

                        <div className="hero__download">
                            <ul className="hero__download-list">
                                <li className="hero__download-list-item">
                                    <a href="#">
                                        <img src={appstoreImg} alt="AppStore"/>
                                    </a>
                                </li>
                                <li className="hero__download-list-item">
                                    <a href="#">
                                        <img src={steamImg} alt="Steam"/>
                                    </a>
                                </li>
                                <li className="hero__download-list-item">
                                    <a href="#"
                                    ><img src={googlePlayImg} alt="GooglePlay"/>
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

export default GameValand;
