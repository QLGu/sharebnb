import React, { PropTypes } from 'react';
import {requireServerCss} from '../util';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as searchActions from '../actions/searchActions';

const styles = __CLIENT__ ? require('./Result.scss') : requireServerCss(require.resolve('./Result.scss'));

import ResultMap from '../components/Map';
import ResultListing from '../components/ResultListing';

class Result extends React.Component {

  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(n, e) {
    let newState = this.props.search.data.query;
    if(n === "location"){
      newState[n] = e.target.value;
    } else if(e.target.value === "on"){
      newState[n] = 
        this.props.search.data.query[n] === "true" ? "false" : "true";
    } else {
      newState[n] = e.target.value;
    }
    this.props.searchListings(newState);
  }

  render() {
    let title = 'Results';
    let {search} = this.props;
    return (
      <div className={styles.resultContainer}>
        <div className={styles.navBg}/>
        <div className={styles.fixed + " row"}>
          <ResultListing query={search.data.query} _filterChange={this.handleFilterChange}/>
          <ResultMap location={search.data.query.location}/>
        </div>
      </div>
    );
  }
}


@connect(state => ({
  search: state.search,
}))

export default 
class ResultContainer {
  static propTypes = {
    search: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { search, dispatch } = this.props;
    return <Result search={search} {...bindActionCreators(searchActions, dispatch)} />;
  }
}
