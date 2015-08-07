/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './ResultMap.css';
import GoogleMap from 'google-map-react';

@withStyles(styles)
class ResultMap extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="ResultMap">
        <GoogleMap center={[59.938043, 30.337157]} zoom={9}>
        </GoogleMap>
      </div>
    );
  }

}

export default ResultMap;
