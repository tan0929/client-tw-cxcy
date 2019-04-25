import React, {useState} from 'react';
import ReactResizeDetector from 'react-resize-detector';
import styled from 'styled-components';
import theme from '../theme';
import FacebookLink from './facebookLink';
import { StaticQuery, graphql } from 'gatsby';
import NavItem, { Text } from './navItem';
import Menu from './menu';
import BetterLink from './betterLink';
import { FaBars } from 'react-icons/fa';
import Drawer from '@material-ui/core/Drawer';


/*

It's a mess,
needs refactor

*/


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

const Options = ({setVisible})=>{
    const arr = options.map(({name, path, menu}, index)=>{
        return(
            <NavItem menu={!!menu} key={index}>
                {
                    path? <BetterLink to={path} onClick={()=>setVisible && setVisible(false)}><Text>{name}</Text></BetterLink>
                    : name
                }
                {menu && 
                    <StaticQuery
                        query={graphql`
                            query{
                                services: allMarkdownRemark(filter:{ frontmatter:{ templateKey:{ eq: "service"}}}){
                                    edges{
                                        node{
                                            fields{
                                                slug
                                            }
                                            frontmatter{
                                                title
                                            }
                                        }
                                    }
                                }
                                products: allMarkdownRemark(filter:{ frontmatter:{ templateKey:{ eq: "product"}}}){
                                    edges{
                                        node{
                                            fields{
                                                slug
                                            }
                                            frontmatter{
                                                title
                                            }
                                        }
                                    }
                                }
                            }
                        `}
                        render={data=>{
                            var menuValue = null;
                            switch(menu){
                                case "services":
                                    menuValue = data.services.edges;
                                    break;
                                case "products":
                                    menuValue = data.products.edges;
                                    break;
                                default:
                                    break;
                            }
                            return(
                                <Menu values={menuValue} setVisible={setVisible}/>
                            );
                        }}
                    />
                }
            </NavItem>
        )
    });
    return(
        <ReactResizeDetector handleWidth>
        {({width}) => (
            width && (width > theme.breakpoints.tablet)
            ? 
                <TabletOptionsWrapper>
                    {arr}
                    <FacebookLink size='18px' padding='0 10px'/>
                </TabletOptionsWrapper>
            : 
                <MobileOptionsWrapper>
                    {arr}
                    <FacebookLink size='18px' padding='30px 10px' color={theme.color.text.secondary}/>
                </MobileOptionsWrapper>
        )}
        </ReactResizeDetector>
    )
}

const TabletOptionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 80px 0 20px;
`;

const TabletNav = ()=>(
    <Options />
);

const IconWrapper = styled.div`
    margin: 30px 30px 0 0;
`;

const StyledDrawer = styled(Drawer)`
    opacity: 0.85;
`;

const MobileOptionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 100px 0 0 0;
    width: 200px;
    height: 100vh;
    -webkit-tap-highlight-color: transparent;
`;

const MobileNav = ()=>{
    const [visible, setVisible] = useState(false);
    return(
    <IconWrapper>
        <div onClick={()=>setVisible(true)}>
            <FaBars size ='30px' color='#DDD'/>
        </div>
        {/* <StyledDrawer
            open={visible} 
            onClose={()=>setVisible(false)}
            anchor='right'
        >
            <Options setVisible={setVisible} />
        </StyledDrawer> */}
    </IconWrapper>
    );
}

const Nav = ()=>{
    return (
    <ReactResizeDetector handleWidth>
        {
            ({width}) => 
                width ? (width > theme.breakpoints.tablet ? <TabletNav />: <MobileNav />) 
                : <div />
        }
    </ReactResizeDetector>
)};

export default Nav;
