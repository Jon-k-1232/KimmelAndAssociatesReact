import React from 'react';
import './Footer.css';

export default function Footer() {
   return (
      <footer className='constantFooter'>
         <div>
            <h4>James F. Kimmel & Associates</h4>
            <h5>16421 N. Tatum Blvd Suite 120</h5>
            <h5>Phoenix, Az 85032</h5>
            <h5>602-788-0903</h5>
            <h5>Aspire@JimKimmel.com</h5>
            <p>
               {/* <a href='https://jonathonkimmel.com' id='jonLink'> */}
               Developed by Jon Kimmel
               {/* </a> */}
            </p>
            <p>&#169; James F. Kimmel & Associates</p>
         </div>
      </footer>
   );
}
