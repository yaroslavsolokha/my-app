import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';
import Conditional from './components/Conditional';

class AppAPI extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      isLoggedIn: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  render() {
    let ButtonText = this.state.isLoggedIn ? 'Log OUT' : 'Log IN';
    return (
      <div>
        <Header />
        <button onClick={this.handleClick}>{ButtonText}</button>
        {this.state.isLoading ? <h1>Waiting...</h1> : <Conditional isLoading={this.state.isLoading} />}
        <Footer />
      </div>
    )
  }
}

export default AppAPI;