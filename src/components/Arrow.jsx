import styled from 'styled-components';

export const Arrow = styled.span`
    width: 56px;
    height: 56px;
    position: absolute;
    background-color: var(--rgba);
    box-shadow: var(--shadow);
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    cursor: pointer;

    top: ${(props) => (props.main === 'main' ? 'calc(50% - 28px)' : '40%')};
    left: ${(props) => (props.left ? '5px' : 'auto')};
    right: ${(props) => (props.right ? '5px' : 'auto')};
`;
