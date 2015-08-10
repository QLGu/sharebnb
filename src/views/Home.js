import React, {Component} from 'react';
import {Link} from 'react-router';
import About from '../components/About';
import Search from '../components/Search';
import CounterButton from '../components/CounterButton';
import GithubButton from '../components/GithubButton';
import {requireServerCss, requireServerImage} from '../util';

const styles = __CLIENT__ ? require('./Home.scss') : requireServerCss(require.resolve('./Home.scss'));

// require the logo image both from client and server
let logoImage = '';
if (__CLIENT__) {
  logoImage = require('./logo.png');
} else {
  logoImage = requireServerImage('./logo.png');
}

export default class Home extends Component {
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
    let showAboutState = this.state.showAbout ? " " + styles.showAboutContainer : "";

    return (
      <div className={styles.homePage + showAboutState}>
        <About showAboutState={showAboutState} _closeAbout={this.handleClick.bind(this)}/>
        <div className={styles.home}>
          <div className="container text-center">
            <div className={styles.slogan}>
              <h1>BELONG ANYWHERE</h1>
              <h3>Rent unique places to stay from local hosts in 190+ countries.</h3>
              <button className={styles.button} onClick={this.handleClick}>How it works</button>
            </div>
          </div>
          <Search />
        </div>
      </div>
    );
  }
}
