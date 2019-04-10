import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 30px auto;
    width: 640px;
    height: 220px;
    background-color: ${({theme})=>theme.color.secondary};
`;

const Card =({title, subtitle, description, fluid})=>(
    <Wrapper>

    </Wrapper>
);

export default Card;