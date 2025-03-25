import React from 'react'
import styled from "styled-components";
import homeImage from '../images/home-banner.png';

import Header from '../components/Header'
import { useHistory } from 'react-router-dom';


const ArkaPlan = styled.div`
background-image: url(${homeImage});
background-size: cover;
 position: absolute; 
  top: 0; 
  left: 0;
  width: 100%; 
  height: 100%; 

`; 

const Slogan = styled.div`
position: absolute;
top: 27%; left: 50%;
transform: translate(-50%, -50%);
color: white;
font-size: 48px;
font-family: "Roboto Condensed", sans-serif;
font-optical-sizing: auto;
font-weight: lighter;
line-height: 1.2;

`;
const Button = styled.button`
position: absolute;
top: 40%; left: 45%;
background: #FDC913;
color:black;
font-size: 10px;
padding: 10px 40px ;
 border-radius: 30px;
`;

const yazi1 ="KOD ACIKTIRIR";
const yazi2 ="PİZZA, DOYURUR";
function Home() {
  const history = useHistory();
  const yonlendir = () => {
    history.push('/order-pizza'); 
  };
  return (
    <ArkaPlan>
        <Header />
        <Slogan>
          {yazi1}
          <br/>
          {yazi2}
        </Slogan>
        <Button onClick={yonlendir}>
          ACIKTIM
        </Button>


    </ArkaPlan>
  )
}

export default Home;