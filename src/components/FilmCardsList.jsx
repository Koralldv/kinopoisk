import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const FilmCardsList = ({ films }) => {
    return (
        <>
            {films &&
                films.map((f) => (
                    <Card key={f.filmId} films={films}>
                        <Cover src={f.posterUrlPreview} />
                        <Link title={f.nameRu} to={`/films/${f.filmId}`}>
                            <CardTitle>{f.nameRu}</CardTitle>
                        </Link>
                        <List>
                            <Year>год: {f.year}</Year>
                            <GenreWrapper>
                                {f.genres.map((g, index) => (
                                    <Genre key={`${g.genre}_${index}`}>{g.genre}</Genre>
                                ))}
                            </GenreWrapper>
                        </List>
                    </Card>
                ))}
        </>
    );
};

const Card = styled.div`
    width: 250px;
    margin: 1rem 0;
    border-radius: var(--radii);
    box-shadow: var(--shadow);
    overflow: hidden;
    background-color: var(--colors-ui-base);

    @media (min-width: 596px) {
        margin: 1rem 1rem 1rem 0;
    }

    @media (min-width: 846px) {
        &:nth-child(3n) {
            margin-right: 0;
        }
    }

    @media (min-width: 1112px) {
        &:nth-child(3n) {
            margin-right: 1rem;
        }
        &:nth-child(4n) {
            margin-right: 0;
        }
    }

    @media (min-width: 1378px) {
        &:nth-child(4n) {
            margin-right: 1rem;
        }
        &:nth-child(5n) {
            margin-right: 0;
        }
    }

    @media (min-width: 1112px) {
        &:last-child {
            margin-left: ${(props) =>
                props.films && props.films.length % 4 && props.films.length % 5 !== 0 && '2rem'};
        }
    }
`;
const Cover = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`;
const CardTitle = styled.h3`
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
        color: var(--active-color);
    }
`;
const List = styled.ul`
    list-style: none;
    margin: 0 0.5rem 1rem;
    padding: 0;
    display: flex;
    flex-direction: column;
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

const GenreWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-button: 1rem;
`;

const Genre = styled.li`
    margin: 0 1rem 0 0;
    padding: 0;
    font-size: var(--fz-sm);
    font-weight: var(--fw-normal);
    color: var(--colors-text);
    opacity: 0.6;
    text-transform: capitalize;
`;
