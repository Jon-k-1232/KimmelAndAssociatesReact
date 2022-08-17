import React from 'react';
import './HorizontalNavigationMenu.css';

export default function HorizontalNavigationMenu({ listItems, setListItemClicked }) {
  return (
    <div className='horizontalMenu'>
      <ol className='horizontalMenuList'>
        {listItems.map((listItem, i) => (
          <li onClick={e => setListItemClicked(listItem.value)} key={i}>
            {listItem.displayName}
          </li>
        ))}
      </ol>
    </div>
  );
}
