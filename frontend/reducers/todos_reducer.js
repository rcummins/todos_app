import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

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

  switch (action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      for (let i = 0; i < action.todos.length; i++) {
        newState[action.todos[i].id] = action.todos[i];
      }
      return newState;
    case RECEIVE_TODO:
      let newTodo = {};
      newTodo[action.todo.id] = action.todo;
      return Object.assign({}, oldState, newTodo);
    default:
      return oldState;
  }
};

export default todosReducer;
