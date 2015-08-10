/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import SearchForm from './SearchForm';

import {requireServerCss, requireServerImage} from '../util';

const styles = __CLIENT__ ? require('./Search.scss') : requireServerCss(require.resolve('./Search.scss'));

class Search {

  render() {
    return (
      <div className="Search">
        <div className="Search-container">
          <SearchForm />
        </div>
      </div>
    );
  }

}

export default Search;
