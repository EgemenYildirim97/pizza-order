import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const SiparisOzetiContainer = styled.div`
  margin-top: 30px;
`;

const SiparisNotu = styled.div`
  margin-bottom: 20px;

  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background:white;
  }
`;

const SiparisToplamCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const AdetSecimiVeFiyat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap:2rem;
  margin-bottom: 20px;
`;

const AdetSecimi = styled.div`
  display: flex;
  align-items: center;
  align-self:flex-start;


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
  text-align: left;
  padding:0 100px;
  h3 {
    
  }
  p{
  color:#292929;
  }
  span {
  color:red;
  text
  }
`;

const SiparisVerButton = styled.button`
  background-color: #ffc107;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

function SiparisOzeti({ siparisNotu, setSiparisNotu, fiyat, seciliMalzemeler, urun}) {
    const [adet, setAdet] = useState(1);
    const [secimler, setSecimler] = useState(0);
    const [toplam, setToplam] = useState(fiyat);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const history = useHistory();

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

      useEffect(() => {
        setButtonDisabled(seciliMalzemeler.length > 10);
      }, [seciliMalzemeler]);

      const handleSiparisVer = () => {
        history.push('/success'); // "/success" sayfasına yönlendiriyoruz
      };
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
      <AdetSecimiVeFiyat>
        <AdetSecimi>
          <button onClick={() => setAdet(adet - 1)}>-</button>
          <span>{adet}</span>
          <button onClick={() => setAdet(adet + 1)}>+</button>
        </AdetSecimi>
        <SiparisToplamCard>
          <SiparisToplam>
            <h3>Sipariş Toplamı</h3>
            <p>Seçimler: {secimler}₺</p>
            <p><span>Toplam: {toplam}₺</span></p>
          </SiparisToplam>
          <SiparisVerButton onClick={handleSiparisVer} disabled={buttonDisabled}>SİPARİŞ VER</SiparisVerButton>
        </SiparisToplamCard>
      </AdetSecimiVeFiyat>
    </SiparisOzetiContainer>
      );
    }
    export default SiparisOzeti;
