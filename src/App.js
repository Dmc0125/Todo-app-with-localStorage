import React, { Component } from 'react';
import uuid from 'uuid/v4';

import Header from './components/layouts/Header';
import TodoContainer from './components/TodoContainer';

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.getTodos();
  }

  deleteTodo = e => {
    if (e.target === e.currentTarget.querySelector('.deleteBtn')) {
      localStorage.removeItem('todos');

      const title = e.currentTarget.querySelector('h3').innerText;

      this.setState({
        todos: [
          ...this.state.todos.filter(({ todoTitle }) => todoTitle !== title),
        ],
      });

      setTimeout(() => {
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
      }, 100);
    }
  };

  getTodos = () => {
    let storedTodos;

    if (localStorage.getItem('todos') === null) {
      storedTodos = [];
    } else {
      storedTodos = JSON.parse(localStorage.getItem('todos'));
    }

    this.setState({
      todos: [...storedTodos],
    });
  };

  showTodos = todo => {
    console.log(this.state.todos, todo);
  };

  addTodo = e => {
    e.preventDefault();

    const data = new FormData(e.target);
    const todoTitle = data.get('title');

    const todo = {
      todoTitle,
      completed: false,
      id: uuid(),
    };

    this.setState({
      todos: [...this.state.todos, todo],
    });

    setTimeout(() => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }, 100);

    e.target.reset();
  };

  render() {
    return (
      <React.Fragment>
        <Header title='Todo List' />
        <TodoContainer
          addTodo={this.addTodo}
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
        />
      </React.Fragment>
    );
  }
}

export default App;
