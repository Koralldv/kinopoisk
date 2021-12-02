import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

import { PREMIERE } from '../api/kinopoisk';

import { FilmListSlider } from './FilmListSlider';

export const Premiere = () => {
    const [filmList, setFilmList] = useState('');

    useEffect(() => {
        const fetchPremiere = async () => {
            let response = await fetch(PREMIERE, {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'f876a4a1-43e5-45e4-bbab-4efbf24a5835',
                    'Content-Type': 'application/json',
                },
            });
            response = await response.json();
            setFilmList(response);
        };
        fetchPremiere();
    }, []);

    return (
        <Wrapper>
            {filmList && (
                <FilmListSlider
                    filmList={filmList.items}
                    path="films"
                    title="премьеры"
                    sliderName="premieres"
                    spaceBetween={0}
                    slidesPerGroup={1}
                    slidesPerView={1}
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
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    padding: 6rem 1rem;
    background-color: var(--bg-color);

    @media (min-width: 725px) {
        padding: 6rem 2rem;
    }
`;
