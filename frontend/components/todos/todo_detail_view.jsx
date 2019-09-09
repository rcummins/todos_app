import React from 'react';
import StepListContainer from '../steps/step_list_container';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.removeTodo(this.props.todo.id);
  }

  render() {
    const { todo } = this.props;
    return(
      <div>
        <p>{todo.body}</p>

        <StepListContainer todo={todo} />

        <button
          className='button-delete'
          onClick={this.handleDelete} >
          Delete todo
        </button>
      </div>
    );
  }
}

export default TodoDetailView;
