// @ vendors
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// @ actions
import * as BaseActions from '../actions/base';

class App extends Component {
  render() {
    return (
      <div>
        Hello !
      </div>
    );
  }
}

App.propTypes = {
  base: PropTypes.array.isRequired,
  baseActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    base: state.base
  };
}

function mapDispatchToProps(dispatch) {
  return {
    baseActions: bindActionCreators(BaseActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
