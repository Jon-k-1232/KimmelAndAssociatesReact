import React, { useEffect, useState } from 'react';
import canyon from '../images/canyon.jpg';
import TopView from '../Components/TopView/TopView.js';
import ReactGA from 'react-ga';
import HorizontalNavigationMenu from '../Components/Navigation/HorizontalNavigationMenu';
import files from '../Resources/ResourceFileEnum';

const TRACKING_ID = 'UA-220438183-5';
ReactGA.initialize(TRACKING_ID);

export default function Resources() {
  const [menuNameSelection, setMenuNameSelection] = useState('Individual');

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const resources = () => {
    const resourceFiles = files.filter(file => file.group === menuNameSelection);
    return resourceFiles.map((file, i) => <p key={i}>{file.file}</p>);
  };

  return (
    <div className='culturePage'>
      <TopView
        image={canyon}
        imageClass='aboutCanyonImage'
        imageAlt='Looking up from narrow canyon.'
        SayingLineOne='We serve as your financial compass'
        SayingLineTwo='Helping customize a plan to fit your goals'
      />
      <HorizontalNavigationMenu listItems={listItems} setListItemClicked={menuName => setMenuNameSelection(menuName)} />
      <div className='lowerCulture'>{resources()}</div>
    </div>
  );
}

const listItems = [
  {
    displayName: 'Individual',
    value: 'Individual'
  },
  {
    displayName: 'Business',
    value: 'Business'
  },
  {
    displayName: 'Estates and Trusts',
    value: 'EstatesAndTrusts'
  },
  {
    displayName: 'Retirement Planning',
    value: 'RetirementPlanning'
  },
  {
    displayName: 'Independent Contractors',
    value: 'IndependentContractors'
  }
];
