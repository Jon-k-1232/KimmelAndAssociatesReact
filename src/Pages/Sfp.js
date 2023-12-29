import React, { useEffect } from 'react';
import TopView from '../Components/TopView/TopView';
import { BASE_ASSET_URL } from '../config';
import ReactGA from 'react-ga4';

const TRACKING_ID = '327902024';
ReactGA.initialize(TRACKING_ID);

export default function Sfp() {
   useEffect(() => {
      ReactGA.send({ hitType: 'pageview', page: '/Sfp' });
   }, []);

   return (
      <div className='sfpPage'>
         <div className='loginWrapper'>
            <TopView image={`${BASE_ASSET_URL}/images/coinsInJar.jpg`} imageAlt='coins in jar' SayingLineOne='Partnering Together' />

            <div className='loginBottom'>
               <h3>Uploading documents has never been easier.</h3>
               <a href='https://taxcents.securefilepro.com/'>
                  <button style={style.aTag} id='logIn'>
                     Secure File
                  </button>
               </a>
            </div>
         </div>
      </div>
   );
}

const style = {
   aTag: {
      cursor: 'pointer'
   }
};
