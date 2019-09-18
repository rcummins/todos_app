import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import { clearSessionErrors } from '../../actions/session_error_actions';
import Signup from './signup';

const mapStateToProps = state => ({
  sessionErrors: state.sessionErrors
});

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
