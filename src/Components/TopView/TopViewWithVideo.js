import React from 'react';
import Carrot from '../Carrot/Carrot';

export default function TopViewWithVideo({ video, videoAlt, SayingLineOne, SayingLineTwo, classLabel, typography }) {
  return (
    <div className='mainTop'>
      <video src={video} alt={videoAlt} playsInline muted autoPlay style={style.video}></video>
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

const style = {
  video: {
    background: 'black',
    height: '102vh',
    width: '100%'
  }
};
