/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './ResultListing.css';
import ResultFilterBox from '../ResultFilterBox';

@withStyles(styles)
class ResultListing extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ResultListing">
        <ResultFilterBox />
      </div>
    );
  }

}

export default ResultListing;
