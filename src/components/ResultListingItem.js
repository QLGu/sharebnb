import React, { PropTypes } from 'react';
import {requireServerCss} from '../util';

const styles = __CLIENT__ ? require('./ResultListingItem.scss') : requireServerCss(require.resolve('./ResultListingItem.scss'));

class ResultListingItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-sm-6">
        <img className={styles.listingImg} src="https://a1.muscache.com/ac/pictures/98685770/4fcfcac1_original.jpg?interpolation=lanczos-none&size=x_medium&output-format=jpg&output-quality=70"/>
        <div className="caption text-center"> 
          <h5>{this.props.listing.title}</h5>
          {this.props.listing.address}
          <br/>
          ${this.props.listing.price} / night
        </div>
      </div>
    );
  }

}

export default ResultListingItem;
