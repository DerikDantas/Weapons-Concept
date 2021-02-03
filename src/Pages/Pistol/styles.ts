import styled from 'styled-components';

export const Container = styled.div`
    margin-left: 100px;
    background-color: black;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        color: white;
        font-size: 80px
    }
    @media(max-width: 768px){
        margin-left: 0;
        text-align: center
    }
`;
