import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ProjectCard.css'

import Button from '../Button/Button';
import Icon from '../Icon/Icon';


class ProjectCard extends Component {
    static propTypes = {
        id: PropTypes.int,
        type: PropTypes.oneOf(['Big','Medium','Small', 'Mobile']),
        name: PropTypes.string,
        image: PropTypes.string,
        link: PropTypes.string,
        git: PropTypes.string,
        text: PropTypes.string,
    }

    static defaultProps = {
        type: 'Big',
        name: 'Project',
        image: 'image',
        link: 'link',
        git: 'git',
        text: ' ',
    }
    _getClassnames = () => {
        const { type, id } = this.props;
        return classNames('ProjectCard', {
            ['ProjectCard--big']: type === 'Big',
            ['ProjectCard--medium']: type === 'Medium',
            ['ProjectCard--small']: type === 'Small',
            ['ProjectCard--mobile']: type === 'Mobile',
        });
    };

     render() {
        const {name, image,link,git,text} = this.props;
        return(
            <div className={this._getClassnames()}>
                <div className='info'>
                    <h2>{name}</h2>
                    <p>{text}</p>
                    <div className='buttons'>
                        <Button label='Open'/>
                        <Icon image='github'/>
                    </div>
                </div>
                <div className='image'>
                    <img alt={name} src={image} width='100%' height='100%'/>
                </div>

            </div>
        );
     }
}

export default ProjectCard;
