import React, { useEffect, useState } from 'react';
import UrunDetaylari from './UrunDetaylari';
import Secenekler from './Secenekler';
import Malzemeler from './Malzemeler';
import styled from 'styled-components';
import SiparisOzeti from './SiparisOzeti';


const urun = {
    ad: "Position Absolute Acı Pizza",
    fiyat: 85.50,
    puan: 4.9,
    yorumSayisi: 200,
    aciklama: "Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.",
    boyutlar: ["Küçük", "Orta", "Büyük"],
    hamurlar: [["Hamur Kalınlığı"],["İncecik Hamur"],["Normal Hamur"]],
    malzemeler: [
      { ad: "Pepperoni", secili: false ,fiyat:5},
      { ad: "Domates", secili: false ,fiyat:5},
      { ad: "Biber", secili: false ,fiyat:5},
      { ad: "Sosis", secili: false ,fiyat:5},
      { ad: "Mısır", secili: false ,fiyat:5},
      { ad: "Sucuk", secili: false ,fiyat:5},
      { ad: "Kanada Jambonu", secili: false ,fiyat:5},
      { ad: "Ton Balığı", secili: false,fiyat:5},
      { ad: "Ananas", secili: false,fiyat:5},
      { ad: "Tavuk Izgara", secili: false ,fiyat:5},
      { ad: "Jalepeno", secili: false ,fiyat:5},
      { ad: "Kabak", secili: false ,fiyat:5},
      { ad: "Soğan", secili: false ,fiyat:5},
      { ad: "Sarımsak", secili: false ,fiyat:5},
    ],
  };

const AnaBilesenContainer = styled.div`
   max-width: 1200px;
  margin-top:110px;
  padding: 20px;
  background-color: white;
  color: black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: fixed; // Flexbox kullanıyoruz
  flex-direction: column; // İçeriği dikey olarak sıralıyoruz
  align-items: center; // İçeriği yatayda ortalıyoruz
`;



function Main() {
    const [seciliBoyut, setSeciliBoyut] = useState(urun.boyutlar[0]);
    const [seciliHamur, setSeciliHamur] = useState(urun.hamurlar[0]);
    const [seciliMalzemeler, setSeciliMalzemeler] = useState(urun.malzemeler.filter((m) => m.secili).map((m) => m.ad));
    const [siparisNotu, setSiparisNotu] = useState('');
    const fiyat = urun.fiyat;
    
    

  return (
    <AnaBilesenContainer>
      <UrunDetaylari urun={urun} />
      <Secenekler
        urun={urun}
        seciliBoyut={seciliBoyut}
        setSeciliBoyut={setSeciliBoyut}
        seciliHamur={seciliHamur}
        setSeciliHamur={setSeciliHamur}
      />
      <Malzemeler
        urun={urun}
        seciliMalzemeler={seciliMalzemeler}
        setSeciliMalzemeler={setSeciliMalzemeler}
      />
      <SiparisOzeti
        siparisNotu={siparisNotu}
        setSiparisNotu={setSiparisNotu}
        fiyat={fiyat}
        seciliMalzemeler={seciliMalzemeler}
        urun={urun}
      />
    </AnaBilesenContainer>
  );
}

export default Main;