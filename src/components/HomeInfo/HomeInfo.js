/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import InfoLocationItem from '../InfoLocationItem';
import styles from './HomeInfo.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class HomeInfo extends React.Component{

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    alert("coming soon!")
  }

  render() {
    let locations = ["Manarola", "Bangkok", "Tokyo"]
    let renderedLocations = locations.map(function(location){
      return (
        <InfoLocationItem key={location} location={location}/>
      )
    })
    return (
      <div className="HomeInfo-container">
        <div className="HomeInfo--section">
          <h1>Just for the weekend</h1>
          <h5>Discover new, inspiring places close to home.</h5>
        </div>
        <div className="Locations">
          { renderedLocations }
          <button onClick={this.handleClick} className="destinations-button">See All Destinations</button>
        </div>
        <hr />
      </div>
    );
  }

}

export default HomeInfo;
