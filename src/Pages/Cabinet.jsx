import styled from 'styled-components';

import React, { useState, useEffect } from 'react';
import { SINGLE_FILM } from '../api/kinopoisk';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFilm } from '../store/likeSlice';
import { Button } from '../components/Button';

import { IoHeartSharp, IoCloseSharp } from 'react-icons/io5';

import { Link } from 'react-router-dom';

export const Cabinet = () => {
    const { likeList } = useSelector((state) => state.like);
    const [films, setFilms] = useState([]);

    const dispatch = useDispatch();
    const deleteLikes = (id) => {
        dispatch(deleteFilm(id));
    };

    useEffect(() => {
        let filmMass = [];

        likeList.length
            ? likeList.map(async (item) => {
                  let response = await fetch(SINGLE_FILM(item), {
                      method: 'GET',
                      headers: {
                          'X-API-KEY': 'f876a4a1-43e5-45e4-bbab-4efbf24a5835',
                          'Content-Type': 'application/json',
                      },
                  });

                  response = await response.json();
                  filmMass.push(response);
                  setFilms([...filmMass]);
              })
            : setFilms([]);
    }, [likeList]);

    return (
        <Wrapper>
            <Title>
                <span>Ваши закладки</span>
                <Icon>
                    <IoHeartSharp size="40px" />
                </Icon>
            </Title>
            <LikedFilmList>
                {films.length !== 0
                    ? films.map((item) => (
                          <LikedFilm key={item.kinopoiskId}>
                              <Close onClick={() => deleteLikes(item.kinopoiskId || item.filmId)}>
                                  <IoCloseSharp />
                              </Close>
                              <Image src={item.posterUrlPreview} />
                              <Info>
                                  <Name>{item.nameRu || item.nameOriginal}</Name>

                                  <Link to={`/films/${item.kinopoiskId}`}>
                                      <Button>Подробнее</Button>
                                  </Link>
                              </Info>
                          </LikedFilm>
                      ))
                    : 'Вы еще ничего не добавили'}
            </LikedFilmList>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin: 56px 1.5rem 2rem;
    @media (min-width: 425px) {
        margin: 56px 0 2rem 2rem;
    }
`;

const Title = styled.h3`
    color: var(--colors-text);
    font-size: var(--fz-xl);
    font-weight: var(--fw-bold);
    margin: 1rem 0;
    text-transform: capitalize;
    display: flex;
    align-items: center;
`;

const LikedFilmList = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-items: flex-start;
    }
`;

const LikedFilm = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 0 2rem 0;
    background-color: var(--colors-ui-base);
    border-radius: var(--radii);
    box-shadow: var(--shadow);

    @media (min-width: 415px) {
        max-width: 300px;
    }

    @media (min-width: 768px) {
        margin: 0 2rem 2rem 0;
        width: 222px;
        height: auto;
    }
`;

const Icon = styled.i`
    color: var(--active-color);
    margin-left: 1rem;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
`;

const Image = styled.img`
    width: auto;
    height: auto;
    margin: 0 0 0 0;
    object-fit: contain;
    @media (min-width: 768px) {
        width: 100%;
        height: 320px;
        object-fit: cover;
        margin: 0 auto:
    }
`;

const Name = styled.h3`
    margin: 0;
    padding: 0;
    font-size: var(--fz-sm);
    font-weight: var(--fw-bold);
`;

const Close = styled.i`
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    width: 25px;
    cursor: pointer;
    box-shadow: var(--shadow);
    border-radius: 100px;
    line-height: 0;
    background-color: var(--colors-ui-base);
`;
