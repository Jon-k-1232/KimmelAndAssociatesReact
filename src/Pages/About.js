import React, { useEffect } from 'react';
import TopView from '../Components/TopView/TopView';
import Employee from '../Components/Employee/Employee';
import { BASE_ASSET_URL } from '../config';
import ReactGA from 'react-ga4';

const TRACKING_ID = '327902024';
ReactGA.initialize(TRACKING_ID);

export default function About() {
   useEffect(() => {
      ReactGA.send({ hitType: 'pageview', page: '/About' });
   }, []);

   return (
      <div className='aboutPage'>
         <div>
            <TopView
               image={`${BASE_ASSET_URL}/images/stars.jpg`}
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
      image: `${BASE_ASSET_URL}/images/mountain.jpeg`,
      imageAlt: 'Red Mountain.'
   },
   {
      name: 'Joe Cook',
      position: 'CLIENT SERVICES ASSOCIATE',
      image: `${BASE_ASSET_URL}/images/desertMountainSunset.jpeg`,
      imageAlt: 'Mountain Sunset.'
   },
   {
      name: 'Kennedy Crawford',
      position: 'CLIENT SERVICES ASSOCIATE',
      image: `${BASE_ASSET_URL}/images/cactusAtNight.jpeg`,
      imageAlt: 'Superstition Mountains.'
   },
   {
      name: 'Ella Keller-Ogborn',
      position: 'CLIENT SERVICES ASSOCIATE',
      image: `${BASE_ASSET_URL}/images/superstitionMountains.jpg`,
      imageAlt: 'Superstition Mountains.'
   },
   {
      name: 'Marsha Johnson',
      position: 'ACCOUNTING MANAGER',
      image: `${BASE_ASSET_URL}/images/cactusAtNight.jpeg`,
      imageAlt: 'Cactus With Stars in the sky.'
   },
   {
      name: 'Kati Strough',
      position: 'CLIENT SERVICES ASSOCIATE',
      image: `${BASE_ASSET_URL}/images/sunsetCactus.jpeg`,
      imageAlt: 'Desert cactus at sunset.'
   },
   {
      name: 'Eliza Hollingsworth',
      position: 'CLIENT SERVICES REPRESENTATIVE',
      image: `${BASE_ASSET_URL}/images/fourPeaks.jpeg`,
      imageAlt: 'Four Peaks Mountain.'
   },
   {
      name: 'Kasi Kimmel',
      position: 'MARKETING COORDINATOR',
      image: `${BASE_ASSET_URL}/images/sedona.jpeg`,
      imageAlt: 'Red mountains of Sedona.'
   }
];
