import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { PREMIERE } from '../api/kinopoisk';

import { Slider } from './Slider';

import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Pagination, Navigation]);

export const Featured = () => {
    const [premieres, setPremieres] = useState('');

    useEffect(() => {
        fetch(PREMIERE, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'f876a4a1-43e5-45e4-bbab-4efbf24a5835',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((json) => setPremieres(json));
    }, []);

    return (
        <Wrapper>
            <TitleBlock>Премьеры</TitleBlock>
            <Slider
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
                }}>
                <CardWrapper>
                    {premieres &&
                        premieres.items.map((item) => (
                            <SwiperSlide key={item.kinopoiskId}>
                                <Card>
                                    <Cover src={item.posterUrlPreview} />
                                    <Link title={item.nameRu} to={`/films/${item.kinopoiskId}`}>
                                        <Title>{item.nameRu}</Title>
                                    </Link>
                                    <List>
                                        <Year>{item.year}</Year>
                                        {item.genres.map((g, index) => (
                                            <Genre key={`${g.genre}_${index}`}>{g.genre}</Genre>
                                        ))}
                                    </List>
                                </Card>
                            </SwiperSlide>
                        ))}
                </CardWrapper>

                <PaginationBlock className="swiper-paginations"></PaginationBlock>
            </Slider>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    padding: 6rem 2rem;
    background-color: var(--bg-color);
`;

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const TitleBlock = styled.h3`
    color: var(--colors-text);
    font-size: var(--fz-xl);
    font-weight: var(--fw-bold);
    margin: 0 0 2rem 0;
`;

const Card = styled.div`
    width: 100%;
    height: 420px;
    margin: 1rem 0;
    border-radius: var(--radii);
    box-shadow: var(--shadow);
`;
const Cover = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`;
const Title = styled.h3`
    color: var(--colors-text);
    font-weight: var(--fw-bold);
    font-size: 13px;
    margin: 1.3rem 0.5rem 1rem 0.5rem;
    text-transform: uppercase;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    transition: color 0.2s linear;

    &:hover {
        color: red;
    }
`;
const List = styled.ul`
    list-style: none;
    margin: 0 0.5rem 1rem;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`;
const Year = styled.li`
    margin: 0 1rem 0 0;
    padding: 0;
    font-size: var(--fz-sm);
    font-weight: var(--fw-normal);
    color: var(--colors-text);
    opacity: 0.6;
`;
// const Age = styled.li`
//     margin: 0 1rem 0 0;
//     padding: 0;
//     font-size: var(--fz-sm);
//     font-weight: var(--fw-normal);
//     color: var(--colors-text);
//     opacity: 0.6;
// `;

const Genre = styled.li`
    margin: 0 1rem 0 0;
    padding: 0;
    font-size: var(--fz-sm);
    font-weight: var(--fw-normal);
    color: var(--colors-text);
    opacity: 0.6;
    text-transform: capitalize;
`;

const PaginationBlock = styled.div`
    text-align: center;
`;
