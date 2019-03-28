import React from 'react';
import Link from './betterLink';

const SocialLink = ({icon, size, padding, url, color})=>{
    const Icon = icon;
    return(
        <Link to={url} blank padding={padding} color={color}>
            <Icon size={size} />
        </Link>
    );
};

export default SocialLink;