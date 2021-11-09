import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { IoSearchSharp, IoMoon, IoMoonOutline, IoPerson } from 'react-icons/io5';

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
`;

const MenuItem = styled.a.attrs({
    href: '#',
})`
    padding: 1rem;
    text-decoration: none;
    color: var(--colors-text);
    cursor: pointer;
    transition: background 0.2s;
    font-weight: var(--fw-normal);

    &: hover {
        background: green;
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
                    <MenuItem>HOME</MenuItem>
                    <MenuItem>MOVIES</MenuItem>
                    <MenuItem>SHOWS</MenuItem>
                    <MenuItem>ABOUT</MenuItem>
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
