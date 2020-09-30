import React from 'react';

function Item(props) {
    return (
      <li>
        <button onClick={() => props.handleRemove(props.item.id)} >Delete</button> ID: {props.item.id} - {props.item.first_name} {props.item.last_name}, Email: {props.item.email}
        <br />
        {/*<input 
          type="text" 
          value={props.item.email} 
          onChange={() => props.handleChangeEmail(props.item.id)} 
        />*/}
        <hr />
      </li>
    ) 
  }

export default Item;