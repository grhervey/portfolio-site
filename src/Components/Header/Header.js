import React, { Component }  from 'react';
import './Header.css';
import Icon from '../Icon/Icon';


class Header extends Component {
  render() {
    const {style} = this.props;
    return (
      <div className='Navigation' style={style}>
        <h1 className='logo'>GH</h1>
        <div className='contact'>
            <Icon image='email'/>
            <Icon href='github.com/grhervey' image='github'/>
            <Icon href='linkedin.com/in/grhervey' image='linkedIn'/>
        </div>
      </div>
    );
  }
}

export default Header;
