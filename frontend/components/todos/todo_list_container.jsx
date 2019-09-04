import { connect } from 'react-redux';
import allTodos from '../../reducers/selectors';
import {
  receiveTodo,
  removeTodo,
  toggleStatus
} from '../../actions/todo_actions';
import TodoList from './todo_list';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: id => dispatch(removeTodo(id)),
  toggleStatus: id => dispatch(toggleStatus(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
