import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Book Website</h1>

    <div>
      <input type="text" placeholder='Book Title' name="" id="" />

      <input type="text" placeholder='Release Date ' name="" id="" />

      <input type="text" name="" id="" />
    </div>
    
    </>
  )
}

export default App
