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
    this.props.receiveTodo(updatedTodo);
  }

  render() {
    const { todo } = this.props;
    return(
      <li>
        <div>
          <h3 onClick={this.handleToggleDetail} >{todo.title}</h3>

          <button onClick={this.handleToggleStatus} >
            { todo.done ? 'Undo' : 'Done' }
          </button>
        </div>

        { this.state.detail ? <TodoDetailViewContainer todo={todo} /> : null }
      </li>
    );
  }
}

export default TodoListItem;
