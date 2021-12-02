import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useMatch, useSearchParams } from 'react-router-dom';
import { TOP } from '../api/kinopoisk';
import { getPagesArray } from '../utils/pages';

import { FilmCardsList } from '../components/FilmCardsList';
import { Pagination } from '../components/Pagination';
import { Loader } from '../components/Loader';

export const Categories = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('keyword') || '';
    const pageQuery = searchParams.get('page') || 1;

    const matches = {};
    matches.top = useMatch('/films/top');
    matches.best = useMatch('/films/best');
    matches.popular = useMatch('/films/popular');

    const [activePage, setActivePage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [pagesArray, setPagesArray] = useState(null);
    const [films, setFilms] = useState(null);
    const [word, setWord] = useState(null);

    useEffect(() => {
        if (matches.top) {
            setWord('TOP_AWAIT_FILMS');
        } else if (matches.best) {
            setWord('TOP_100_POPULAR_FILMS');
        } else if (matches.popular) {
            setWord('TOP_250_BEST_FILMS');
        }
    }, [matches]);

    useEffect(() => {
        const fetchTop = async () => {
            setIsLoading(true);
            let response = await fetch(TOP(word, pageQuery), {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'f876a4a1-43e5-45e4-bbab-4efbf24a5835',
                    'Content-Type': 'application/json',
                },
            });
            response = await response.json();
            setFilms(response.films);
            setActivePage(pageQuery);
            setPagesArray(getPagesArray(response.pagesCount));
            setIsLoading(false);
        };
        fetchTop();
    }, [word, pageQuery]);

    return (
        <Wrapper>
            {isLoading && (
                <Loader>
                    <div className="loader"></div>
                </Loader>
            )}
            <CardWrapper>{films && !isLoading && <FilmCardsList films={films} />}</CardWrapper>

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

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
