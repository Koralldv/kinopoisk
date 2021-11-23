import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { BreadCrumbs } from './BreadCrumbs';
import { Outlet } from 'react-router-dom';

const links = [
    {
        title: 'Главная',
        path: '',
    },
    {
        title: 'Фильмы',
        path: 'films',
    },
    {
        title: 'О нас',
        path: 'about',
    },
    {
        title: 'Контакты',
        path: 'contacts',
    },
];

export const Layout = () => {
    return (
        <>
            <Header links={links} />
            <BreadCrumbs />
            <Outlet />
            <Footer />
        </>
    );
};
