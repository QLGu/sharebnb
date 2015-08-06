/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './HomePage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class HomePage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  handleClick() {
    alert("clicked");
  }

  render() {
    let title = 'Home';
    this.context.onSetTitle(title);
    return (
      <div className="HomePage">
        <div className="HomePage-container">
          <div className="HomePage--slogan">
            <h1>BELONG ANYWHERE</h1>
            <h3>Rent unique places to stay from local hosts in 190+ countries.</h3>
            <button onClick={this.handleClick}>How it works</button>
          </div>
        </div>
      </div>
    );
  }

}

export default HomePage;
