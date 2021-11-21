import React from 'react';
import styled from 'styled-components';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const links = [
    {
        title: 'Display type',
        list: [
            {
                name: 'home',
                link: '/',
            },
            {
                name: 'movies',
                link: '/movies',
            },
            {
                name: 'shows',
                link: '/shows',
            },
            {
                name: 'about',
                link: '/about',
            },
        ],
    },
    {
        title: 'two',
        list: [
            {
                name: 'home',
                link: '',
            },
            {
                name: 'movies',
                link: 'movies',
            },
            {
                name: 'shows',
                link: 'shows',
            },
            {
                name: 'about',
                link: 'about',
            },
        ],
    },
    {
        title: 'three',
        list: [
            {
                name: 'home',
                link: '',
            },
            {
                name: 'movies',
                link: 'movies',
            },
            {
                name: 'shows',
                link: 'shows',
            },
            {
                name: 'about',
                link: 'about',
            },
        ],
    },
    {
        title: 'four',
        list: [
            {
                name: 'home',
                link: '',
            },
            {
                name: 'movies',
                link: 'movies',
            },
            {
                name: 'shows',
                link: 'shows',
            },
            {
                name: 'about',
                link: 'about',
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
    return (
        <Wrap>
            <About>
                {/* <Logo></Logo> */}
                <div>Logo</div>
                <Slogan>
                    Here , write the complete address of the Registered office address along with
                    telephone number.
                </Slogan>
                <Social>
                    {social.map((s) => (
                        <SocialLink key={`${s.name}`} href={`${s.link}`}>
                            <SocialItem>{React.createElement(s.сomp, { size: '24px' })}</SocialItem>
                        </SocialLink>
                    ))}
                </Social>
            </About>
            {links.map((list, index) => (
                <List key={`${list.title}_${index}`}>
                    <ListTitle>{list.title}</ListTitle>
                    {list.list.map((link) => (
                        <ListLink key={`${link.name}`} to={link.link}>
                            <ListItem>{link.name}</ListItem>
                        </ListLink>
                    ))}
                </List>
            ))}
        </Wrap>
    );
};

const Wrap = styled.footer`
    padding: 3rem 3rem 4rem 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);

    @media (max-width: 456px) {
        flex-direction: column;
        padding: 2rem;
    }
`;
const About = styled.div`
    max-width: 400px;
`;
const Logo = styled.img``;
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
    margin: 0;
    padding: 0;
    @media (max-width: 456px) {
        margin-bottom: 1rem;
    }
`;

const ListTitle = styled.span`
    font-size: var(--fz-md);
    font-weight: var(--fw-bold);
    color: var(--colors-text);
`;

const ListItem = styled.li`
    font-size: var(--fz-md);
    font-weight: var(--fw-normal);
`;

const SocialLink = styled.a`
    text-decoration: none;
    color: var(--colors-text);
    transition: color 0.2s linear;

    &:hover {
        color: red;
    }
`;

const ListLink = styled(NavLink)`
    text-decoration: none;
    color: var(--colors-text);
    transition: color 0.2s linear;

    &:hover {
        color: red;
    }
`;
