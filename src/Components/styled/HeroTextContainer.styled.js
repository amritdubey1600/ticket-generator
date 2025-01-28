import styled from "styled-components";

export const HeroTextContainer=styled.div`
    font-family: 'Inconsolata-Bold', sans-serif;
    font-weight: 700;
    font-size: 50px;
    margin-bottom: 10px;
    text-align: center;

    @media (max-width: ${({theme})=>theme.mobile}) {
        font-size: 30px;
        max-width: 340px;
    }
`