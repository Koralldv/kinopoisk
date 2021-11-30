import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { Pagination } from '../components/Pagination';
import { Loader } from '../components/Loader';

import { SEARCH_BY_KEYWORD } from '../api/kinopoisk';
import { FilmCardsList } from '../components/FilmCardsList';
import { getPagesArray } from '../utils/pages';

export const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('keyword') || '';
    const pageQuery = searchParams.get('page') || 1;

    const [word, setWord] = useState('');
    const [activePage, setActivePage] = useState(null);
    const [totalPages, setTotalPages] = useState(null);
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState(false);
    const [error, setError] = useState('');
    const [pagesArray, setPagesArray] = useState(null);

    useEffect(async () => {
        setIsLoading(true);
        const fetchByKeyword = async () => {
            let response = await fetch(SEARCH_BY_KEYWORD(searchQuery, pageQuery), {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'f876a4a1-43e5-45e4-bbab-4efbf24a5835',
                    'Content-Type': 'application/json',
                },
            });
            response = await response.json();
            setFilms(response.films);
            setActivePage(pageQuery);
            setTotalPages(response.pagesCount);
            setPagesArray(getPagesArray(response.pagesCount));
        };

        await fetchByKeyword();
        setIsLoading(false);
    }, [search, activePage]);

    useEffect(() => {
        if (totalPages === 0 && word) {
            setError('Ничего не найдено');
        }
        if (totalPages !== 0 && totalPages !== null) {
            setError('');
        }
        if (totalPages !== 0 && totalPages !== null && !word) {
            setWord(searchQuery);
        }
    }, [search, totalPages]);

    const params = {};

    const findFilm = (e) => {
        e.preventDefault();

        if (word) {
            params.keyword = e.target.searchInp.value;
            setSearchParams({ keyword: params.keyword, page: pageQuery });
            setSearch(!search);
        } else if (!word) {
            setError('Впишите название фильма');
            setSearchParams('');
            setFilms([]);
            setPagesArray(null);
        }
    };

    const Clean = () => {
        setTotalPages(null);
        setFilms([]);
        setSearchParams('');
        setWord('');
        setPagesArray(null);
        setError('');
        setActivePage(null);
    };

    return (
        <Wrapper>
            <SearchWrapper onSubmit={findFilm}>
                <Title>
                    {searchQuery
                        ? `Результат поиска по запросу: ${searchQuery}`
                        : `Искать фильм по названию :`}
                </Title>
                <Input
                    onChange={(event) => setWord(event.target.value)}
                    name="searchInp"
                    value={word}
                />
                <Button type="submit" isSucces disabled={isLoading}>
                    Искать
                </Button>
                {searchQuery && (
                    <Button onClick={Clean} type="button" isDelete>
                        Очистить
                    </Button>
                )}
            </SearchWrapper>

            <CardWrapper>{<FilmCardsList films={films} />}</CardWrapper>
            {isLoading && (
                <Loader>
                    <div className="loader"></div>
                </Loader>
            )}
            {error && <Error>{error}</Error>}

            <Pagination
                pagesArray={pagesArray}
                activePage={activePage}
                setActivePage={setActivePage}
                setSearchParams={setSearchParams}
                searchQuery={searchQuery}
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

const SearchWrapper = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0 3rem;
`;

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Error = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    background-color: red;
    color: #fff;
    font-size: var(--fz-sm);
    font-weight: var(--fw-normal);
    width: 250px;
    border-radius: var(--radii);
    box-shadow: var(--shadow);
`;