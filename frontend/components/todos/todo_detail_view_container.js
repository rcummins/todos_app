import { connect } from 'react-redux';
import { deleteTodo } from '../../actions/todo_actions';
import TodoDetailView from './todo_detail_view';

const mapDispatchToProps = ( dispatch, {todo} ) => ({
  deleteTodo: () => dispatch(deleteTodo(todo)),
});

export default connect(
  null,
  mapDispatchToProps
)(TodoDetailView);
