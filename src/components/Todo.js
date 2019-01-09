import React from 'react';

function Todo(props) {
  const { title } = props;

  return (
    <li style={liStyle}>
      <h3>{title}</h3>
      <i>x</i>
    </li>
  );
}

const liStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '5px 30px',
};

export default Todo;
