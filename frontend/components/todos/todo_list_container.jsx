import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors';
import {
  receiveTodo,
  fetchTodos,
  createTodo
} from '../../actions/todo_actions';
import { clearErrors } from '../../actions/error_actions';
import TodoList from './todo_list';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: todo => dispatch(createTodo(todo)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
