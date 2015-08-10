/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import ResultFilterBox from './ResultFilterBox';
import ResultListingItem from './ResultListingItem';

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
      <div className="col-sm-7">
        <ResultFilterBox filters={ this.props.query } _filterChange={ this.props._queryChange }/>
        {renderedSamples}
      </div>
    );
  }

}

export default ResultListing;
