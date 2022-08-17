import React, { useEffect } from 'react';
import TopView from '../Components/TopView/TopView';
import dc from '../images/dc.jpg';
import coin from '../images/coin.jpg';
import cacti from '../images/cacti.jpg';
import swan from '../images/swan.jpg';
import stars from '../images/stars.jpg';
import Employee from '../Components/Employee/Employee';
import ReactGA from 'react-ga';

const TRACKING_ID = 'UA-220438183-5';
ReactGA.initialize(TRACKING_ID);

export default function About() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className='aboutPage'>
      <div>
        <TopView
          image={stars}
          imageAlt='Looking at stars from narrow canyon.'
          SayingLineOne='Your Valuable Team at'
          SayingLineTwo='James F. Kimmel & Associates, Inc'
        />

        <div className='lowerAbout'>
          <div className='teamMembers'>
            {employeeList.map((employ, key) => (
              <Employee image={employ.image} imageAlt={employ.imageAlt} name={employ.name} position={employ.position} key={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const employeeList = [
  {
    name: 'James F. Kimmel',
    position: 'PRESIDENT',
    image: dc,
    imageAlt: 'Clear Vision'
  },
  {
    name: 'Misty Segafredo',
    position: 'OFFICE MANAGER',
    image: coin,
    imageAlt: 'Money sitting on table'
  },
  {
    name: 'Sidney Brinn',
    position: 'ADMINISTRATION',
    image: cacti,
    imageAlt: 'Saguaro cactus at night'
  },
  {
    name: 'Marsha Johnson',
    position: 'ACCOUNTING MANAGER',
    image: swan,
    imageAlt: 'swan in pond.'
  }
];
