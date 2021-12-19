import styled from 'styled-components';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Slider } from './Slider';
import { PREMIERE } from '../api/kinopoisk';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPremiere } from '../store/premierSlice';
import { addFilm } from '../store/likeSlice';

import { Loader } from './Loader';
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import { IoArrowForwardOutline, IoHeart } from 'react-icons/io5';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { Button } from './Button';

SwiperCore.use([Navigation]);

export const MainSlider = () => {
    const { premiereList, status, error } = useSelector((state) => state.premier);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPremiere({ name: PREMIERE }));
    }, [dispatch]);

    const { likeList } = useSelector((state) => state.like);

    const handleLike = (id) => {
        dispatch(addFilm(id));
    };
    return (
        <>
            {status === 'loading' && (
                <Loader>
                    <div className="loader"></div>
                </Loader>
            )}

            <Slider sliderName="main" spaceBetween={0} slidesPerGroup={1} slidesPerView={1}>
                {premiereList.items &&
                    premiereList.items.map((item, index) => (
                        <SwiperSlide key={`${item.nameRu}_${index}`}>
                            <Img src={item.posterUrl} />
                            <Wrapper>
                                <RgbaBg />
                                <Film>
                                    <FilmTitle>{item.nameRu}</FilmTitle>
                                    <Digits>
                                        <Year>{item.year}</Year>
                                        <Duration>
                                            {Math.floor(item.duration / 60)}ч {item.duration % 60}м
                                        </Duration>
                                        {item.genres.map((listItem, index) => (
                                            <Genre
                                                key={`${item.kinopoiskId || item.filmId}_${index}`}>
                                                {listItem.genre}
                                            </Genre>
                                        ))}
                                    </Digits>
                                    <Buttons>
                                        <Link to={`/films/${item.kinopoiskId || item.filmId}`}>
                                            <Button icon={IoArrowForwardOutline} padding="left">
                                                Смотреть
                                            </Button>
                                        </Link>
                                        <Button
                                            icon={IoHeart}
                                            iconColor={
                                                likeList.includes(item.kinopoiskId || item.filmId)
                                                    ? 'var(--active-color)'
                                                    : ''
                                            }
                                            padding="right"
                                            onClick={() =>
                                                handleLike(item.kinopoiskId || item.filmId)
                                            }>
                                            В избранное
                                        </Button>
                                    </Buttons>
                                </Film>
                            </Wrapper>
                        </SwiperSlide>
                    ))}
            </Slider>
            {error && error}
        </>
    );
};

const Wrapper = styled.div`
    width: 100vw;
    height: calc(100vh);
    padding: 64px 1rem 0;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;

    @media (min-width: 725px) {
        padding: 0 2rem;
    }
`;

const RgbaBg = styled.div`
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    backdrop-filter: blur(50px);
    width: 40%;
    @media (max-width: 768px) {
        display: none;
    }
`;

const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    right: 0;
    top: 64px;
    @media (min-width: 768px) {
        width: 65%;
    }
`;

const Film = styled.div`
    width: 100%;
    max-width: 500px;
`;

const FilmTitle = styled.h1`
    font-size: var(--fz-xl);
    font-weight: var(--fw-bold);
    margin: 0;
    background-color: var(--colors-ui-base);
    padding: 0.5rem 0;
    border-radius: var(--radii);
    box-shadow: var(--shadow);

    @media (min-width: 550px) {
    }

    @media (min-width: 768px) {
        font-size: var(--fz-xxl);
        background-color: transparent;
        border-radius: none;
        box-shadow: none;
    }
`;

const Digits = styled.div`
    margin: 0 0 1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

const Year = styled.span`
    margin: 1rem 1rem 0 0;
    color: var(--colors-text);
    font-weight: var(--fw-normal);
    font-size: var(--fz-md);
    background-color: var(--colors-ui-base);
    padding: 0.5rem 1rem;
    border-radius: var(--radii);
    box-shadow: var(--shadow);
    @media (min-width: 768px) {
        background-color: transparent;
        border-radius: none;
        box-shadow: none;
    }
`;

const Genre = styled.span`
    margin: 1rem 1rem 0 0;
    color: var(--colors-text);
    font-weight: var(--fw-normal);
    font-size: var(--fz-md);
    border: 2px solid var(--active-color);
    padding: 0.5rem 1rem;
    border-radius: 50px;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    @media (min-width: 768px) {
        background-color: transparent;
        border-radius: none;
        box-shadow: none;
    }
`;

const Duration = styled.span`
    margin: 1rem 1rem 0 0;
    color: var(--colors-text);
    font-weight: var(--fw-normal);
    font-size: var(--fz-md);
    background-color: var(--colors-ui-base);
    padding: 0.5rem 1rem;
    border-radius: var(--radii);
    box-shadow: var(--shadow);

    @media (min-width: 768px) {
        background-color: transparent;
        border-radius: none;
        box-shadow: none;
    }
`;

const Buttons = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
