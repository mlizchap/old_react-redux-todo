import React, { Component } from 'react';
import './App.css';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>APP</h1>
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;
