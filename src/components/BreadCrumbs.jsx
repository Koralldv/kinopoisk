import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useParams, useMatch, Link, useNavigate } from 'react-router-dom';
import { SINGLE_FILM } from '../api/kinopoisk';
import { Button } from '../components/Button';

export const BreadCrumbs = () => {
    const homeMatches = useMatch('/');
    const filmsMatches = useMatch('/films');
    const filmMatches = useMatch('/films/:filmId');

    const { filmId } = useParams();
    const navigate = useNavigate();

    const [film, setFilm] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async () => {
        setIsLoading(false);

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
            setIsLoading(true);
        };
        fetchSingleFilm();
    }, [filmId]);
    return (
        <>
            {!homeMatches && (
                <Breadcrumbs>
                    <Button onClick={() => navigate(-1)}>Назад</Button>
                    <LinkItem to="/">Home</LinkItem>
                    {filmsMatches ? <PageName>Films</PageName> : ''}
                    {filmMatches && (
                        <>
                            <LinkItem to="/films">Films</LinkItem>
                            <PageName>{isLoading === true ? film.nameOriginal : ''}</PageName>
                        </>
                    )}
                </Breadcrumbs>
            )}
        </>
    );
};

const LinkItem = styled(Link)`
    margin-right: 1rem;
    color: var(--colors-text);
    text-decoration: none;
    font-size: var(--fz-md);
    font-weight: var(--fw-normal);
    border-bottom: 2px solid var(--colors-text);
`;

const PageName = styled.span`
    color: red;
    font-size: var(--fz-md);
    font-weight: var(--fw-small);
`;

const Breadcrumbs = styled.div`
    margin: 5rem 0 0 3rem;
    & :first-child {
        margin-right: 2rem;
    }
`;
