import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(key) {
    return e => this.setState({ [key]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login({ user: this.state }).then(
      () => {
        this.props.history.push('/todos');
        this.props.clearSessionErrors();
      }
    );
  }

  render() {
    const { sessionErrors } = this.props;

    let errorMessage;
    if (sessionErrors.length > 0) {
      errorMessage = (
        <div className="error-message">
          <p>{sessionErrors}</p>
        </div>
      )
    }

    return(
      <div className="form login">
        <h2>Log in</h2>
        <form>

          { errorMessage }

          <div className="form-input">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              onChange={this.handleInput('username')}
              value={this.state.username}
            />
          </div>

          <div className="form-input">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={this.handleInput('password')}
              value={this.state.password}
            />
          </div>

          <button
            className="button-login"
            onClick={this.handleSubmit}>Log in</button>
        </form>
      </div>
    )
  }
};

export default Login;
