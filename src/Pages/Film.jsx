import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { SINGLE_FILM, FRAMES } from '../api/kinopoisk';

import { Arrow } from '../components/Arrow';
import { Button } from '../components/Button';

import {
    IoPersonSharp,
    IoTimeOutline,
    IoHappyOutline,
    IoFootballOutline,
    IoPlanetOutline,
    IoArrowForwardOutline,
    IoArrowBack,
    IoStar,
} from 'react-icons/io5';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Pagination, Navigation]);

export const Film = () => {
    const { filmId } = useParams();
    const navigate = useNavigate();
    // console.log(useNavigate());
    const [film, setFilm] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [frames, setFrames] = useState({});

    useEffect(async () => {
        setIsLoading(false);

        await fetch(SINGLE_FILM(filmId), {
            method: 'GET',
            headers: {
                'X-API-KEY': 'f876a4a1-43e5-45e4-bbab-4efbf24a5835',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((json) => setFilm(json));

        await fetch(FRAMES(filmId), {
            method: 'GET',
            headers: {
                'X-API-KEY': 'f876a4a1-43e5-45e4-bbab-4efbf24a5835',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((json) => setFrames(json));

        setIsLoading(true);
    }, []);

    return (
        <Wrapper>
            <Button onClick={() => navigate(-1)}>Назад</Button>
            {isLoading ? (
                <About>
                    <Img src={film.posterUrl} />
                    <Info>
                        <Title>{film.nameRu}</Title>
                        <List>
                            <ListItem>
                                <IconWrap>
                                    <IoPersonSharp size="20px" />
                                </IconWrap>
                                {film.ratingAgeLimits !== null ? film.ratingAgeLimits.slice(3) : 0}+
                            </ListItem>
                            <ListItem>
                                <IconWrap>
                                    <IoTimeOutline size="24px" />
                                </IconWrap>
                                {Math.floor(film.filmLength / 60)}ч {film.filmLength % 60}м
                            </ListItem>
                            <ListItem>
                                <IconWrap>
                                    <IoHappyOutline size="24px" />
                                </IconWrap>
                                {film.year}
                            </ListItem>

                            <IconWrap>
                                <IoFootballOutline size="24px" />
                            </IconWrap>
                            {film.genres.map((g) => (
                                <ListItem key={`${g.genre}`}>{g.genre}</ListItem>
                            ))}
                            <IconWrap>
                                <IoPlanetOutline size="24px" />
                            </IconWrap>
                            {film.countries.map((c) => (
                                <ListItem key={`${c.country}`}>{c.country}</ListItem>
                            ))}
                        </List>
                        <Description>{film.description}</Description>
                        <Persons>
                            <Rating>
                                <Star>
                                    <Mark>{film.ratingKinopoisk ? film.ratingKinopoisk : '?'}</Mark>
                                    <IoStar />
                                </Star>
                                <Kinopoinsk>Рейтинг кинопоиска</Kinopoinsk>
                            </Rating>
                            <BoxOffice>
                                <Swiper
                                    style={{ position: 'relative' }}
                                    spaceBetween={5}
                                    slidesPerGroup={3}
                                    slidesPerView={3}
                                    pagination={{
                                        el: '.swiper-paginations',
                                    }}
                                    navigation={{
                                        nextEl: '.premieres__next',
                                        prevEl: '.premieres__prev',
                                    }}
                                    onSwiper={(swiper) => console.log(swiper)}>
                                    <Arrow left className="premieres__prev">
                                        <IoArrowBack size="22px" />
                                    </Arrow>
                                    <Arrow right className="premieres__next">
                                        <IoArrowForwardOutline size="22px" />
                                    </Arrow>
                                    {frames.frames.map((f) => (
                                        <SwiperSlide key={`${f.preview}`}>
                                            <ImgSlide src={f.preview} />
                                        </SwiperSlide>
                                    ))}
                                    <PaginationBlock className="swiper-paginations"></PaginationBlock>
                                </Swiper>
                            </BoxOffice>
                        </Persons>
                    </Info>
                </About>
            ) : (
                'loading...'
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin: 56px 2rem 2rem 2rem;
`;

const About = styled.div`
    display: flex;
    align-items: space-between;
    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`;

const Img = styled.img`
    width: 350px;
    @media (max-width: 768px) {
        width: 100%;
        max-width: 300px;
    }
`;

const Info = styled.div`
    margin-left: 2rem;
    @media (max-width: 1024px) {
        width: 50%;
    }
    @media (max-width: 768px) {
        width: 100%;
        margin-left: 0;
    }
`;

const Title = styled.h1`
    font-size: var(--fz-xl);
    color: var(--colors-text);
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    word-wrap: break-word;
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    opacity: 0.6;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin: 0 2rem 1rem 0;
    font-size: var(--fz-md);
    font-weight: var(--fw-normal);
    color: var(--colors-text);
    text-transform: capitalize;
`;

const Description = styled.p`
    font-size: var(--fz-md);
    font-weight: var(--fw-normal);
    color: var(--colors-text);
`;

const Persons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 2rem;
`;

const Rating = styled.div`
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    border-radius: var(--radii);
    padding: 1rem;
    max-width: 130px;
    margin: 1rem 0;
`;

const Star = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.3rem;
`;

const Mark = styled.span`
    text-align: center;
    font-size: var(--fz-md);
    font-weight: var(--fw-bold);
    color: var(--colors-text);
    margin-right: 0.5rem;
`;

const Kinopoinsk = styled.span`
    text-align: center;
    font-size: var(--fz-sm);
    font-weight: var(--fw-bold);
    color: var(--colors-text);
    margin-right: 0.5rem;
    word-wrap: break-word;
`;

const BoxOffice = styled.div`
    max-width: 900px;
    width: 100%;
`;

const ImgSlide = styled.img`
    max-width: 300px;
    width: 100%;
    height: 220px;
`;

const PaginationBlock = styled.div`
    text-align: center;
`;

const IconWrap = styled.span`
    display: flex;
    justify-content: center;
    padding-right: 0.5rem;
`;
