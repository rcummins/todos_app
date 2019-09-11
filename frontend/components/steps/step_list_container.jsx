import { connect } from 'react-redux';
import { stepsByTodoId } from '../../reducers/selectors';
import { fetchSteps, createStep } from '../../actions/step_actions';
import { clearErrors } from '../../actions/error_actions';
import StepList from './step_list';

const mapStateToProps = (state, ownProps) => ({
  steps: stepsByTodoId(state, ownProps.todo.id),
  todo_id: ownProps.todo.id,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  fetchSteps: () => dispatch(fetchSteps()),
  createStep: step => dispatch(createStep(step)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);
