import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import TextCard from '../components/textCard';
import { GoPrimitiveDot } from 'react-icons/go';
import Button from '../components/button';

const TextCardWrapper = styled.div`
    padding: 60px 0 30px 0;
    & + & {
        padding: 0 0 30px 0;
    }
`;

const Banner = styled(Img)`
    width: 100vw;
    height: 300px;
`;

const Services = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 60px;
    height: 210px;
`;

const Bullet = styled(GoPrimitiveDot)`
    padding: 0 5px;
`;

const ContactButton = styled(Button)`
    display: block;
    margin: 15px auto 120px auto;
`;

const About = ({data})=>{
    return(
        <div>
            <Banner fluid={data.setting.edges[0].node.frontmatter.aboutBanner.childImageSharp.fluid}/>
            <TextCardWrapper>
                <TextCard 
                    title="服務項目" 
                    description={(
                        <Services>
                            {data.services.edges.map(({node},index)=>(
                                <div key={index}>
                                    <Bullet size="10px"/>{node.frontmatter.title}
                                </div>
                            ))}
                        </Services>
                    )}
                />
            </TextCardWrapper>
            <TextCardWrapper>
                <TextCard 
                    title="經營理念" 
                    description={(
                        <Services>
                            {
                               `提供專業的技術、用心的施工、美化落實各項建設，投注每一份心思、情感與信念，都是我們對提昇生活品質的執著。各項工程作品都結合了每位師傅的經驗、創作與汗水，透過與客戶的緊密連繫溝通，有效表現客戶最理想的需求以及施作，達成完美成果。永騰珍惜每一個機會，用心做好每一個施工細節，來完成客戶需求。`
                            }
                        </Services>
                    )}
                />
            </TextCardWrapper>
            <ContactButton text="聯絡我們"/>
        </div>
    );
};

export default About;

export const query = graphql`
  query {
    setting: allMarkdownRemark( filter: { 
      frontmatter:{ type:{ eq: "setting" } }
    }){
      edges{
        node{
          frontmatter{
            description
            aboutBanner{
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
    services: allMarkdownRemark( filter: { 
        frontmatter:{ templateKey:{ eq: "service" } }
    }){
      edges{
        node{
          frontmatter{
            title
          }
        }
      }
    }
  }
`