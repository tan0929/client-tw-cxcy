import SocialLink from './socialLink';
import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { graphql, StaticQuery } from 'gatsby';

const query = graphql`{
    site{
        siteMetadata{
            facebook
        }
    }
}`;

const Facebook = ({...props})=> <StaticQuery
    query={query}
    render={data=>(
        <SocialLink 
            icon={FaFacebookF}
            {...props}
            url={data.site.siteMetadata.facebook}
        />
    )}
/>

export default Facebook;