import React from 'react';
import styled from 'styled-components';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';

export const Footer = ({ links, social }) => {
    const setActive = ({ isActive }) => (isActive ? 'activeLinkNav' : 'notActiveLinkNav');
    return (
        <Wrap>
            <Nav>
                {links &&
                    links.map((list, index) => (
                        <List key={`${list.title}_${index}`}>
                            <ListTitle>{list.title}</ListTitle>
                            {list.list.map((link) => (
                                <NavLink key={`${link.name}`} className={setActive} to={link.path}>
                                    <ListLink>
                                        <ListItem>{link.name}</ListItem>
                                        <Icon>
                                            <IoArrowForwardOutline size="12px" />
                                        </Icon>
                                    </ListLink>
                                </NavLink>
                            ))}
                        </List>
                    ))}
            </Nav>
            <About>
                <LogoWrap>
                    <Logo src={logo} />
                </LogoWrap>
                <Slogan>KINODOMA</Slogan>
                <Social>
                    {social.map((s) => (
                        <SocialLink key={`${s.name}`} title={s.name} href={`${s.link}`}>
                            <SocialItem>{React.createElement(s.сomp, { size: '32px' })}</SocialItem>
                        </SocialLink>
                    ))}
                </Social>
            </About>
        </Wrap>
    );
};

const Wrap = styled.footer`
    padding: 2rem 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    flex-direction: column;
    justify-content: flex-end;

    @media (min-width: 689px) {
        justify-content: space-between;
    }

    @media (min-width: 456px) {
        flex-direction: row-reverse;
        padding: 3rem 2rem;
    }
`;

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 320px;
`;

const About = styled.div`
    max-width: 320px;
    width: 100%;
`;

const LogoWrap = styled.div`
    width: 64px;
    height: 64px;
    margin: 2rem 0 0.5rem;
    @media (min-width: 689px) {
        margin: 0 0 0.5rem;
    }

    @media (min-width: 768px) {
        margin: 0 0 0.5rem;
    }
`;

const Logo = styled.img`
    width: 100%;
`;

const Slogan = styled.span`
    font-size: var(--fz-xl);
    font-weight: var(--fw-bold);
    color: var(--colors-text);
`;
const Social = styled.ul`
    list-style: none;
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
`;

const Icon = styled.i`
    display: flex;
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
    margin: 0 0.5rem 0 0;
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
    width: max-content;
    margin-bottom: 0.2rem;

    &:hover {
        color: red;
    }
`;
