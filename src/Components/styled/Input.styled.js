import styled from "styled-components";

export const Input=styled.input`
    color: black;
    border-radius: 10px;
    opacity: 0.5;
    width: 450px;
    display: block;
    height: 40px;
    margin: 8px 0 21px;
    padding-left: 10px;

    @media (max-width: ${({theme})=>theme.mobile}) {
        width: 340px;
    }
`