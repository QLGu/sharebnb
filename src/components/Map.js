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

  componentWillMount(){
    console.log("coding location because of mounting");
    ::this.codeLocation(this.props.location);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.location !== this.props.location){
      console.log("coding location because of prop change");
      ::this.codeLocation(nextProps.location);
    }
  }

  render() {
    let markers = this.props.listings.map(function(listing){
      return <Marker lat={listing.lat} lng={listing.lng} key={listing.id} listing={listing}/>
    })
    let googlemap;

    if(this.state.coded){
      googlemap = (
        <GoogleMap center={this.state.coded} zoom={15} >
          {markers}
        </GoogleMap>
      );
    }
    return (
      <div className={styles.map + " col-sm-5"}>
        {googlemap}
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