import * as StepAPIUtil from '../util/step_api_util';
import { receiveStepErrors } from './step_error_actions';

export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";

export const receiveSteps = steps => ({
  type: RECEIVE_STEPS,
  steps
});

export const receiveStep = step => ({
  type: RECEIVE_STEP,
  step
});

export const removeStep = id => ({
  type: REMOVE_STEP,
  id
});

export const fetchSteps = () => dispatch => (
  StepAPIUtil.fetchSteps().then(
    steps => dispatch(receiveSteps(steps))
  )
);

export const createStep = step => dispatch => (
  StepAPIUtil.createStep(step).then(
    step => dispatch(receiveStep(step)),
    errors => dispatch(receiveStepErrors({
      todo_id: step.step.todo_id,
      errors: errors.responseJSON
    }))
  )
);

export const updateStep = step => dispatch => (
  StepAPIUtil.updateStep(step).then(
    step => dispatch(receiveStep(step))
  )
);

export const deleteStep = step => dispatch => (
  StepAPIUtil.deleteStep(step).then(
    step => dispatch(removeStep(step.id))
  )
);
