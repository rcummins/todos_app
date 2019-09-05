import { connect } from 'react-redux';
import { removeStep, receiveStep } from '../../actions/step_actions';
import StepListItem from './step_list_item';

const mapDispatchToProps = dispatch => ({
  receiveStep: step => dispatch(receiveStep(step)),
  removeStep: id => dispatch(removeStep(id))
});

export default connect(
  null,
  mapDispatchToProps
)(StepListItem);
