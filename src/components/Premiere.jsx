import styled from 'styled-components';
import React, { useEffect } from 'react';
import { Loader } from './Loader';
import { PREMIERE } from '../api/kinopoisk';
import { FilmListSlider } from './FilmListSlider';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPremiere } from '../store/premierSlice';

export const Premiere = () => {
    const { premiereList, status, error } = useSelector((state) => state.premier);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPremiere({ name: PREMIERE }));
    }, [dispatch]);

    return (
        <Wrapper>
            {status === 'loading' && (
                <Loader>
                    <div className="loader"></div>
                </Loader>
            )}

            <FilmListSlider
                filmList={premiereList.items}
                path="films"
                title="премьеры"
                sliderName="premieres"
                spaceBetween={0}
                slidesPerGroup={1}
                slidesPerView={1}
                breaks={{
                    550: {
                        spaceBetween: 20,
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    768: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                    1024: {
                        spaceBetween: 20,
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    },
                    1180: {
                        spaceBetween: 20,
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                    },
                    1366: {
                        spaceBetween: 20,
                        slidesPerView: 6,
                        slidesPerGroup: 6,
                    },
                }}></FilmListSlider>

            {error && error}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    padding: 6rem 1rem;
    background-color: var(--bg-color);

    @media (min-width: 725px) {
        padding: 6rem 2rem;
    }
`;
