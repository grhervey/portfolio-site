import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.css';


class Button extends Component{
    static propTypes = {
        type: PropTypes.oneOf(['Normal', 'Big']),
        disabled: PropTypes.bool,
        value: PropTypes.string,
        icon: PropTypes.string,
        source: PropTypes.string,
    }

    static defaultProps = {
        type: 'Normal',
        disabled: false,
        value: 'Button',
        icon: null,
        source: '#',
    }
    _getClassnames = () => {
        const { type, disabled,hovered } = this.props;
        return classNames('Button', {
            ['Button--Big']: type === 'Big',
            ['Button--disabled']: disabled,
        });
    };

    render() {
        const {value, icon, source} = this.props;
        return(
               <a href={source}><button
                className={this._getClassnames()}
                href={source}
               >
               {icon && <div className='Button__icon'>{icon}</div>}
                <div className='Button__value'>{value}</div>
               </button></a>
            );
    }
}


export default Button;
