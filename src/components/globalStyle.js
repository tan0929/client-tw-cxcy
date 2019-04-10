import React from 'react';
import  { createGlobalStyle } from 'styled-components';
import NotoSansTC_Light from '../fonts/NotoSansTC-Light.otf';
import SourceHanSansTCLight from '../fonts/SourceHanSansTC-Light.otf';

const GlobalStyle = createGlobalStyle`
    body{
        background-color: rgba(0,0,0,0);
        margin: 0;
        padding: 0 !important; /* This !important is a solution for material ui, modal add padding to body bug*/
        overflow: auto !important; /* And this whole line too */
        font-family: NotoSansTC_Light;
    }
    @font-face {
        font-family: NotoSansTC_Light;
        src: url(${NotoSansTC_Light});
    }
    @font-face {
        font-family: SourceHanSansTCLight;
        src: url(${SourceHanSansTCLight});
    }
`;

export default ()=><GlobalStyle />;