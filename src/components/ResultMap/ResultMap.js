/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './ResultMap.css';
import GoogleMap from 'google-map-react';
import request from 'superagent';

@withStyles(styles)
class ResultMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {coded: [35.6894875,139.6917064]}
  }

  componentDidMount() {
    let coords = null;
    debugger;
    request
      .get('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.props.location + '&key=AIzaSyBw4dvodHmXRVuKHZsM3lknJV_V-DDa6jo')
      .end(function(err, res){
        coords = res.body.results[0].geometry.location
        this.setState({ coded: [coords.lat, coords.lng] })
        console.log(this.state.coded)
      }.bind(this))
  }

  render() {
    return (
      <div className="ResultMap">
        {this.props.location}
        <GoogleMap center={this.state.coded} zoom={9} />
      </div>
    );
  }

}

export default ResultMap;
