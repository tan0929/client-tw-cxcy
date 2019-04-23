import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from "gatsby";
import FakeLogo from './fakeLogo';


const StyledFooter = styled.footer`
    background-color: ${({theme})=>theme.color.primary}
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const Text = styled.p`
    font-size: ${({size})=>size};
    color: ${({theme})=>theme.color.text.primary}
    font-weight: 100;
    margin: 20px 0 6px 0;
    & + & {
        margin: 6px 0;
    }
`;


const Content = ({data})=>{
    const {title, address, email, phone} = data.setting.edges[0].node.frontmatter;
    return(
        <StyledFooter>
            <FakeLogo />
            <Text>{address}</Text>
            <Text>{email}</Text>
            <Text>{phone}</Text>
            <Text> © {new Date().getFullYear()} by {title}</Text>
        </StyledFooter>
    )
};

const Footer =()=>(
    <StaticQuery 
        query={query}
        render={data=><Content data={data} />}
    />
);

export default Footer;

const query = graphql`
  query {
    setting: allMarkdownRemark( filter: { 
      frontmatter:{ type:{ eq: "setting" } }
    }){
      edges{
        node{
          frontmatter{
            title
            address
            email
            phone
            facebook
            instagram
          }
        }
      }
    }
  }
`;

