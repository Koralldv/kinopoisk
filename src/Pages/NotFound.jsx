import React from 'react';
import styled from 'styled-components';

import { IoSkullSharp } from 'react-icons/io5';

export const NotFound = () => {
    return (
        <Wrapper>
            <IoSkullSharp size="250px" />
            <Title>404.</Title>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    text-align: center;
    margin: 3rem auto;
`;

const Title = styled.h2``;
