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
        background-repeat:no-repeat;
        background-position:top right,bottom left,center,center;

        
        @media (max-width: ${({theme})=>theme.mobile}) {
           background-size: 160px,240px,auto,auto;
        }
    }

    h1,h2,h3,h4{
        font-family: 'Inconsolata-ExtraBold', sans-serif;
    }

    label{
        font-family: 'Inconsolata-Regular', sans-serif;
        font-size: normal;
    }

    span{
        display: flex;
        align-items: center;
        font-family: 'Inconsolata-Regular', sans-serif;
        font-size: small;
        margin-bottom: 25px;
        opacity: 0.8;

        @media (max-width: ${({theme})=>theme.mobile}) {
            margin-bottom: 5px;
        }
    }

    span > div{
        margin-left: 4px;
    }

    span.error > div{
        color: red;
    }

    p{
        font-family: 'Inconsolata-Medium', sans-serif;
    }

    em.mail{
        color: ${({ theme }) => theme.colors.orange700};
        font-weight: bold;
        font-style: normal;
    }

    em.name{
        font-style: normal;
        background: linear-gradient(90deg,hsl(7, 86%, 67%),hsl(0, 0%, 100%));
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .printIcon{
        margin: 0 5px;
    }

    .homeIcon{
        padding: 2px 0;
        margin: 0 4px 0 3px;
    }

    div.inputFields{
        @media (max-width: ${({theme})=>theme.mobile}) {
            margin-top: 20px;
        }
    }

    @media print {
        body * {
        visibility: hidden; /* Hides everything */
        }
        #ticket-container,
        #ticket-container * {
        visibility: visible; /* Makes the ticket visible */
        }
        #ticket-container {
        position: absolute;
        top: 0;
        left: 0;
        }
    }
`