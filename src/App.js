import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/FormContainer'
import './App.css';

class App extends React.Component {
  render() { 
    return (
      <div>
        <Header />
        <Form />
        <Footer />
      </div>
    )
  }
}

export default App;