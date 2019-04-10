import React from 'react';
import styled from 'styled-components';

import FakeLogo from './fakeLogo';


const StyledFooter = styled.footer`
    background-color: ${({theme})=>theme.color.primary}
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const Text = styled.p`
    font-size: ${({size})=>size};
    color: ${({theme})=>theme.color.text.primary}
`;


const Footer = ()=>(
    <StyledFooter>
        <FakeLogo />
        <Text> © {new Date().getFullYear()} by 宸心宸藝工程</Text>
    </StyledFooter>
);

export default Footer;