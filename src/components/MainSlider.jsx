import styled from 'styled-components';
import React from 'react';

import { IoArrowForwardOutline, IoArrowBack } from 'react-icons/io5';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Navigation]);

export const MainSlider = () => {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation={{ nextEl: '.main__next', prevEl: '.main__prev' }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            {filmsSlider.map((item, index) => (
                <SwiperSlide key={`${item.title}_${index}`}>
                    <Img src={item.img} />
                    <Wrapper>
                        <Rgba_bg />
                        <Film>
                            <FilmTitle>{item.title}</FilmTitle>

                            {item.list.map((listItem, index) => (
                                <Digits key={`${listItem}_${index}`}>
                                    <Year>{listItem.year}</Year>
                                    <Age>{listItem.age}</Age>
                                    <Duration>{listItem.duration}</Duration>
                                </Digits>
                            ))}
                            <Desc>{item.desc}</Desc>
                            <Buttons>
                                <Button>Play now</Button>
                                <Button>+ My list</Button>
                            </Buttons>
                        </Film>
                    </Wrapper>
                </SwiperSlide>
            ))}
            <Arrow left className="main__prev">
                <IoArrowBack size="22px" />
            </Arrow>
            <Arrow right className="main__next">
                <IoArrowForwardOutline size="22px" />
            </Arrow>
        </Swiper>
    );
};

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
`;

const Rgba_bg = styled.div`
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background: var(--colors-bg);
    z-index: -1;
    width: 40%;
    // filter: blur(20px);
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
    font-size: var(--fz-xl);
    font-weight: var(--fw-bold);
    margin: 0;
`;

const Digits = styled.div`
    margin: 1rem 0;
    display: flex;
    // justify-content: space-between;
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
    margin: 0 0 2rem 0;
    color: var(--colors-text);
    font-weight: var(--fw-normal);
`;

const Buttons = styled.div``;

const Button = styled.button`
    background-color: var(--colors-ui-base);
    border: none;
    border-radius: var(--radii);
    box-shadow: var(--shadow);
    padding: 1rem 2rem;
    cursor: pointer;
    margin-right: 1rem;
    color: var(--color-text);
`;

const Arrow = styled.span`
    width: 40px;
    height: 40px;
    position: absolute;
    top: calc(50% - 40px);
    background-color: var(--rgba);
    box-shadow: var(--shadow);
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    cursor: pointer;

    left: ${(props) => (props.left ? '5px' : 'auto')};
    right: ${(props) => (props.right ? '5px' : 'auto')};
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
