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

  codeLocation(){
    console.log("sending request to google map api...");
    let coords = null;
    let {search} = this.props;
    request
      .get('https://maps.googleapis.com/maps/api/geocode/json?address=' + search.query.location + '&key=AIzaSyBw4dvodHmXRVuKHZsM3lknJV_V-DDa6jo')
      .end(function(err, res){
        coords = res.body.results[0].geometry.location
        this.setState({ coded: [coords.lat, coords.lng] })
      }.bind(this))
  }

  componentDidMount() {
    ::this.codeLocation();
  }

  componentWillReceiveProps(nextProps){
    ::this.codeLocation();
  }

  render() {
    let markers = this.props.search.listings.map(function(listing){
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
  search: state.search.data,
}))

export default
class MapContainer {
  render() {
    const { search } = this.props;
    return <Map search={search} />
  }
}