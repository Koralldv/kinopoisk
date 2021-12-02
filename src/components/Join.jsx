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
    margin: 0 auto;
    padding: 3rem 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: linear-gradient(to right, rgb(12, 21, 26), rgba(0, 0, 0, 0.69)),
        url('https://excellencetheme.com/templates/avastream/images/parallax/about.jpg');
    background-attachment: fixed;
    @media (min-width: 768px) {
        flex-direction: row;
        padding: 3rem 2rem;
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
    color: #fff;
    margin: 0 0 1rem 0;
    padding: 0;
    word-wrap: break-word;
`;
const Description = styled.p`
    font-size: var(--fz-md);
    color: #fff;
    margin: 0;
    padding: 0;
    word-wrap: break-word;
`;
