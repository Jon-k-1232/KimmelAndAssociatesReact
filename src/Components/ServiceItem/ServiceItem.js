import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceItem.css';

export default function ServiceItem({ image, imageAlt, label, labelDetail, link }) {
  return (
    <div className='serviceContainer'>
      <img src={image} alt={imageAlt} id='serviceItemImage' />
      <h2 id='serviceItemLabel'>{label}</h2>
      <p id='labelDetail'>{labelDetail}</p>
      {link && (
        <p id='learnMore'>
          <Link to={link}>Learn More</Link>
        </p>
      )}
    </div>
  );
}
