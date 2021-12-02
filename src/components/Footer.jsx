import React from 'react';
import styled from 'styled-components';
import {
    IoLogoFacebook,
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoYoutube,
    IoArrowForwardOutline,
} from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const links = [
    {
        title: 'Главные',
        list: [
            {
                name: 'Главная',
                link: '/',
            },
            {
                name: 'Фильмы',
                link: '/films',
            },
            {
                name: 'О нас',
                link: '/about',
            },
            {
                name: 'Контакты',
                link: '/contacts',
            },
        ],
    },
    {
        title: 'Подборки',
        list: [
            {
                name: 'Топ ожидаемых',
                link: '/films/top',
            },
            {
                name: 'Топ 250 лучших',
                link: '/films/best',
            },
            {
                name: 'Топ 100 популярных',
                link: '/films/top',
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

export const Footer = () => {
    const setActive = ({ isActive }) => (isActive ? 'activeLinkNav' : 'notActiveLinkNav');
    return (
        <Wrap>
            <Nav>
                {links.map((list, index) => (
                    <List key={`${list.title}_${index}`}>
                        <ListTitle>{list.title}</ListTitle>
                        {list.list.map((link) => (
                            <NavLink key={`${link.name}`} className={setActive} to={link.link}>
                                <ListLink>
                                    <ListItem>{link.name}</ListItem>
                                    <IoArrowForwardOutline size="12px" />
                                </ListLink>
                            </NavLink>
                        ))}
                    </List>
                ))}
            </Nav>
            <About>
                {/* <Logo></Logo> */}
                <div>Logo</div>
                <Slogan>Кино только начинается…</Slogan>
                <Social>
                    {social.map((s) => (
                        <SocialLink key={`${s.name}`} title={s.name} href={`${s.link}`}>
                            <SocialItem>{React.createElement(s.сomp, { size: '24px' })}</SocialItem>
                        </SocialLink>
                    ))}
                </Social>
            </About>
        </Wrap>
    );
};

const Wrap = styled.footer`
    padding: 3rem 3rem 4rem 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);

    @media (max-width: 456px) {
        flex-direction: column;
        padding: 2rem;
    }
`;

const Nav = styled.div`
    display: flex;
`;

const About = styled.div`
    max-width: 400px;
`;
// const Logo = styled.img``;
const Slogan = styled.span`
    font-size: var(--fz-md);
    font-weight: var(--fw-normal);
    color: var(--colors-text);
`;
const Social = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    margin: 1rem 0;
`;
const SocialItem = styled.li`
    margin-right: 1rem;
`;
const List = styled.ul`
    list-style: none;
    margin: 0 2rem 0 0;
    padding: 0;
    @media (max-width: 456px) {
        margin-bottom: 1rem;
    }
`;

const ListTitle = styled.span`
    font-size: var(--fz-md);
    font-weight: var(--fw-bold);
    color: var(--colors-text);
    display: block;
    margin-bottom: 0.5rem;
`;

const ListItem = styled.li`
    font-size: var(--fz-md);
    font-weight: var(--fw-normal);
    margin: 0 0.5rem 0.2rem 0;
`;

const SocialLink = styled.a`
    text-decoration: none;
    color: var(--colors-text);
    transition: color 0.2s linear;

    &:hover {
        color: red;
    }
`;

const ListLink = styled.span`
    text-decoration: none;
    transition: color 0.2s linear;
    display: flex;
    align-items: center;

    &:hover {
        color: red;
    }
`;
