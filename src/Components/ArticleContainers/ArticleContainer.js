import React from 'react';
import './ArticleContainer.css';

export default function ArticleContainer({ articleDetails }) {
   const { file, image, alt, displayName } = articleDetails;

   return (
      <div className='articleContainer'>
         <a className='articleATag' href={file} target='_blank' rel='noreferrer'>
            <img style={{ borderRadius: '9px' }} src={image} alt={alt} />
            <h3 id='fileDisplayName'>{displayName}</h3>
         </a>
      </div>
   );
}
