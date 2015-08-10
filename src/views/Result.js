/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';

// import ResultMap from '../ResultMap';
// import ResultListing from '../ResultListing';

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
    
    return (
      <div className="Result">

      </div>
    );
  }

}

export default Result;
