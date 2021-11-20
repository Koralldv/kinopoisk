import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { BreadCrumbs } from './BreadCrumbs';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <Header />
            <BreadCrumbs />
            <Outlet />
            <Footer />
        </>
    );
};
