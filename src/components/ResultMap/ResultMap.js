/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './ResultMap.css';
import GoogleMap from 'google-map-react';
import request from 'superagent';
import TextBox from '../TextBox';

@withStyles(styles)
class ResultMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {coded: null}
  }

  componentDidMount() {
    let coords = null;
    request
      .get('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.props.location + '&key=AIzaSyBw4dvodHmXRVuKHZsM3lknJV_V-DDa6jo')
      .end(function(err, res){
        coords = res.body.results[0].geometry.location
        this.setState({ coded: [coords.lat, coords.lng] })
      }.bind(this))
  }

  render() {
    let gmaps = this.state.coded && <GoogleMap center={this.state.coded} zoom={11} ><TextBox lat={37.38747} lng={-122.05754} text={'A'} /></GoogleMap>

    return (
      <div className="ResultMap">
        {gmaps}
      </div>
    );
  }

}

export default ResultMap;
