/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './ResultPage.css';

@withStyles(styles)
class ResultPage extends React.Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired
  };

  constructor() {
    super();
  }

  render() {
    let title = 'Results';
    this.context.onSetTitle(title);
    return (
      <div className="ResultPage">
        THIS IS THE RESULT PAGE
        {this.props.query}
      </div>
    );
  }

}

export default ResultPage;
