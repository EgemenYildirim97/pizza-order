import headImage from "../images/logo.svg";
import React from 'react'
import styled from 'styled-components';

const HeaderContainer = styled.div`
   background-color: #CE2829;
  color: white;
  text-align: center;
  position: fixed; 
  top: 0; 
  left: 0;
  width: 100%; 
  height: 200px; 
  z-index: 100; 
  
`;
const Baslik = styled.img`
  margin-top: 50px;
`;
const Navigasyon = styled.nav`
 margin-top: 60px;
a {
    color: white;
    text-decoration: none;
    
    font-weight:lighter;
    
  }
    a span{
    font-weight:bold;
    }
`;

function Header() {
  return (
    <HeaderContainer>
      <Baslik src ={headImage} />
      <Navigasyon>
        <a href="/">Anasayfa -</a>
        <a href="/secenekler"> Seçenekler -</a>
        <a href="/order-pizza"><span>Sipariş Oluştur</span></a>
      </Navigasyon>
    </HeaderContainer>
  )
}

export default Header;