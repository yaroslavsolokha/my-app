import React from 'react';

function TodoItem(props) {
    const completedStyle = {
        fontStyle: 'italic',
        color: '#cdcdcd',
        textDecoration: 'line-through'
    }

    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChanged(props.item.id)} 
            />
            <label style = {props.item.completed ? completedStyle : null}>{props.item.text}</label>
        </div>
    )
  }

export default TodoItem;