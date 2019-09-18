import React from 'react';
import { Link } from 'react-router-dom';

export default ({ logout, currentUser, clearSessionErrors }) => {
  const display = currentUser ? (
    <div className="nav-bar">
      <h3 className="nav-message">Welcome, {currentUser.username}</h3>
      <button
        className="button-nav button-nav-logout"
        onClick={logout}>Log out</button>
    </div>
  ) : (
    <div className="nav-bar">
      <Link
        className="button-nav"
        to="/signup"
        onClick={clearSessionErrors} >Sign up</Link>
      <Link
        className="button-nav"
        to="/login"
        onClick={clearSessionErrors} >Log in</Link>
    </div>
  );

  return(
    <header>
      <Link className="logo" to="/todos">Todos App</Link>

      { display }
    </header>
  )
};
