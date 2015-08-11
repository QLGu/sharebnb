import React, { PropTypes } from 'react';
import ResultFilterBox from './ResultFilterBox';
import ResultListingItem from './ResultListingItem';
import {requireServerCss} from '../util';

const styles = __CLIENT__ ? require('./ResultListing.scss') : requireServerCss(require.resolve('./ResultListing.scss'));


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
      <div className={styles.resultListing + " col-sm-7"}>
        <ResultFilterBox query={ this.props.query } _filterChange={ this.props._filterChange }/>
        {renderedSamples}
      </div>
    );
  }

}

export default ResultListing;
