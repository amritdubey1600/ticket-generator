import styled from "styled-components";

export const ChildContainer=styled.div`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > p.subTitle{
        font-size: medium;
        letter-spacing: 2px;
        margin: 40px;
        max-width: 550px;
        text-align: center;
        opacity: 0.8;
    }
`