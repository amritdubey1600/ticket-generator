import styled from "styled-components";

export const TicketContainer=styled.div`
    background: url("/assets/images/pattern-ticket.svg");
    background-size: cover;
    width: 500px;
    height: 233px;
    margin: 50px 0;
    padding: 20px;

    div.header, div.footer{
        display: flex;
        align-items: center;
    }

    div.header > h2{
        margin-left: 10px;
    }

    div.names{
        margin-left: 10px;
    }

    div.names > h3{
        margin-bottom: 5px;
    }

    @media (max-width: ${({theme})=>theme.mobile}) {
        width: 340px;
        height: 175px;
        padding: 8px;
    }
`