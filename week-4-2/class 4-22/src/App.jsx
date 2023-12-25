import { useState } from 'react'
import './App.css'

function App() {
  //dynamic websites
  //when u have to create a dynamic website ,
  //you write alot of js code that does DOM manipulation
  const [count,setCount]=useState(0);
  return (
    <div>
      <button onClick={function(){
        setCount(Math.random())}}>count is {count}
      </button>
    </div>
  )
}

export default App
