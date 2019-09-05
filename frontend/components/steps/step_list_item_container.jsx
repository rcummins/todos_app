import { connect } from 'react-redux';
import { removeStep, toggleStepStatus } from '../../actions/step_actions';
import StepListItem from './step_list_item';

const mapDispatchToProps = dispatch => ({
  removeStep: id => dispatch(removeStep(id)),
  toggleStepStatus: id => dispatch(toggleStepStatus(id))
});

export default connect(
  null,
  mapDispatchToProps
)(StepListItem);
