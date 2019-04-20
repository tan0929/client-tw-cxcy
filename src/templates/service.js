import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Button from '../components/button';
import Album from '../components/album';
import TextCard from '../components/textCard';

const QuoteButton = styled(Button)`
    display: block;
    margin: 0 auto 90px auto;
`;

const TextCardWrapper = styled.div`
    padding: 120px 0 30px 0;
`;

const AlbumWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0 40px 90px 40px;
`;

export const ServiceTemplate = ({
    preview,
    title,
    description,
    gallery,
    keywords
})=>(
    <div>
        <TextCardWrapper>
            <TextCard title={title} description={description} />
        </TextCardWrapper>
        <QuoteButton text="咨詢估價" />
        <AlbumWrapper>
            {gallery.albums.map(({title,content},index)=>{
                return(<Album key={index} title={title} content={content} />)
            })}
        </AlbumWrapper>
    </div>
);

const Service = ({data})=>{ 
    const { title, description, gallery } = data.markdownRemark.frontmatter;
    return(
        <ServiceTemplate
            title={title}
            description={description}
            gallery={gallery}
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
                gallery{
                    albums{
                        title
                        content
                    }
                }
            }
        }
    }
`;