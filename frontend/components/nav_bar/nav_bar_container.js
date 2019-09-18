import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { clearSessionErrors } from '../../actions/session_error_actions';
import NavBar from './nav_bar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
