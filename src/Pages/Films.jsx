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

    useEffect(async () => {
        setIsLoading(false);
        const fetchTop = async () => {
            let response = await fetch(TOP('TOP_AWAIT_FILMS'), {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'f876a4a1-43e5-45e4-bbab-4efbf24a5835',
                    'Content-Type': 'application/json',
                },
            });
            response = await response.json();
            setFilmListTop(response.films);
            setIsLoading(true);
        };
        const fetchBest = async () => {
            let response = await fetch(TOP('TOP_250_BEST_FILMS'), {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'f876a4a1-43e5-45e4-bbab-4efbf24a5835',
                    'Content-Type': 'application/json',
                },
            });
            response = await response.json();
            setFilmListBest(response.films);
            setIsLoading(true);
        };
        const fetchPopular = async () => {
            let response = await fetch(TOP('TOP_100_POPULAR_FILMS'), {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'f876a4a1-43e5-45e4-bbab-4efbf24a5835',
                    'Content-Type': 'application/json',
                },
            });
            response = await response.json();
            setFilmListPopular(response.films);
            setIsLoading(true);
        };
        await fetchTop();
        await fetchBest();
        await fetchPopular();
    }, []);

    return (
        <Wrapper>
            <Title>Лучшие подборки фильмов от Кинопоиска</Title>
            {!isLoading && (
                <Loader>
                    <div className="loader"></div>
                </Loader>
            )}
            {isLoading === true ? (
                <FilmListSlider
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
            ) : (
                ''
            )}
            {isLoading === true ? (
                <FilmListSlider
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
            ) : (
                ''
            )}
            {isLoading === true ? (
                <FilmListSlider
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
            ) : (
                ''
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    padding: 6rem 2rem;
    background-color: var(--bg-color);
`;

const Title = styled.h1`
    font-size: var(--fz-xxl);
    color: var(--colors-text);
    margin: 0 0 4rem 0;
    padding: 0;
    text-transform: uppercase;
    word-wrap: break-word;
    @media (max-width: 768px) {
        margin: 2rem 0;
    }
`;
