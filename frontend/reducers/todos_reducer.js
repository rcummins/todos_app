import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const todosReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  switch (action.type) {
    default:
      return oldState;
  }
};

export default todosReducer;
