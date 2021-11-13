import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { PREMIERE } from '../api/kinopios';
import { Link } from 'react-router-dom';

export const Featured = () => {
    const [premieres, setPremieres] = useState(NaN);

    useEffect(() => {
        fetch(PREMIERE, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'f876a4a1-43e5-45e4-bbab-4efbf24a5835',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((json) => setPremieres(json))
            .catch((err) => console.log(err));
    }, []);

    return (
        <Wrapper>
            <TitleBlock>Премьеры</TitleBlock>
            {console.log(premieres.items, premieres)}
            <CardWrapper>
                {premieres &&
                    premieres.items.map((item) => (
                        <Card key={item.kinopoiskId}>
                            <Cover src={item.posterUrlPreview} />
                            <Link to={`/film/${item.kinopoiskId}`}>
                                <Title>{item.nameRu}</Title>
                            </Link>
                            <List>
                                <Year>{item.year}</Year>
                                {item.genres.map((g) => (
                                    <Genre>{g.genre}</Genre>
                                ))}
                            </List>
                        </Card>
                    ))}
            </CardWrapper>
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
    font-size: var(--fz-sm);
    margin: 1.3rem 0.5rem 1rem 0.5rem;
    text-transform: uppercase;
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
