import React, { Component } from 'react';

import AddTodo from './AddTodo';
import AllTodos from './AllTodos';

class TodoContainer extends Component {
  render() {
    const { addTodo, todos } = this.props;

    return (
      <div className='todo-container'>
        <AddTodo addTodo={addTodo} todos={todos} />
        <AllTodos todos={todos} />
      </div>
    );
  }
}

export default TodoContainer;
