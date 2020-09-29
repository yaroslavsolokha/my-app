import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import TodoItem from './components/TodoItem'
import './App.css';
import todoData from './todoData'

// function AppTodo() {
//     const todoComponents = todoData.map(todo => <TodoItem key={todo.id} item={todo} />);

//     return (
//       <div>
//         <Header />
//         <div className="todo-list">
//           {todoComponents}
//         </div>
//         <Footer />
//       </div>
//     )
//   }

  class AppTodo extends React.Component {
    constructor () {
      super()

      this.state = {
        todo: todoData
      }
    }

    render () {
      const todoComponents = this.state.todo.map(todo => <TodoItem key={todo.id} item={todo} />);

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