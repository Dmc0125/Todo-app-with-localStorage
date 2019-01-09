import React from 'react';

function Todo({ title, deleteTodo }) {
  return (
    <li style={liStyle} onClick={deleteTodo}>
      <h3>{title}</h3>
      <div className='deleteBtn' style={deleteBtn}>
        x
      </div>
    </li>
  );
}

const deleteBtn = {
  width: '20px',
  height: '20px',
  textAlign: 'center',
  cursor: 'pointer',
  borderRadius: '50%',
};

const liStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '5px 30px',
  margin: '5px 0',
  color: '#fff',
};

export default Todo;
