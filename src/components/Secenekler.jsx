import React from 'react';

function Secenekler({ urun, seciliBoyut, setSeciliBoyut, seciliHamur, setSeciliHamur }) {
  return (
    <div>
      <div>
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
      </div>
      <div>
        <h3>Hamur Seç</h3>
        <select value={seciliHamur} onChange={(e) => setSeciliHamur(e.target.value)}>
          {urun.hamurlar.map((hamur) => (
            <option key={hamur} value={hamur}>
              {hamur}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Secenekler;