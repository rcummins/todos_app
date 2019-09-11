import {
  RECEIVE_STEPS,
  RECEIVE_STEP,
  REMOVE_STEP
} from '../actions/step_actions';

const stepsReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  let newState;
  let newStep;
  let idToDelete;
  switch (action.type) {

    case RECEIVE_STEPS:
      newState = {};
      action.steps.forEach( step => newState[step.id] = step );
      return newState;

    case RECEIVE_STEP:
      newStep = {};
      newStep[action.step.id] = action.step;
      return Object.assign({}, oldState, newStep);

    case REMOVE_STEP:
      newState = Object.assign({}, oldState);
      idToDelete = action.id;
      delete newState[idToDelete];
      return newState;

    default:
      return oldState;
  }
};

export default stepsReducer;
