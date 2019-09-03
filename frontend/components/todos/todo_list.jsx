import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = ({ todos }) => (
  <ul>
    {
      todos.map( (todo, index) => (
        <TodoListItem key={index} todo={todo} />
      ))
    }
  </ul>
);

export default TodoList;
