import React from 'react';
import Header from './Header';
import MemeGenarator from './Body';
import './App.css';

function App(params) {
  return (
    <div>
      <Header />
      <MemeGenarator />
    </div>
  )
}

export default App;