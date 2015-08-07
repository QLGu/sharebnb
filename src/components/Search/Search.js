/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Search.css';
import withStyles from '../../decorators/withStyles';
import SearchForm from '../SearchForm';

@withStyles(styles)
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
