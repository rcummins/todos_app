import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './home/home';
import NavBar from './nav_bar/nav_bar_container';
import TodoListContainer from './todos/todo_list_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';

const App = () => (
  <div>
    <Route path="/" component={NavBar} />
    <Route exact path="/" component={Home} />
    <ProtectedRoute path="/todos" component={TodoListContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
  </div>
);

export default App;
