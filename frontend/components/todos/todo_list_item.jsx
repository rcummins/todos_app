import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleStatus = this.handleToggleStatus.bind(this);
  }

  handleToggleStatus() {
    this.props.toggleStatus(this.props.todo.id);
  }

  render() {
    const { todo } = this.props;
    return(
      <li>
        <div>
          <h3>{todo.title}</h3>

          <button onClick={this.handleToggleStatus} >
            {todo.done === true ? 'Undo' : 'Done' }
          </button>
        </div>

        <TodoDetailViewContainer todo={todo} />
      </li>
    );
  }
}

export default TodoListItem;
