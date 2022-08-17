import React from 'react';
import Carrot from '../Carrot/Carrot';

export default function TopView({ image, imageClass, imageAlt, SayingLineOne, SayingLineTwo, classLabel, typography }) {
  return (
    <div className='mainTop'>
      <img src={image} alt={imageAlt} className={imageClass ? imageClass : 'mainHomeImage'} />
      {!SayingLineTwo && !typography && <h1 id='mainHomeTopText'>{SayingLineOne}</h1>}

      {SayingLineTwo && !typography && (
        <h1 className='topWordsAbout'>
          {SayingLineOne}
          <br />
          {SayingLineTwo}
        </h1>
      )}

      {typography && classLabel && (
        <div className={classLabel}>
          <h4>{SayingLineOne}</h4>
          <h1>{SayingLineTwo}</h1>
        </div>
      )}
      <Carrot />
    </div>
  );
}
