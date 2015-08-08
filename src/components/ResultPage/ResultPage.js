/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './ResultPage.css';
import ResultMap from '../ResultMap';
import ResultListing from '../ResultListing';

@withStyles(styles)
class ResultPage extends React.Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = this._parseQuery(this.props.query)
  }

  _parseQuery(query) {
    let newState = {};
    let split = query.split('?');
    if(split[1]){
      let params = split[1].split('&').map(function(x){ return x.split('=') });
      for (let i of params) {
      newState[i[0]] = i[1];
      }
    }
    newState['location'] = split[0];

    return newState
  }

  render() {
    let title = 'Results';
    this.context.onSetTitle(title);
    
    return (
      <div className="ResultPage">
        <ResultListing />
        <ResultMap location={ this.state.location }/>
      </div>
    );
  }

}

export default ResultPage;
