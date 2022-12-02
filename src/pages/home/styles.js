import styled from "styled-components";

export const Container = styled.div`
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 3px solid blue;

        img{
            transform: rotate(45deg);
            width: 200px;
            height: 166px;
            background: #2e8cc3;
            width: 153px;
            height: 159px;
            opacity: 0.8;;       
            border-radius: 15%;
        }

        h1{
            font-size: 50px;
            color: #2e8cc3;
            padding-bottom: 5spx;
        }

        h2{
            font-size: 40px;
            color: #2e8cc9;
            padding-bottom: 10px;
            margin-left: 30px;
        }

`;