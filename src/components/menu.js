import React from 'react';
import styled from 'styled-components';
import NavItem from './navItem';
import BetterLink from './betterLink';
import breakpoint from 'styled-components-breakpoint';

const MenuItem = styled.div`
    margin: auto;
    padding: 8px 0;
`;

const Wrapper = styled.div`
    display: none;
    overflow: hidden;
    padding: 8px 0;
    box-sizing: border-box;
    width: 180px;
    text-align: center;
    background-color: ${({theme})=>theme.color.secondary}
    color: ${({theme})=>theme.color.text.secondary}
    ${NavItem}:hover & {
        display: block;
    }
    ${breakpoint('tablet')`
        position: absolute;
        left: 0;
        top: 39px;
    `}
`;

const Menu = ({values, setVisible})=>{
    
    return(
        <Wrapper>
            {values && values.length > 0 ? values.map(({node},index)=>(
                <BetterLink key={index} to={node.fields.slug}>
                    <MenuItem onClick={()=>setVisible && setVisible(false)}>{node.frontmatter.title}</MenuItem>
                </BetterLink>
            )): <div>Empty Menu</div>}
        </Wrapper>
    )
};

export default Menu;

