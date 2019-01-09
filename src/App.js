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
    }, 5000);

    e.target.reset();
  };

  render() {
    return (
      <React.Fragment>
        <Header title='Todo List' />
        <TodoContainer addTodo={this.addTodo} todos={this.state.todos} />
      </React.Fragment>
    );
  }
}

export default App;
