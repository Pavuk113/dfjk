import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let amount = 1

  return (
    <>
      <div>
        <p>Current count: {count}</p>
      </div>
      <button onClick={() => setCount((count) => count + amount)}>
        Increment
      </button>
      <div>
        <p className='OUTPT'> {count > 5 ? "Count is greater than 5" : "Count is 5 or less"}</p>
      </div>
    </>
  )
}

export default App
