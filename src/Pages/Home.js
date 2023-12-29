import React, { useEffect } from 'react';
import Seo from '../Components/Seo/Seo';
import ServiceItem from '../Components/ServiceItem/ServiceItem';
import ReactGA from 'react-ga4';
import TopViewWithVideo from '../Components/TopView/TopViewWithVideo';
import logoVideo from '../images/logoVideo.mp4';
import { BASE_ASSET_URL } from '../config';

const TRACKING_ID = '327902024';
ReactGA.initialize(TRACKING_ID);

export default function Home() {
   useEffect(() => {
      ReactGA.send({ hitType: 'pageview', page: '/' });
   }, []);
   return (
      <div className='main'>
         <Seo />
         <TopViewWithVideo video={logoVideo} videoAlt='Icon Video' />
         <div className='mainBottom'>
            <main className='contentContainer'>
               <div className='mainQoute'>
                  <h2>Expert Accounting and Tax Service</h2>
                  <p id='qouteHead'>
                     Top rated tax specialist with over <br />
                     40 years of experience
                  </p>
               </div>

               <div className='serviceItemWrapper'>
                  {serviceItems.map((item, key) => (
                     <ServiceItem
                        image={item.image}
                        imageAlt={item.imageAlt}
                        label={item.label}
                        labelDetail={item.labelDetail}
                        key={key}
                        // link={item.link}
                     />
                  ))}
               </div>
            </main>
         </div>
      </div>
   );
}

const serviceItems = [
   {
      image: `${BASE_ASSET_URL}/images/table.jpg`,
      imageAlt: 'Planning outcomes together.',
      label: 'Taxes',
      labelDetail: 'Licensed enrolled agent for all 50 states. Specializing in individual, s-corp, llc, c-corp,non-profit, and fiduciary returns.',
      link: '/about'
   },
   {
      image: `${BASE_ASSET_URL}/images/irs.jpeg`,
      imageAlt: 'A picture of the IRS building with words IRS on building.',
      label: 'IRS Notices',
      labelDetail: 'Receive an IRS notice and have questions? We can help!',
      link: '/about'
   },
   {
      image: `${BASE_ASSET_URL}/images/bookkeeping.jpeg`,
      imageAlt: 'A stack of binders containing invoices, and receipts.',
      label: 'Bookkeeping',
      labelDetail: 'Quickbooks, financial statements, bank financial statements, and mortgage financial statements.',
      link: '/about'
   },
   {
      image: `${BASE_ASSET_URL}/images/trust.jpeg`,
      imageAlt: 'A piece of paper with trust written on it.',
      label: 'Trust and Estate Tax Planning',
      labelDetail: "Whether its your estate or a loved one's, we have your best interests in mind.",
      link: '/about'
   },
   {
      image: `${BASE_ASSET_URL}/images/multi_state.jpeg`,
      imageAlt: 'A family at a travel destination.',
      label: 'Multi-State Tax Preparation',
      labelDetail: 'Whether you own a business, a vacation home, or are a US citizen abroad; we have you covered.',
      link: '/about'
   },
   {
      image: `${BASE_ASSET_URL}/images/business.jpeg`,
      imageAlt: 'A piece of paper with a pie chart and people around it planning.',
      label: 'EIN & Business Planning',
      labelDetail: 'Not only can we help obtain an employer identification number, but we can also help setup your business for success.',
      link: '/about'
   }
];
