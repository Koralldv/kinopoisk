import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { IoSearchSharp, IoMoon, IoMoonOutline, IoPerson, IoReorderFour } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

import logo from '../img/logo.png';
import { useSelector } from 'react-redux';

export const Header = ({ links, social }) => {
    const { likeList } = useSelector((state) => state.like);
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        setTriggerBurger(false);
    };

    const [triggerBurger, setTriggerBurger] = useState(false);

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    const [widthScreen, setWidthScreen] = useState(null);

    useEffect(() => {
        setWidthScreen(window.innerWidth);
        function handleResize(e) {
            setWidthScreen(e.currentTarget.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const setActive = ({ isActive }) => (isActive ? 'activeLink' : 'notActiveLink');

    return (
        <Wrapper>
            <Head>
                {widthScreen <= 767 && (
                    <Burger onClick={() => setTriggerBurger(!triggerBurger)}>
                        <IoReorderFour size="28px" />
                    </Burger>
                )}

                {widthScreen > 767 || triggerBurger ? (
                    <Menu>
                        {links &&
                            links[0].list.map((link) => (
                                <NavLink
                                    key={`${link.name}`}
                                    className={setActive}
                                    to={`${link.path}`}
                                    onClick={() => setTriggerBurger(false)}>
                                    <MenuItem>{`${link.name}`}</MenuItem>
                                </NavLink>
                            ))}
                        <LogoWrap>
                            <Logo src={logo} />
                        </LogoWrap>
                        <Slogan>KINODOMA</Slogan>
                        <Social>
                            {social.map((s) => (
                                <SocialLink key={`${s.name}`} title={s.name} href={`${s.link}`}>
                                    <SocialItem>
                                        {React.createElement(s.сomp, { size: '32px' })}
                                    </SocialItem>
                                </SocialLink>
                            ))}
                        </Social>{' '}
                    </Menu>
                ) : (
                    ''
                )}
                <SideMenu>
                    <NavLink
                        to="/search"
                        onClick={() => setTriggerBurger(false)}
                        className={setActive}>
                        <MenuItem>
                            <IoSearchSharp size="20px" />
                        </MenuItem>
                    </NavLink>
                    <NavLink to="/cabinet" className={setActive} style={{ position: 'relative' }}>
                        <MenuItem>
                            <IoPerson size="20px" />
                            <TotalLike>{likeList.length > 0 && likeList.length}</TotalLike>
                        </MenuItem>
                    </NavLink>
                    <MenuItem onClick={toggleTheme}>
                        <ModeSwitcher>
                            {theme === 'light' ? (
                                <IoMoonOutline size="20px" />
                            ) : (
                                <IoMoon size="20px" />
                            )}
                        </ModeSwitcher>
                    </MenuItem>
                </SideMenu>
            </Head>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 0;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    z-index: 9999;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    @media (min-width: 767px) {
        padding: 0 2rem;
    }
`;

const Head = styled.header`
    background-color: var(--colors-ui-basebg);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 768px) {
        justify-content: space-between;
        flex-direction: row;
    }
`;

const Burger = styled.span`
    color: #fff;
    background-color: red;
    height: 64px;
    width: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    position: fixed;
    box-shadow: var(--shadow);
`;

const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    padding: 86px 0 0 0;
    width: 100vw;
    height: 100vh;
    max-height: auto;
    overflow: auto;

    @media (min-width: 768px) {
        height: auto;
        margin: 0;
        padding-top: 0;
        flex-direction: row;
        align-items: center;
    }
`;

const MenuItem = styled.li`
    padding: 0 1rem;
    justify-content: center;
    height: 64px;
    min-width: 64px;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: background 0.2s;
    font-weight: var(--fw-normal);

    &: hover {
        background-color: red;
        color: #fff;
        svg {
            color: #fff;
        }
    }
`;

const SideMenu = styled.div`
    display: flex;
    list-style: none;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    background-color: var(--colors-bg);
    position: absolute;
    right: 0;
    left: 64px;
    box-shadow: var(--shadow);
    @media (min-width: 768px) {
        position: relative;
        box-shadow: none;
        right: auto;
        left: auto;
        background-color: var(--colors-ui-base);
    }
`;

const ModeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    font-weight: var(--fw-bold);
    text-transform: capitalize;
`;

const LogoWrap = styled.div`
    width: 64px;
    height: 64px;
    margin: 1rem auto 0;

    @media (min-width: 768px) {
        display: none;
    }
`;

const Logo = styled.img`
    width: 100%;
`;

const Slogan = styled.span`
    font-size: var(--fz-xl);
    font-weight: var(--fw-bold);
    color: var(--colors-text);
    text-align: center;
    margin: 0.5rem auto 1rem;

    @media (min-width: 768px) {
        display: none;
    }
`;
const Social = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    @media (min-width: 768px) {
        display: none;
    }
`;
const SocialItem = styled.li`
    padding: 1rem;
    @media (min-width: 768px) {
        display: none;
    }
`;

const SocialLink = styled.a`
    text-decoration: none;
    color: var(--colors-text);
    transition: color 0.2s linear;

    &:hover {
        color: red;
    }
`;

const TotalLike = styled.span`
    font-size: var(--fz-sm);
    font-weight: var(--fw-bold);
    position: absolute;
    top: 15px;
    right: 15px;
`;
