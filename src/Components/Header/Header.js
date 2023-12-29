import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { BASE_ASSET_URL } from '../../config';

export default function Header() {
   const [menuDisplay, setMenuDisplay] = useState(false);

   return (
      <header className='constantHead'>
         <Link to='/'>
            <img src={`${BASE_ASSET_URL}/images/transparentLogo.png`} alt='' id='companyName' style={{ width: '16em', padding: '0' }} />
         </Link>

         <nav className='mainNavbar'>
            <div className='topNav'>
               <div className={menuDisplay ? 'hamburger change' : 'hamburger'} aria-hidden id='menu-icon' type='button' onClick={e => setMenuDisplay(!menuDisplay)}>
                  <div className='bar1'></div>
                  <div className='bar2'></div>
                  <div className='bar3'></div>
               </div>
               <ol className={menuDisplay ? 'menuItems open' : 'menuItems'} aria-hidden onClick={() => setMenuDisplay(false)}>
                  <li>
                     <Link to='/About'>TEAM</Link>
                  </li>
                  <li>
                     <Link to='/Resources'>RESOURCES</Link>
                  </li>
                  <li>
                     <Link to='/Connect'>CONNECT</Link>
                  </li>
                  <li>
                     <Link to='/Sfp'>SFP LOGIN</Link>
                  </li>
               </ol>
            </div>
         </nav>
      </header>
   );
}
