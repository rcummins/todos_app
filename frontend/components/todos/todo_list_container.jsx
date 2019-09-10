import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors';
import {
  fetchTodos,
  createTodo,
  updateTodo
} from '../../actions/todo_actions';
import { clearErrors } from '../../actions/error_actions';
import TodoList from './todo_list';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: todo => dispatch(createTodo(todo)),
  updateTodo: todo => dispatch(updateTodo(todo)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
