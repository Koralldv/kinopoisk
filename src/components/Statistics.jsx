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
    padding: 3rem;
    background-color: var(--colors-bg);
    @media (max-width: 425px) {
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
    margin: 0 auto;
    padding: 0;
    display: flex;
    justify-content: space-between;
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
        margin: 0 0 2rem 0;
    }
`;
const StatItem = styled.li`
    display: flex;
    flex-direction: column;
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
