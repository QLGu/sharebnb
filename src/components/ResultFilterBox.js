import React, { PropTypes } from 'react';

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
      <div className="ResultFilterBox">
        <div className="Dates">
          <span className="title">Dates</span>
          <div className="filters">
            <input className="normalizedInput" 
                   type="date" 
                   value={ this.props.filters.checkIn } 
                   onChange={ this.handleChange.bind(this, 'checkIn') }/>
            <input className="normalizedInput" 
                   type="date" 
                   value={ this.props.filters.checkOut } 
                   onChange={ this.handleChange.bind(this, 'checkOut') }/>
            <input className="normalizedInput" 
                   type="number" min="1" max="8" 
                   value={ this.props.filters.occupancy } 
                   onChange={ this.handleChange.bind(this, 'occupancy') }/>
          </div>
        </div>

        <div className="RoomTypes">
         <span className="title">Room Type</span>
          <div className="filters">
            <div className="normalizedInput grey">
              <label>
                <input type="checkbox" 
                       checked={ this.props.filters.entirePlace }
                       onChange={ this.handleChange.bind(this, 'entirePlace') }/><span className="filters--label">Entire Place</span>
              </label>
            </div>
            <div className="normalizedInput grey">
              <label>
                <input type="checkbox" 
                       checked={ this.props.filters.privateRoom }
                       onChange={ this.handleChange.bind(this, 'privateRoom') }/><span className="filters--label">Private Room</span>
              </label>
            </div>
            <div className="normalizedInput grey">
              <label>
                <input type="checkbox" 
                       checked={ this.props.filters.sharedRoom }
                       onChange={ this.handleChange.bind(this, 'sharedRoom') }/><span className="filters--label">Shared Room</span>
              </label>
            </div>
          </div>
        </div>

        <div className="Price">
          <span className="title">Price</span>
          <div className="filters">
            <input className="priceRange"type="range" min="10" max="1000" step="20"/>
          </div>
        </div>
      </div>
    );
  }

}

export default ResultFilterBox;