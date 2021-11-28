import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Button } from '../components/Button';

export const Pagination = ({ pagesArray, activePage, setActivePage }) => {
    return (
        <Paginations>
            {pagesArray &&
                pagesArray.map((p, index) => (
                    <LinkItem to={`/search/${index + 1}`} key={p}>
                        <Button
                            isActive={activePage === index + 1 ? 'active' : ''}
                            onClick={() => setActivePage(index + 1)}>
                            {p}
                        </Button>
                    </LinkItem>
                ))}
        </Paginations>
    );
};

const Paginations = styled.div`
    margin: 2rem auto;
    display: flex;
`;

const LinkItem = styled(Link)`
    text-decoration: none;
    color: var(--colors-text);
`;
