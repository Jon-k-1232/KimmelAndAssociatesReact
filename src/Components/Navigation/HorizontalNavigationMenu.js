import React from 'react';
import './HorizontalNavigationMenu.css';

export default function HorizontalNavigationMenu({ listItems, setListItemClicked, selectedItem }) {
   return (
      <div className='horizontalMenu'>
         <ol className='horizontalMenuList'>
            {listItems.map((listItem, i) => {
               // Convert both listItem and selectedItem to strings and lowercase for comparison
               const isItemSelected = String(listItem).toLowerCase() === String(selectedItem).toLowerCase();

               return (
                  <li onClick={() => setListItemClicked(listItem)} key={i} style={{ color: isItemSelected ? '#cda577' : '' }}>
                     {listItem}
                  </li>
               );
            })}
         </ol>
      </div>
   );
}
