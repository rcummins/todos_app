import {
  RECEIVE_STEP_ERRORS,
  CLEAR_STEP_ERRORS
} from '../actions/step_error_actions';

const stepErrorReducer = ( oldState = [], action ) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_STEP_ERRORS:
      return action.errors;

    case CLEAR_STEP_ERRORS:
      return [];

    default:
      return oldState;
  }
};

export default stepErrorReducer;
