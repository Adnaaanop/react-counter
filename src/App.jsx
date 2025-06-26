import { useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import confetti from 'canvas-confetti'

function App() {
  function reducer(state, action) {
    switch (action) {
      case "INCREMENT":
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.7 }
        })
        return state + 1
      case "DECREMENT":
    
        return state - 1
      case "RESET":
        return 0
      default:
        return state
    }
  }

  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch("INCREMENT")}>+</button>
      <button onClick={() => dispatch("DECREMENT")}>-</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
    </>
  )
}

export default App
