import React from 'react'
import styled from "styled-components";
import homeImage from '../images/home-banner.png';
import headImage from "../images/logo.svg";
import { useHistory } from 'react-router-dom';


const ArkaPlan = styled.div`
background-image: url(${homeImage});
background-size: cover;
position:relative;
width: 80vw;
height: 100vh;
margin: -40px  50px;
`; 
const Baslik = styled.img`

position: absolute;
top: 60px;
left: 32vw;
width:210px;
heigth:auto;
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
    history.push('/order-pizza'); // Hedef sayfanın yolunu belirtin
  };
  return (
    <ArkaPlan>
        <Baslik src={headImage} />
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