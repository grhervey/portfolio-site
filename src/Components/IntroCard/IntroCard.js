import React, { Component }  from 'react';
import './IntroCard.css';

import Button from '../Button/Button.js';

class IntroCard extends Component {
  render() {
    return (
      <div className='introCard'>
        <div className='introText'>
            <h1>Graham Hervey</h1>
            <h3>Developer: JavaScript, Python, C#</h3>
            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                <Button source='https://github.com/grhervey/portfolio-site' value="This Site's Code"/>
            </div>
        </div>
      </div>
    );
  }
}



export default IntroCard;
