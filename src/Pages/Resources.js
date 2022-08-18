import React, { useEffect, useState } from 'react';
import canyon from '../images/canyon.jpg';
import TopView from '../Components/TopView/TopView.js';
import ReactGA from 'react-ga';
import HorizontalNavigationMenu from '../Components/Navigation/HorizontalNavigationMenu';
import files from '../Resources/ResourceFileEnum';
import ArticleContainer from '../Components/ArticleContainers/ArticleContainer';

const TRACKING_ID = 'UA-220438183-5';
ReactGA.initialize(TRACKING_ID);

export default function Resources() {
  const [menuNameSelection, setMenuNameSelection] = useState('featured');

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const resources = () => {
    const resourceFiles = files.filter(file => file.group === menuNameSelection);
    if (!resourceFiles.length) {
      return <h2 id='fileDisplayName'>Comeback soon for new articles</h2>;
    } else {
    }
    return resourceFiles.map((file, i) => <ArticleContainer key={i} file={file} />);
  };

  return (
    <div className='resourcePage'>
      <TopView
        image={canyon}
        imageClass='aboutCanyonImage'
        imageAlt='Looking up from narrow canyon.'
        SayingLineOne='We serve as your financial compass'
        SayingLineTwo='Helping customize a plan to fit your goals'
      />
      <HorizontalNavigationMenu listItems={listItems} setListItemClicked={menuName => setMenuNameSelection(menuName)} />
      <div className='lowerResources'>{resources()}</div>
    </div>
  );
}

const listItems = [
  {
    displayName: 'Featured',
    value: 'featured'
  },
  {
    displayName: 'Individual',
    value: 'individual'
  },
  {
    displayName: 'Business',
    value: 'business'
  },
  {
    displayName: 'Estates and Trusts',
    value: 'estatesAndTrusts'
  },
  {
    displayName: 'Retirement Planning',
    value: 'retirementPlanning'
  },
  {
    displayName: 'Independent Contractors',
    value: 'independentContractors'
  }
];
