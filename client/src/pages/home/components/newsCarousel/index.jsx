import React from 'react';

import arrowGalleryIco from '../../../../assets/icons/arrow__carousel.svg';
import gameBgImg from '../../../../assets/images/game_img.svg';

import './index.css';

function News() {
    return (
        <section className="news__section">
            <div className="container news__container">
                <h2 className="news__section__title">News</h2>
                <div className="news__section__arrows">
                    <button className="news__section__arrow swiper__arrow arrow--left">
                        <img src={arrowGalleryIco} alt="" />
                    </button>
                    <button className="news__section__arrow swiper__arrow arrow--right">
                        <img src={arrowGalleryIco} alt="" />
                    </button>
                </div>
            </div>
            <div className="news__carousel">
                <div className="news__block">
                    <div className="news__block__img">
                        <img src={gameBgImg} alt="" />
                    </div>
                    <div className="news__block--info">
                        <h2 className="news__block__title">Game Universe 201129</h2>
                        <div className="news__block__text">
                            <p>
                                The new game shooter will be released next week, don't miss it and
                                more another infor
                            </p>
                            <button className="button--next"></button>
                        </div>
                    </div>
                </div>
                <div className="news__block">
                    <div className="news__block__img">
                        <img src={gameBgImg} alt="" />
                    </div>
                    <div className="news__block--info">
                        <h2 className="news__block__title">Game Universe 201129</h2>
                        <div className="news__block__text">
                            <p>
                                The new game shooter will be released next week, don't miss it and
                                more another infor
                            </p>
                            <button className="button--next"></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default News;
