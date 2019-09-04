import React from 'react';
import todo_detail_view_container from './todo_detail_view_container';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.removeTodo(this.props.todo.id);
  }

  render() {
    const { todo } = this.props;
    return(
      <div>
        <p>{todo.body}</p>

        <button onClick={this.handleDelete} >Delete</button>
      </div>
    );
  }
}

export default TodoDetailView;
