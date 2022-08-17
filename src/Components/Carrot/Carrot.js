import React from 'react';
import './Carrot.css';
import downCarrot from '../../images/downCarrot.png';

export default class Carrot extends React.Component {
  slidder = () => {
    window.scrollBy(0, 800);
  };

  render() {
    return (
      <div className='downArrow bounce' aria-hidden onClick={this.slidder}>
        <img src={downCarrot} alt='Down Carrot' />
      </div>
    );
  }
}
