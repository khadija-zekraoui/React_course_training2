import React, { Component } from 'react'
import AddTodos from './AddTodos'
import Todos from './Todos'

export default class App extends Component {
  state = {
    todos : [
      {id:1, content: 'buy some milk'},
      {id:2, content: 'do shopping'},
      {id:3, content: 'cook my favorite dish'},
    ]
  }

  deleteTodo = (id) => {
    console.log('Delete todo: ' + id)
    let todoList = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos : todoList
    })
  }

  addTodo = (todo) => {
  console.log("App ~ todo", todo)
  todo.id = Math.random();
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  render() {
    return (
      <div className="todos-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <br/>
        <AddTodos addTodo={this.addTodo} />
      </div>
    )
  }
}

