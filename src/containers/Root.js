import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchTimetables } from '../actions';
import {connect} from 'react-redux';
import ListContainer from './ListContainer';
import Storage from '../lib/storage';
import DisplayScheduleContainer from '../containers/DisplayScheduleContainer';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import DisplaySchedule from '../presentation/Display';

class Root extends Component {

  static propTypes = {
    onMount: PropTypes.func.isRequired
  }

  constructor(props){
    super(props);

  }

  componentDidMount(){
    console.log('loading');
    const storage = new Storage();
    if (storage.getStops().length > 0)
      this.props.onMount(storage.getStops());
  }

  render() {
    return (
      <Router>
      <div className="app">
        <Route exact path="/" component={ListContainer}/>
        <Route path="/stop/:id?" component={DisplayScheduleContainer} />
      </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => {
  return {
    onMount: (ids) => dispatch(fetchTimetables(ids))
  };
};

export { Root };
export default connect(mapStateToProps, mapDispatchToProps)(Root);
