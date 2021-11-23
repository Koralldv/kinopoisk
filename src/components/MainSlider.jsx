import styled from 'styled-components';
import React from 'react';

import { Slider } from './Slider';

import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import { IoArrowForwardOutline, IoHeart } from 'react-icons/io5';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { Button } from './Button';

SwiperCore.use([Navigation]);

export const MainSlider = () => {
    return (
        <Slider sliderName="main" spaceBetween={0} slidesPerGroup={1} slidesPerView={1}>
            {filmsSlider.map((item, index) => (
                <SwiperSlide key={`${item.title}_${index}`}>
                    <Img src={item.img} />
                    <Wrapper>
                        <RgbaBg />
                        <Film>
                            <FilmTitle>{item.title}</FilmTitle>

                            {item.list.map((listItem, index) => (
                                <Digits key={`${listItem}_${index}`}>
                                    <Year>{listItem.year}</Year>
                                    <Age>{listItem.age} +</Age>
                                    <Duration>{listItem.duration}</Duration>
                                </Digits>
                            ))}
                            <Desc>{item.desc}</Desc>
                            <Buttons>
                                <Button icon={IoArrowForwardOutline} margin="left">
                                    Смотреть
                                </Button>
                                <Button icon={IoHeart} margin="right">
                                    В избранное
                                </Button>
                            </Buttons>
                        </Film>
                    </Wrapper>
                </SwiperSlide>
            ))}
        </Slider>
    );
};

const Wrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 56px);
    margin-top: 56px;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
`;

const RgbaBg = styled.div`
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background: var(--colors-bg);
    z-index: -1;
    width: 40%;
`;

const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
`;

const Film = styled.div`
    width: 100%;
    max-width: 500px;
`;

const FilmTitle = styled.h1`
    font-size: var(--fz-xxl);
    font-weight: var(--fw-bold);
    margin: 0;
`;

const Digits = styled.div`
    margin: 1rem 0;
    display: flex;
    align-items: center;
`;

const Year = styled.span`
    margin-right: 1rem;
    color: var(--colors-text);
    font-weight: var(--fw-normal);
    font-size: var(--fz-md);
`;

const Age = styled.span`
    margin-right: 1rem;
    color: var(--colors-text);
    font-weight: var(--fw-normal);
    font-size: var(--fz-md);
    border: 2px solid red;
    padding: 5px 10px;
    border-radius: 50px;
`;

const Duration = styled.span`
    margin-right: 1rem;
    color: var(--colors-text);
    font-weight: var(--fw-normal);
    font-size: var(--fz-md);
`;

const Desc = styled.p`
    margin: 0 0 1rem 0;
    color: var(--colors-text);
    font-weight: var(--fw-normal);
`;

const Buttons = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const filmsSlider = [
    {
        title: 'THE EARTH',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate harum aperiam labore! Commodi officia ipsam libero possimus.',
        img: 'https://www.film.ru/sites/default/files/images/49435960-1135677.jpg',
        list: [{ year: '2021', age: '18', duration: '2h 6m' }],
    },
    {
        title: 'THE EARTH 2',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate harum aperiam labore! Commodi officia ipsam libero possimus.',
        img: 'https://www.film.ru/sites/default/files/images/49435960-1135677.jpg',
        list: [{ year: '2021', age: '18', duration: '2h 6m' }],
    },
    {
        title: 'THE EARTH 3',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate harum aperiam labore! Commodi officia ipsam libero possimus.',
        img: 'https://www.film.ru/sites/default/files/images/49435960-1135677.jpg',
        list: [{ year: '2021', age: '18', duration: '2h 6m' }],
    },
];
