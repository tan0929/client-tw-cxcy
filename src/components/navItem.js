import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
    color: ${({theme})=>theme.color.text.primary}
    font-size: 16px;
`;

const NavItem = styled(Text)`
    display: inline-block;
    position: relative;
    padding: 8px;
    min-width: 70px;
    text-align: center;
    &:hover {
        ${({menu,theme})=>menu ? `background-color: ${theme.color.secondary}`: ''}
        ${({menu,theme})=>menu ? `color: ${theme.color.text.secondary}`: ''}
    }
`;

export default NavItem;