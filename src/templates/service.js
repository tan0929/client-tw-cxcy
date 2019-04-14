import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import breakpoint from 'styled-components-breakpoint';
import Button from '../components/button';

const IntroWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 900px;
    margin: auto;
`;

const Title = styled.div`
    align-self: start;
    padding: 120px 0 0 0;
    text-align: center;
    min-width: 300px;
    width: 300px;
    font-size: 65px;
`;

const Underline = styled.div`
    display: inline-block;
    border-bottom: 2px solid ${({theme})=> theme? `${theme.color.text.secondary}`: `#3f3f3f`};
`;

const Description = styled.div`
    flex: 1;
    box-sizeing: border-box;
    padding: 120px 30px 60px 15px;
`;

const QuoteButton = styled(Button)`
    display: block;
    margin: 0 auto 120px auto;
`;

export const ServiceTemplate = ({
    preview,
    title,
    description,
    gallery,
    keywords
})=>(
    <div>
        <IntroWrapper>
            <Title>
                <Underline>
                    {title}
                </Underline>
            </Title>
            <Description>
                {description}
            </Description>
        </IntroWrapper>
        <QuoteButton text="咨詢估價" />
    </div>
);

const Service = ({data})=>{ 
    const { title, description } = data.markdownRemark.frontmatter;
    return(
        <ServiceTemplate
            title={title}
            description={description}
        />
    )
};

export default Service;

export const query = graphql`
    query postByID($id : String!){
        markdownRemark(id: { eq: $id }){
            frontmatter{
                title
                description
            }
        }
    }
`;