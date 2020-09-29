import React from 'react';

function Joke(props) {
    return (
        <div className="joke">
            <p>{props.question}</p>
            <p>{props.answer}</p>
            <hr />
        </div>
    )
  }

  export default Joke;