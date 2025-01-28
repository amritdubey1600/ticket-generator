import styled from "styled-components";

export const UploadArea=styled.div`
    width: 450px;
    height: 140px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    border: 2px dashed hsl(252, 6%, 83%);
    background-color: rgba(255,255,255,0.1);
    border-radius: 10px;
    text-align: center;
    padding: 15px;
    margin: 8px 0;
    cursor: pointer;

    & > svg{
        background-color: rgba(255,255,255,0.2);
        width: 60px;
        height: 60px;
        opacity: 0.8;
        border-radius: 10px;
    }

    & > p{
        opacity: 0.8;
        letter-spacing: 2px;
        font-size: smaller;
    }

    @media (max-width: ${({theme})=>theme.mobile}) {
        width: 340px;
    }
`