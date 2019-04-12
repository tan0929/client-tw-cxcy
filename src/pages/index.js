import React from "react";
import styled from 'styled-components';
import Carousel from 'nuka-carousel';
import Intro from '../chunks/intro';
import Card from "../components/card";
import { graphql, StaticQuery } from "gatsby";
import Img from 'gatsby-image';


const CarouselWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 120px 60px 120px;
`;

const Image = styled(Img)`
  width: inherit;
  height: 500px;
`;

const Wrapper = styled.div`
  padding: 60px;
`;

const Content = ({data})=>{
  const { title, description, indexCarousel, indexIntroImage } = data.setting.edges[0].node.frontmatter;
  return(
    <Wrapper>
      <CarouselWrapper>
        <Carousel autoplay autoplayInterval={8 * 1000} pauseOnHover swiping cellSpacing={5} wrapAround>
          {indexCarousel.map(({childImageSharp},index)=>(
            <Image fluid={childImageSharp.fluid} key={index}/>
          ))}
        </Carousel>
      </CarouselWrapper>
      <Intro 
        title={title}
        description={description}
        descriptionLimit={100}
        fluid={indexIntroImage.childImageSharp.fluid}/>
      {
        data.services.edges.map(({node},index)=>(
          <Card 
            key={index}
            title={node.frontmatter.title}
            subtitle={node.frontmatter.subtitle}
            description={node.frontmatter.description}
            descriptionLimit={57}
            fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
          />
        ))}
    </Wrapper>
  );
};

const IndexPage = () => (
  <StaticQuery 
    query={query}
    render={data=><Content data={data}/>}
  />
);

export default IndexPage;


const query = graphql`
  query {
    setting: allMarkdownRemark( filter: { 
      frontmatter:{ type:{ eq: "setting" } }
    }){
      edges{
        node{
          frontmatter{
            title
            description
            indexCarousel{
              childImageSharp{
                fluid(maxWidth: 2048){
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            indexIntroImage{
              childImageSharp{
                fluid(maxWidth: 400){
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
    services: allMarkdownRemark( filter: { 
      frontmatter:{ templateKey:{ eq: "service" } }
    }){
      edges{
        node{
          frontmatter{
            title
            subtitle
            description
            thumbnail{
              childImageSharp{
                fluid(maxWidth: 300){
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`;


/*
setting: allMarkdownRemark( filter: { 
      frontmatter:{ type:{ eq: "setting"}}
    }){
      edges{
        node{
          frontmatter{
            description
          }
        }
      }
    }
*/