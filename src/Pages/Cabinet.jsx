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
    margin: 56px 1.5rem 2rem 1.5rem;
    @media (min-width: 425px) {
        margin: 56px 3rem 2rem 3rem;
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
    justify-content: flex-start;
    flex-wrap: wrap;
`;

const LikedFilm = styled.div`
    position: relative;
    display: flex;
    width: 31%;
    margin: 0 2rem 2rem 0;
    padding: 1rem 2rem;
    background-color: var(--colors-ui-base);
    border-radius: var(--radii);
    box-shadow: var(--shadow);
`;

const Icon = styled.i`
    color: red;
    margin-left: 1rem;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Image = styled.img`
    width: auto;
    height: 150px;
    margin: 0 1rem 0 0;
`;

const Name = styled.h3`
    margin: 0;
    padding: 0;
`;

const Close = styled.i`
    margin: 0;
    padding: 0;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
`;
