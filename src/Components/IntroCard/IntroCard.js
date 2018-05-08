import React, { Component }  from 'react';
import './IntroCard.css';

import Button from '../Button/Button.js';

class IntroCard extends Component {
  render() {
    return (
      <div className='introCard'>
        <div className='introText'>
            <h1>Graham Hervey</h1>
            <h3>Develop Anything and Everything</h3>
            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                <Button source='github.com/grhervey' value='This Sites Code'/>
            </div>
        </div>
      </div>
    );
  }
}



export default IntroCard;
