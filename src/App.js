import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    name: "Yaroslav"
  }


  render() { 
    return (
      <div>
        Just testing {this.state.name}
      </div>
    )
  }
}

export default App;