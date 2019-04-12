import React from 'react';
import styled from 'styled-components';
import NavItem from './navItem';

const MenuItem = styled.div`
    margin: auto;
    padding: 8px 0;
`;

const Wrapper = styled.div`
    display: none;
    box-sizing: border-box;
    padding: 8px;
    width: 180px;
    text-align: center;
    background-color: ${({theme})=>theme.color.secondary}
    color: ${({theme})=>theme.color.text.secondary}
    ${NavItem}:hover & {
        display: block;
    }
`;

const AbsoluteWrapper = styled(Wrapper)`
    position: absolute;
    left: 0;
    top: 39px;
`;

export const AbsoluteMenu = ({values})=>{
    
    return(
        <AbsoluteWrapper>
            {values && values.length > 0 ? values.map(({node},index)=>(
                <MenuItem key={index}>{node.frontmatter.title}</MenuItem>
            )): <div>Empty Menu</div>}
        </AbsoluteWrapper>
    )
};

export const StaticMenu = ({type})=>{
    return(
        <Wrapper>

        </Wrapper>
    )
};

export default AbsoluteMenu;

