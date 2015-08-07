/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './SearchForm.css';

@withStyles(styles)
class SearchForm extends React.Component {

  constructor() {
    super();
    this.submitSearch = this.submitSearch.bind(this);
  }

  static propTypes = {
    maxLines: PropTypes.number
  };

  static defaultProps = {
    maxLines: 1
  };

  submitSearch(e) {
    e.preventDefault();
    let query = "";
    query += "You searched location: " + this.refs.location.value;
    query += "\nCheck in: " + this.refs.checkIn.value;
    query += "\nCheck out: " + this.refs.checkIn.value;
    query += "\nOccupancy: " + this.refs.occupancy.value;
    alert(query)
  }

  render() {
    return (
      <form className="SearchForm" onSubmit={ this.submitSearch }>
        <input className="SearchForm-input input--location" ref="location" placeholder="Where do you want to go?"/>
        <input type="date" className="SearchForm-input input--date" ref="checkIn" placeholder="Check In"/>
        <input type="date" className="SearchForm-input input--date" ref="checkOut" placeholder="Check Out"/>
        <input type="number" min="1" max="8" className="SearchForm-input input--occupancy" ref="occupancy" placeholder="How Many?"/>
        <button className="submitSearchButton" >Search</button>
      </form>
    );
  }

}

export default SearchForm;
