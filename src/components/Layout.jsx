import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { BreadCrumbs } from './BreadCrumbs';
import { Outlet } from 'react-router-dom';

const links = [
    {
        title: 'home',
        path: '',
    },
    {
        title: 'films',
        path: 'films',
    },
    {
        title: 'about',
        path: 'about',
    },
    {
        title: 'contacts',
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
