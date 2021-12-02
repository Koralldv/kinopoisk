import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { TOP } from '../api/kinopoisk';

import { Loader } from '../components/Loader';
import { FilmListSlider } from '../components/FilmListSlider';

export const Films = () => {
    const [filmListTop, setFilmListTop] = useState('');
    const [filmListBest, setFilmListBest] = useState('');
    const [filmListPopular, setFilmListPopular] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchTop = async () => {
            setIsLoading(true);
            let response = await fetch(TOP('TOP_AWAIT_FILMS', 1), {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'f876a4a1-43e5-45e4-bbab-4efbf24a5835',
                    'Content-Type': 'application/json',
                },
            });
            response = await response.json();
            setFilmListTop(response.films);
            setIsLoading(false);
        };
        const fetchBest = async () => {
            setIsLoading(true);
            let response = await fetch(TOP('TOP_250_BEST_FILMS', 1), {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'f876a4a1-43e5-45e4-bbab-4efbf24a5835',
                    'Content-Type': 'application/json',
                },
            });
            response = await response.json();
            setFilmListBest(response.films);
            setIsLoading(false);
        };
        const fetchPopular = async () => {
            setIsLoading(true);
            let response = await fetch(TOP('TOP_100_POPULAR_FILMS', 1), {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'f876a4a1-43e5-45e4-bbab-4efbf24a5835',
                    'Content-Type': 'application/json',
                },
            });
            response = await response.json();
            setFilmListPopular(response.films);
            setIsLoading(false);
        };
        fetchTop();
        fetchBest();
        fetchPopular();
    }, []);

    return (
        <Wrapper>
            <Title>Лучшие подборки фильмов от Кинопоиска</Title>

            {isLoading && (
                <Loader>
                    <div className="loader"></div>
                </Loader>
            )}

            {!isLoading && (
                <>
                    <FilmListSlider
                        pathAll="/films/top/"
                        text="посмотреть все фильмы"
                        filmList={filmListTop}
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
                </>
            )}
            {!isLoading && (
                <>
                    <FilmListSlider
                        pathAll="/films/best/"
                        text="посмотреть все 250 фильмов"
                        filmList={filmListBest}
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
                </>
            )}
            {!isLoading && (
                <>
                    <FilmListSlider
                        pathAll="/films/popular/"
                        text="посмотреть все 100 фильмов"
                        filmList={filmListPopular}
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
                </>
            )}
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
