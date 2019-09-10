import React from 'react';
import StepListContainer from '../steps/step_list_container';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todo, deleteTodo } = this.props;
    return(
      <div>
        <p>{todo.body}</p>

        <StepListContainer todo={todo} />

        <button
          className='button-delete'
          onClick={deleteTodo} >
          Delete todo
        </button>
      </div>
    );
  }
}

export default TodoDetailView;
