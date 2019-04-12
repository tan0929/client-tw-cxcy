import React from 'react';
import styled from 'styled-components';
import Button from '../components/button';
import Img from 'gatsby-image';


const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    text-align: center;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 60px 0;
`;

const Line = styled.div`
    height: 240px;
    border-right: 2px solid black; 
`;

const IntroButton = styled(Button)`
    margin: auto;
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
                <IntroButton text="了解更多"/>
            </Item>
            <Item>
                <Image fluid={fluid} />
            </Item>    
        </Wrapper>
    );
};

export default Intro;