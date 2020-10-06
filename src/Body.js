import React from 'react';

class MemeGenerator extends React.Component {

  state = {
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    allMemeImages: []
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes").then(response => response.json()).then(response => {
        const {memes} = response.data
        this.setState({allMemeImages: memes})
      }
    )
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * this.state.allMemeImages.length);
    const randomImage = this.state.allMemeImages[randomNumber].url;
    this.setState({randomImage: randomImage})
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Top Text" name="topText" value={this.state.topText} onChange={this.handleChange} />
          <input type="text" placeholder="Bottom Text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange} />
          <button>Add</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} alt="Image" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}

export default MemeGenerator;