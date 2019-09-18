import React from 'react';
import { Link } from 'react-router-dom';

export default ({ logout, currentUser }) => {
  const display = currentUser ? (
    <div>
      <h3>Welcome, {currentUser.username}</h3>
      <button className="button-nav-bar" onClick={logout}>Log out</button>
    </div>
  ) : (
    <div>
      <Link className="button-nav-bar" to="/signup">Sign up</Link>
      <Link className="button-nav-bar" to="/login">Log in</Link>
    </div>
  );

  return(
    <header>
      <h1>Todos App</h1>

      { display }
    </header>
  )
};
