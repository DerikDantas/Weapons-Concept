import styled from 'styled-components';

import Background from '../../assets/images/background-scar.png'

export const Container = styled.div`
    margin-left: 100px;
    background-image: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p{
        margin: 0;
        color: white; 
        font-weight: bold;
        font-size: 18px;
    }

    div.linha-um{
        width: 100%;
        height: 60px;
    }
    .controls-arma{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%
    }
    
    .carousel-control-next, .carousel-control-prev{
        position: relative;
    }

    div.linha-dois{
        flex: 2;
    }

    h1.nome-arma{
        color: white;
        opacity: 0.4;
        text-align: center;
        font-size: 210px;
        font-weight: bold
    }
    img.img-scar{
        width: 80%;
        position: absolute;
        top: 180px;
        z-index: 999;
    }


    .hg-100{
        height: 100%
    }
    .align-container{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly
    }
    div.linha-tres{
        flex: 1;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    }
    .blur-background{
        background: linear-gradient(360deg, rgba(124, 109, 93, 0.6) 0%, rgba(119, 109, 99, 0) 95.31%);
        backdrop-filter: blur(2px);
    }
    h1{
        color: white;
        font-size: 36px
    }

    table {
        width: 100%;
    }
    tr{
        color: white;
        font-size: 15px
    }

    td {
        height: 40px;
    }

    @media(max-width: 768px){
        margin-left: 0;
        height: auto;

        h1.nome-arma{
        font-size: 70px;
        }
        img.img-scar{
            position: relative;
            top: 0;
            width: 100%
        }
        td {
            width: 50%;
        }
    }
`;
