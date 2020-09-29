import React from 'react';

function MainContent() {
    var name = "Yaroslav"
    return (
      <div>
        <h1>Main Content</h1>
        <h2>{name}</h2>
        <p>Countries I have visited:</p>
        <ul>
          <li>Malta</li>
          <li>Cyprus</li>
          <li>Spain</li>
        </ul>
      </div>
    )
  }

  export default MainContent;