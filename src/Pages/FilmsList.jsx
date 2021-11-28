import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { Pagination } from '../components/Pagination';
import { Loader } from '../components/Loader';

import { SEARCH_BY_KEYWORD } from '../api/kinopoisk';
import { FilmCardsList } from '../components/FilmCardsList';
import { getPagesArray } from '../utils/pages';
import { useDidMountEffect } from '../utils/useDidMountEffect';

export const FilmsList = () => {
    let navigate = useNavigate();

    const [word, setWord] = useState('');
    const [activePage, setActivePage] = useState(null);
    const [totalPages, setTotalPages] = useState(null);
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState(false);
    const [error, setError] = useState('');
    const [firstRender, setFirstRender] = useState(false);

    useDidMountEffect(async () => {
        setIsLoading(true);
        const fetchByKeyword = async () => {
            let response = await fetch(SEARCH_BY_KEYWORD(word, activePage), {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'f876a4a1-43e5-45e4-bbab-4efbf24a5835',
                    'Content-Type': 'application/json',
                },
            });
            response = await response.json();
            setFilms(response.films);

            setTotalPages(response.pagesCount);
        };

        await fetchByKeyword();
        setIsLoading(false);
    }, [search, activePage, firstRender]);

    useEffect(() => {
        if (totalPages === 0 && word) {
            navigate(`/search`);
            setError('Ничего не найдено');
        }
        if (totalPages !== 0 && totalPages !== null) {
            setActivePage(1);
            navigate(`/search/1`);
            setError('');
        }
        if (totalPages !== 0 && totalPages !== null && !word) {
            setActivePage(null);
            setTotalPages(null);
            navigate(`/search`);
            setError('');
        }
    }, [search, totalPages]);

    const findFilm = () => {
        if (word) {
            setSearch(!search);
            setActivePage(1);
        } else if (!word) {
            setError('Впишите название ключевого слова');
        }
        if (!word && activePage) {
            setSearch(!search);
            setActivePage(1);
        }
    };

    const Clean = () => {
        setTotalPages(null);
        setFilms([]);
        setWord('');
        setError('');
        setActivePage(null);
    };
    let pagesArray = getPagesArray(totalPages);
    return (
        <Wrapper>
            <SearchWrapper>
                <Title>
                    {totalPages === 0 || totalPages === null
                        ? `Искать фильм по названию :`
                        : `Результат поиска по запросу: ${word}`}
                </Title>
                <Input onChange={(event) => setWord(event.target.value)} value={word} />
                {totalPages > 0 ? (
                    <Button onClick={Clean} isDelete>
                        Очистить
                    </Button>
                ) : (
                    ''
                )}
                <Button onClick={findFilm}>Искать</Button>
            </SearchWrapper>

            <CardWrapper>{<FilmCardsList films={films} />}</CardWrapper>
            {isLoading && (
                <Loader>
                    <div className="loader"></div>
                </Loader>
            )}
            {error && error}
            <Pagination
                pagesArray={pagesArray}
                activePage={activePage}
                setActivePage={setActivePage}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin: 3rem;
`;

const Title = styled.h2`
    font-size: var(--fz-xl);
    color: var(--colors-text);
    margin: 0 2rem 0 0;
    padding: 0;
`;

const Input = styled.input`
    padding: 1rem;
    margin: 0 1rem 0 0;
    background-color: var(--colors-ui-base);
    color: var(--color-text);
    border: 0;
    font-size: var(--fz-sm);
    font-weight: var(--fw-light);
    box-shadow: var(--shadow);
    border-radius: var(--radii);
    width: 300px;
`;

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
