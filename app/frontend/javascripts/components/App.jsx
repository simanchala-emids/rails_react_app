import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions';
class App extends Component {
  render() {
    return (
      <div className="container">
       <h2>Countdown to July 20, 2018</h2>
       <ul className="list-group list-group-flush">
        <li className="list-group-item">14 Days</li>
        <li className="list-group-item">20 Hours</li>
        <li className="list-group-item">30 Minutes</li>
        <li className="list-group-item">45 Seconds</li>
       </ul>
       <form className="form-inline">
        <div className="form-group">
         <input placeholder="new date" className="form-control" />
         <button className="btn btn-primary">Submit</button>
        </div>
       </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    state
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);