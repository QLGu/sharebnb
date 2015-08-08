/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './SearchForm.css';
import Search from '../../utils/Search';

@withStyles(styles)
class SearchForm extends React.Component {

  constructor() {
    super();
    this.state = {
      location: "",
      checkIn: "",
      checkOut: "",
      occupancy: 1
    }
    this.submitSearch = this.submitSearch.bind(this);
  }

  static propTypes = {
    maxLines: PropTypes.number
  };

  static defaultProps = {
    maxLines: 1
  };

  handleChange(n, e) {
    let newState = {};
    newState[n] = e.target.value;
    this.setState(newState)
  }

  submitSearch(e) {
    if (this.validate()){
      Search.handleSubmit(e, this.state);
    } else {
      console.dir("Invalid search");
    }
  }

  validate(){
    return (this.state.location && this.state.checkIn && this.state.checkOut && this.state.occupancy)
  }

  render() {
    return (
      <form className="SearchForm" onSubmit={ this.submitSearch }>
        <input className="SearchForm-input input--location" 
               ref="location" 
               placeholder="Where do you want to go?"
               onChange={ this.handleChange.bind(this, 'location') } 
               value={ this.state.location } />
        <input type="date" 
               className="SearchForm-input input--date" 
               ref="checkIn" 
               placeholder="Check In"
               onChange={ this.handleChange.bind(this, 'checkIn') } 
               value={ this.state.checkIn } />
        <input type="date" 
               className="SearchForm-input input--date" 
               ref="checkOut" 
               placeholder="Check Out"
               onChange={ this.handleChange.bind(this, 'checkOut') } 
               value={ this.state.checkOut } />
        <input type="number" min="1" max="8" 
               className="SearchForm-input input--occupancy" 
               ref="occupancy" 
               placeholder="How Many?"
               onChange={ this.handleChange.bind(this, 'occupancy') } 
               value={ this.state.occupancy } />
        <button className="submitSearchButton" >Search</button>
      </form>
    );
  }

}

export default SearchForm;
