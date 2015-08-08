/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './ResultFilterBox.css';

@withStyles(styles)
class ResultFilterBox extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ResultFilterBox">
        <div className="Dates">
          <span className="title">Dates</span>
          <div className="filters">
            <input className="normalizedInput" type="date"/>
            <input className="normalizedInput" type="date"/>
            <input className="normalizedInput" type="number" min="1" max="8"/>
          </div>
        </div>

        <div className="RoomTypes">
         <span className="title">Room Type</span>
          <div className="filters">
            <div className="normalizedInput grey"><label><input type="checkbox"/><span className="filters--label">Entire Place</span></label></div>
            <div className="normalizedInput grey"><label><input type="checkbox"/><span className="filters--label">Private Room</span></label></div>
            <div className="normalizedInput grey"><label><input type="checkbox"/><span className="filters--label">Shared Room</span></label></div>
          </div>
        </div>

        <div className="Price">
          <span className="title">Price</span>
          <div className="filters">
            <input className="priceRange"type="range" min="10" max="1000" step="20"/>
          </div>
        </div>
      </div>
    );
  }

}

export default ResultFilterBox;
