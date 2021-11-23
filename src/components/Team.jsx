import React from 'react';
import styled from 'styled-components';

const team = [
    {
        img: 'https://excellencetheme.com/templates/avastream/images/about/01.jpg',
        name: 'Tonny Smith',
        position: 'сео',
    },
    {
        img: 'https://excellencetheme.com/templates/avastream/images/about/02.jpg',
        name: 'Barry Tech',
        position: 'дизайнер',
    },

    {
        img: 'https://excellencetheme.com/templates/avastream/images/about/03.jpg',
        name: 'Kep John',
        position: 'разработчик',
    },
    {
        img: 'https://excellencetheme.com/templates/avastream/images/about/04.jpg',
        name: 'Monty Rock',
        position: 'дизайнер',
    },
];

export const Team = () => {
    return (
        <Wrapper>
            <Title>наша команда</Title>
            <Teams>
                {team.map((t) => (
                    <TeamsItem key={t.name}>
                        <ImgWrapper>
                            <Img src={t.img} />
                        </ImgWrapper>
                        <Name>{t.name}</Name>
                        <Position>{t.position}</Position>
                    </TeamsItem>
                ))}
            </Teams>
        </Wrapper>
    );
};

const Wrapper = styled.div`
padding: 3rem;
    background-color: var(--colors-bg);
    @media (max-width: 425px) {
        padding: 3rem 2rem;`;

const Title = styled.h2`
    color: var(--colors-text);
    font-size: var(--fz-xl);
    font-weight: var(--fw-bold);
    padding: 0;
    margin: 0 0 2rem 0;
    text-transform: uppercase;
`;

const Teams = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
`;
const TeamsItem = styled.div`
    width: 100%;
    margin: 1rem;
    max-width: 250px;
    border-radius: var(--radii);
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);

    &:hover img {
        transform: scale(1.3);
        transition: transform 0.8s linear;
    }
`;
const ImgWrapper = styled.div`
    overflow: hidden;
    border-radius: var(--radii) var(--radii) 0 0;
`;
const Img = styled.img`
    width: 100%;
`;
const Name = styled.span`
    color: var(--colors-text);
    font-size: var(--fz-xl);
    font-weight: var(--fw-bold);
    padding: 0;
    margin: 1rem 0 0.5rem 1rem;
    display: block;
`;
const Position = styled.span`
    color: var(--colors-text);
    font-size: var(--fz-md);
    font-weight: var(--fw-normal);
    padding: 0;
    margin: 0 0 1rem 1rem;
    display: block;
`;
