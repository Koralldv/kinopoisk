import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { PREMIERE } from '../api/kinopoisk';
import { IoArrowForwardOutline, IoArrowBack } from 'react-icons/io5';

import { Swiper, SwiperSlide } from 'swiper/react';
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
            <Swiper
                style={{ position: 'relative' }}
                spaceBetween={0}
                slidesPerGroup={6}
                slidesPerView={6}
                pagination={{
                    el: '.swiper-paginations',
                }}
                navigation={{ nextEl: '.premieres__next', prevEl: '.premieres__prev' }}
                onSwiper={(swiper) => console.log(swiper)}>
                <Arrow left className="premieres__prev">
                    <IoArrowBack size="22px" />
                </Arrow>
                <Arrow right className="premieres__next">
                    <IoArrowForwardOutline size="22px" />
                </Arrow>

                <CardWrapper>
                    {premieres &&
                        premieres.items.map((item) => (
                            <SwiperSlide key={item.kinopoiskId}>
                                <Card>
                                    <Cover src={item.posterUrlPreview} />
                                    <Link title={item.nameRu} to={`/film/${item.kinopoiskId}`}>
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
            </Swiper>
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
    max-width: 220px;
    margin: 1rem 0;
    border-radius: var(--radii);
    box-shadow: var(--shadow);
    @media (max-width: 426px) {
        max-width: calc(45%);
        margin-bottom: 2rem;
    }
`;
const Cover = styled.img`
    width: 100%;
    height: 300px;
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

const Arrow = styled.span`
    width: 56px;
    height: 56px;
    position: absolute;
    top: 40%;
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

const PaginationBlock = styled.div`
    text-align: center;
`;
