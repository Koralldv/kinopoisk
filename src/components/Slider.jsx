import React from 'react';
import { Swiper } from 'swiper/react';
import { Arrow } from '../components/Arrow';
import { IoArrowForwardOutline, IoArrowBack } from 'react-icons/io5';

export const Slider = ({
    children,
    sliderName,
    spaceBetween,
    slidesPerGroup,
    slidesPerView,
    breaks,
}) => {
    return (
        <Swiper
            spaceBetween={spaceBetween}
            slidesPerGroup={slidesPerGroup}
            slidesPerView={slidesPerView}
            pagination={{
                el: '.swiper-paginations',
            }}
            navigation={{
                nextEl: `.${sliderName}__next`,
                prevEl: `.${sliderName}__prev`,
            }}
            breakpoints={breaks}
            onSwiper={(swiper) => console.log(swiper)}>
            <Arrow left className={`${sliderName}__prev`} main={sliderName}>
                <IoArrowBack size="22px" />
            </Arrow>
            <Arrow right className={`${sliderName}__next`} main={sliderName}>
                <IoArrowForwardOutline size="22px" />
            </Arrow>
            {children}
        </Swiper>
    );
};
