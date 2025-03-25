import React from 'react';
import styled from 'styled-components';

const Secimler = styled.div`
display:flex;
Justify-content:space-around;

gap:2rem;
`;

const BoyutSec = styled.div`
display:flex;
flex-direction:column;
gap:1rem;

`;
const HamurSec = styled.div`

`;

function Secenekler({ urun, seciliBoyut, setSeciliBoyut, seciliHamur, setSeciliHamur }) {
  return (
    <Secimler>
      <BoyutSec>
        <h3>Boyut Seç</h3>
        {urun.boyutlar.map((boyut) => (
          <label key={boyut}>
            <input
              type="radio"
              value={boyut}
              checked={seciliBoyut === boyut}
              onChange={() => setSeciliBoyut(boyut)}
            />
            {boyut}
          </label>
        ))}
      </BoyutSec>
      <HamurSec>
        <h3>Hamur Seç</h3>
        <select value={seciliHamur} onChange={(e) => setSeciliHamur(e.target.value)}>
          {urun.hamurlar.map((hamur) => (
            <option key={hamur} value={hamur}>
              {hamur}
            </option>
          ))}
        </select>
      </HamurSec>
    </Secimler>
  );
}

export default Secenekler;