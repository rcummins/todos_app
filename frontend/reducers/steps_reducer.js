import {
  RECEIVE_STEPS,
  RECEIVE_STEP,
  REMOVE_STEP
} from '../actions/step_actions';

const initialState = {
  1: {
    id: 1,
    title: 'boil pasta',
    body: 'using a medium size saucepan',
    done: false,
    todo_id: 1
  },
  2: {
    id: 2,
    title: 'make cheese sauce',
    body: 'my favorite is sharp white cheddar and gruyere',
    done: false,
    todo_id: 1
  }
};

const stepsReducer = ( oldState = initialState, action ) => {
  Object.freeze(oldState);

  let newState;
  let newStep;
  let idToDelete;
  switch (action.type) {

    case RECEIVE_STEPS:
      newState = {};
      for (let i = 0; i < action.steps.length; i++) {
        newState[action.steps[i].id] = action.steps[i];
      }
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
