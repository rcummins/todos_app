import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
  }

  handleDelete() {
    this.props.removeTodo(this.props.todo.id);
  }

  toggleStatus() {
    let { todo } = this.props;
    let newTodo = {
      id: todo.id,
      title: todo.title,
      body: todo.body,
      done: !todo.done
    };
    this.props.updateTodo(newTodo);
  }

  render() {
    const { todo } = this.props;
    return(
      <li>
        {todo.title}

        <button onClick={this.handleDelete} >
          Delete
        </button>

        <button onClick={this.toggleStatus} >
          {todo.done === true ? 'Undo' : 'Done' }
        </button>
      </li>
    );
  }
}

export default TodoListItem;
