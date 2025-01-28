import styled from "styled-components";

export const SubmitButton=styled.button`
    color: black;
    font-weight: 700;
    width: 450px;
    height: 40px;
    border-radius: 10px;
    margin-top: 2.5px;
    font-family: 'Inconsolata-Medium', sans-serif;
    background-color: ${({theme})=>theme.colors.orange500};
    cursor: pointer;
`