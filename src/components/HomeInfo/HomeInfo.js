/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './HomeInfo.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class HomeInfo extends React.Component{

  render() {
    return (
      <div className="HomeInfo-container">
        Stuff goes here
      </div>
    );
  }

}

export default HomeInfo;
