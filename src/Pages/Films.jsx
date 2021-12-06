import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { TOP } from '../api/kinopoisk';

import { Loader } from '../components/Loader';
import { FilmListSlider } from '../components/FilmListSlider';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTop } from '../store/topSlice';
import { fetchBest } from '../store/bestSlice';
import { fetchPopular } from '../store/popularSlice';

export const Films = () => {
    const { topList, status: statusTop, error: errorTop } = useSelector((state) => state.top);
    const { bestList, status: statusBest, error: errorBest } = useSelector((state) => state.best);
    const {
        popularList,
        status: statusPop,
        error: errorPop,
    } = useSelector((state) => state.popular);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            fetchTop({
                name: TOP('TOP_AWAIT_FILMS', 1),
            }),
        );
        dispatch(
            fetchBest({
                name: TOP('TOP_250_BEST_FILMS', 1),
            }),
        );
        dispatch(
            fetchPopular({
                name: TOP('TOP_100_POPULAR_FILMS', 1),
            }),
        );
    }, [dispatch]);

    return (
        <Wrapper>
            <Title>Лучшие подборки фильмов от Кинопоиска</Title>
            {statusTop === 'loading' && (
                <Loader>
                    <div className="loader"></div>
                </Loader>
            )}

            {
                <FilmListSlider
                    pathAll="/films/top/"
                    text="посмотреть все фильмы"
                    filmList={topList.films}
                    title="топ ожидаемых"
                    sliderName="top"
                    spaceBetween={0}
                    slidesPerGroup={1}
                    slidesPerView={1}
                    path="films"
                    breaks={{
                        550: {
                            spaceBetween: 20,
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        768: {
                            spaceBetween: 20,
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        },
                        1024: {
                            spaceBetween: 20,
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                        },
                        1180: {
                            spaceBetween: 20,
                            slidesPerView: 5,
                            slidesPerGroup: 5,
                        },
                        1366: {
                            spaceBetween: 20,
                            slidesPerView: 6,
                            slidesPerGroup: 6,
                        },
                    }}></FilmListSlider>
            }
            {errorTop && errorTop}
            {statusBest === 'loading' && (
                <Loader>
                    <div className="loader"></div>
                </Loader>
            )}
            <FilmListSlider
                pathAll="/films/best/"
                text="посмотреть все 250 фильмов"
                filmList={bestList.films}
                title="топ лучших"
                sliderName="top"
                spaceBetween={0}
                slidesPerGroup={1}
                slidesPerView={1}
                path="films"
                breaks={{
                    550: {
                        spaceBetween: 20,
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    768: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                    1024: {
                        spaceBetween: 20,
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    },
                    1180: {
                        spaceBetween: 20,
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                    },
                    1366: {
                        spaceBetween: 20,
                        slidesPerView: 6,
                        slidesPerGroup: 6,
                    },
                }}></FilmListSlider>
            {errorBest && errorBest}

            {statusPop === 'loading' && (
                <Loader>
                    <div className="loader"></div>
                </Loader>
            )}
            <FilmListSlider
                pathAll="/films/popular/"
                text="посмотреть все 100 фильмов"
                filmList={popularList.films}
                title="топ популярных"
                sliderName="top"
                spaceBetween={0}
                slidesPerGroup={1}
                slidesPerView={1}
                path="films"
                breaks={{
                    550: {
                        spaceBetween: 20,
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    768: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                    1024: {
                        spaceBetween: 20,
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    },
                    1180: {
                        spaceBetween: 20,
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                    },
                    1366: {
                        spaceBetween: 20,
                        slidesPerView: 6,
                        slidesPerGroup: 6,
                    },
                }}></FilmListSlider>
            {errorPop && errorPop}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    padding: 1rem;
    background-color: var(--bg-color);

    @media (min-width: 768px) {
        padding: 6rem 2rem;
    }
`;

const Title = styled.h1`
    font-size: var(--fz-xl);
    color: var(--colors-text);
    margin: 2rem 0;
    padding: 0;
    text-transform: uppercase;
    word-wrap: break-word;
    @media (min-width: 768px) {
        margin: 0 0 4rem 0;
        font-size: var(--fz-xxl);
    }
`;
