import * as TodoAPIUtil from '../util/todo_api_util';
import { receiveTodoErrors } from './todo_error_actions';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

export const fetchTodos = () => dispatch => (
  TodoAPIUtil.fetchTodos().then(
    todos => dispatch(receiveTodos(todos))
  )
);

export const createTodo = todo => dispatch => (
  TodoAPIUtil.createTodo(todo).then(
    todo => dispatch(receiveTodo(todo)),
    error => dispatch(receiveTodoErrors(error.responseJSON))
  )
);

export const updateTodo = todo => dispatch => (
  TodoAPIUtil.updateTodo(todo).then(
    todo => dispatch(receiveTodo(todo))
  )
);

export const deleteTodo = todo => dispatch => (
  TodoAPIUtil.deleteTodo(todo).then(
    todo => dispatch(removeTodo(todo.id))
  )
);
