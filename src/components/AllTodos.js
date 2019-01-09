import React, { Component } from 'react';

import Todo from './Todo';

class AllTodos extends Component {
  todosExist = () => {
    return this.props.todos.length ? true : false;
  };

  render() {
    const { todos, deleteTodo } = this.props;

    return (
      <div
        className='container'
        style={this.todosExist() ? {} : { display: 'none' }}
      >
        <ul style={ulStyle}>
          {todos.map(({ todoTitle }, i) => (
            <Todo title={todoTitle} deleteTodo={deleteTodo} key={i} />
          ))}
        </ul>
      </div>
    );
  }
}

const ulStyle = {
  listStyle: 'none',
};

export default AllTodos;
