import React from 'react';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setBody = this.setBody.bind(this);
    this.setTitle = this.setTitle.bind(this);
  }

  handleSubmit() {
    let newStep = {
      title: this.state.title,
      body: this.state.body,
      done: false,
      todo_id: this.props.todo_id
    };
    this.props.createStep({ step: newStep}).then(
      () => {
        this.setState({title: '', body: ''})
        this.props.clearErrors();
      }
    );
  }

  setBody(e) {
    this.setState({ body: e.currentTarget.value });
  }

  setTitle(e) {
    this.setState({ title: e.currentTarget.value });
  }

  render() {
    const { errors } = this.props;

    let errorMessage;
    if (errors.length > 0) {
      errorMessage = (
        <div className="error-message">
          <p>Please fix the following issue(s):</p>
          <ul>
            { errors.map( (error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )
    }

    return(
      <div className="form add-step">

        {errorMessage}

        <div className="form-input">
          <label htmlFor="title">Title:</label>
          <input
            className="input-add-step"
            type="text"
            id="title"
            value={this.state.title}
            onChange={this.setTitle}>
          </input>
        </div>

        <div className="form-input">
          <label htmlFor="body">Body:</label>
          <textarea
            className="input-add-step"
            id="body"
            value={this.state.body}
            onChange={this.setBody}>
          </textarea>
        </div>

        <button
          className='button-add-step'
          onClick={this.handleSubmit}>
          Add step
        </button>

      </div>
    )
  }
}

export default StepForm;
