/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import About from '../About';
import HomeInfo from '../HomeInfo';
import Search from '../Search';
import styles from './HomePage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class HomePage extends React.Component{

  constructor(){
    super();
    this.state = { showAbout: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let showAbout = this.state.showAbout
    this.setState({ showAbout: !showAbout })
  }

  render() {
    let showAboutState = this.state.showAbout ? " showAboutContainer" : "";

    return (
      <div className="HomePage">
        <About showAboutState={showAboutState} _closeAbout={this.handleClick.bind(this)}/>
        <div className={"HomePage-container" + showAboutState}>
          <div className="HomePage--slogan">
            <h1>BELONG ANYWHERE</h1>
            <h3>Rent unique places to stay from local hosts in 190+ countries.</h3>
            <button onClick={this.handleClick}>How it works</button>
          </div>
          <Search />
        </div>
        <HomeInfo/>
      </div>
    );
  }

}

export default HomePage;
