import React from 'react';
import ReactResizeDetector from 'react-resize-detector';
import styled from 'styled-components';
import theme from '../theme';
import Facebook from './facebook';
import { StaticQuery, graphql } from 'gatsby';
import NavItem from './navItem';
import AbsoluteMenu from './menu';

const options = [
    {
        name: '首頁',
        path: '/',
    },
    {
        name: '服務項目',
        menu: 'services',
    },
    {
        name: '產品訂購',
        menu: 'products',
    },
    {
        name: '關於',
        path: '/about',
    },
    {
        name: '聯絡我們',
        path: '/contact',
    },
];


const TabletOptions = options.map(({name, path, menu}, index)=>{

    return(
        <NavItem menu={!!menu} key={index}>
            {name}
            {menu && 
                <StaticQuery
                    query={graphql`
                        query{
                            services: allMarkdownRemark(filter:{ frontmatter:{ templateKey:{ eq: "service"}}}){
                                edges{
                                    node{
                                        frontmatter{
                                            title
                                        }
                                    }
                                }
                            }
                            products: allMarkdownRemark(filter:{ frontmatter:{ templateKey:{ eq: "product"}}}){
                                edges{
                                    node{
                                        frontmatter{
                                            title
                                        }
                                    }
                                }
                            }
                        }
                    `}
                    render={data=>{
                        if(menu==="services"){
                            return <AbsoluteMenu values={data.services.edges}></AbsoluteMenu>
                        }else if(menu==="products"){
                            return <AbsoluteMenu values={data.products.edges}></AbsoluteMenu>
                        }else{
                            return <AbsoluteMenu />
                        }
                    }}
                />
            }
        </NavItem>
    )
});

const TabletOptionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 80px 0 20px;
`;

const TabletNav = ()=>(
    <TabletOptionsWrapper>
        {TabletOptions}
        <Facebook size='18px' padding='0 10px'/>
    </TabletOptionsWrapper>
);

const MobileNav = ()=>(
    <NavItem>MobileNav</NavItem>
);

const Nav = ()=>{
    return (
    <ReactResizeDetector handleWidth>
        {
            ({width}) => 
                width
                ? (width > theme.breakpoints.tablet ? <TabletNav />: <MobileNav />) 
                : <div />
        }
    </ReactResizeDetector>
)};

export default Nav;
