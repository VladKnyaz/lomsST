import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Search from '../../components/search';
import GameService from '../../api/services/gameService';

import './index.css';

import fakeImg from "./img/slider-image.jpg";
import romanImg from "./img/roman.svg";
import valandImg from "./img/valand.jpg";
import bayraktarImg from "./img/bayraktar.svg";
import lomsImg from "./img/loms-studio.png";
import { LinkService } from '../../services/link.service';
import { toast } from 'react-toastify';

function Games() {
   
    const GAME_NAME ="LOMS Studio - Games"
    document.title = GAME_NAME
    return (
        <div className="games">
            <div className="container games__container">
            <main>
            <div className="container">
            <section className="studio">
                <img className="studio__image" src={lomsImg} alt="Loms studio"/>
                <h1 className="studio__title def-title">LOMS Studio</h1>
                <p className="studio__description">
                    LOMS Studio is an independent video game developer, publisher, and technology provider based in
                    Ukraine. Loms Studio pushes the boundaries of the possible to make the impossible a reality.
                </p>
                <div className="studio__buttons">
                    <a href="#" className="primary-button button">Subscribe</a>
                    <button className="hero__buttons-share secondary-button button" onClick={()=>{
                                LinkService.copyLink();
                                toast.success("Copied")
                    }}>Share a link</button> 
                </div>
            </section>

            <section className="other">
                <div className="slider">
                    <h2 className="slider__title def-title">
                        Game collection
                    </h2>
                    <div className="slider-wrapper">
                        <Link to={'/valand'}> 
                                <div className="slider__item">
                                <img className="slider__item-image" src={valandImg} alt="Slider image"/>
                                {/* <div className="slider__item-name">Valand</div> */}
                            </div>
                        </Link>
                        <Link to={''}> 
                                <div className="slider__item">
                                <img className="slider__item-image" src={bayraktarImg} alt="Slider image"/>
                                {/* <div className="slider__item-name">Valand</div> */}
                            </div>
                        </Link>
                        <Link to={'/roman-conquest'}> 
                                <div className="slider__item">
                                <img className="slider__item-image" src={romanImg} alt="Slider image"/>
                                {/* <div className="slider__item-name">Valand</div> */}
                            </div>
                        </Link>
                        
                        
                    </div>
                    <div className="slider__button slider__button-prev"></div>
                    <div className="slider__button slider__button-next slider__button-active"></div>
                </div>
            </section>
        </div>
    </main>
            </div>
        </div>
    );
}

export default Games;
