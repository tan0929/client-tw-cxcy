import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import breakpoint from 'styled-components-breakpoint';


const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 280px;
    height: 250px;
    ${breakpoint('tablet')`
        width: 300px;
        height: 300px;
    `}
    text-align: center;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${breakpoint('tablet')`
        flex-direction: row;
    `}
`;

const Line = styled.div`
    height: 1px;
    width: 240px
    border-bottom: 2px solid black;
    border-right: none; 
    ${breakpoint('tablet')`
        height: 240px;
        width: 1px;
        border-bottom: none; 
        border-right: 2px solid black; 
    `}
`;

const Text = styled.p`
    display: flex;
    align-items: center;
    padding: 8px 15px;
    flex: 1;
    font-size: ${({size})=>size}
`;

const Image = styled(Img)`
    width: 100%;
    height: 100%;
`;

const Intro = ({title, description, fluid, descriptionLimit})=>{
    if(descriptionLimit){
        description = 
            description.length > descriptionLimit 
            ? description.slice(0, descriptionLimit)+"..." 
            : description;
    }
    
    return(
        <Wrapper>
            <Item>
                <Text size="45px">{title}</Text>
            </Item>
            <Line />
            <Item>
                <Text size="16px">{description}</Text>
            </Item>
            <Item>
                <Image fluid={fluid} />
            </Item>
        </Wrapper>
    );
};

export default Intro;