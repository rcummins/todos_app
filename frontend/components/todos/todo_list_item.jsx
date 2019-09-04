import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggleStatus = this.handleToggleStatus.bind(this);
  }

  handleDelete() {
    this.props.removeTodo(this.props.todo.id);
  }

  handleToggleStatus() {
    this.props.toggleStatus(this.props.todo.id);
  }

  render() {
    const { todo } = this.props;
    return(
      <li>
        {todo.title}

        <button onClick={this.handleDelete} >
          Delete
        </button>

        <button onClick={this.handleToggleStatus} >
          {todo.done === true ? 'Undo' : 'Done' }
        </button>
      </li>
    );
  }
}

export default TodoListItem;
