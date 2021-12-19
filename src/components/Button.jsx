import styled from 'styled-components';

import React from 'react';

export const Button = ({
    icon,
    children,
    margin,
    padding,
    onClick,
    isActive,
    isDelete,
    disabled,
    isSucces,
    iconColor,
}) => {
    return (
        <Btn
            margin={margin}
            padding={padding}
            isDelete={isDelete}
            isSucces={isSucces}
            isActive={isActive}
            onClick={onClick}
            disabled={disabled}>
            {icon && (
                <Icon padding={padding} icon iconColor={iconColor}>
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${(props) =>
        props.padding && props.padding === 'left' ? 'row-reverse' : 'row'};
    margin: ${(props) => (props.margin ? props.margin : '1rem 1rem 1rem 0')};
    background-color: ${(props) =>
        props.isActive === 'active' || props.isActive === 'active' ? 'var(--active-color)' : ''};
    background-color: ${(props) => (props.isDelete ? 'var(--active-color)' : '')};
    background-color: ${(props) => (props.isSucces ? '#78f24e' : '')};

    color: ${(props) => (props.isDelete || props.isSucces ? '#fff' : '')};
`;

const Icon = styled.i`
    display: flex;
    margin-left: ${(props) => (props.padding && props.padding === 'left' ? '.5rem' : '0')};
    margin-right: ${(props) => (props.padding && props.padding === 'right' ? '.5rem' : '0')};
    color: ${(props) => (props.iconColor ? props.iconColor : '')};
`;
