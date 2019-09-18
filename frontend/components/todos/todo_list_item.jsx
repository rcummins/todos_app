import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false
    };

    this.handleToggleDetail = this.handleToggleDetail.bind(this);
    this.handleToggleStatus = this.handleToggleStatus.bind(this);
  }

  handleToggleDetail() {
    this.setState({ detail: !this.state.detail });
  }

  handleToggleStatus() {
    let updatedTodo = Object.assign({}, this.props.todo);
    updatedTodo.done = !updatedTodo.done;
    this.props.updateTodo({ todo: updatedTodo });
  }

  render() {
    const { todo } = this.props;
    return(
      <li className="todo-item">
        <div className="todo-header">
          <h3
            className="toggle-detail"
            onClick={this.handleToggleDetail} >{todo.title}</h3>

          <button
            className={ todo.done ? 'button-undo' : 'button-done' }
            onClick={this.handleToggleStatus} >
            { todo.done ? 'Undo' : 'Done' }
          </button>
        </div>

        { this.state.detail ? <TodoDetailViewContainer todo={todo} /> : null }
      </li>
    );
  }
}

export default TodoListItem;
