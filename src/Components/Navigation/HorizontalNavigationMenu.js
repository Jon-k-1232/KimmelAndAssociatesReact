import React from 'react';
import './HorizontalNavigationMenu.css';

export default function HorizontalNavigationMenu({ listItems, setListItemClicked, selectedItem, articleCounts }) {
   return (
      <div className='horizontalMenu'>
         <ol className='horizontalMenuList'>
            {listItems.map((listItem, i) => {
               const listItemStr = String(listItem).replace(/\s+/g, '').toLowerCase();
               const selectedItemStr = String(selectedItem).replace(/\s+/g, '').toLowerCase();
               const isItemSelected = listItemStr === selectedItemStr;

               // Check if the listItem is a string (not a number)
               const isStringItem = isNaN(listItem);
               const articleCount = isStringItem && articleCounts && articleCounts.hasOwnProperty(listItem) ? articleCounts[listItem] : 0;

               // Display text with count for strings, without count for numbers
               const displayText = isStringItem ? `${listItem} (${articleCount})` : listItem;

               return (
                  <li onClick={() => setListItemClicked(listItem)} key={i} style={{ color: isItemSelected ? '#cda577' : '' }}>
                     {displayText}
                  </li>
               );
            })}
         </ol>
      </div>
   );
}
