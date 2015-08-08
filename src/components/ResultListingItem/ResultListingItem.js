/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './ResultListingItem.css';

@withStyles(styles)
class ResultListingItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ResultListingItem">
        <img className="ListItem--Picture" src="https://a1.muscache.com/ac/pictures/98685770/4fcfcac1_original.jpg?interpolation=lanczos-none&size=x_medium&output-format=jpg&output-quality=70"/>
        <span className="ListItem--Title"> This is a sample listing </span>
      </div>
    );
  }

}

export default ResultListingItem;
