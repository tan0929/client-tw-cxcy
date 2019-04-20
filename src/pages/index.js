import React from "react";
import styled from 'styled-components';
import Carousel from 'nuka-carousel';
import Intro from '../chunks/intro';
import Card from "../components/card";
import { graphql, StaticQuery } from "gatsby";
import Img from 'gatsby-image';
import breakpoint from 'styled-components-breakpoint';
import Button from '../components/button';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const CarouselWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 10px 20px 10px;
  ${breakpoint('tablet')`
    padding: 0 120px 60px 120px;
  `}
`;

const IntroButton = styled(Button)`
  display: block;
  ${breakpoint(`tablet`)`
    margin: 0 auto 60px auto;
  `}
  margin: 30px auto 120px auto;
`;

const Image = styled(Img)`
  cursor: grab;
  width: inherit;
  height: 500px;
`;

const Wrapper = styled.div`
  ${breakpoint('tablet')`
    padding: 60px;
  `}
`;

const CarouselButton = styled.div`
    cursor: pointer;
    font-size: 70px;
    color: ${({theme})=>theme? theme.color.text.primary: "white"};
    -webkit-tap-highlight-color: transparent;
`;

const Content = ({data})=>{
  const { title, description, indexCarousel, indexIntroImage } = data.setting.edges[0].node.frontmatter;
  return(
    <Wrapper>
      <CarouselWrapper>
        <Carousel
          renderCenterLeftControls={({previousSlide})=>(
            <CarouselButton onClick={previousSlide}><IoIosArrowBack /></CarouselButton>
          )}
          renderCenterRightControls={({nextSlide})=>(
            <CarouselButton onClick={nextSlide}><IoIosArrowForward /></CarouselButton>
          )}
          autoplay 
          autoplayInterval={8 * 1000} 
          pauseOnHover 
          swiping 
          cellSpacing={5} 
          wrapAround
        >
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
      <IntroButton text="了解更多"/>
      {
        data.services.edges.map(({node},index)=>(
          <Card 
            key={index}
            title={node.frontmatter.title}
            subtitle={node.frontmatter.subtitle}
            description={node.frontmatter.description}
            descriptionLimit={57}
            fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
            link={node.fields.slug}
          />
        ))
      }
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
          fields{
            slug
          }
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