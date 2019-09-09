import { connect } from 'react-redux';
import { stepsByTodoId } from '../../reducers/selectors';
import { receiveStep } from '../../actions/step_actions';
import StepList from './step_list';

const mapStateToProps = (state, ownProps) => ({
  steps: stepsByTodoId(state, ownProps.todo.id),
  todo_id: ownProps.todo.id
});

const mapDispatchToProps = dispatch => ({
  receiveStep: step => dispatch(receiveStep(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);
