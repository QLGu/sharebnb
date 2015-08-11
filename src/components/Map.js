import React, { PropTypes } from 'react';
import GoogleMap from 'google-map-react';
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
      .get('https://maps.googleapis.com/maps/api/geocode/json?address=' + search.location + '&key=AIzaSyBw4dvodHmXRVuKHZsM3lknJV_V-DDa6jo')
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
    console.log(this.props.search.location);
    let gmaps = <GoogleMap center={this.state.coded} zoom={11} ></GoogleMap>
    return (
      <div className={styles.map + " col-sm-5"}>
        {gmaps}
      </div>
    );
  }

}

@connect(state=> ({
  search: state.search.data.query
}))

export default
class MapContainer {
  render() {
    const { search } = this.props;
    return <Map search={search} />
  }
}