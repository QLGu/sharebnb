import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import router from 'react-router';
import * as searchActions from '../actions/searchActions';
import {requireServerCss, requireServerImage} from '../util';

const styles = __CLIENT__ ? require('./SearchForm.scss') : requireServerCss(require.resolve('./SearchForm.scss'));

class SearchForm extends Component {
  static propTypes = {
    search: PropTypes.object,
    searchListings: PropTypes.func.isRequired
  }

  constructor(props, context){
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      location: '',
      checkIn: '',
      checkOut: '',
      occupancy: 1
    }
  }

  handleChange(n, e) {
    let newState = {};
    newState[n] = e.target.value;
    this.setState(newState);
  }

  handleSubmit(e){
    const {searchListings} = this.props;
    searchListings(this.state);
    e.preventDefault();
    this.context.router.transitionTo('/results');
  }

  validate(){
    return (search.location && search.checkIn && search.checkOut && search.occupancy)
  }

  render() {
    const {search, searchListings} = this.props;
    return (
      <form className={styles.SearchForm} onSubmit={ this.handleSubmit }>
        <input type="text"
               className={styles.locationInput}
               ref="location" 
               placeholder="Where do you want to go?"
               onChange={ this.handleChange.bind(this, 'location') } 
               value={ this.state.location } />
        <input type="date" 
               ref="checkIn" 
               placeholder="Check In"
               onChange={ this.handleChange.bind(this, 'checkIn') } 
               value={ this.state.checkIn } />
        <input type="date" 
               ref="checkOut" 
               placeholder="Check Out"
               onChange={ this.handleChange.bind(this, 'checkOut') } 
               value={ this.state.checkOut } />
        <input type="number" min="1" max="8" 
               ref="occupancy" 
               placeholder="How Many?"
               onChange={ this.handleChange.bind(this, 'occupancy') } 
               value={ this.state.occupancy } />
        <button>Search</button>
      </form>
    );
  }
}
SearchForm.contextTypes = {
  router: React.PropTypes.object.isRequired
};

@connect(state => ({
  search: state.search.data,
}))

export default 
class SearchFormContainer {
  static propTypes = {
    search: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { search, dispatch } = this.props;
    return <SearchForm search={search} {...bindActionCreators(searchActions, dispatch)} />;
  }
}
