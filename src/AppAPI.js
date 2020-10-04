import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

class AppAPI extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
      description: '',
      country: '',
      isDeveloper: true
    }

    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
  }

  render() { 
    return (
      <div>
        <Header />
        <form>
          <input type="text" name="firstName" value={this.state.firstName} placeholder="First name" onChange={this.handleChange} />
          <br />
          <input type="text" name="lastName" value={this.state.lastName} placeholder="Last name" onChange={this.handleChange} />
          <br />
          <textarea name="description" value={this.state.description} placeholder="Description" onChange={this.handleChange} />
          <br />
          <label>
            <input type="checkbox" name="isDeveloper" value={this.state.isDeveloper} checked={this.state.isDeveloper} onChange={this.handleChange} />
            Is developer?
          </label>
          <br />
          <label>
            <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange} />
            Male
          </label>
          <br />
          <label>
            <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange} />
            Female
          </label>

          <br />

          <select value={this.state.country} name="country" onChange={this.handleChange}>
            <option>Please choose country</option>
            <option value="ukraine">Ukraine</option>
            <option value="cr">Czech Republic</option>
          </select>

          <h2>{this.state.firstName} {this.state.lastName}</h2>
          <h3>{this.state.description}</h3>
          <p>Developer: {this.state.isDeveloper === true ? "Yes": "No"}</p>
          <p>Gender: {this.state.gender}</p>
          <p>Country: {this.state.country}</p>
        </form>
        <Footer />
      </div>
    )
  }
}

export default AppAPI;