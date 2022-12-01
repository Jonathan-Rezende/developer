import styled from "styled-components"

export const HeaderContainer = styled.header`
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: black;
    
    div{
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color:white;

        .header-ul{
        width:100%;
        height: 100%;
        border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: space-around;
        }
    }



`;

