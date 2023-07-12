import React from 'react';

import arrowGalleryIco from '../../../../assets/icons/arrow__carousel.svg';
import pers2Img from '../../../../assets/images/pers2.png';

import './index.css';

import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Gallery() {
    return (
        <section className="carousel__section">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <h2 className="carousel__section__title">Our game gallery</h2>
                    </div>
                    <div className="col">
                        <p className="carousel__section__text">
                            Our game development and in the form of screenshots shows the level of
                            game development
                        </p>
                    </div>
                    <div className="col-md-3 carousel__section__arrows">
                        <button className="carousel__section__arrow swiper__arrow carousel__section__arrow--left arrow--left">
                            <img src={arrowGalleryIco} alt="" />
                        </button>
                        <button className="carousel__section__arrow swiper__arrow carousel__section__arrow--right arrow--right">
                            <img src={arrowGalleryIco} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <Swiper
                loop={true}
                breakpoints={{
                    200: {
                        slidesPerView: 2.3,
                    },
                    500: {
                        slidesPerView: 2.8,
                    },
                    700: {
                        slidesPerView: 3.8,
                    },
                    1200: {
                        slidesPerView: 5,
                    },
                    1400: {
                        slidesPerView: 8.5,
                    },
                }}
                className="caruosel d-flex justify-content-center"
                spaceBetween={25}
                navigation={{
                    prevEl: '.carousel__section__arrow--left',
                    nextEl: '.carousel__section__arrow--right',
                }}
                modules={[Navigation]}
            >
                <SwiperSlide>
                    <img src={pers2Img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pers2Img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pers2Img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pers2Img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pers2Img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pers2Img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pers2Img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pers2Img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pers2Img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pers2Img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pers2Img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pers2Img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pers2Img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pers2Img} alt="" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Gallery;
