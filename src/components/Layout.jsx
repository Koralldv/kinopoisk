import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { BreadCrumbs } from './BreadCrumbs';
import { Outlet } from 'react-router-dom';

import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io5';

const links = [
    {
        title: 'Главные',
        list: [
            {
                name: 'Главная',
                path: '/',
            },
            {
                name: 'Фильмы',
                path: '/films',
            },
            {
                name: 'О нас',
                path: '/about',
            },
            {
                name: 'Контакты',
                path: '/contacts',
            },
        ],
    },
    {
        title: 'Подборки',
        list: [
            {
                name: 'Топ ожидаемых',
                path: '/films/top',
            },
            {
                name: 'Топ 250 лучших',
                path: '/films/best',
            },
            {
                name: 'Топ 100 популярных',
                path: '/films/popular',
            },
        ],
    },
];

const social = [
    {
        name: 'Facebook',
        сomp: IoLogoFacebook,
        link: '/',
    },
    {
        name: 'Twitter',
        сomp: IoLogoTwitter,
        link: '/',
    },
    {
        name: 'Instagram',
        сomp: IoLogoInstagram,
        link: '/',
    },
    {
        name: 'Youtube',
        сomp: IoLogoYoutube,
        link: '/',
    },
];

export const Layout = () => {
    return (
        <>
            <Header links={links} social={social} />
            <BreadCrumbs />
            <Outlet />
            <Footer links={links} social={social} />
        </>
    );
};
