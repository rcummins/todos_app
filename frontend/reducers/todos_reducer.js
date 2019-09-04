import {
  RECEIVE_TODOS,
  RECEIVE_TODO,
  REMOVE_TODO, 
  TOGGLE_STATUS
} from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: "cook dinner",
    body: "macaroni and cheese",
    done: false
  },
  2: {
    id: 2,
    title: "bake cake",
    body: "vanilla with buttercream frosting",
    done: true
  }
};

const todosReducer = ( oldState = initialState, action ) => {
  Object.freeze(oldState);

  let newState;
  let newTodo;
  let idToDelete;
  switch (action.type) {

    case RECEIVE_TODOS:
      newState = {};
      for (let i = 0; i < action.todos.length; i++) {
        newState[action.todos[i].id] = action.todos[i];
      }
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
    
    case TOGGLE_STATUS:
      newState = Object.assign({}, oldState);
      newState[action.id].done = !newState[action.id].done;
      return newState;

    default:
      return oldState;
  }
};

export default todosReducer;
