import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { clearSessionErrors } from '../../actions/session_error_actions';
import Login from './login';

const mapStateToProps = state => ({
  sessionErrors: state.sessionErrors
});

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
