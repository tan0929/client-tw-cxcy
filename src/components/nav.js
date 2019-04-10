import React from 'react';
import ReactResizeDetector from 'react-resize-detector';
import styled from 'styled-components';
import theme from '../theme';
import Facebook from './facebook';

const options = [
    {
        name: '首頁',
        path: '/',
    },
    {
        name: '服務項目',
        path: '/services',
        children: 'services',
    },
    {
        name: '產品訂購',
        path: '/products',
        children: 'products',
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

const Text = styled.div`
    color: ${({theme})=>theme.color.text.primary}
    font-size: 16px;
`;

const TabletItemWrapper = styled(Text)`
    display: inline-block;
    padding: 8px;
    min-width: 70px;
    text-align: center;
`;

const TabletOptions = options.map(({name, path}, index)=>(
    <TabletItemWrapper key={index}>
        {name}
    </TabletItemWrapper>
))

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
    <Text>MobileNav</Text>
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