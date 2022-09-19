import React from 'react';
import './Carrot.css';
import downCarrot from '../../images/downCarrot.png';

export default function Carrot() {
  const slidder = () => {
    window.scrollBy(0, 950);
  };

  return (
    <div className='downArrow bounce' aria-hidden onClick={slidder}>
      <img src={downCarrot} alt='Down Carrot' />
    </div>
  );
}
