import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home/home';
import TodoListContainer from './todos/todo_list_container';
import SignupContainer from './session/signup_container';
import NavBar from './nav_bar/nav_bar_container';

const App = () => (
  <div>
    <Route path="/" component={NavBar} />
    <Route exact path="/" component={Home} />
    <Route path="/todos" component={TodoListContainer} />
    <Route path="/signup" component={SignupContainer} />
  </div>
);

export default App;
