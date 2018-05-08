import React, { Component }  from 'react';
import './Footer.css';

import Button from '../Button/Button';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <Button label='Resume'/>
        <Button label='To Top'/>
      </div>
    );
  }
}

export default Footer;
