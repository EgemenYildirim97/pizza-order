import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components'

const SuccessContainer = styled.div`
background-color:  #CE2829; 
  min-height: 100vh;
  min-width:100vw; 
  display: flex;
  position: fixed; 
  top: 0; 
  left: 0;
   flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white; 
  p{
  font-size:56px;}
`;

function Success() {
  return (
    <SuccessContainer>
      <Header />
      <p>TEBRİKLER!</p>
      <p>SİPARİŞİNİZ ALINDI!</p>
    </SuccessContainer>
  )
}

export default Success