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

const Content = ({data})=>(
  <Wrapper>
    <CarouselWrapper>
      <Carousel autoplay autoplayInterval={8 * 1000} pauseOnHover swiping cellSpacing={5} wrapAround>
        {data.setting.edges[0].node.frontmatter.indexCarousel.map(({childImageSharp},index)=>(
          <Image fluid={childImageSharp.fluid} key={index}/>
        ))}
      </Carousel>
    </CarouselWrapper>
    <Intro />
    <Card />
    <div></div>
  </Wrapper>
);

const IndexPage = () => (
  <StaticQuery 
    query={query}
    render={data=><Content data={data}/>}
  />
);

export default IndexPage;

export const IndexPageTemplate = ({
  description,
  thumbnail,
  indexCarousel,
  indexIntroImage,
})=>{
  
  return(
  <div>

  </div>
)};


const query = graphql`
  query {
    setting: allMarkdownRemark( filter: { 
      frontmatter:{ type:{ eq: "setting" } }
    }){
      edges{
        node{
          frontmatter{
            description
            indexCarousel{
              childImageSharp{
                fluid(maxWidth: 2048){
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