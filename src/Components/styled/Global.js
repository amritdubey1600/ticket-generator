import { createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle`
    @font-face {
        font-family: 'Inconsolata-Bold';
        src: url('/assets/fonts/static/Inconsolata-Bold.tff') format("truetype");
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inconsolata-ExtraBold';
        src: url('/assets/fonts/static/Inconsolata-ExtraBold.tff') format("truetype");
        font-weight: 900;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inconsolata-Medium';
        src: url('/assets/fonts/static/Inconsolata-Medium.tff') format("truetype");
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inconsolata-Regular';
        src: url('/assets/fonts/static/Inconsolata-Regular.tff') format("truetype");
        font-weight: 400;
        font-style: normal;
    }

    *{
        box-sizing: border-box;
        color: #fff;
    }

    body{
        background-image:
        url("/assets/images/pattern-squiggly-line-top.svg"),
        url("/assets/images/pattern-squiggly-line-bottom.svg"),
        url("/assets/images/pattern-lines.svg"),
        url("/assets/images/background-desktop.png");
        background-size:auto,auto,cover,cover;
        background-repeat:no-repeat;
        background-position:top 25px right,bottom left,center,center;
    }

    h1,h2,h3,h4{
        font-family: 'Inconsolata-ExtraBold', sans-serif;
    }

    label{
        font-family: 'Inconsolata-Regular', sans-serif;
        font-size: normal;
        margin: 5px;
    }

    p{
        font-family: 'Inconsolata-Medium', sans-serif;
    }
`