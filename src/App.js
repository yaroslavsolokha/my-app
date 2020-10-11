import { render } from '@testing-library/react';
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("")

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  useEffect(() => {
    setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 5000)
  }, [])

  useEffect(() => {
    if (count === 5) { 
      setColor("black")
    } else {
      setColor("orange")
    }
  }, [count])

  return (
    <div>
      <h1 style={{color: color}}>{count}</h1>
      <button onClick={increment}>Increment!</button>
      <button onClick={decrement}>Decrement!</button>
    </div>
  )
}

export default App;