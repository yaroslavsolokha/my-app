import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import TodoItem from './components/TodoItem'
import './App.css';
import todoData from './todoData'

class AppTodo extends React.Component {
  constructor () {
    super()

    this.state = {
      todo: todoData
    }

    this.handleChanged = this.handleChanged.bind(this);
  }

  handleChanged(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todo.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }

        return todo;
      })

      return {
        todo: updatedTodos
      }

    })
  }

  render () {
    const todoComponents = this.state.todo.map(todo => <TodoItem key={todo.id} item={todo} handleChanged={this.handleChanged} />);

    return (
      <div>
        <Header />
        <div className="todo-list">
          {todoComponents}
        </div>
        <Footer />
      </div>
    )
  }
}

export default AppTodo;