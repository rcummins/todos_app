import { connect } from 'react-redux';
import { stepsByTodoId } from '../../reducers/selectors';
import { fetchSteps, createStep } from '../../actions/step_actions';
import { clearStepErrors } from '../../actions/step_error_actions';
import StepList from './step_list';

const mapStateToProps = (state, ownProps) => ({
  steps: stepsByTodoId(state, ownProps.todo.id),
  todo_id: ownProps.todo.id,
  stepErrors: state.stepErrors
});

const mapDispatchToProps = dispatch => ({
  fetchSteps: () => dispatch(fetchSteps()),
  createStep: step => dispatch(createStep(step)),
  clearStepErrors: () => dispatch(clearStepErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);
