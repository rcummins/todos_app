import React from 'react';
import StepListItemContainer from './step_list_item_container';

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
    <p>Step form will go here</p>
  </div>
);

export default StepList;
