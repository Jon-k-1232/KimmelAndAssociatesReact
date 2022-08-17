import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [menuDisplay, setMenuDisplay] = useState(false);

  return (
    <header className='constantHead'>
      <h1 id='companyName'>
        <Link to='/'>James F. Kimmel & Associates, Inc</Link>
      </h1>
      <nav className='mainNavbar'>
        <div className='topNav'>
          <div
            className={menuDisplay ? 'hamburger change' : 'hamburger'}
            aria-hidden
            id='menu-icon'
            type='button'
            onClick={e => setMenuDisplay(!menuDisplay)}
          >
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar3'></div>
          </div>
          <ol className={menuDisplay ? 'menuItems open' : 'menuItems'} aria-hidden onClick={() => setMenuDisplay(false)}>
            <li id='about'>
              <Link to='/about'>TEAM</Link>
            </li>
            <li id='culture'>
              <Link to='/culture'>CULTURE</Link>
            </li>
            <li id='connect'>
              <Link to='/connect'>CONNECT</Link>
            </li>
            <li id='login'>
              <Link to='/sfp'>SFP LOGIN</Link>
            </li>
          </ol>
        </div>
      </nav>
    </header>
  );
}
