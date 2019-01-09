import React, { Component } from 'react';

class AddTodo extends Component {
  // checks if there are any todos
  todosShown = () => {
    const { todos } = this.props;
    return todos.length ? true : false;
  };

  render() {
    const { addTodo } = this.props;

    return (
      <div
        className='add-todo'
        style={
          this.todosShown()
            ? { borderBottomLeftRadius: '0', borderBottomRightRadius: '0' }
            : {}
        }
      >
        <h2 style={titleStyle}>Add Todo</h2>

        <form onSubmit={addTodo}>
          <input type='text' placeholder='Write your todo...' name='title' />

          <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
}

const titleStyle = {
  fontSize: '22px',
  color: '#fff',
  marginLeft: '15px',
};

export default AddTodo;
