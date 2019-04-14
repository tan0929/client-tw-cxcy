import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Button from './button';
import Link from './betterLink';

const Wrapper = styled.div`
    display: flex;
    margin: 30px auto;
    width: 640px;
    height: 220px;
    background-color: ${({theme})=>theme.color.card};
`;

const ThumbnailWrapper = styled.div`
    box-sizing: border-box;
    padding: 15px;
    width: 220px;
    height: 220px;
`;

const Thumbnail = styled(Img)`
    width: 100%;
    height: 100%;
    border-radius: 300px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 8px 25px;
    width: 440px;
`;

const Title = styled.div`
    padding: 6px;
    font-size: 26px;
    ${({theme})=>theme ? `color: ${theme.color.text.secondary};` : ``}
`;

const Subtitle = styled.div`
    padding: 3px;
    font-size: 14px;
    ${({theme})=>theme ? `color: ${theme.color.text.error};` : ``}
`;

const Description = styled.div`
    font-size: 16px;
    padding: 3px;
    ${({theme})=>theme ? `color: ${theme.color.text.secondary};` : ``}
`;

const InfoLink = styled(Link)`
    align-self: flex-end;
`;

const Card =({title, subtitle, description, descriptionLimit, fluid, link})=>{
    if(descriptionLimit){
        description = 
            description.length > descriptionLimit 
            ? description.slice(0, descriptionLimit)+"..." 
            : description;
    }
    return(
        <Wrapper>
            <ThumbnailWrapper>
                <Thumbnail fluid={fluid} />
            </ThumbnailWrapper>
            <ContentWrapper>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <Description>{description}</Description>
                <InfoLink to={link}>
                    <Button text="了解更多" />
                </InfoLink>
            </ContentWrapper>
        </Wrapper>
    );
}

export default Card;