import React, { useEffect } from 'react';
import login from '../images/login.jpeg';
import TopView from '../Components/TopView/TopView';
import ReactGA from 'react-ga';

const TRACKING_ID = 'UA-220438183-5';
ReactGA.initialize(TRACKING_ID);

export default function Sfp() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
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
