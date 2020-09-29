import React from 'react';
import MainContent from './components/MainContent'
import Header from './components/Header'
import Footer from './components/Footer'
import Joke from './components/Joke'
import './App.css';
import jokesData from './jokesData'

function AppJokes() {
    const jokesComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} answer={joke.punchLine} />);

    return (
      <div>
        <Header />
        <div className="jokes">
          {jokesComponents}
        </div>
        <Footer />
      </div>
    )
  }

  export default AppJokes;