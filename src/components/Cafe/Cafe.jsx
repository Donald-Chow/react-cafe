// Gmaps URL example: `https://www.google.com/maps/search/?api=1&query=Starbucks Meguro,Tokyo`;

import React from 'react';
import './Cafe.css';

function Cafe({cafe}) {
  return (
    <div className='cafe-card'>
      <img src={cafe.picture} alt="" />
      <div>
        <div>
          <h5>{cafe.title}</h5>
          <p>
            {cafe.criteria.map((criterion,index) => <span key={index}>{criterion}</span>)}
          </p>
          </div>
          <a target="_blank" href="">Show the map 📍</a>
        </div>
    </div>
  );
}

export default Cafe;
