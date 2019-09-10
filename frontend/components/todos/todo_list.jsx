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
    const { todos, receiveTodo, createTodo } = this.props;
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
        <TodoForm createTodo={createTodo} />
      </div>
    );
  }
}

export default TodoList;
