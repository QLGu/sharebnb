import React, { PropTypes } from 'react';
import {requireServerCss} from '../util';

const styles = __CLIENT__ ? require('./ResultFilterBox.scss') : requireServerCss(require.resolve('./ResultFilterBox.scss'));

class ResultFilterBox extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(n, e){
    this.props._filterChange(n, e)
  }

  render() {
    return (
      <div className={styles.ResultFilterBox}>
        <div className={styles.Dates}>
          <span className={styles.title}>Dates</span>
          <div className="filters">
            <input className={styles.normalizedInput} 
                   type="date" 
                   value={ this.props.query.checkIn } 
                   onChange={ this.handleChange.bind(this, 'checkIn') }/>
            <input className={styles.normalizedInput} 
                   type="date" 
                   value={ this.props.query.checkOut } 
                   onChange={ this.handleChange.bind(this, 'checkOut') }/>
            <input className={styles.normalizedInput} 
                   type="number" min="1" max="8" 
                   value={ this.props.query.occupancy } 
                   onChange={ this.handleChange.bind(this, 'occupancy') }/>
          </div>
        </div>

        <div className={styles.RoomTypes}>
         <span className={styles.title}>Room Type</span>
          <div className="filters">
            <div className={styles.normalizedInput}>
              <label>
                <input type="checkbox"
                       checked={ this.props.query.entirePlace }
                       onChange={ this.handleChange.bind(this, 'entirePlace') }/><span className="filters--label">Entire Place</span>
              </label>
            </div>
            <div className={styles.normalizedInput}>
              <label>
                <input type="checkbox" 
                       checked={ this.props.query.privateRoom }
                       onChange={ this.handleChange.bind(this, 'privateRoom') }/><span className="filters--label">Private Room</span>
              </label>
            </div>
            <div className={styles.normalizedInput}>
              <label>
                <input type="checkbox" 
                       checked={ this.props.query.sharedRoom }
                       onChange={ this.handleChange.bind(this, 'sharedRoom') }/><span className="filters--label">Shared Room</span>
              </label>
            </div>
          </div>
        </div>

        <div className={styles.Price}>
          <span className={styles.title}>Price</span>
          <div className={styles.Price}>
            <input className={styles.priceRange} type="range" min="10" max="1000" step="20"/>
          </div>
        </div>
      </div>
    );
  }

}

export default ResultFilterBox;
