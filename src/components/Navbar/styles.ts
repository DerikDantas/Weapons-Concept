import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100px;
  height: 100vh;
  background: #BFA990;

  div.linha-nav{
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 0;
      padding: 0
  }

  div.logo{
      height: 82px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid white;
      padding: 0;
  }
  div.logo > a{
      width: 100%; 
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  div.logo > a:hover{
    background: #ad957b;
    padding: 0;
    margin: 0
  }


  div.links-nav{
      margin: 0;
      padding: 0;
  }
  
  div.menu-nav{
    height: 82px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 12px;
  }
  div.menu-nav:hover{
    background: #ad957b;
  }

  div.menu-nav > a{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 100%;
    height: 100%
  }
  a > span{
      color: white;
      font-size: 12px;
      margin-top: 3px
  }

  div.sub-menu{
    display: none;
    position: absolute;
    z-index: 99;
    right: -85px;
    
  }
  div.sub-menu > a{
    height: 82px;
    width: 100%;
    justify-content: center;
    align-items: center;
    display:flex;
    text-decoration: none
  }
  div.sub-menu > a:hover{
    border: 1px solid white;

  }
  div.menu-nav:hover .sub-menu{
    display: block;
    width: 85px;
    background: #ad957b;
  }

  @media(max-width: 768px){
    height: 100%;
    position: relative;
    width: 100%;

    div.linha-nav{
      flex-direction: row;
      align-items: center;
      justify-content: center;   
    }
    div.sub-menu{
      right: 0;
      width: 100%!important;
      bottom: 0
    }
  }
`;
