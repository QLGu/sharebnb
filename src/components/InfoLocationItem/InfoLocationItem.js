/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './InfoLocationItem.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class InfoLocationItem extends React.Component{

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert("clicked!");
  }

  render() {
    return (
      <div onClick={this.handleClick} className="InfoLocationItem-container">
        <span className="Location--title">{ this.props.location }</span>
        <img className="Location--picture" src={ require('./' + this.props.location + ".jpg") }/>
      </div>
    );
  }

}

export default InfoLocationItem;
