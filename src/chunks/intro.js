import React from 'react';
import styled from 'styled-components';
import Button from '../components/button';


const Item = styled.div`
    width: 260px;
    height: 260px;
    background-color: grey;
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

const Text = styled.p`
    font-size: ${({size})=>size}
`;

const Image = styled.div`

`;

const Title = ()=>(
    <Text size="60px">
        ArtMaker Taiwan
    </Text>
);

const Intro = ()=>(
    <Wrapper>
        <Item>
            <Title />
        </Item>
        <Line />
        <Item>
            <Button text="了解更多"/>
        </Item>
        <Item>
            <Image><Text size="40px">Image</Text></Image>
        </Item>
        
    </Wrapper>
);

export default Intro;