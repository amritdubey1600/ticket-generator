import styled from "styled-components";

export const ChildContainer=styled.div`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > p.subTitle{
        font-size: medium;
        letter-spacing: 2px;
        margin-bottom: 40px;
        text-align: center;
        opacity: 0.8;
    }
`