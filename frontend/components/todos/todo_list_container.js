import { connect } from 'react-redux';
import { todosByUserId } from '../../reducers/selectors';
import {
  fetchTodos,
  createTodo,
  updateTodo
} from '../../actions/todo_actions';
import { clearTodoErrors } from '../../actions/todo_error_actions';
import TodoList from './todo_list';

const mapStateToProps = state => ({
  todos: todosByUserId(state, state.session.currentUser.id),
  todoErrors: state.todoErrors,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: todo => dispatch(createTodo(todo)),
  updateTodo: todo => dispatch(updateTodo(todo)),
  clearTodoErrors: () => dispatch(clearTodoErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
