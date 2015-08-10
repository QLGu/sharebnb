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
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange(n, e) {
    let newState = {};

    if(e.target.value === "on"){
      newState[n] = !this.state[n];
    } else {
      newState[n] = e.target.value;
    }

    this.setState(newState);
  }

  render() {
    let title = 'Results';
    let {search} = this.props;
    console.log(search.query)
    return (
      <div className={styles.resultContainer}>
        <div className="row">
          <ResultListing query={search.query} _queryChange={this.handleFilterChange}/>
          <ResultMap location={search.query.location}/>
        </div>
      </div>
    );
  }

}


@connect(state => ({
  search: state.search.data,
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
