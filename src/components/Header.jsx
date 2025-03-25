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
  height: 207px; 
  z-index: 100; 
  
`;
const Baslik = styled.img`
  margin-top: 50px;
`;

function HeaderOrder() {
  return (
    <HeaderContainer>
      <Baslik src ={headImage} />
      
    </HeaderContainer>
  )
}

export default HeaderOrder;