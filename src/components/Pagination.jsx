import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';

export const Pagination = ({
    pagesArray,
    activePage,
    setActivePage,
    setSearchParams,
    searchQuery,
}) => {
    const handlePag = (index) => {
        setSearchParams({ keyword: searchQuery, page: index + 1 });
        setActivePage(index + 1);
    };

    return (
        <Paginations>
            {pagesArray &&
                pagesArray.map((p, index) => (
                    <Button
                        key={p}
                        isActive={+activePage === index + 1 ? 'active' : ''}
                        isDelete={+activePage === index + 1 ? true : false}
                        onClick={() => handlePag(index)}
                        margin=".5rem">
                        {p}
                    </Button>
                ))}
        </Paginations>
    );
};

const Paginations = styled.div`
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
