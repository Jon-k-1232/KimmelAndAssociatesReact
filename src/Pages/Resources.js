import React, { useEffect, useState } from 'react';
import TopView from '../Components/TopView/TopView.js';
import ReactGA from 'react-ga4';
import HorizontalNavigationMenu from '../Components/Navigation/HorizontalNavigationMenu';
import files from '../Resources/ResourceFileEnum';
import ArticleContainer from '../Components/ArticleContainers/ArticleContainer';
import { BASE_ASSET_URL } from '../config.js';

const TRACKING_ID = '327902024';
ReactGA.initialize(TRACKING_ID);

const normalizeGroup = group => group.replace(/\s+/g, '').toLowerCase();

const Resources = () => {
   const [menuNameSelection, setMenuNameSelection] = useState('featured');
   const [selectedYear, setSelectedYear] = useState(taxYears()[taxYears().length - 1]);
   const [groupArticles, setGroupArticles] = useState([]);
   const [groupArticleCounts, setGroupArticleCounts] = useState({});

   useEffect(() => {
      ReactGA.send({ hitType: 'pageview', page: '/Resources' });
   }, []);

   useEffect(() => {
      updateGroupArticleCounts();
      setFirstGroupWithArticles();
      // eslint-disable-next-line
   }, [selectedYear]);

   const updateGroupArticleCounts = () => {
      const counts = listItems.reduce((acc, group) => {
         const groupNormalized = normalizeGroup(group);
         const count = (files[selectedYear] || []).filter(article => normalizeGroup(article.group) === groupNormalized).length;
         acc[group] = count;
         return acc;
      }, {});

      setGroupArticleCounts(counts);
   };

   const setFirstGroupWithArticles = () => {
      const selectedYearFiles = files[selectedYear] || [];
      const foundGroup = listItems.find(group => selectedYearFiles.some(article => normalizeGroup(article.group) === normalizeGroup(group)));

      if (foundGroup) {
         setMenuNameSelection(foundGroup);
         handleGroupSelection(foundGroup);
      } else {
         setGroupArticles([]);
      }
   };

   const handleGroupSelection = menuGroup => {
      const selectedYearFiles = files[selectedYear] || [];
      const selectedGroupArticles = selectedYearFiles.filter(article => normalizeGroup(article.group) === normalizeGroup(menuGroup));

      setGroupArticles(selectedGroupArticles);

      if (selectedGroupArticles.length > 0) {
         setMenuNameSelection(menuGroup.toLowerCase());
      } else {
         setMenuNameSelection(menuGroup.toLowerCase());
      }
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
         <HorizontalNavigationMenu listItems={listItems} setListItemClicked={handleGroupSelection} selectedItem={menuNameSelection} articleCounts={groupArticleCounts} />
         <div className='lowerResources'>
            {!groupArticles.length && <h2 id='fileDisplayName'>No articles are in this group. Come back later for articles!</h2>}
            {groupArticles.map((articleDetails, i) => (
               <ArticleContainer key={i} articleDetails={articleDetails} />
            ))}
         </div>
      </div>
   );
};

// Years are calculated based on the current year. Current tax year + 4 years back to equal 5 tax years.
const taxYears = () => {
   const currentYear = new Date().getFullYear();
   const currentTaxYear = currentYear - 1;
   const startYear = currentTaxYear - 4;

   return Array.from({ length: currentTaxYear - startYear + 1 }, (_, index) => startYear + index);
};

const listItems = ['Featured', 'Individual', 'Business', 'Estates and Trusts', 'Retirement Planning', 'Independent Contractors'];

export default Resources;
