import { connect } from 'react-redux';
import { removeStep, updateStep } from '../../actions/step_actions';
import StepListItem from './step_list_item';

const mapDispatchToProps = dispatch => ({
  updateStep: step => dispatch(updateStep(step)),
  removeStep: id => dispatch(removeStep(id))
});

export default connect(
  null,
  mapDispatchToProps
)(StepListItem);
