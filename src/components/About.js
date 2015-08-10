import React, { Component } from 'react';
import {requireServerCss, requireServerImage} from '../util';

const styles = __CLIENT__ ? require('./About.scss') : requireServerCss(require.resolve('./About.scss'));

class About extends Component{

  constructor(){
    super();
  }

  render() {
    let showAbout = this.props.showAboutState ? " " + styles.showAbout : ""
    return (
      <div className={"container " + styles.AboutContainer + showAbout}>
        <span onClick={this.props._closeAbout} className={"glyphicon glyphicon-remove pull-right " + styles.closeAboutButton} />
        <br/>

        <div className="">
          <div className="col-md-4">
            <h3>Discover Amazing Places</h3>
            Find hosts with extra rooms, entire homes, and unique accommodations like castles and igloos.
          </div>

          <div className="col-md-4">
            <h3>Book a Stay</h3>
            Connect with hosts, confirm travel dates, and pay—all through Airbnb’s trusted services.
          </div>

          <div className="col-md-4">
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
