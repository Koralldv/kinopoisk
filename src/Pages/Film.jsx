import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { SINGLE_FILM, FRAMES } from '../api/kinopoisk';

import { Slider } from '../components/Slider';
import { Loader } from '../components/Loader';

import { useDispatch, useSelector } from 'react-redux';
import { addFilm } from '../store/likeSlice';

import {
    IoPersonSharp,
    IoTimeOutline,
    IoHappyOutline,
    IoFootballOutline,
    IoPlanetOutline,
    IoStar,
    IoFilmOutline,
    IoHeartSharp,
} from 'react-icons/io5';

import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Button } from '../components/Button';

SwiperCore.use([Pagination, Navigation]);

export const Film = () => {
    const { filmId } = useParams();
    const [film, setFilm] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [frames, setFrames] = useState(null);

    const dispatch = useDispatch();
    const { likeList } = useSelector((state) => state.like);

    const handleLike = (id) => {
        dispatch(addFilm(id));
    };

    useEffect(() => {
        setIsLoading(true);

        const fetchSingleFilm = async () => {
            let response = await fetch(SINGLE_FILM(filmId), {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'f876a4a1-43e5-45e4-bbab-4efbf24a5835',
                    'Content-Type': 'application/json',
                },
            });
            response = await response.json();
            setFilm(response);
            setIsLoading(false);
        };

        const fetchFramesFilm = async () => {
            let responses = await fetch(FRAMES(filmId), {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'f876a4a1-43e5-45e4-bbab-4efbf24a5835',
                    'Content-Type': 'application/json',
                },
            });
            responses = await responses.json();
            setFrames(responses);
        };

        fetchSingleFilm();
        fetchFramesFilm();
    }, [filmId]);

    return (
        <Wrapper>
            {isLoading && (
                <Loader>
                    <div className="loader"></div>
                </Loader>
            )}
            {film && (
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
                            <Badges>
                                <Rating>
                                    <Star>
                                        <Mark>
                                            {film.ratingKinopoisk ? film.ratingKinopoisk : '?'}
                                        </Mark>
                                        <IoStar />
                                    </Star>
                                    <Kinopoinsk>Рейтинг кинопоиска</Kinopoinsk>
                                </Rating>
                                <Like
                                    className={
                                        likeList.includes(film.kinopoiskId || film.filmId)
                                            ? 'active'
                                            : ''
                                    }
                                    onClick={() => handleLike(film.kinopoiskId || film.filmId)}>
                                    <IoHeartSharp size="20px" />
                                </Like>
                                <KinoLink
                                    href={`https://www.kinopoisk.ru/film/${filmId}`}
                                    target="_blank">
                                    <Button icon={IoFilmOutline} margin="0" padding="left">
                                        <span>Смотреть </span>
                                    </Button>
                                </KinoLink>
                            </Badges>
                            <SliderWrap>
                                <Slider
                                    sliderName="film"
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
                                            slidesPerView: 2,
                                            slidesPerGroup: 2,
                                        },
                                        1024: {
                                            spaceBetween: 20,
                                            slidesPerView: 3,
                                            slidesPerGroup: 3,
                                        },
                                    }}>
                                    {frames &&
                                        frames.frames.map((f) => (
                                            <SwiperSlide key={`${f.preview}`}>
                                                <ImgSlide src={f.preview} />
                                            </SwiperSlide>
                                        ))}
                                    <PaginationBlock className="swiper-paginations"></PaginationBlock>
                                </Slider>
                            </SliderWrap>
                        </Persons>
                    </Info>
                </About>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin: 56px 3rem 2rem 3rem;
    @media (max-width: 425px) {
        margin: 56px 1.5rem 2rem 1.5rem;
    }
`;

const About = styled.div`
    display: flex;
    align-items: space-between;
    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`;

const Badges = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 1rem 0;
    width: 100%;

    @media (min-width: 768px) {
        margin: 0 0 1rem 0;
        width: 214px;
        justify-content: flex-start;
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
    @media (max-width: 768px) {
        margin: 2rem 0;
    }
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
    margin: 0 1rem 1rem 0;
    @media (max-width: 768px) {
        margin: 0 1rem 1rem 0;
    }
`;

const Star = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.3rem;
`;

const KinoLink = styled.a`
    text-decoration: none;
    color: var(--colors-text);
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

const SliderWrap = styled.div`
    max-width: 800px;
    width: 100%;
`;

const ImgSlide = styled.img`
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

const Like = styled.div`
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    border-radius: var(--radii);
    padding: 1rem;
    height: 52px;
    margin: 0 1rem 1rem 0;
    width: min-content;
    color: #eee;
    cursor: pointer;

    &.active {
        color: red;
    }

    @media (min-width: 768px) {
        margin: 0 0 1rem 0;
`;
