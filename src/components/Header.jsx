import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { IoSearchSharp, IoMoon, IoMoonOutline, IoPerson, IoReorderFour } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

export const Header = ({ links }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    const [triggerBurger, setTriggerBurger] = useState();

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    const [widthScreen, setWidthScreen] = useState(null);

    useEffect(() => {
        setWidthScreen(window.innerWidth);
        function handleResize(e) {
            setWidthScreen(e.currentTarget.innerWidth);
            console.log(e.currentTarget.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const setActive = ({ isActive }) => (isActive ? 'activeLink' : 'notActiveLink');

    return (
        <Wrapper>
            <Head>
                {widthScreen < 768 && (
                    <Burger onClick={() => setTriggerBurger(!triggerBurger)}>
                        <IoReorderFour size="28px" />
                    </Burger>
                )}

                {widthScreen > 768 || triggerBurger ? (
                    <>
                        <Menu>
                            {links.map((link) => (
                                <NavLink
                                    key={`${link.title}`}
                                    className={setActive}
                                    to={`${link.path}`}>
                                    <MenuItem>{`${link.title}`}</MenuItem>
                                </NavLink>
                            ))}
                        </Menu>
                        <SideMenu>
                            <NavLink to="/search" className={setActive}>
                                <MenuItem>
                                    <IoSearchSharp size="20px" />
                                </MenuItem>
                            </NavLink>
                            <MenuItem>
                                <IoPerson size="20px" />
                            </MenuItem>
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
                    </>
                ) : (
                    ''
                )}
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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 767px) {
        justify-content: space-between;
        flex-direction: row;
    }
`;

const Burger = styled.span`
    color: var(--colors-text);
    background-color: red;
    height: 64px;
    width: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    position: fixed;
`;

const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 65px 0 0 0;
    width: 100%;
    @media (min-width: 767px) {
        margin: 0;
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
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    @media (max-width: 767px) {
        position: absolute;
        right: 0;
    }
`;

const ModeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    font-weight: var(--fw-bold);
    text-transform: capitalize;
`;
