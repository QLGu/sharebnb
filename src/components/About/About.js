/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './About.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class About extends React.Component{

  constructor(){
    super();
  }

  render() {
    let showAbout = this.props.showAboutState ? " showAbout" : ""
    return (
      <div className={"About-container" + showAbout}>
        <button className="closeAboutButton" onClick={this.props._closeAbout}>x</button>
        <br/>

        <div className="About--section-container">
          <div className="About--section">
            <h3>Discover Amazing Places</h3>
            Find hosts with extra rooms, entire homes, and unique accommodations like castles and igloos.
          </div>

          <div className="About--section">
            <h3>Book a Stay</h3>
            Connect with hosts, confirm travel dates, and pay—all through Airbnb’s trusted services.
          </div>

          <div className="About--section">
            <h3>Travel</h3>
            Feel at home, anywhere you go in the world. Learn more about how to travel on Airbnb.
            Learn more about hosting on Airbnb and show your guests they’re right where they belong.
          </div>
        </div>
      </div>
    );
  }

}

export default About;
