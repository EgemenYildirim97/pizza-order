import React from 'react';
import styled from 'styled-components';

const MalzemeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MalzemeItem = styled.div`
  width: 200px; // Her malzeme için genişlik ayarla
  margin-right: 20px; // Malzemeler arasında boşluk bırak
`;

function Malzemeler({ urun, seciliMalzemeler, setSeciliMalzemeler }) {
  const malzemeSec = (malzeme) => {
    if (seciliMalzemeler.includes(malzeme)) {
      setSeciliMalzemeler(seciliMalzemeler.filter((m) => m !== malzeme));
    } else {
      setSeciliMalzemeler([...seciliMalzemeler, malzeme]);
    }
  };

  return (
    <div>
      <h3>Ek Malzemeler</h3>
      <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
      <MalzemeContainer>
        {urun.malzemeler.map((malzeme) => (
          <MalzemeItem key={malzeme.ad}>
            <label>
              <input
                type="checkbox"
                value={malzeme.ad}
                checked={seciliMalzemeler.includes(malzeme.ad)}
                onChange={() => malzemeSec(malzeme.ad)}
              />
              {malzeme.ad}
            </label>
            
          </MalzemeItem>
        ))}
      </MalzemeContainer>
    </div>
  );
}

export default Malzemeler;