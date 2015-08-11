import React, { PropTypes } from 'react';
import GoogleMap from 'google-map-react';
import Marker from './Marker';
import request from 'superagent';

import {connect} from 'react-redux';
import {requireServerCss} from '../util';

const styles = __CLIENT__ ? require('./Map.scss') : requireServerCss(require.resolve('./Map.scss'));

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {coded: null}
  }

  codeLocation(location){
    console.log("sending request to google map api...");
    let coords = null;
    request
      .get('https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&key=AIzaSyBw4dvodHmXRVuKHZsM3lknJV_V-DDa6jo')
      .end(function(err, res){
        coords = res.body.results[0].geometry.location
        this.setState({ coded: [coords.lat, coords.lng] })
      }.bind(this))
  }

  componentWillMount() {
    console.log("component will mount");
    let location = this.props.location || "San Francisco"
    ::this.codeLocation(location);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.location !== this.props.location){
      console.log("props changed, sending to gmap api");
      ::this.codeLocation(nextProps.location);
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    let shouldUpdate = this.state !== nextState;
    return shouldUpdate;
  }

  render() {
    console.log("rendering map...");
    let markers = this.props.listings.map(function(listing){
      return <Marker lat={listing.lat} lng={listing.lng} key={listing.id} listing={listing}/>
    })
    return (
      <div className={styles.map + " col-sm-5"}>
        <GoogleMap center={this.state.coded} zoom={15} >
          {markers}
        </GoogleMap>
      </div>
    );
  }

}

@connect(state=> ({
  listings: state.search.data.listings,
  location: state.search.data.query.location
}))

export default
class MapContainer {
  render() {
    const { listings, location } = this.props;
    return <Map listings={listings} location={location}/>
  }
}