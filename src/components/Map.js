import React, { PropTypes } from 'react';
import GoogleMap from 'google-map-react';
import request from 'superagent';

import {requireServerCss} from '../util';

const styles = __CLIENT__ ? require('./Map.scss') : requireServerCss(require.resolve('./Map.scss'));

class Map extends React.Component {

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
    let gmaps = <GoogleMap center={this.state.coded} zoom={11} ></GoogleMap>

    return (
      <div className={styles.map + " col-sm-5"}>
        {gmaps}
      </div>
    );
  }

}

export default Map;