import styled from 'styled-components';

import React from 'react';

export const Button = ({ icon, children, margin, onClick }) => {
    return (
        <Btn margin={margin} onClick={onClick}>
            {icon && (
                <Icon margin={margin} icon>
                    {React.createElement(icon, { size: '18px' })}
                </Icon>
            )}
            <span>{children}</span>
        </Btn>
    );
};

const Btn = styled.button`
    border-radius: var(--radii);
    box-shadow: var(--shadow);
    color: var(--color-text);
    background-color: var(--colors-ui-base);
    font-weight: var(--fw-normal);
    border: none;
    padding: 1rem 2rem;
    cursor: pointer;
    margin: 1rem 1rem 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${(props) => (props.margin && props.margin === 'left' ? 'row-reverse' : 'row')};
`;

const Icon = styled.i`
    display: flex;
    margin-left: ${(props) => (props.margin && props.margin === 'left' ? '.5rem' : '0')};
    margin-right: ${(props) => (props.margin && props.margin === 'right' ? '.5rem' : '0')};
`;
