import React, { useEffect, useState } from 'react';
import TopView from '../Components/TopView/TopView.js';
import ReactGA from 'react-ga4';
import HorizontalNavigationMenu from '../Components/Navigation/HorizontalNavigationMenu';
import files from '../Resources/ResourceFileEnum';
import ArticleContainer from '../Components/ArticleContainers/ArticleContainer';
import { BASE_ASSET_URL } from '../config.js';

const TRACKING_ID = '327902024';
ReactGA.initialize(TRACKING_ID);

export default function Resources() {
   const [menuNameSelection, setMenuNameSelection] = useState('featured');
   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear() - 1);

   useEffect(() => {
      ReactGA.send({ hitType: 'pageview', page: '/Resources' });
   }, []);

   const resources = () => {
      const currentYearFiles = files[selectedYear] || [];
      const resourceFiles = currentYearFiles.filter(file => file.group === menuNameSelection);

      if (!currentYearFiles.length) {
         return <h2 id='fileDisplayName'>It doesn't look like we have articles for this tax year. Comeback soon for new articles!</h2>;
      } else if (!resourceFiles.length) {
         return <h2 id='fileDisplayName'>It doesn't look like we have articles in this subject. Comeback soon for new articles!</h2>;
      }

      return resourceFiles.map((articleDetails, i) => <ArticleContainer key={i} articleDetails={articleDetails} />);
   };

   return (
      <div className='resourcePage'>
         <TopView
            image={`${BASE_ASSET_URL}/images/canyon.jpg`}
            imageClass='aboutCanyonImage'
            imageAlt='Looking up from narrow canyon.'
            SayingLineOne='An investment in knowledge'
            SayingLineTwo='pays the best interest.'
         />

         <HorizontalNavigationMenu listItems={taxYears()} setListItemClicked={year => setSelectedYear(year)} selectedItem={selectedYear} />
         <HorizontalNavigationMenu listItems={listItems} setListItemClicked={menuName => setMenuNameSelection(menuName.toLowerCase())} selectedItem={menuNameSelection} />

         <div className='lowerResources'>{resources()}</div>
      </div>
   );
}

const taxYears = () => {
   const currentYear = new Date().getFullYear();
   const currentTaxYear = currentYear - 1;
   const startYear = currentTaxYear - 4;

   return Array.from({ length: currentTaxYear - startYear + 1 }, (_, index) => startYear + index);
};

const listItems = ['Featured', 'Individual', 'Business', 'Estates and Trusts', 'Retirement Planning', 'Independent Contractors'];
