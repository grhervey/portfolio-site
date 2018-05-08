import React, {Component} from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    render() {
        return (
            <div className='searchBox'>
                <input
                type='search'
                placeholder='Search Projects'
                />
            </div>
        );
    }
}

export default SearchBox;
