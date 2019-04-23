import React from 'react';
import styled from 'styled-components';
import TextCard from '../components/textCard';
import FacebookMessage from '../components/facebookMessage';


const TextCardWrapper = styled.div`
    padding: 100px 0;
`;

const FormWrapper = styled.div`

`;

const ImageWrapper= styled.div`

`;

const Contact = ({data})=>{
    const { title, address, email, phone } = data.setting.edges[0].node.frontmatter;
    return(
        <div>
            <TextCardWrapper>
                <TextCard 
                    title="聯絡我們"
                    description={(
                        <div>
                            <p>{title}</p>
                            <p>{address}</p>
                            <p>{email}</p>
                            <p>{phone}</p>
                        </div>
                    )}
                />
            </TextCardWrapper>
            <FormWrapper>

            </FormWrapper>
            <FacebookMessage />
        </div>
    );
};

export default Contact;

export const query = graphql`
  query {
    setting: allMarkdownRemark( filter: { 
      frontmatter:{ type:{ eq: "setting" } }
    }){
      edges{
        node{
          frontmatter{
            title
            description
            phone
            address
            email
            contactFormImage{
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
          }
        }
      }
    }
  }
`;