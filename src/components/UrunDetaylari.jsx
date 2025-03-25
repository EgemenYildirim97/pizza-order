import React from 'react';
import styled from 'styled-components';
const UrunDetaylariContainer = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;
const FiyatDereceYorum = styled.div`
  display: flex;
  
`;
const Fiyat = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-right: 20px;
`;
const Derece = styled.span`
  margin-left:350px;
  margin-right:50px;
  
`;
const YorumSayisi = styled.span`
  color: #888;
`;

const Aciklama = styled.p`
  line-height: 1.6;
`;

function UrunDetaylari({ urun }) {
  return (
    <UrunDetaylariContainer>
      <h2>{urun.ad}</h2>
      <FiyatDereceYorum>
        <Fiyat>{urun.fiyat}₺</Fiyat>
        <Derece>{urun.puan}</Derece>
        <YorumSayisi>({urun.yorumSayisi})</YorumSayisi>
      </FiyatDereceYorum>
      <Aciklama>{urun.aciklama}</Aciklama>
    </UrunDetaylariContainer>
  );
}

export default UrunDetaylari;