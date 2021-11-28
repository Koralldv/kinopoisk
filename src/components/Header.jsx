import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { IoSearchSharp, IoMoon, IoMoonOutline, IoPerson } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

export const Header = ({ links }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    const setActive = ({ isActive }) => (isActive ? 'activeLink' : '');

    return (
        <Wrapper>
            <Head>
                <Menu>
                    {links.map((link) => (
                        <NavLink key={`${link.title}`} className={setActive} to={`${link.path}`}>
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
            </Head>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    padding: 0 2rem;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    z-index: 9999;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
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

const Menu = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    align-items: center;
`;

const MenuItem = styled.li`
    padding: 0 1rem;
    height: 56px;
    color: var(--colors-text);
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: background 0.2s;
    font-weight: var(--fw-normal);

    &: hover {
        background: red;
    }
`;

const SideMenu = styled.div`
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

const ModeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    cursor: pointer;
    font-weight: var(--fw-bold);
    text-transform: capitalize;
`;
