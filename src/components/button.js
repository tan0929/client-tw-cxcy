import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    height: 38px;
    width: 110px;
    cursor: pointer;
    font-size: 16px;
    -webkit-tap-highlight-color: transparent;
    border: 1px solid ${({theme})=>theme? theme.color.primary : "#2F2E2E"};
    color: ${({theme})=>theme? theme.color.text.primary : "#B2B1B1"};
    background-color: ${({theme})=>theme? theme.color.primary : "#2F2E2E"};
    outline: none;
    transition: 0.3s;
    :hover{
        background-color: black;
    }
    ${({margin})=> margin? `margin: ${margin}` : ``}
`;

const CustomButton =({text, ...props})=>(
    <StyledButton {...props}>
        {text} 
    </StyledButton>
);

export default CustomButton;