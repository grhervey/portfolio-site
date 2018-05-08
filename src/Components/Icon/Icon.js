import React, {Component} from 'react';
import './Icon.css';

import github from '../../Images/GitHub-Mark-120px-plus.png';
import linkedIn from '../../Images/In-2C-59px-TM.png';
import email from '../../Images/if_Email_256x256-32_172180.png';


class Icon extends Component {
    iconSwitch = (image) => {
        switch(image) {
            case 'github':
                return github;
            case 'email':
                return email;
            case 'linkedIn':
                return linkedIn;
            default:
                return console.log('image Not found');
        }
    };

    render() {
        const {image, href} = this.props;
        return(
            <a href={href}><img className='icon' src={this.iconSwitch(image)} alt={image}/></a>
        );
    }
}

export default Icon;
