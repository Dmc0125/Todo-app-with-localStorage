import React from 'react';

import Todo from './Todo';

function AllTodos(props) {
  const { todos } = props;

  return (
    <div className='container'>
      <ul style={ulStyle}>
        {todos.map(({ todoTitle }, i) => (
          <Todo title={todoTitle} key={i} />
        ))}
      </ul>
    </div>
  );
}

const ulStyle = {
  listStyle: 'none',
};

export default AllTodos;
