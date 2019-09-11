import {
  RECEIVE_STEP_ERRORS,
  CLEAR_STEP_ERRORS
} from '../actions/step_error_actions';

const stepErrorReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_STEP_ERRORS:
      let newStepError = {};
      newStepError[action.errors.todo_id] = action.errors;
      return Object.assign({}, oldState, newStepError);

    case CLEAR_STEP_ERRORS:
      let newState = Object.assign({}, oldState);
      delete newState[action.todo_id];
      return newState;

    default:
      return oldState;
  }
};

export default stepErrorReducer;
