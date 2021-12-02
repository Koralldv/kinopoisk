import styled from 'styled-components';
import React from 'react';

export const Statistics = ({ stats }) => {
    return (
        <Wrapper>
            <Title>наша статистика</Title>
            <StatList>
                {stats.map((stat) => (
                    <StatItem key={stat.title}>
                        <Icon>
                            {React.createElement(stat.сomp, { size: '55px', color: 'red' })}
                        </Icon>
                        <Amount>{stat.amount}</Amount>
                        <ItemTitle>{stat.title}</ItemTitle>
                    </StatItem>
                ))}
            </StatList>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 3rem 1rem;
    background-color: var(--colors-bg);
    @media (min-width: 425px) {
        padding: 3rem 2rem;
    }
`;

const Title = styled.h2`
    color: var(--colors-text);
    font-size: var(--fz-xl);
    font-weight: var(--fw-bold);
    padding: 0;
    margin: 0 0 2rem 0;
    text-transform: uppercase;
`;
const StatList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin: 0 0 2rem 0;
    @media (min-width: 768px) {
        flex-direction: row;
        margin: 0 auto;
        width: 50%;
    }
`;
const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    @media (min-width: 768px) {
        margin: 0;
    }
`;
const Icon = styled.i`
    margin: 0 auto;
`;
const Amount = styled.span`
    color: var(--colors-text);
    font-size: var(--fz-xl);
    font-weight: var(--fw-bold);
    text-align: center;
    margin: 1rem 0;
`;
const ItemTitle = styled.span`
    color: var(--colors-text);
    font-size: var(--fz-md);
    font-weight: var(--fw-normal);
    text-align: center;
`;
