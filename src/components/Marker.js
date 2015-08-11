import React, { Component } from 'react';
import {requireServerCss} from '../util';
const styles = __CLIENT__ ? require('./Marker.scss') : requireServerCss(require.resolve('./Marker.scss'));

export default class Marker extends Component {

  render() {
    return (
      <div className={styles.markerList + " col-md-12"}>
        {this.props.listing.title}
        <br/>
        {this.props.listing.price}
      </div>
    )
  }
}