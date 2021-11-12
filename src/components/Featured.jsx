import styled from 'styled-components';
import React from 'react';

export const Featured = () => {
    return (
        <Wrapper>
            {FeaturedList.map((item, index) => (
                <Card key={`${item}_${index}`}>
                    <Cover src={item.img} />
                    <a href="#">
                        <Title>{item.title}</Title>
                    </a>
                    {item.list.map((item, index) => (
                        <List key={`${item}_${index}`}>
                            <Year>{item.year}</Year>
                            <Age>+{item.age}</Age>
                            <Genre>{item.genre}</Genre>
                        </List>
                    ))}
                </Card>
            ))}
        </Wrapper>
    );
};

const FeaturedList = [
    {
        title: 'iron door',
        img: 'https://excellencetheme.com/templates/avastream/images/play-page/01.jpg',
        list: [
            {
                year: '2021',
                age: 18,
                genre: 'action',
            },
        ],
    },
    {
        title: 'iron door',
        img: 'https://excellencetheme.com/templates/avastream/images/play-page/01.jpg',
        list: [
            {
                year: '2021',
                age: 18,
                genre: 'action',
            },
        ],
    },
    {
        title: 'iron door',
        img: 'https://excellencetheme.com/templates/avastream/images/play-page/01.jpg',
        list: [
            {
                year: '2021',
                age: 18,
                genre: 'action',
            },
        ],
    },
    {
        title: 'iron door',
        img: 'https://excellencetheme.com/templates/avastream/images/play-page/01.jpg',
        list: [
            {
                year: '2021',
                age: 18,
                genre: 'action',
            },
        ],
    },
    {
        title: 'iron door',
        img: 'https://excellencetheme.com/templates/avastream/images/play-page/01.jpg',
        list: [
            {
                year: '2021',
                age: 18,
                genre: 'action',
            },
        ],
    },
    {
        title: 'iron door',
        img: 'https://excellencetheme.com/templates/avastream/images/play-page/01.jpg',
        list: [
            {
                year: '2021',
                age: 18,
                genre: 'action',
            },
        ],
    },
];

const Wrapper = styled.div`
    width: 100%;
    padding: 6rem 2rem;
    background-color: var(--bg-color);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Card = styled.div`
    width: 100%;
    max-width: 220px;
    @media (max-width: 426px) {
        max-width: calc(45%);
        margin-bottom: 2rem;
    }
`;
const Cover = styled.img`
    width: 100%;
`;
const Title = styled.h3`
    color: var(--colors-text);
    font-weight: var(--fw-bold);
    font-size: var(--fz-md);
    margin: 1.3rem 0 1rem 0;
    text-transform: uppercase;
`;
const List = styled.ul`
    list-style: none;
    margin: 0;
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
const Age = styled.li`
    margin: 0 1rem 0 0;
    padding: 0;
    font-size: var(--fz-sm);
    font-weight: var(--fw-normal);
    color: var(--colors-text);
    opacity: 0.6;
`;
const Genre = styled.li`
    margin: 0;
    padding: 0;
    font-size: var(--fz-sm);
    font-weight: var(--fw-normal);
    color: var(--colors-text);
    opacity: 0.6;
    text-transform: capitalize;
`;
