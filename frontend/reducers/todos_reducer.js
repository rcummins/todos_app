import {
  RECEIVE_TODOS,
  RECEIVE_TODO,
  REMOVE_TODO
} from '../actions/todo_actions';

const todosReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  let newState;
  let newTodo;
  let idToDelete;
  switch (action.type) {

    case RECEIVE_TODOS:
      newState = {};
      action.todos.forEach( todo => newState[todo.id] = todo );
      return newState;

    case RECEIVE_TODO:
      newTodo = {};
      newTodo[action.todo.id] = action.todo;
      return Object.assign({}, oldState, newTodo);

    case REMOVE_TODO:
      newState = Object.assign({}, oldState);
      idToDelete = action.id;
      delete newState[idToDelete];
      return newState;

    default:
      return oldState;
  }
};

export default todosReducer;
