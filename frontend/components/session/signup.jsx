import React from 'react';

class Signup extends React.Component {
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
    this.props.createNewUser({ user: this.state }).then(
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
          <p>Please fix the following issue(s):</p>
          <ul>
            { sessionErrors.map( (error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )
    }

    return(
      <div className="form signup">
        <h2>Sign up</h2>
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
            className="button-signup"
            onClick={this.handleSubmit} >Sign up</button>
        </form>
      </div>
    )
  }
}

export default Signup;
