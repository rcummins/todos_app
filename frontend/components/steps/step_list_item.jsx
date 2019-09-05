import React from 'react';

class StepListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state={};

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.removeStep(this.props.step.id);
  }

  render() {
    const { step } = this.props;

    return(
      <div>
        <h4>{step.title}</h4>
        <p>{step.body}</p>

        <p>Button to toggle step status will go here</p>

        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default StepListItem;
