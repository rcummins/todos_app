import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos, receiveTodo } = this.props;
    return(
      <div>
        <ul>
          {
            todos.map( (todo, index) => (
              <TodoListItem
                key={index}
                todo={todo}
                receiveTodo={receiveTodo} />
            ))
          }
        </ul>
        <TodoForm receiveTodo={receiveTodo} />
      </div>
    );
  }
}

export default TodoList;
