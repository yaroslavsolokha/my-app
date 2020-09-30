import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';
import Item from './components/Item';

class AppAPI extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      characters: []
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  handleRemove(id) {
    this.setState({
      characters: this.state.characters.filter(item => item.id != id)
    })
  }

  handleChangeEmail(id) {
    //todo add changing email
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2").then(response => response.json()).then(data => {
      this.setState({
        characters: data.data
      })
    });
  }

  render() {
    let ButtonText = this.state.isLoggedIn ? 'Log OUT' : 'Log IN';
 
    return (
      <div>
        <Header />
        <button onClick={this.handleClick}>{ButtonText}</button>
        <ul>
          {this.state.characters ? this.state.characters.map(item => <Item key={item.id} item={item} handleRemove={this.handleRemove} handleChangeEmail={this.handleChangeEmail} />) : <h1>Waiting...</h1>}
        </ul>
        <Footer />
      </div>
    )
  }
}

export default AppAPI;