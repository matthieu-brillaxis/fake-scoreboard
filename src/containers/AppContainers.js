// @flow

import { connect } from 'react-redux';
import App from 'components/app/App';
import {
  init,
} from 'actions/socketActions';

const mapStateToProps = (state) => ({
  data: state.socketReducer.data,
  golds: state.socketReducer.golds,
  status: state.socketReducer.status,
});

const mapDispatchToProps = {
  onInit: init,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
