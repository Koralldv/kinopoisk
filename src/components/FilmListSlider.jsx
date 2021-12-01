import React from 'react';
import styled from 'styled-components';

import { Slider } from './Slider';
import { SwiperSlide } from 'swiper/react';

import { Link } from 'react-router-dom';
export const FilmListSlider = ({
    filmList,
    path,
    title,
    sliderName,
    spaceBetween,
    slidesPerGroup,
    slidesPerView,
    breaks,
    pathAll,
    text,
}) => {
    return (
        <>
            {filmList && (
                <>
                    <TitleBlock>{title}</TitleBlock>
                    {pathAll && text && <FullPageLink to={pathAll}>{text}</FullPageLink>}
                    <Slider
                        sliderName={sliderName}
                        spaceBetween={spaceBetween}
                        slidesPerGroup={slidesPerGroup}
                        slidesPerView={slidesPerView}
                        breaks={breaks}>
                        <CardWrapper>
                            {filmList.map((item) => (
                                <SwiperSlide key={item.kinopoiskId || item.filmId}>
                                    <Card>
                                        <Cover src={item.posterUrlPreview} />
                                        <Link
                                            title={item.nameRu}
                                            to={`/${path}/${item.kinopoiskId || item.filmId}`}>
                                            <Title>{item.nameRu}</Title>
                                        </Link>
                                        <List>
                                            <Year>{item.year}</Year>
                                            {item.genres.map((g, index) => (
                                                <Genre key={`${g.genre}_${index}`}>{g.genre}</Genre>
                                            ))}
                                        </List>
                                    </Card>
                                </SwiperSlide>
                            ))}
                        </CardWrapper>
                        <PaginationBlock className="swiper-paginations"></PaginationBlock>
                    </Slider>
                </>
            )}
        </>
    );
};

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const TitleBlock = styled.h3`
    color: var(--colors-text);
    font-size: var(--fz-xl);
    font-weight: var(--fw-bold);
    margin: 0;
    text-transform: capitalize;
`;

const FullPageLink = styled(Link)`
    text-decoration: none;
    color: var(--colors-text);
    font-size: var(--fz-sm);
    font-weight: var(--fw-bold);
`;

const Card = styled.div`
    width: 100%;
    height: 420px;
    margin: 2rem 0 1rem;
    border-radius: var(--radii);
    box-shadow: var(--shadow);
`;
const Cover = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`;
const Title = styled.h3`
    color: var(--colors-text);
    font-weight: var(--fw-bold);
    font-size: 13px;
    margin: 1.3rem 0.5rem 1rem 0.5rem;
    text-transform: uppercase;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    transition: color 0.2s linear;

    &:hover {
        color: red;
    }
`;
const List = styled.ul`
    list-style: none;
    margin: 0 0.5rem 1rem;
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
// const Age = styled.li`
//     margin: 0 1rem 0 0;
//     padding: 0;
//     font-size: var(--fz-sm);
//     font-weight: var(--fw-normal);
//     color: var(--colors-text);
//     opacity: 0.6;
// `;

const Genre = styled.li`
    margin: 0 1rem 0 0;
    padding: 0;
    font-size: var(--fz-sm);
    font-weight: var(--fw-normal);
    color: var(--colors-text);
    opacity: 0.6;
    text-transform: capitalize;
`;

const PaginationBlock = styled.div`
    text-align: center;
    margin-bottom: 4rem;
`;
