import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.removeTodo(this.props.todo.id);
  }

  render() {
    return(
      <li>
        {this.props.todo.title}
        <button onClick={this.handleClick} >Delete</button>
      </li>
    );
  }
}

export default TodoListItem;
