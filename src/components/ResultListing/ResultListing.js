/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './ResultListing.css';
import ResultFilterBox from '../ResultFilterBox';
import ResultListingItem from '../ResultListingItem';

@withStyles(styles)
class ResultListing extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let sampleListings = ["test", "test2", "test3", "test4", "test5"];
    let renderedSamples = sampleListings.map(function(listing){
      return <ResultListingItem />
    })
    return (
      <div className="ResultListing">
        <ResultFilterBox />
        {renderedSamples}
      </div>
    );
  }

}

export default ResultListing;
