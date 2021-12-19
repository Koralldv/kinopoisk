import React from 'react';
import styled from 'styled-components';

import { Slider } from './Slider';
import { SwiperSlide } from 'swiper/react';
import { Button } from './Button';

import { IoArrowForwardOutline, IoHeartSharp } from 'react-icons/io5';

import { useDispatch, useSelector } from 'react-redux';
import { addFilm } from '../store/likeSlice';

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
    const dispatch = useDispatch();
    const { likeList } = useSelector((state) => state.like);

    const handleLike = (id) => {
        dispatch(addFilm(id));
    };

    return (
        <>
            {filmList && (
                <>
                    <Top>
                        <TitleBlock>{title}</TitleBlock>
                        {pathAll && text && (
                            <FullPageLink to={pathAll}>
                                <Button icon={IoArrowForwardOutline} padding="left">
                                    {text}
                                </Button>
                            </FullPageLink>
                        )}
                    </Top>

                    <Slider
                        sliderName={sliderName}
                        spaceBetween={spaceBetween}
                        slidesPerGroup={slidesPerGroup}
                        slidesPerView={slidesPerView}
                        breaks={breaks}>
                        <CardWrapper>
                            {filmList &&
                                filmList.map((item) => (
                                    <SwiperSlide key={item.kinopoiskId || item.filmId}>
                                        <Card>
                                            <Cover src={item.posterUrlPreview} />
                                            <Link
                                                title={item.nameRu}
                                                to={`/${path}/${item.kinopoiskId || item.filmId}`}>
                                                <Title>{item.nameRu}</Title>
                                            </Link>
                                            <List>
                                                <Year>
                                                    <ListTitle>Год:</ListTitle>
                                                    <Genre>{item.year}</Genre>
                                                </Year>

                                                <GenreWrapper>
                                                    <ListTitle>Жанр:</ListTitle>
                                                    {item.genres.map((g, index) => (
                                                        <Genre key={`${g.genre}_${index}`}>
                                                            {g.genre}
                                                        </Genre>
                                                    ))}
                                                </GenreWrapper>
                                            </List>

                                            <Like
                                                className={
                                                    likeList.includes(
                                                        item.kinopoiskId || item.filmId,
                                                    )
                                                        ? 'active'
                                                        : ''
                                                }
                                                onClick={() =>
                                                    handleLike(item.kinopoiskId || item.filmId)
                                                }>
                                                <IoHeartSharp size="32px" />
                                            </Like>
                                        </Card>
                                    </SwiperSlide>
                                ))}
                        </CardWrapper>
                        {/* <PaginationBlock className="swiper-paginations"></PaginationBlock> */}
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
    background-color: var(--colors-bg);
    box-shadow: var(--shadow);
`;

const TitleBlock = styled.h3`
    color: var(--colors-text);
    font-size: var(--fz-xl);
    font-weight: var(--fw-bold);
    margin: 0 1rem 0 0;
    text-transform: capitalize;
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        align-items: center;
        flex-direction: row;
    }
`;

const FullPageLink = styled(Link)`
    text-decoration: none;
    color: var(--colors-text);
    font-size: var(--fz-sm);
    font-weight: var(--fw-bold);
`;

const Card = styled.div`
    width: 100%;
    max-width: 250px;
    height: auto;
    padding: 0 0 0.5rem;
    margin: 2rem auto 4rem auto;
    border-radius: var(--radii);
    box-shadow: var(--shadow);
    position: relative;
`;

const Cover = styled.img`
    width: 100%;
    height: 350px;
    object-fit: cover;
`;

const Title = styled.h3`
    color: var(--colors-text);
    font-weight: var(--fw-bold);
    font-size: 13px;
    margin: 1.3rem 0rem 1rem 1rem;
    text-transform: uppercase;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    transition: color 0.2s linear;

    &:hover {
        color: var(--active-color);
    }
`;

const List = styled.ul`
    list-style: none;
    margin: 0 1rem 1rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;
const Year = styled.li`
    display: flex;
    margin: 0;
    padding: 0;
    font-size: var(--fz-sm);
    font-weight: var(--fw-normal);
    color: var(--colors-text);
`;

const GenreWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0.2rem 0 0 0;
    font-size: var(--fz-sm);
    font-weight: var(--fw-normal);
    color: var(--colors-text);
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
    opacity: 0.6;
`;

// const PaginationBlock = styled.div`
//     text-align: center;
//     margin-bottom: 4rem;
// `;

const Like = styled.i`
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #eee;
    cursor: pointer;

    &.active {
        color: var(--active-color);
    }
`;

const ListTitle = styled.div`
    font-size: var(--fz-sm);
    font-weight: var(--fw-bold);
    color: var(--active-color);
    padding: 0 0.5rem 0 0;
`;
