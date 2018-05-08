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
            <p>Graham.Hervey@gmail.com</p>
            <Icon href='https://github.com/grhervey' image='github'/>
            <Icon href='https://www.linkedin.com/in/grhervey/' image='linkedIn'/>
        </div>
      </div>
    );
  }
}

export default Header;
