import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    ${breakpoint('tablet')`
        flex-direction: row;
    `}
    align-items: center;
    justify-content: center;
    max-width: 900px;
    margin: auto;
`;

const Title = styled.div`
    ${breakpoint('tablet')`
        align-self: start;
    `}
    text-align: center;
    min-width: 360px;
    width: 360px;
    font-size: 65px;
`;

const Underline = styled.div`
    display: inline-block;
    border-bottom: 2px solid ${({theme})=> theme? `${theme.color.text.secondary}`: `#3f3f3f`};
`;

const Description = styled.div`
    flex: 1;
    text-align: center;
    box-sizeing: border-box;
    padding: 15px;
`;

const TextCard = ({title, description})=>(
    <Wrapper>
        <Title>
            <Underline>
                {title}
            </Underline>
        </Title>
        <Description>
            {description}
        </Description>
    </Wrapper>
);

export default TextCard;