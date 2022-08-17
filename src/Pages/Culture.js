import React, { useEffect } from 'react';
import canyon from '../images/canyon.jpg';
import TopView from '../Components/TopView/TopView.js';
import ReactGA from 'react-ga';

const TRACKING_ID = 'UA-220438183-5';
ReactGA.initialize(TRACKING_ID);

export default function Culture() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className='culturePage'>
      <TopView
        image={canyon}
        imageClass='aboutCanyonImage'
        imageAlt='Looking up from narrow canyon.'
        SayingLineOne='We serve as your financial compass'
        SayingLineTwo='Helping customize a plan to fit your goals'
      />
      <div className='lowerCulture'>
        <div className='lowerText'>
          <h2 id='beni'>Benefits of Working With Us</h2>
          <h3 id='strive'>We strive to exceed your expectations every day.</h3>
          <p id='promises'>
            Our philosophy focuses on building and maintaining confident relationships. We focus on the client experience through competent
            professional advice, fine-tuning financial goals, transparent communication, and customized personal service.
          </p>
        </div>
      </div>
    </div>
  );
}
