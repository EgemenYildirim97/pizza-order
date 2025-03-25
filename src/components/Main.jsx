import React, { useEffect, useState } from 'react';
import UrunDetaylari from './UrunDetaylari';
import Secenekler from './Secenekler';
import Malzemeler from './Malzemeler';
import styled from 'styled-components';

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
      { ad: "Sucuk", secili: false,fiyat:5},
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
const SiparisOzetiContainer = styled.div`
 margin-top: 30px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SiparisNotu = styled.div`
  margin-bottom: 20px;

  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;
const AdetSecimi = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  button {
    background-color: #ffc107;
    color: black;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }

  span {
    margin: 0 10px;
  }
`;

const SiparisToplam = styled.div`
 margin-bottom: 20px;
`;

const SiparisVerButton = styled.button`
  background-color: #ffc107;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`;
function SiparisOzeti({ siparisNotu, setSiparisNotu, fiyat, seciliMalzemeler, urun}) {
    const [adet, setAdet] = useState(1);
    const [secimler, setSecimler] = useState(0);
    const [toplam, setToplam] = useState(fiyat);
    useEffect(() => {
        let malzemeFiyati = 0;
        seciliMalzemeler.forEach((malzeme) => {
          const secilenMalzeme = urun.malzemeler.find((m) => m.ad === malzeme);
          if (secilenMalzeme) {
            malzemeFiyati += secilenMalzeme.fiyat;
          }
        });
        setSecimler(malzemeFiyati);
        setToplam((fiyat + malzemeFiyati) * adet);
      }, [adet, fiyat, seciliMalzemeler, urun.malzemeler]);
    return (
        <SiparisOzetiContainer>
            <SiparisNotu>
                <h3>Sipariş Notu</h3>
                <textarea
                value={siparisNotu}
                onChange={(e) => setSiparisNotu(e.target.value)}
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                />
            </SiparisNotu>
            <AdetSecimi>
                <button onClick={() => setAdet(adet - 1)}>-</button>
                <span>{adet}</span>
                <button onClick={() => setAdet(adet + 1)}>+</button>
            </AdetSecimi>
            <SiparisToplam>
                <p>Seçimler: {secimler}₺</p>
                <p>Toplam: {toplam}₺</p>
            </SiparisToplam>
            <SiparisVerButton>SİPARİŞ VER</SiparisVerButton>
    </SiparisOzetiContainer>
      );
    }

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