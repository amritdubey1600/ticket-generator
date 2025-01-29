import styled from "styled-components";

export const PrintButton=styled.button`
    color: black;
    font-weight: 700;
    display: flex;
    align-items: center;
    width: 75px;
    height: 40px;
    border-radius: 10px;
    margin: 2.5px 5px;
    font-family: 'Inconsolata-Medium', sans-serif;
    background-color: ${({theme})=>theme.colors.orange500};
    cursor: pointer;
`