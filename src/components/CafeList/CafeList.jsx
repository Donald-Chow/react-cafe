import React from 'react';
import Cafe from '../Cafe/Cafe';
import './CafeList.css';

function CafeList({cafes}) {

  return (
    <div className='cafe-list'>
      {cafes.map((cafe, index) => <Cafe cafe={cafe} key={index}/>)}
    </div>
  );
}

export default CafeList;
