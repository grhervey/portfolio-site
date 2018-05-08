import React, { Component }  from 'react';
import './Footer.css';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
          <div className='footer--content'>
            <div className='footer--buttons'>
                <Button source='https://github.com/grhervey/portfolio-site' value="This Site's Code"/>
                <Button source='#' value='To Top'/>
            </div>
            <div className='footer--contacts'>
                <p>Graham.Hervey@gmail.com</p>
                <div footer--icons>
                    <Icon href='https://github.com/grhervey' image='github'/>
                    <Icon href='https://www.linkedin.com/in/grhervey/' image='linkedIn'/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;
