import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home/home';
import TodoListContainer from './todos/todo_list_container';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/todos" component={TodoListContainer} />
  </div>
);

export default App;
