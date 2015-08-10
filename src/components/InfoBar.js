import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as infoActions from '../actions/infoActions';
import * as searchActions from '../actions/searchActions';
import {requireServerCss} from '../util';

const styles = __CLIENT__ ? require('./InfoBar.scss') : requireServerCss(require.resolve('./InfoBar.scss'));

class InfoBar extends Component {
  static propTypes = {
    info: PropTypes.object,
    search: PropTypes.object,
    load: PropTypes.func.isRequired,
  }

  render() {
    const {info, load, search, searchListings} = this.props;
    return (
      <div className={styles.infoBar + ' well'}>
        <div className="container">
          This is an info bar
          {' '}
          <strong>{info ? info.message : 'no info!'}</strong>
          <span className={styles.time}>{info && new Date(info.time).toString()}</span>
          <span className={styles.time}>{search && new Date(search.time).toString()}</span>
          <button className="btn btn-primary" onClick={load}>Reload from server</button>
          <button className="btn btn-primary" onClick={searchListings.bind(this, 'hello')}>Reload from server2</button>
        </div>
      </div>
    );
  }
}

@connect(state => ({
  info: state.info.data,
  search: state.search.data,
}))
export default
class InfoBarContainer {
  static propTypes = {
    info: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { info, dispatch } = this.props;
    return <InfoBar info={info} {...bindActionCreators(searchActions, dispatch)}{...bindActionCreators(infoActions, dispatch)}/>;
  }
}
