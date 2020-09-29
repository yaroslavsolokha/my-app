import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

class AppState extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }

    this.clickMe = this.clickMe.bind(this)
  }

  clickMe() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    return (
      <div>
        <Header />

        {this.state.count}
        <br />
        <button onClick={this.clickMe}>Click ME ADD</button>

        <Footer />
      </div>
    )
  }
}

  export default AppState;