import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { IoSearchSharp, IoMoon, IoMoonOutline, IoPerson } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <Wrapper>
            <Head>
                <Menu>
                    <NavLink to="/">
                        <MenuItem>HOME</MenuItem>
                    </NavLink>
                    <NavLink to="/movie">
                        <MenuItem>MOVIES</MenuItem>
                    </NavLink>
                    <NavLink to="/shows">
                        <MenuItem>SHOWS</MenuItem>
                    </NavLink>
                    <NavLink to="/about">
                        <MenuItem>ABOUT</MenuItem>
                    </NavLink>
                </Menu>
                <SideMenu>
                    <MenuItem>
                        <IoSearchSharp size="20px" />
                    </MenuItem>
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
`;

const Head = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50px;
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
    padding: 1rem;
    color: var(--colors-text);
    cursor: pointer;
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
