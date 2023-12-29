import React from 'react';
import './Carrot.css';
import { BASE_ASSET_URL } from '../../config';

export default function Carrot() {
   const slidder = () => {
      window.scrollBy(0, 950);
   };

   return (
      <div className='downArrow bounce' aria-hidden onClick={slidder}>
         <img src={`${BASE_ASSET_URL}/images/downCarrot.png`} alt='Down Carrot' />
      </div>
   );
}
