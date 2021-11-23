import React from 'react';
import styled from 'styled-components';

import { Button } from './Button';

export const Join = () => {
    return (
        <Wrapper>
            <Img src="https://excellencetheme.com/templates/avastream/images/about/05.png" />
            <Info>
                <Title>And If You Join the Experience?</Title>
                <Description>
                    True friendship is perhaps the only relation that survives the trials and
                    tribulations of time and remains unconditional. A unique blend of affection,
                    loyalty, love, respect, trust and loads of fun is perhaps what describes the
                    true meaning of friendship. Similar interests, mutual respect and strong
                    attachment with each other are what friends share between each other. These are
                    just the general traits of a friendship. To experience what is friendship, one
                    must have true friends, who are indeed rare treasure.
                </Description>
                <Button>Подписка</Button>
            </Info>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin: 3rem auto;
    width: 80%;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    @media (max-width: 425px) {
        margin: 2rem 2rem;
    }
`;
const Img = styled.img`
    margin-right: 2rem;
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
        margin: 0 0 2rem 0;
    }
`;
const Info = styled.div``;
const Title = styled.h2`
    font-size: var(--fz-xl);
    color: var(--colors-text);
    margin: 0 0 1rem 0;
    padding: 0;
    word-wrap: break-word;
`;
const Description = styled.p`
    font-size: var(--fz-md);
    color: var(--colors-text);
    margin: 0;
    padding: 0;
    word-wrap: break-word;
`;
