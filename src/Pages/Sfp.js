import React, { useEffect } from 'react';
import login from '../images/login.jpeg';
import TopView from '../Components/TopView/TopView';
import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-5T7QL64RT8';
ReactGA.initialize(TRACKING_ID);

export default function Sfp() {
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: '/Sfp' });
  }, []);

  return (
    <div className='sfpPage'>
      <div className='loginWrapper'>
        <TopView image={login} imageAlt='computer on desk' SayingLineOne='Partnering Together' />

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
