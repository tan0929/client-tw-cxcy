import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import breakpoint from 'styled-components-breakpoint';

export const ServiceTemplate = ({
    preview,
    title,
    description,
    gallery,
    keywords
})=>(
    <div>

    </div>
);

const Service = ({data})=>(
    <div>
        {data.markdownRemark.frontmatter.title}
    </div>
);

export default Service;

export const query = graphql`
    query postByID($id : String!){
        markdownRemark(id: { eq: $id }){
            frontmatter{
                title
            }
        }
    }
`;