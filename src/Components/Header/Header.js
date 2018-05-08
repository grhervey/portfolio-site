import React, { Component }  from 'react';
import './Header.css';
import Icon from '../Icon/Icon';


class Header extends Component {
  render() {
    const {style} = this.props;
    return (
      <div className='Navigation' style={style}>
        <div className='content'>
          <h1 className='logo'>Graham Hervey</h1>
          <div className='contact'>
              <Icon href='https://github.com/grhervey' image='github'/>
              <Icon href='https://www.linkedin.com/in/grhervey/' image='linkedIn'/>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
