import React from 'react';

import './index.css';

import SvgSelector from './../svgSelector/index';

function Search({ placeholder }) {
    return (
        <div className="search">
            <input type="text" className="search__input" placeholder />
            <span className="search__icon">
                <SvgSelector name={'search'} size="32" />
            </span>
        </div>
    );
}

export default Search;

