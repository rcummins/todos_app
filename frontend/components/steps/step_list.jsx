import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

class StepList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSteps();
  }

  render() {
    const { steps, todo_id, createStep, errors, clearErrors } = this.props;
    return(
      <div>
        <ul>
          {
            steps.map( (step, index) => (
              <StepListItemContainer
                key={index}
                step={step} />
            ))
          }
        </ul>
        <StepForm
          todo_id={todo_id}
          createStep={createStep}
          errors={errors}
          clearErrors={clearErrors} />
      </div>
    );
  }
}

export default StepList;
