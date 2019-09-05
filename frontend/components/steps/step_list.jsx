import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

const StepList = ({ steps, todo_id, receiveStep }) => (
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
    <StepForm todo_id={todo_id} receiveStep={receiveStep} />
  </div>
);

export default StepList;
